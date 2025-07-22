"use client";

import { client } from "@/lib/sanity.client";
import { heroQuery } from "@/lib/sanity.queries";
import { cn } from "@/lib/utils";
import { Space_Grotesk } from "next/font/google";
import { useEffect, useState } from "react";
import BackgroundVideo from "./hero/BackgroundVideo";
import CloudAnimation from "./hero/CloudAnimation";
import CosmicBackground from "./hero/CosmicBackground";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

type HeroData = {
  title: string;
  subtitle: string;
  backgroundVideo: {
    desktop: string;
    mobile: string;
  };
  socialLinks: Array<{
    platform: string;
    url: string;
    icon: string;
  }>;
};

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  useEffect(() => {
    async function fetchHeroData() {
      const data = await client.fetch(heroQuery);
      setHeroData(data);
    }
    fetchHeroData();
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (
        event.code === "Space" &&
        !["INPUT", "TEXTAREA"].includes((event.target as HTMLElement).tagName)
      ) {
        event.preventDefault();
        setIsMuted((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div
      className={cn(
        "relative h-screen w-full overflow-hidden",
        spaceGrotesk.variable
      )}
    >
      {/* Cosmic Background */}
      <CosmicBackground />

      {/* Background Video with lower opacity */}
      <div className="absolute inset-0 opacity-40">
        <BackgroundVideo
          isMuted={isMuted}
          onToggleMute={() => setIsMuted(!isMuted)}
          desktopVideoId={heroData?.backgroundVideo?.desktop}
          mobileVideoId={heroData?.backgroundVideo?.mobile}
        />
      </div>

      {/* Cloud Animations */}
      <CloudAnimation />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-6">
          <h1 className="brand-title gradient-text mb-4 animate-fade-in">
            MARADOCA
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 font-light">
            Tropical • Cosmic • Deep • Progressive
          </p>
          <div className="space-y-4">
            <p className="text-3xl md:text-5xl font-display glow text-white animate-pulse">
              Join me on my journey to FREEDOM!
            </p>
            <p className="text-lg md:text-xl text-foreground/70 italic">
              &quot;I like NUBES&quot; ☁️
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            {heroData?.socialLinks?.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors duration-300 transform hover:scale-110"
              >
                <span className="sr-only">{link.platform}</span>
                <div
                  className="w-8 h-8"
                  dangerouslySetInnerHTML={{ __html: link.icon }}
                />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-foreground/50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
