export const siteUrl = "https://www.maradoca.com";

export const site = {
  name: "MARADOCA",
  title: "MARADOCA | Melodic House & Techno DJ in Leipzig",
  description:
    "MARADOCA is a Leipzig-based melodic house and techno DJ creating immersive electronic journeys with progressive, afro, and cosmic sounds.",
  url: siteUrl,
  image: `${siteUrl}/maradoca-portrait.jpg`,
  instagram: "https://instagram.com/maradoca",
  soundcloud: "https://soundcloud.com/maradoca",
  email: "maradoca.music@gmail.com",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
