import type { Metadata } from "next";
import Image              from "next/image";
import Link               from "next/link";
import { WhyChooseUs }    from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Veloce — India's premium car rental company built on a philosophy of quality, transparency and effortless experience.",
};

const milestones = [
  { year: "2018", label: "Founded in Mumbai with a fleet of 12 vehicles." },
  { year: "2020", label: "Expanded to Delhi and Bengaluru. Fleet grew to 80 vehicles." },
  { year: "2022", label: "Launched corporate accounts and airport transfer service." },
  { year: "2024", label: "200+ vehicles. 6 cities. 50,000 rentals completed." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-0 bg-brand-black overflow-hidden">
        <div className="container-brand pb-16">
          <p className="label-tag mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-brand-accent" />
            About Veloce
          </p>
          <h1 className="font-display text-display-xl font-bold text-brand-white leading-none mb-6 max-w-3xl">
            Built for people who<br />
            <span className="text-gold">care how they arrive.</span>
          </h1>
          <p className="text-brand-silver text-lg max-w-xl leading-relaxed">
            Veloce was founded with a single conviction: that a rental car should enhance your
            journey, not complicate it. We obsess over the vehicles we choose, the people
            we hire and the experience we deliver — so every interaction feels considered.
          </p>
        </div>

        {/* Full-width cinematic image */}
        <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=85"
            alt="Veloce fleet on open road"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 to-brand-black/10" />
        </div>
      </section>

      {/* Story body */}
      <section className="section-padding bg-brand-black">
        <div className="container-brand grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-display-md font-bold text-brand-white leading-none mb-6">
              Our story
            </h2>
            <div className="space-y-4 text-brand-silver leading-relaxed">
              <p>
                We started in 2018 with twelve cars, a shared belief in quality over quantity,
                and a conviction that the Indian premium rental market deserved better.
              </p>
              <p>
                The brief was simple: select only vehicles we would be proud to drive ourselves,
                maintain them properly, price them honestly, and be available when customers
                need us. That brief has not changed.
              </p>
              <p>
                Today Veloce operates across six cities with over 200 vehicles. The fleet
                spans economy practicality to exotic performance — but the standard of care
                applied to each one is identical.
              </p>
            </div>
          </div>

          {/* Milestones */}
          <div>
            <h2 className="font-display text-display-md font-bold text-brand-white leading-none mb-6">
              Milestones
            </h2>
            <div className="relative pl-5 border-l border-brand-border space-y-6">
              {milestones.map(({ year, label }) => (
                <div key={year} className="relative">
                  <span className="absolute -left-[1.38rem] top-1 w-2.5 h-2.5 rounded-full border-2 border-brand-accent bg-brand-black" />
                  <p className="font-display font-bold text-brand-accent text-sm mb-1">{year}</p>
                  <p className="text-brand-silver text-sm leading-relaxed">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* CTA */}
      <section className="section-padding bg-brand-dark text-center">
        <div className="container-brand max-w-2xl">
          <h2 className="font-display text-display-lg font-bold text-brand-white leading-none mb-6">
            Ready to<br />
            <span className="text-gold">experience it?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/cars"
              className="px-8 py-4 bg-brand-accent text-brand-black font-display font-bold rounded-full hover:bg-brand-white transition-colors duration-300"
            >
              Explore the Fleet
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-brand-border text-brand-white rounded-full hover:border-brand-accent hover:text-brand-accent transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
