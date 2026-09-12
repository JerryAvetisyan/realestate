"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-28 lg:py-40">
      <motion.div style={{ y }} className="absolute inset-0 -top-[12%] -z-10 h-[124%]">
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=80"
          alt="Sunlit modern living room"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-navy-deep/75" />

      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brown-light">
            Let&apos;s begin
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-heading text-4xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-6xl">
            Find Your Dream Home
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/75">
            Tell us what you&apos;re looking for and we&apos;ll curate a
            shortlist within 48 hours — no obligation, no pressure.
          </p>
        </Reveal>
        <Reveal delay={0.26}>
          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-brown px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:bg-white hover:text-navy"
          >
            Contact Our Team
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
