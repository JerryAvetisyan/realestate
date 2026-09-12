"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bed, Bath, Maximize, MapPin, ArrowUpRight } from "lucide-react";
import type { Property } from "@/data/properties";
import { formatPrice } from "@/lib/utils";

export default function PropertyCard({ property }: { property: Property }) {
  const {
    title,
    type,
    price,
    rentPeriod,
    location,
    beds,
    baths,
    sqft,
    image,
  } = property;

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_10px_40px_rgba(27,58,91,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(27,58,91,0.18)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-navy shadow-sm backdrop-blur">
          {type}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-navy/90 px-3.5 py-1.5 text-sm font-bold text-white shadow-sm backdrop-blur">
          {formatPrice(price)}
          {rentPeriod ? <span className="font-medium text-white/70">/{rentPeriod}</span> : null}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-1.5 text-sm text-brown">
          <MapPin size={15} />
          <span className="text-ink/60">{location}</span>
        </div>

        <h3 className="mt-2 font-heading text-xl font-bold text-navy">
          {title}
        </h3>

        <div className="mt-5 flex items-center gap-5 border-t border-navy/10 pt-5 text-sm text-ink/70">
          <Spec icon={<Bed size={17} />} value={`${beds} Beds`} />
          <Spec icon={<Bath size={17} />} value={`${baths} Baths`} />
          <Spec icon={<Maximize size={17} />} value={`${sqft.toLocaleString()} sqft`} />
        </div>

        <button
          type="button"
          className="mt-6 inline-flex items-center justify-between gap-2 rounded-full border border-navy/15 px-5 py-3 text-sm font-semibold text-navy transition-all duration-300 hover:border-transparent hover:bg-navy hover:text-white"
        >
          View Property
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </div>
    </motion.article>
  );
}

function Spec({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span className="text-brown">{icon}</span>
      {value}
    </span>
  );
}
