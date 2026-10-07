import { Hero }          from "@/components/Hero";
import { BrandStatement } from "@/components/BrandStatement";
import { Fleet }          from "@/components/Fleet";
import { WhyChooseUs }    from "@/components/WhyChooseUs";
import { Services }       from "@/components/Services";
import { Locations }      from "@/components/Locations";
import { Testimonials }   from "@/components/Testimonials";
import { BookingForm }    from "@/components/BookingForm";
import type { Metadata }  from "next";

export const metadata: Metadata = {
  title: "Veloce — Drive Something Worth Remembering",
  description:
    "Premium self-drive, chauffeur and luxury car rentals across India. BMW, Mercedes-Benz, Porsche, Range Rover and more.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Inline booking widget below hero */}
      <section className="bg-brand-black py-16 md:py-24" aria-label="Quick booking">
        <div className="container-brand max-w-5xl">
          <BookingForm />
        </div>
      </section>

      <BrandStatement />
      <Fleet />
      <WhyChooseUs />
      <Services />
      <Locations />
      <Testimonials />
    </>
  );
}
