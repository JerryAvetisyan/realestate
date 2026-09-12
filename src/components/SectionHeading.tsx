import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <Reveal>
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.3em]",
            dark ? "text-brown-light" : "text-brown",
          )}
        >
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-4 font-heading text-4xl font-extrabold leading-tight tracking-tight text-balance sm:text-5xl",
            dark ? "text-white" : "text-navy",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed",
              dark ? "text-white/70" : "text-ink/65",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
