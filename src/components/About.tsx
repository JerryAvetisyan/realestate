"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Stat from "@/components/Stat";

const points = [
  "Off-market access to the country's most sought-after homes",
  "A dedicated advisor from first viewing to final signature",
  "Data-driven pricing that maximises every transaction",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        {/* Image */}
        <div ref={ref} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(27,58,91,0.2)]">
            <motion.div style={{ y }} className="absolute inset-0 -top-[8%] h-[116%]">
              <Image
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80"
                alt="Elegant interior of a modern home"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          <Reveal direction="up" delay={0.2}>
            <div className="absolute -bottom-8 -right-4 rounded-2xl bg-navy px-8 py-6 text-white shadow-xl sm:-right-8">
              <p className="font-heading text-3xl font-extrabold text-brown-light">
                98%
              </p>
              <p className="mt-1 max-w-[10rem] text-sm text-white/75">
                of clients would recommend us to a friend
              </p>
            </div>
          </Reveal>
        </div>

        {/* Copy */}
        <div>
          <SectionHeading
            eyebrow="Why Aureleo"
            title={
              <>
                Two decades of quietly
                <span className="text-brown"> exceptional</span> service.
              </>
            }
            description="We're a boutique agency built on relationships, not transactions. Every home we represent is chosen with intention, and every client is guided with care."
          />

          <ul className="mt-8 space-y-4">
            {points.map((point, i) => (
              <Reveal as="li" key={point} delay={0.1 * i} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brown/15 text-brown">
                  <Check size={15} strokeWidth={3} />
                </span>
                <span className="text-ink/75">{point}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.2}>
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-navy/10 pt-10">
              <Stat value={1200} suffix="+" label="Properties sold" />
              <Stat value={950} suffix="+" label="Happy clients" />
              <Stat value={16} label="Years of experience" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
