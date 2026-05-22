import type { Metadata, Viewport } from "next";
import { Inter as FontSans, Space_Grotesk } from "next/font/google";
import { ReactNode } from "react";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

type RootLayoutProps = {
  children: ReactNode;
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: site.image,
        width: 1200,
        height: 1600,
        alt: "MARADOCA press portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.image],
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          fontSans.variable,
          fontDisplay.variable,
          "min-h-[100dvh] bg-[#0B1120] text-white",
        )}
      >
        {children}
      </body>
    </html>
  );
}
