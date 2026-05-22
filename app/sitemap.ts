import { absoluteUrl } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/press-kit"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/media"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
