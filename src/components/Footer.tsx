"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Instagram, Twitter, Facebook, Linkedin } from "@/components/SocialIcons";

const columns = [
  {
    title: "Explore",
    links: ["Home", "Properties", "About", "Contact"],
  },
  {
    title: "Services",
    links: ["Buy a Home", "Rent a Home", "Sell a Home", "Valuations"],
  },
  {
    title: "Company",
    links: ["Our Story", "Careers", "Press", "Privacy Policy"],
  },
];

const socials = [
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
  { icon: Facebook, label: "Facebook" },
  { icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer id="contact" className="bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + newsletter */}
          <div>
            <a href="#home" className="font-heading text-3xl font-extrabold">
              Aureleo<span className="text-brown-light">.</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              A boutique real estate agency helping you buy, rent, and sell
              extraordinary homes across the country.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSent(true);
              }}
              className="mt-8 max-w-sm"
            >
              <label className="mb-2 block text-sm font-semibold text-white/80">
                Join our newsletter
              </label>
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 pl-5 focus-within:border-brown-light">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brown text-white transition-colors hover:bg-brown-light"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
              {sent && (
                <p className="mt-3 text-sm text-brown-light">
                  Thanks — you&apos;re on the list.
                </p>
              )}
            </form>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/90">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 transition-colors hover:text-brown-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact row */}
        <div className="mt-16 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">
          <ContactItem icon={<MapPin size={18} />} label="9200 Sunset Blvd, Los Angeles, CA" />
          <ContactItem icon={<Phone size={18} />} label="+1 (310) 555-0142" />
          <ContactItem icon={<Mail size={18} />} label="hello@aureleo.com" />
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Aureleo Real Estate. All rights reserved.
          </p>
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-brown hover:bg-brown hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 text-sm text-white/70">
      <span className="text-brown-light">{icon}</span>
      {label}
    </div>
  );
}
