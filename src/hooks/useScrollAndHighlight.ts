import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export type AnimationPhase = 'running' | 'glowing' | 'done';

interface UseScrollAndHighlightOptions {
  rotations?: number; // Default: 2
  rotationDuration?: number; // Duration per rotation in ms, default: 3000
  glowDuration?: number; // Duration of glow phase in ms, default: 2000
}

export function useScrollAndHighlight(options: UseScrollAndHighlightOptions = {}) {
  const {
    rotations = 2,
    rotationDuration = 3000,
    glowDuration = 2000
  } = options;

  const location = useLocation();
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const [animationPhase, setAnimationPhase] = useState<AnimationPhase>('done');

  useEffect(() => {
    // Scroll to element if hash is present
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const element = document.getElementById(elementId);
      
      if (element) {
        // Small delay to ensure DOM is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
          
          // Start animation sequence
          setHighlightedId(elementId);
          setAnimationPhase('running');
          
          const totalRotationTime = rotations * rotationDuration;
          
          // After rotations complete, switch to glow
          setTimeout(() => {
            setAnimationPhase('glowing');
            
            // After glow duration, end animation
            setTimeout(() => {
              setAnimationPhase('done');
              setHighlightedId(null);
            }, glowDuration);
          }, totalRotationTime);
        }, 100);
      }
    }
  }, [location, rotations, rotationDuration, glowDuration]);

  const getAnimationClasses = (elementId: string) => {
    if (highlightedId !== elementId) return '';
    
    if (animationPhase === 'running') return 'rotating-border-animation';
    if (animationPhase === 'glowing') return 'full-glow';
    
    return '';
  };

  const getAnimationStyles = () => {
    const totalRotationAngle = rotations * 360;
    const totalRotationTime = (rotations * rotationDuration) / 1000;

    return `
      @property --angle {
        syntax: '<angle>';
        initial-value: 0deg;
        inherits: false;
      }
      
      @keyframes spin-border {
        from {
          --angle: 0deg;
        }
        to {
          --angle: ${totalRotationAngle}deg;
        }
      }
      
      .rotating-border-animation {
        position: relative;
        border: 3px solid transparent;
        background: 
          linear-gradient(var(--background), var(--background)) padding-box,
          conic-gradient(from var(--angle), #40E0D0 0deg, #40E0D0 90deg, transparent 90deg) border-box;
        animation: spin-border ${totalRotationTime}s linear forwards;
      }
      
      .full-glow {
        border: 3px solid #ff4444;
        box-shadow: 0 0 20px #ff4444, 0 0 40px rgba(255, 68, 68, 0.4);
      }
    `;
  };

  return {
    highlightedId,
    animationPhase,
    getAnimationClasses,
    getAnimationStyles
  };
}
