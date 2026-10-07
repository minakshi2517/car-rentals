"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Car, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { carCategories } from "@/data/cars";

const cities = ["Mumbai", "New Delhi", "Bengaluru", "Hyderabad", "Pune"];
const times  = ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00",
                 "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00",
                 "20:00", "21:00", "22:00"];

interface SelectProps {
  label: string;
  icon: React.ReactNode;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  id: string;
}

function FieldSelect({ label, icon, options, value, onChange, id }: SelectProps) {
  return (
    <div className="flex-1 min-w-[160px]">
      <label htmlFor={id} className="label-tag mb-2 block">{label}</label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-accent pointer-events-none">
          {icon}
        </div>
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-brand-muted border border-brand-border text-brand-white text-sm pl-9 pr-8 py-3 rounded-xl focus:outline-none focus:border-brand-accent transition-colors cursor-pointer"
        >
          <option value="">Select…</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-silver pointer-events-none" />
      </div>
    </div>
  );
}

interface DateFieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  min?: string;
}

function DateField({ label, id, value, onChange, min }: DateFieldProps) {
  return (
    <div className="flex-1 min-w-[160px]">
      <label htmlFor={id} className="label-tag mb-2 block">{label}</label>
      <div className="relative">
        <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-accent pointer-events-none" />
        <input
          type="date"
          id={id}
          value={value}
          min={min}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-brand-muted border border-brand-border text-brand-white text-sm pl-9 pr-3 py-3 rounded-xl focus:outline-none focus:border-brand-accent transition-colors [color-scheme:dark]"
        />
      </div>
    </div>
  );
}

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const today = new Date().toISOString().split("T")[0];

  const [pickup,   setPickup]   = useState("");
  const [dropoff,  setDropoff]  = useState("");
  const [pickDate, setPickDate] = useState("");
  const [retDate,  setRetDate]  = useState("");
  const [pickTime, setPickTime] = useState("");
  const [category, setCategory] = useState("");
  const [driver,   setDriver]   = useState("self");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would route to /cars with filters or a real availability API
    const params = new URLSearchParams({
      pickup, dropoff, pickDate, retDate, pickTime, category, driver,
    });
    window.location.href = `/cars?${params.toString()}`;
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={cn(
        "bg-brand-card border border-brand-border rounded-2xl p-6 md:p-8",
        compact ? "shadow-none" : "shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {!compact && (
        <div className="mb-6">
          <p className="label-tag mb-1 flex items-center gap-2">
            <span className="inline-block w-5 h-px bg-brand-accent" />
            Booking
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-white">
            Find your car
          </h2>
        </div>
      )}

      {/* Row 1 — pickup + dropoff */}
      <div className="flex flex-wrap gap-4 mb-4">
        <FieldSelect
          id="pickup-city"
          label="Pickup Location"
          icon={<MapPin size={14} />}
          options={cities}
          value={pickup}
          onChange={setPickup}
        />
        <FieldSelect
          id="dropoff-city"
          label="Drop-off Location"
          icon={<MapPin size={14} />}
          options={cities}
          value={dropoff}
          onChange={setDropoff}
        />
      </div>

      {/* Row 2 — dates + time */}
      <div className="flex flex-wrap gap-4 mb-4">
        <DateField
          id="pickup-date"
          label="Pickup Date"
          value={pickDate}
          onChange={setPickDate}
          min={today}
        />
        <DateField
          id="return-date"
          label="Return Date"
          value={retDate}
          onChange={setRetDate}
          min={pickDate || today}
        />
        <FieldSelect
          id="pickup-time"
          label="Pickup Time"
          icon={<Clock size={14} />}
          options={times}
          value={pickTime}
          onChange={setPickTime}
        />
      </div>

      {/* Row 3 — category + driver option */}
      <div className="flex flex-wrap gap-4 mb-6">
        <FieldSelect
          id="car-category"
          label="Car Category"
          icon={<Car size={14} />}
          options={carCategories}
          value={category}
          onChange={setCategory}
        />
        <div className="flex-1 min-w-[160px]">
          <p className="label-tag mb-2 block">Driver Option</p>
          <div className="flex gap-2">
            {[
              { value: "self",      label: "Self Drive" },
              { value: "chauffeur", label: "Chauffeur" },
            ].map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => setDriver(value)}
                aria-pressed={driver === value}
                className={cn(
                  "flex-1 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                  driver === value
                    ? "bg-brand-accent text-brand-black font-bold"
                    : "bg-brand-muted border border-brand-border text-brand-silver hover:border-brand-accent"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-brand-accent text-brand-black font-display font-bold text-sm tracking-wide rounded-xl hover:bg-brand-white transition-colors duration-300"
      >
        Check Availability
      </button>
    </motion.form>
  );
}
