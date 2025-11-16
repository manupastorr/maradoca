"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "general",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally send to an API endpoint
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-muted to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="h2 gradient-text mb-4">Connect & Collaborate</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to embark on a musical journey together? Let&apos;s create
            something cosmic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass rounded-3xl p-8">
            <h3 className="h3 mb-6">Get In Touch</h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✨</div>
                <h4 className="font-semibold mb-2 text-primary">
                  Message Sent!
                </h4>
                <p className="text-muted-foreground">
                  Thank you for reaching out. You&apos;ll hear back soon on this
                  cosmic journey.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium mb-2"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking Request</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="press">Press & Media</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell me about your cosmic vision..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors font-medium"
                >
                  Send Message to the Cosmos ✨
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Social Media */}
            <div className="glass rounded-2xl p-6">
              <h4 className="font-semibold mb-4">Follow the Journey</h4>
              <div className="space-y-3">
                <a
                  href="https://soundcloud.com/maradoca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15H8v-6h2v6zm0-8H8V7h2v2zm4 8h-2V9h2v8zm0-10h-2V7h2v2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">SoundCloud</div>
                    <div className="text-sm text-muted-foreground">
                      Latest mixes & tracks
                    </div>
                  </div>
                </a>

                <a
                  href="https://instagram.com/maradoca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Instagram</div>
                    <div className="text-sm text-muted-foreground">
                      Behind the scenes
                    </div>
                  </div>
                </a>

                <a
                  href="https://open.spotify.com/artist/maradoca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 14.5c-.17 0-.33-.09-.43-.25-1.09-1.33-2.5-2-4.21-2s-3.12.67-4.21 2c-.1.16-.26.25-.43.25-.33 0-.59-.27-.59-.59 0-.14.05-.27.15-.37 1.39-1.69 3.18-2.54 5.08-2.54s3.69.85 5.08 2.54c.1.1.15.23.15.37 0 .32-.26.59-.59.59z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Spotify</div>
                    <div className="text-sm text-muted-foreground">
                      Curated playlists
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Booking Info */}
            <div className="glass rounded-2xl p-6">
              <h4 className="font-semibold mb-4">Professional Inquiries</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-primary mt-0.5">📧</div>
                  <div>
                    <div className="font-medium">General</div>
                    <div className="text-muted-foreground">
                      hello@maradoca.com
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-primary mt-0.5">🎵</div>
                  <div>
                    <div className="font-medium">Bookings</div>
                    <div className="text-muted-foreground">
                      booking@maradoca.com
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 text-primary mt-0.5">📰</div>
                  <div>
                    <div className="font-medium">Press & Media</div>
                    <div className="text-muted-foreground">
                      press@maradoca.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="glass rounded-2xl p-6">
              <h4 className="font-semibold mb-4">Based In</h4>
              <div className="flex items-center gap-3">
                <div className="text-2xl">🌍</div>
                <div>
                  <div className="font-medium">Leipzig, Germany</div>
                  <div className="text-sm text-muted-foreground">
                    Available worldwide
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
