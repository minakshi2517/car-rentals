"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef     = useRef<HTMLDivElement>(null);
  const headlineRef  = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 18,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll(".word");
        gsap.fromTo(
          words,
          { yPercent: 120, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 1.1,
            ease: "expo.out",
            delay: 0.4,
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-brand-black"
      aria-label="Hero"
    >
      {/* Background car image — full bleed with parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform"
        style={{ top: "-10%", height: "115%" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&q=90"
          alt="Premium BMW on open road"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,10,10,0.7)_100%)]" />
      </div>

      {/* Top stat bar */}
      <motion.div
        className="absolute top-20 md:top-24 right-0 container-brand flex justify-end"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-6 md:gap-10 text-right">
          {[
            { value: "200+", label: "Premium Cars" },
            { value: "6+",   label: "Cities" },
            { value: "24/7", label: "Support" },
          ].map(({ value, label }) => (
            <div key={label} className="hidden sm:block">
              <p className="font-display text-2xl md:text-3xl font-bold text-brand-white">{value}</p>
              <p className="label-tag mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 container-brand pb-24 md:pb-32">
        <motion.p
          className="label-tag mb-6 flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="inline-block w-8 h-px bg-brand-accent" />
          India&apos;s Premium Car Rental
        </motion.p>

        <h1
          ref={headlineRef}
          className="font-display text-display-2xl font-bold text-brand-white leading-none max-w-3xl mb-8"
          aria-label="Drive Something Worth Remembering"
        >
          {["Drive", "Something", "Worth", "Remembering."].map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <span
                className={`word inline-block ${i === 3 ? "text-gold" : ""}`}
                style={{ opacity: 0, transform: "translateY(120%)" }}
              >
                {word}
              </span>
            </span>
          ))}
        </h1>

        <motion.p
          className="text-brand-silver text-lg md:text-xl max-w-md leading-relaxed mb-10"
          custom={0.8}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Luxury sedans, exotic sports cars and capable SUVs —
          self-drive or chauffeur-driven, across India.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          custom={1.0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <Link
            href="/cars"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-brand-accent text-brand-black font-display font-bold text-sm rounded-full hover:bg-brand-white transition-colors duration-300"
          >
            Explore Cars
            <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-brand-border text-brand-white font-display font-semibold text-sm rounded-full hover:border-brand-accent hover:text-brand-accent transition-colors duration-300"
          >
            Book Your Ride
          </Link>
        </motion.div>

        <motion.div
          className="mt-16 flex items-center gap-3 text-brand-silver"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-brand-accent" />
          </motion.div>
          <span className="label-tag">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
