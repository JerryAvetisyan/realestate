"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "Properties", href: "#properties" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled
          ? "bg-white/90 shadow-[0_8px_30px_rgba(27,58,91,0.08)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#home"
          className={cn(
            "font-heading text-2xl font-extrabold tracking-tight transition-colors",
            scrolled ? "text-navy" : "text-white",
          )}
        >
          Aureleo<span className="text-brown">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[#0000EE] underline decoration-[#0000EE] underline-offset-[6px] decoration-2 transition-opacity hover:opacity-80"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={cn(
            "hidden rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 md:inline-flex",
            scrolled
              ? "bg-navy text-white hover:bg-brown"
              : "bg-white/95 text-navy hover:bg-brown hover:text-white",
          )}
        >
          Book a Viewing
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex items-center justify-center rounded-full p-2 transition-colors md:hidden",
            scrolled || open ? "text-navy" : "text-white",
          )}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-cream hover:text-navy"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-navy px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brown"
                >
                  Book a Viewing
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
