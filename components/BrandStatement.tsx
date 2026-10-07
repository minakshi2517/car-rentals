"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function BrandStatement() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y    = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const blur = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [8, 0, 0, 8]);

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-48 overflow-hidden bg-brand-dark flex items-center"
      aria-hidden="true"
    >
      {/* Background text — decorative */}
      <motion.div
        style={{ y }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none"
      >
        <span className="font-display font-black text-[20vw] leading-none text-brand-white/[0.02] whitespace-nowrap">
          VELOCÈ
        </span>
      </motion.div>

      <div className="container-brand relative z-10 text-center">
        <motion.p
          className="label-tag mb-6 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block w-10 h-px bg-brand-accent" />
          A different kind of rental
          <span className="inline-block w-10 h-px bg-brand-accent" />
        </motion.p>

        <motion.h2
          className="font-display text-display-xl font-bold text-brand-white leading-none max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Not just a car.{" "}
          <span className="text-gold">A statement</span>{" "}
          about how<br className="hidden md:block" />
          you choose to travel.
        </motion.h2>
      </div>
    </section>
  );
}
