"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Fuel, Gauge, ArrowRight } from "lucide-react";
import type { Car } from "@/data/cars";
import { formatCurrency } from "@/lib/utils";

interface Props {
  car: Car;
  index?: number;
}

export function CarCard({ car, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/cars/${car.slug}`}
        className="group block bg-brand-card border border-brand-border rounded-2xl overflow-hidden hover:border-brand-accent/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,168,76,0.08)]"
        aria-label={`View ${car.name} details`}
      >
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-brand-muted">
          <Image
            src={car.images.thumbnail}
            alt={car.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 bg-brand-black/80 backdrop-blur-sm text-brand-accent label-tag rounded-full border border-brand-accent/20">
              {car.category}
            </span>
          </div>
          {/* Price overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span className="text-brand-white font-display font-bold text-sm">
              View Details
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="label-tag text-brand-silver mb-1">{car.brand}</p>
              <h3 className="font-display font-bold text-brand-white text-lg leading-tight group-hover:text-brand-accent transition-colors duration-300">
                {car.model}
              </h3>
            </div>
            <div className="text-right shrink-0">
              <p className="font-display font-bold text-brand-accent text-lg">
                {formatCurrency(car.pricePerDay)}
              </p>
              <p className="label-tag text-brand-silver">/ day</p>
            </div>
          </div>

          {/* Specs row */}
          <div className="flex items-center gap-4 pt-4 border-t border-brand-border">
            <span className="flex items-center gap-1.5 text-xs text-brand-silver">
              <Users size={12} className="text-brand-accent" />
              {car.seats} seats
            </span>
            <span className="flex items-center gap-1.5 text-xs text-brand-silver">
              <Fuel size={12} className="text-brand-accent" />
              {car.fuel}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-brand-silver">
              <Gauge size={12} className="text-brand-accent" />
              {car.transmission}
            </span>
            <span className="ml-auto flex items-center gap-1 text-xs text-brand-accent font-medium group-hover:gap-2 transition-all duration-300">
              Details <ArrowRight size={11} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
