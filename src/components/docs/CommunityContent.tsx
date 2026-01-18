import { Link } from 'react-router-dom'
import { Callout } from './Callout'
import { ResourceCard } from './ResourceCard'
import {
  Users,
  Youtube,
  Instagram,
  MessageSquare,
  Calendar,
  ExternalLink,
  Mic,
  Shield,
  BookOpen,
} from 'lucide-react'

export function CommunityContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Users className="w-10 h-10 text-accent" />
          <h1 className="text-4xl md:text-5xl font-bold">Community</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Welcome to the kas.me Community Hub – your gateway to connecting with the Kaspa ecosystem and its vibrant community.
        </p>
        <p className="text-lg text-muted-foreground">
          Explore social platforms, events, and engagement opportunities below to join the Kaspa movement.
        </p>
      </div>

      {/* Social Media & Platforms */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Social Media & Platforms</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@TheITCyberSpace"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-border hover:border-accent/50 bg-card p-6 space-y-4 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Youtube className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">YouTube</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <span>@TheITCyberSpace</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Watch tutorials, updates, and live streams about Kaspa and kas.me. Subscribe for the latest videos from The IT CyberSpace team.
            </p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/theitcyberspace"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-border hover:border-accent/50 bg-card p-6 space-y-4 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">Instagram</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <span>@theitcyberspace</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Follow us for behind-the-scenes content, community highlights, and Kaspa ecosystem visuals. Engage with our growing audience.
            </p>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/TheITCyberSpace"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-border hover:border-accent/50 bg-card p-6 space-y-4 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">X (Twitter)</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <span>@TheITCyberSpace</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Get the latest updates, announcements, and join community discussions. Follow for real-time news and insights.
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/CyberPumpNetwork"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-border hover:border-accent/50 bg-card p-6 space-y-4 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">GitHub</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <span>CyberPumpNetwork</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Explore our open-source code, contribute, and track development progress. Dive into the repo and see how kas.me is built.
            </p>
          </a>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Community Engagement</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Community Telegram - Planned */}
          <div className="rounded-xl border border-border/50 bg-card/50 p-6 space-y-4 opacity-75">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Community Telegram</h3>
                <span className="text-sm text-muted-foreground">Planned</span>
              </div>
            </div>
            <p className="text-muted-foreground">
              A dedicated Telegram community for kas.me users is in the planning phase. Stay tuned for announcements.
            </p>
          </div>

          {/* Upcoming Events */}
          <div className="rounded-xl border border-border/50 bg-card/50 p-6 space-y-4 opacity-75">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Upcoming Events</h3>
                <span className="text-sm text-muted-foreground">Coming Soon</span>
              </div>
            </div>
            <p className="text-muted-foreground">
              Stay informed about Kaspa community events, meetups, and webinars hosted by The IT CyberSpace and partners.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-border/50" />

      {/* Dev Talks Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Behind the Scenes: Dev Talks</h2>
        <p className="text-lg text-muted-foreground">
          Personal insights, journey reflections, and the story behind kas.me – unfiltered thoughts from the founder.
        </p>

        <Callout type="info" title="What are Dev Talks?">
          <p className="text-sm">
            Dev Talks are not technical documentation. They are <strong>personal reflections</strong>, <strong>honest thoughts</strong>, and <strong>the story</strong> of how kas.me came to be. These are the Easter eggs – hidden layers of intent, philosophy, and vision that unfold over time.
          </p>
        </Callout>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ResourceCard
            icon={Mic}
            title="Dev Talk #1: First Ever Dev Talk"
            description="72 Days After Token Launch - The origin story. Why kas.me exists. What sparked the idea."
            href="/docs/community/devtalks/devtalk-1"
          />
          <ResourceCard
            icon={Mic}
            title="Dev Talk #2: Absurd Megalomania"
            description="A deeper dive into the vision. What it means to build something designed to outlive its creator."
            href="/docs/community/devtalks/devtalk-2"
          />
        </div>
      </section>

      <hr className="border-border/50" />

      {/* Quick Links */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold">Explore More</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ResourceCard
            icon={Shield}
            title="Audits & Regulatory Path"
            description="Transparency from Day 1 - our audit roadmap and compliance journey"
            href="/docs/community/hub/audits"
          />
          <ResourceCard
            icon={BookOpen}
            title="kas.me Documentation"
            description="Full documentation for the kas.me platform"
            href="/docs"
          />
          <a
            href="https://kas.me"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-accent/30 hover:border-accent/50 bg-gradient-to-br from-accent/10 to-transparent p-6 space-y-4 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ExternalLink className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">Launch kas.me</h3>
              </div>
            </div>
            <p className="text-muted-foreground">
              Access the platform to track your Kaspa portfolio and explore features.
            </p>
          </a>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="space-y-6">
        <div className="max-w-3xl mx-auto rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold">Join the Movement</h3>
          <p className="text-muted-foreground">
            kas.me is more than a platform – it's a community-driven ecosystem built on Kaspa's revolutionary technology.
            <br />
            Connect, learn, and grow with us.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="https://x.com/TheITCyberSpace"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Follow @TheITCyberSpace
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
