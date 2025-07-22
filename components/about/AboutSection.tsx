"use client";

import { useState } from "react";

export default function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-card to-muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="h2 gradient-text mb-4">About the Journey</h2>
          <p className="text-xl text-muted-foreground">
            Exploring the cosmic connection between tropical vibes and
            progressive soundscapes
          </p>
        </div>

        {/* Main About Content */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Portrait/Image Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent p-1">
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center text-6xl">
                  🎧
                </div>
              </div>
              <div className="absolute -top-4 -right-4 text-4xl cosmic-pulse">
                ✨
              </div>
              <div className="absolute -bottom-4 -left-4 text-3xl float-animation">
                ☁️
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6">
              <h3 className="h3 mb-4">MARADOCA</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Born from a passion for cosmic exploration and tropical
                  freedom, Maradoca creates soundscapes that transport listeners
                  on journeys through both inner and outer space.
                </p>
                <p>
                  Blending progressive house with deep techno elements, each set
                  is crafted to tell a story - from the gentle waves of tropical
                  shores to the infinite expanse of the cosmos.
                </p>
                {isExpanded && (
                  <div className="space-y-4">
                    <p>
                      &quot;I like NUBES&quot; - this simple phrase captures the
                      essence of the music: light, floating, ever-changing, yet
                      always grounded in the freedom of expression.
                    </p>
                    <p>
                      From intimate club settings to festival main stages,
                      Maradoca creates experiences that unite dancers in a
                      shared journey toward musical freedom.
                    </p>
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary hover:text-accent transition-colors font-medium"
              >
                {isExpanded ? "Read less" : "Read more"} →
              </button>
            </div>
          </div>
        </div>

        {/* Music Philosophy */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-8 glass rounded-2xl">
            <div className="text-4xl mb-4">🌴</div>
            <h4 className="font-semibold mb-3">Tropical</h4>
            <p className="text-sm text-muted-foreground">
              Warm, inviting sounds that capture the essence of freedom and
              escape
            </p>
          </div>
          <div className="text-center p-8 glass rounded-2xl">
            <div className="text-4xl mb-4">🌌</div>
            <h4 className="font-semibold mb-3">Cosmic</h4>
            <p className="text-sm text-muted-foreground">
              Deep, expansive journeys through space and consciousness
            </p>
          </div>
          <div className="text-center p-8 glass rounded-2xl">
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="font-semibold mb-3">Progressive</h4>
            <p className="text-sm text-muted-foreground">
              Evolving soundscapes that build emotion and tell stories
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 glass rounded-2xl p-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">125</div>
            <div className="text-sm text-muted-foreground">BPM Sweet Spot</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">∞</div>
            <div className="text-sm text-muted-foreground">
              Creative Possibilities
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">
              Music in the Mind
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">1</div>
            <div className="text-sm text-muted-foreground">
              Journey to Freedom
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
