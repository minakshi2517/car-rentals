import type { Metadata } from "next";
import { Locations }      from "@/components/Locations";
import { BookingForm }    from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Locations",
  description: "Veloce car rental locations across Mumbai, Delhi, Bengaluru, Hyderabad and Pune.",
};

export default function LocationsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-brand-black">
        <div className="container-brand">
          <p className="label-tag mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-brand-accent" />
            Our Locations
          </p>
          <h1 className="font-display text-display-xl font-bold text-brand-white leading-none mb-4">
            Find us<br />
            <span className="text-gold">near you.</span>
          </h1>
          <p className="text-brand-silver text-lg max-w-lg leading-relaxed">
            Six rental hubs positioned for easy access — most within minutes of major airports
            and business districts.
          </p>
        </div>
      </section>

      <Locations />

      <section className="bg-brand-black py-16 md:py-24">
        <div className="container-brand max-w-5xl">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
