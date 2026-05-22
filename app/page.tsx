import Hero from "@/components/hero";
import type { HeroData } from "@/components/hero";
import { heroQuery } from "@/lib/sanity.queries";
import { site } from "@/lib/site";
import { client } from "@/sanity/lib/client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MARADOCA | Melodic House & Techno DJ in Leipzig",
  description: site.description,
  alternates: {
    canonical: "/",
  },
};

const fallbackHeroData: HeroData = {
  title: "MARADOCA",
  subtitle: "Melodic House & Techno DJ from Leipzig",
  backgroundVideo: {
    desktop: "",
    mobile: "",
  },
  socialLinks: [
    {
      platform: "Instagram",
      url: site.instagram,
      icon: "Instagram",
    },
    {
      platform: "SoundCloud",
      url: site.soundcloud,
      icon: "/soundcloud.svg",
    },
    {
      platform: "Email",
      url: `mailto:${site.email}`,
      icon: "Mail",
    },
  ],
};

async function getHeroData() {
  try {
    return (await client.fetch<HeroData | null>(heroQuery)) ?? fallbackHeroData;
  } catch {
    return fallbackHeroData;
  }
}

export default async function Home() {
  const heroData = await getHeroData();
  const artistJsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: site.name,
    url: site.url,
    image: site.image,
    email: site.email,
    genre: [
      "Melodic House & Techno",
      "Progressive House",
      "Afro House",
      "Electronic Music",
    ],
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Leipzig",
      addressCountry: "DE",
    },
    sameAs: [site.instagram, site.soundcloud],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(artistJsonLd) }}
      />
      <Hero initialHeroData={heroData} />
    </>
  );
}
