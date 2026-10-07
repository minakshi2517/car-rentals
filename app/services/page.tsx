import type { Metadata }  from "next";
import { Services }        from "@/components/Services";
import { BookingForm }     from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Self-drive, chauffeur, airport transfers, corporate, luxury and long-term car rental services from Veloce.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-brand-black">
        <div className="container-brand">
          <p className="label-tag mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-brand-accent" />
            Services
          </p>
          <h1 className="font-display text-display-xl font-bold text-brand-white leading-none mb-4">
            Every way to<br />
            <span className="text-gold">move in style.</span>
          </h1>
          <p className="text-brand-silver text-lg max-w-lg leading-relaxed">
            From a weekend self-drive to a long-term corporate fleet — we have a service
            shaped to your exact need.
          </p>
        </div>
      </section>

      <Services />

      <section className="bg-brand-black py-16 md:py-24">
        <div className="container-brand max-w-5xl">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
