"use client";

import { useState } from "react";

type PlaylistCategory = "progressive" | "deep" | "techno";

const playlists = {
  progressive: {
    title: "Progressive House",
    bpm: "~125 BPM",
    description: "Melodic journeys that build and evolve",
    embedId: "1234567890", // This would be real SoundCloud embed ID
    gradient: "from-purple-500 to-pink-500",
  },
  deep: {
    title: "Deep & Cosmic",
    bpm: "120-125 BPM",
    description: "Deep spaces and cosmic explorations",
    embedId: "0987654321",
    gradient: "from-blue-500 to-teal-500",
  },
  techno: {
    title: "Techno & Trance",
    bpm: "130-140 BPM",
    description: "High energy cosmic adventures",
    embedId: "1122334455",
    gradient: "from-orange-500 to-red-500",
  },
};

export default function MusicSection() {
  const [activePlaylist, setActivePlaylist] =
    useState<PlaylistCategory>("progressive");

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="h2 gradient-text mb-4">Musical Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore different dimensions of sound - from tropical progressive to
            deep cosmic techno
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass rounded-full p-2 flex gap-2">
            {(Object.keys(playlists) as PlaylistCategory[]).map((category) => (
              <button
                key={category}
                onClick={() => setActivePlaylist(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activePlaylist === category
                    ? "bg-primary text-primary-foreground shadow-lg transform scale-105"
                    : "text-foreground/70 hover:text-foreground hover:bg-white/10"
                }`}
              >
                {playlists[category].title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Playlist */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`bg-gradient-to-r ${playlists[activePlaylist].gradient} p-1 rounded-2xl shadow-2xl`}
          >
            <div className="bg-card rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="h3 mb-4">{playlists[activePlaylist].title}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-primary">
                        BPM:
                      </span>
                      <span className="text-lg">
                        {playlists[activePlaylist].bpm}
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      {playlists[activePlaylist].description}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 mt-8">
                    <a
                      href="https://soundcloud.com/maradoca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15H8v-6h2v6zm0-8H8V7h2v2zm4 8h-2V9h2v8zm0-10h-2V7h2v2z" />
                      </svg>
                      SoundCloud
                    </a>
                    <a
                      href="https://open.spotify.com/artist/maradoca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 14.5c-.17 0-.33-.09-.43-.25-1.09-1.33-2.5-2-4.21-2s-3.12.67-4.21 2c-.1.16-.26.25-.43.25-.33 0-.59-.27-.59-.59 0-.14.05-.27.15-.37 1.39-1.69 3.18-2.54 5.08-2.54s3.69.85 5.08 2.54c.1.1.15.23.15.37 0 .32-.26.59-.59.59z" />
                      </svg>
                      Spotify
                    </a>
                  </div>
                </div>

                {/* SoundCloud Embed Placeholder */}
                <div className="bg-muted rounded-xl p-8 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold">SoundCloud Player</h4>
                    <p className="text-sm text-muted-foreground">
                      Connect to SoundCloud to play{" "}
                      {playlists[activePlaylist].title} playlist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Releases */}
        <div className="mt-20">
          <h3 className="h3 text-center mb-12">Latest Releases</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-4xl">♫</div>
                </div>
                <h4 className="font-semibold mb-2">Cosmic Journey #{i}</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Progressive House • 125 BPM
                </p>
                <button className="w-full py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                  Play Track
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
