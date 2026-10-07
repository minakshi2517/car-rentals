"use client";

import { motion } from "framer-motion";
import {
  Car, UserCheck, Plane, Briefcase, Crown, CalendarDays,
} from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Steering:    Car,
  UserCheck,
  Plane,
  Briefcase,
  Crown,
  CalendarDays,
};

export function Services() {
  return (
    <section className="section-padding bg-brand-dark" id="services" aria-labelledby="services-heading">
      <div className="container-brand">
        <div className="text-center mb-16">
          <p className="label-tag mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-6 h-px bg-brand-accent" />
            What we offer
            <span className="inline-block w-6 h-px bg-brand-accent" />
          </p>
          <h2 id="services-heading" className="font-display text-display-lg font-bold text-brand-white leading-none">
            Every way to<br />
            <span className="text-gold">move in style.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Car;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-brand-card border border-brand-border rounded-2xl p-7 hover:border-brand-accent/40 hover:shadow-[0_0_40px_rgba(201,168,76,0.07)] transition-all duration-500 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-muted flex items-center justify-center mb-5 group-hover:bg-brand-accent/10 transition-colors duration-300">
                  <Icon size={20} className="text-brand-accent" />
                </div>
                <h3 className="font-display font-bold text-brand-white text-xl mb-2 group-hover:text-brand-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-brand-silver text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-1.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-brand-silver">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
