"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { cn } from "@/lib/utils";

const filters = ["All", "For Sale", "For Rent"] as const;
type Filter = (typeof filters)[number];

export default function FeaturedProperties() {
  const [active, setActive] = useState<Filter>("All");

  const visible = properties.filter((p) =>
    active === "All" ? true : p.type === active,
  );

  return (
    <section id="properties" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Featured Listings"
            title={
              <>
                Handpicked homes,
                <br />
                ready for their next story.
              </>
            }
          />

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                  active === f
                    ? "bg-navy text-white shadow-lg"
                    : "bg-white text-ink/70 hover:bg-navy/5 hover:text-navy",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={active}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
