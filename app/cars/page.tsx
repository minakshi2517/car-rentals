import type { Metadata } from "next";
import { Fleet }         from "@/components/Fleet";
import { BookingForm }   from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Our Fleet",
  description:
    "Browse Veloce's full fleet — luxury sedans, sports cars, SUVs, economy and premium vehicles available for self-drive or chauffeur hire.",
};

export default function CarsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-32 pb-16 bg-brand-black">
        <div className="container-brand">
          <p className="label-tag mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-brand-accent" />
            Our Fleet
          </p>
          <h1 className="font-display text-display-xl font-bold text-brand-white leading-none mb-4">
            Every car you&apos;d<br />
            <span className="text-gold">want to drive.</span>
          </h1>
          <p className="text-brand-silver text-lg max-w-lg leading-relaxed">
            Curated from the world&apos;s finest manufacturers. Filter by category, then dive into the details.
          </p>
        </div>
      </section>

      <Fleet />

      <section className="bg-brand-dark py-16 md:py-24">
        <div className="container-brand max-w-5xl">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
