"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/content";

export function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="section-padding bg-brand-black overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="container-brand mb-12">
        <div className="text-center">
          <p className="label-tag mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-6 h-px bg-brand-accent" />
            Client stories
            <span className="inline-block w-6 h-px bg-brand-accent" />
          </p>
          <h2 id="testimonials-heading" className="font-display text-display-lg font-bold text-brand-white leading-none">
            What they<br />
            <span className="text-gold">said about us.</span>
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-brand-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-brand-black to-transparent" />

        <div className="marquee-track gap-5">
          {doubled.map((t, i) => (
            <motion.div
              key={`${t.id}-${i}`}
              className="w-80 shrink-0 bg-brand-card border border-brand-border rounded-2xl p-6"
              whileHover={{ y: -4, borderColor: "rgba(201,168,76,0.4)" }}
              transition={{ duration: 0.3 }}
            >
              <Quote size={20} className="text-brand-accent mb-4 opacity-60" />
              <p className="text-brand-white text-sm leading-relaxed mb-5">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display font-semibold text-brand-white text-sm">{t.name}</p>
                  <p className="text-brand-silver text-xs mt-0.5">
                    {t.role}{t.company ? `, ${t.company}` : ""}
                  </p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={11} className="fill-brand-accent text-brand-accent" />
                  ))}
                </div>
              </div>
              <p className="mt-3 text-xs text-brand-silver/50 font-mono">{t.service}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
