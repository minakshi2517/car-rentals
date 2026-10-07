"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Clock, Zap, Wrench, LayoutList } from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    label: "Verified Fleet",
    copy:  "Every vehicle is inspected and certified before each rental. You get a car that performs.",
  },
  {
    icon: BadgeCheck,
    label: "Transparent Pricing",
    copy:  "Fixed daily rates, no surge fees, no surprise charges at return. What you see is what you pay.",
  },
  {
    icon: Clock,
    label: "24/7 Support",
    copy:  "On-call support around the clock. Breakdown, query or change of plan — we answer.",
  },
  {
    icon: Zap,
    label: "Easy Booking",
    copy:  "Confirm a car in under three minutes. No paperwork mountain, no unnecessary friction.",
  },
  {
    icon: Wrench,
    label: "Maintained Fleet",
    copy:  "Serviced on manufacturer schedules. Clean interiors, working A/C, charged phones — guaranteed.",
  },
  {
    icon: LayoutList,
    label: "Flexible Plans",
    copy:  "Daily, weekly or monthly — structured to your timeline, not ours.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-brand-black relative overflow-hidden" aria-labelledby="why-heading">
      {/* Background accent */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="container-brand relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — editorial text */}
          <div>
            <p className="label-tag mb-4 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-brand-accent" />
              Why Veloce
            </p>
            <h2 id="why-heading" className="font-display text-display-lg font-bold text-brand-white leading-none mb-6">
              We sweat<br />
              <span className="text-gold">the details.</span>
            </h2>
            <p className="text-brand-silver leading-relaxed max-w-md mb-8">
              Premium rentals require more than a clean car. They require systems, people and
              standards that make every interaction feel effortless. That&apos;s what we built.
            </p>

            {/* Large stat row */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-brand-border">
              {[
                { value: "98%",   label: "Customer satisfaction" },
                { value: "200+",  label: "Vehicles in fleet" },
                { value: "50k+",  label: "Rentals completed" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-display text-3xl md:text-4xl font-bold text-brand-accent">{value}</p>
                  <p className="label-tag mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-brand-card border border-brand-border rounded-xl p-5 hover:border-brand-accent/30 transition-all duration-300"
                >
                  <Icon size={18} className="text-brand-accent mb-3" />
                  <h3 className="font-display font-semibold text-brand-white text-sm mb-1 group-hover:text-brand-accent transition-colors">
                    {point.label}
                  </h3>
                  <p className="text-brand-silver text-xs leading-relaxed">{point.copy}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
