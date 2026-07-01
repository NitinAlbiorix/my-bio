"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/shared/section-heading";
import { RevealOnScroll } from "@/components/shared/reveal-on-scroll";
import { personal } from "@/data/personal";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-alt section-padding">
      <div className="container-max">
        <SectionHeading
          title="Coffee with me."
          subtitle="I am always excited to work on some awesome projects, message me and let's discuss over coffee."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <RevealOnScroll>
            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-foreground hover:text-primary"
              >
                <Mail className="h-5 w-5 text-primary" />
                {personal.email}
              </a>
              <a
                href={`tel:${personal.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-foreground hover:text-primary"
              >
                <Phone className="h-5 w-5 text-primary" />
                {personal.phone}
              </a>
              <p className="flex items-center gap-3 text-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                {personal.location}
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <form onSubmit={handleSubmit} className="card-simple p-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message..."
                    required
                  />
                </div>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Your name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email or phone
                  </label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary mt-6 w-full justify-center" disabled={submitted}>
                {submitted ? "Message Sent!" : (
                  <>
                    Send answers
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
