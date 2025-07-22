import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/contact/ContactSection";
import EventsSection from "@/components/events/EventsSection";
import Hero from "@/components/hero";
import MusicSection from "@/components/music/MusicSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Hero />
      <MusicSection />
      <EventsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
