"use client";

import { cn } from "@/lib/utils";
import { Space_Grotesk } from "next/font/google";
import { useEffect, useState } from "react";
import BackgroundVideo from "./hero/BackgroundVideo";
import Content from "./hero/Content";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export type HeroData = {
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

type HeroProps = {
  initialHeroData: HeroData;
};

export default function Hero({ initialHeroData }: HeroProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [heroData] = useState(initialHeroData);

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
        "relative min-h-[100dvh] w-full bg-black text-white overflow-hidden",
        spaceGrotesk.variable,
      )}
    >
      <BackgroundVideo
        isMuted={isMuted}
        onToggleMute={() => setIsMuted(!isMuted)}
        desktopVideoId={heroData?.backgroundVideo?.desktop}
        mobileVideoId={heroData?.backgroundVideo?.mobile}
      />
      <Content heroData={heroData} />
    </div>
  );
}
