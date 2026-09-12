"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const categories = [
  {
    title: "Buy",
    copy: "Discover homes that fit your future. Browse curated listings across every price point.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    count: "480+ homes",
  },
  {
    title: "Rent",
    copy: "Flexible living, elevated. Find beautifully maintained rentals ready when you are.",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
    count: "220+ rentals",
  },
  {
    title: "Sell",
    copy: "List with confidence. Our advisors turn your property into your best sale yet.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    count: "Free valuation",
  },
];

export default function Categories() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="How can we help?"
          title="Whatever your next move, we'll guide it."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.button
              type="button"
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex h-[420px] flex-col justify-end overflow-hidden rounded-3xl p-8 text-left"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-navy-deep/10 transition-opacity duration-500 group-hover:from-navy-deep/95" />

              <div className="relative">
                <span className="mb-3 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {cat.count}
                </span>
                <h3 className="flex items-center gap-2 font-heading text-3xl font-extrabold text-white">
                  {cat.title}
                  <ArrowUpRight
                    className="text-brown-light transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    size={26}
                  />
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/80">
                  {cat.copy}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
