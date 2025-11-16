"use client";

import { useState } from "react";

type EventStatus = "upcoming" | "past";

const events = {
  upcoming: [
    {
      id: 1,
      title: "Freedom Festival 2024",
      venue: "Leipzig Warehouse",
      date: "2024-08-15",
      time: "22:00",
      type: "Festival",
      description: "Main stage progressive house set",
      ticketUrl: "https://example.com/tickets/1",
      image: "🌅",
    },
    {
      id: 2,
      title: "Cosmic Nights",
      venue: "Berlin Underground",
      date: "2024-09-02",
      time: "23:30",
      type: "Club Night",
      description: "Deep techno journey through space",
      ticketUrl: "https://example.com/tickets/2",
      image: "🌌",
    },
    {
      id: 3,
      title: "Tropical Waves",
      venue: "Hamburg Beach Club",
      date: "2024-09-20",
      time: "20:00",
      type: "Beach Party",
      description: "Sunset tropical progressive set",
      ticketUrl: "https://example.com/tickets/3",
      image: "🏖️",
    },
  ],
  past: [
    {
      id: 4,
      title: "Journey to Freedom Tour",
      venue: "Munich Electronic Festival",
      date: "2024-06-10",
      time: "21:00",
      type: "Festival",
      description: "Headlining set with new tracks",
      image: "🎭",
    },
    {
      id: 5,
      title: "Deep Space Exploration",
      venue: "Dresden Techno Club",
      date: "2024-05-25",
      time: "01:00",
      type: "Club Night",
      description: "4-hour deep techno journey",
      image: "🚀",
    },
  ],
};

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState<EventStatus>("upcoming");

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="h2 gradient-text mb-4">Live Events</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join me on the dance floor as we explore freedom through music
          </p>
        </div>

        {/* Event Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass rounded-full p-2 flex">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "upcoming"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-foreground/70 hover:text-foreground hover:bg-white/10"
              }`}
            >
              Upcoming Shows
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === "past"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-foreground/70 hover:text-foreground hover:bg-white/10"
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events[activeTab].map((event) => (
            <div
              key={event.id}
              className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Event Image/Icon */}
              <div className="text-6xl mb-4 text-center">{event.image}</div>

              {/* Event Details */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {event.type}
                  </span>
                  {activeTab === "upcoming" && (
                    <span className="text-sm text-muted-foreground">
                      {formatDate(event.date)}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-lg">{event.title}</h3>
                <p className="text-sm text-muted-foreground">{event.venue}</p>
                <p className="text-sm">{event.description}</p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {event.time}
                </div>

                {activeTab === "upcoming" &&
                  "ticketUrl" in event &&
                  event.ticketUrl && (
                    <a
                      href={event.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors mt-4"
                    >
                      Get Tickets
                    </a>
                  )}

                {activeTab === "past" && (
                  <div className="text-sm text-muted-foreground">
                    {formatDate(event.date)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Booking CTA */}
        <div className="mt-20 text-center">
          <div className="glass rounded-3xl p-12 max-w-2xl mx-auto">
            <h3 className="h3 mb-4">Book Maradoca</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to bring the cosmic journey to your venue? Let&apos;s create
              an unforgettable experience together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:booking@maradoca.com"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/80 transition-colors font-medium"
              >
                Contact for Booking
              </a>
              <a
                href="/press-kit"
                className="px-8 py-3 border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors font-medium"
              >
                Download Press Kit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
