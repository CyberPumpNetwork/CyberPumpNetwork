# Scroll & Highlight Animation - Usage Guide

## Overview
The `useScrollAndHighlight` hook provides a reusable way to scroll to an element and animate it with a rotating border followed by a glow effect.

## Basic Usage

```tsx
import { useScrollAndHighlight } from '@/hooks/useScrollAndHighlight';

function MyComponent() {
  // Initialize the hook with optional configuration
  const { highlightedId, getAnimationClasses, getAnimationStyles } = useScrollAndHighlight({
    rotations: 2,           // Number of complete rotations (default: 2)
    rotationDuration: 3000, // Duration per rotation in ms (default: 3000)
    glowDuration: 2000      // Duration of glow effect in ms (default: 2000)
  });

  return (
    <div>
      {/* Include the animation styles */}
      <style>{getAnimationStyles()}</style>

      {/* Apply animation to target element */}
      <div 
        id="my-target"
        className={`my-card ${getAnimationClasses('my-target')}`}
      >
        Content here
      </div>
    </div>
  );
}
```

## How It Works

1. **Link with Hash**: Create a link pointing to your element:
   ```tsx
   <Link to="/page#my-target">Go to Target</Link>
   ```

2. **Element ID**: Give your target element an ID:
   ```tsx
   <div id="my-target">...</div>
   ```

3. **Apply Animation**: Use the hook's helper functions:
   ```tsx
   <div id="my-target" className={getAnimationClasses('my-target')}>
   ```

4. **Include Styles**: Add the animation styles to your component:
   ```tsx
   <style>{getAnimationStyles()}</style>
   ```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `rotations` | number | 2 | Number of complete 360° rotations |
| `rotationDuration` | number | 3000 | Duration of each rotation in milliseconds |
| `glowDuration` | number | 2000 | Duration of the red glow effect in milliseconds |

## Animation Phases

1. **Rotating Border Phase**
   - Türkis (#40E0D0) arc rotates clockwise
   - Duration: `rotations × rotationDuration`
   - Uses CSS Houdini `@property` for smooth animation

2. **Glow Phase**
   - Full red (#ff4444) border with glow effect
   - Duration: `glowDuration`

3. **Done**
   - Animation completes, element returns to normal state

## Examples

### Fast Animation (1 rotation, 2 seconds)
```tsx
const { getAnimationClasses, getAnimationStyles } = useScrollAndHighlight({
  rotations: 1,
  rotationDuration: 2000,
  glowDuration: 1500
});
```

### Slow Animation (3 rotations, 4 seconds each)
```tsx
const { getAnimationClasses, getAnimationStyles } = useScrollAndHighlight({
  rotations: 3,
  rotationDuration: 4000,
  glowDuration: 3000
});
```

### Multiple Targets in One Component
```tsx
function MyComponent() {
  const { getAnimationClasses, getAnimationStyles } = useScrollAndHighlight();

  return (
    <div>
      <style>{getAnimationStyles()}</style>
      
      <div id="target-1" className={getAnimationClasses('target-1')}>
        First target
      </div>
      
      <div id="target-2" className={getAnimationClasses('target-2')}>
        Second target
      </div>
    </div>
  );
}
```

## Return Values

### `highlightedId`
- **Type**: `string | null`
- **Description**: The ID of the currently animating element, or `null` if no animation is active

### `getAnimationClasses(elementId)`
- **Type**: `(elementId: string) => string`
- **Description**: Returns the appropriate CSS class for the animation phase
- **Returns**: `'rotating-border-animation'`, `'full-glow'`, or `''`

### `getAnimationStyles()`
- **Type**: `() => string`
- **Description**: Returns the complete CSS animation styles as a string
- **Usage**: Insert in a `<style>` tag in your component

## Browser Compatibility

The hook uses CSS Houdini's `@property` for smooth rotation. This is supported in:
- Chrome/Edge 85+
- Safari 15.4+
- Firefox 114+ (experimental)

For older browsers, the animation may appear less smooth but will still function.

## Tips

- Keep `rotationDuration` between 1500-4000ms for smooth visuals
- Use 1-3 rotations for best effect
- The 90° arc (25% of circle) provides good visibility while rotating
- Call the hook once per component that needs animations
- Multiple elements can share the same hook instance
