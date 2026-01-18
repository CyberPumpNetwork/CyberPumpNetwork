import { Link } from 'react-router-dom'
import { StoryRoadmap } from './StoryRoadmap'
import { BookOpen, Mic, ArrowRight } from 'lucide-react'

export function StoryContent() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-8 h-8 text-accent" />
          <h1 className="text-4xl font-bold">Our Story</h1>
        </div>
        <p className="text-muted-foreground max-w-2xl">
          From curiosity to commitment. Click through the timeline to explore the journey.
        </p>
      </div>

      {/* Timeline */}
      <StoryRoadmap />

      {/* Dev Talks Link */}
      <div className="border-t border-border pt-8">
        <p className="text-sm text-muted-foreground mb-4">
          For the full story, read the Dev Talks:
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/docs/community/devtalks/devtalk-1"
            className="inline-flex items-center gap-2 text-sm hover:text-accent transition-colors"
          >
            <Mic className="w-4 h-4" />
            Dev Talk #1: Origin Story
            <ArrowRight className="w-3 h-3" />
          </Link>
          <Link
            to="/docs/community/devtalks/devtalk-2"
            className="inline-flex items-center gap-2 text-sm hover:text-accent transition-colors"
          >
            <Mic className="w-4 h-4" />
            Dev Talk #2: Absurd Megalomania
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  )
}
