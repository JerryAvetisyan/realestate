"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

/**
 * Counts up to `value` once scrolled into view.
 */
export default function Stat({
  value,
  suffix = "",
  prefix = "",
  label,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div className="flex flex-col">
      <span
        ref={ref}
        className="font-heading text-4xl font-extrabold text-navy sm:text-5xl"
      >
        {prefix}
        {display.toLocaleString()}
        {suffix}
      </span>
      <span className="mt-2 text-sm font-medium text-ink/60">{label}</span>
    </div>
  );
}
