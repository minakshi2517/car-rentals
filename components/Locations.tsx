"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { locations } from "@/data/content";
import { cn } from "@/lib/utils";

export function Locations() {
  return (
    <section className="section-padding bg-brand-dark" id="locations" aria-labelledby="locations-heading">
      <div className="container-brand">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <p className="label-tag mb-3 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-brand-accent" />
              Where we are
            </p>
            <h2 id="locations-heading" className="font-display text-display-lg font-bold text-brand-white leading-none">
              Find us<br />
              <span className="text-gold">near you.</span>
            </h2>
          </div>
          <p className="text-brand-silver max-w-xs text-sm leading-relaxed">
            Six locations across India with more coming soon. Airport-adjacent
            offices for seamless pickup and drop.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "group relative bg-brand-card border rounded-2xl p-6 transition-all duration-500",
                loc.comingSoon
                  ? "border-brand-border opacity-60 cursor-default"
                  : "border-brand-border hover:border-brand-accent/40 hover:shadow-[0_0_40px_rgba(201,168,76,0.07)] cursor-pointer"
              )}
            >
              {loc.comingSoon && (
                <span className="absolute top-4 right-4 px-2.5 py-1 bg-brand-muted text-brand-silver label-tag rounded-full text-[10px]">
                  Coming Soon
                </span>
              )}

              <div className="flex items-start gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-brand-muted flex items-center justify-center shrink-0 group-hover:bg-brand-accent/10 transition-colors">
                  <MapPin size={16} className="text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-brand-white group-hover:text-brand-accent transition-colors">
                    {loc.city}
                  </h3>
                  <p className="text-brand-silver text-xs mt-0.5">{loc.state}</p>
                </div>
              </div>

              <p className="text-brand-silver text-sm mb-4 leading-relaxed">{loc.address}</p>

              <div className="space-y-2 pt-4 border-t border-brand-border">
                <div className="flex items-center gap-2 text-xs text-brand-silver">
                  <Phone size={11} className="text-brand-accent" />
                  <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="hover:text-brand-accent transition-colors">
                    {loc.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs text-brand-silver">
                  <Clock size={11} className="text-brand-accent" />
                  {loc.hours}
                </div>
              </div>

              {!loc.comingSoon && (
                <div className="mt-4 flex items-center gap-1 text-xs text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Get directions <ArrowRight size={11} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
