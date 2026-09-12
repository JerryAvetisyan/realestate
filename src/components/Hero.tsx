"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, MapPin, Home, DollarSign, Search } from "lucide-react";

const words = ["Find", "your", "extraordinary", "home."];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
          alt="Modern luxury home at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-deep/70 via-navy/50 to-navy-deep/90"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="mx-auto w-full max-w-6xl px-6 pt-24 text-center lg:px-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-brown-light"
        >
          Boutique Real Estate · Est. 2009
        </motion.p>

        <h1 className="font-heading text-5xl font-extrabold leading-[0.95] tracking-tight text-white text-balance sm:text-6xl md:text-7xl lg:text-8xl">
          {words.map((word, i) => (
            <span key={word} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.35 + i * 0.12,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={
                  word === "extraordinary" ? "inline-block text-brown-light italic" : "inline-block"
                }
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mx-auto mt-7 max-w-xl text-base text-white/80 md:text-lg"
        >
          A curated collection of the finest homes for sale and rent — matched
          to the life you want to live.
        </motion.p>

        {/* Search bar */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-2 rounded-2xl bg-white/95 p-2 shadow-2xl backdrop-blur sm:grid-cols-[1.2fr_1fr_1fr_auto] sm:rounded-full"
        >
          <Field icon={<MapPin size={18} />} label="Location">
            <select className="w-full bg-transparent text-sm text-ink outline-none" aria-label="Location">
              <option>Any location</option>
              <option>Beverly Hills, CA</option>
              <option>Miami Beach, FL</option>
              <option>Austin, TX</option>
              <option>Aspen, CO</option>
            </select>
          </Field>
          <Field icon={<Home size={18} />} label="Type">
            <select className="w-full bg-transparent text-sm text-ink outline-none" aria-label="Property type">
              <option>Any type</option>
              <option>House</option>
              <option>Penthouse</option>
              <option>Loft</option>
              <option>Estate</option>
            </select>
          </Field>
          <Field icon={<DollarSign size={18} />} label="Price">
            <select className="w-full bg-transparent text-sm text-ink outline-none" aria-label="Price range">
              <option>Any price</option>
              <option>Under $1M</option>
              <option>$1M – $2M</option>
              <option>$2M – $3M</option>
              <option>$3M+</option>
            </select>
          </Field>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brown"
          >
            <Search size={18} />
            <span className="sm:hidden lg:inline">Search</span>
          </button>
        </motion.form>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#properties"
        aria-label="Scroll to properties"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown size={22} />
        </motion.span>
      </motion.a>
    </section>
  );
}

function Field({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex items-center gap-3 rounded-full px-5 py-2.5 text-left transition-colors hover:bg-cream">
      <span className="text-brown">{icon}</span>
      <span className="flex flex-col">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-ink/50">
          {label}
        </span>
        {children}
      </span>
    </label>
  );
}
