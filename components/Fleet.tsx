"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CarCard } from "./CarCard";
import { cars, carCategories, type CarCategory } from "@/data/cars";
import { cn } from "@/lib/utils";

export function Fleet() {
  const [active, setActive] = useState<"All" | CarCategory>("All");

  const filtered = active === "All" ? cars : cars.filter((c) => c.category === active);

  return (
    <section className="section-padding bg-brand-black" id="fleet" aria-labelledby="fleet-heading">
      <div className="container-brand">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="label-tag mb-3 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-brand-accent" />
              Our Fleet
            </p>
            <h2 id="fleet-heading" className="font-display text-display-lg font-bold text-brand-white leading-none">
              Choose your<br />
              <span className="text-gold">perfect drive.</span>
            </h2>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {(["All", ...carCategories] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-mono font-medium tracking-widest uppercase transition-all duration-300",
                  active === cat
                    ? "bg-brand-accent text-brand-black"
                    : "border border-brand-border text-brand-silver hover:border-brand-accent hover:text-brand-accent"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          key={active}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {filtered.map((car, i) => (
            <CarCard key={car.id} car={car} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-brand-silver">
            No vehicles in this category yet — check back soon.
          </div>
        )}
      </div>
    </section>
  );
}
