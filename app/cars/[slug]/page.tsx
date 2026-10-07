import type { Metadata } from "next";
import { notFound }      from "next/navigation";
import Image             from "next/image";
import Link              from "next/link";
import { cars, getCarBySlug } from "@/data/cars";
import { formatCurrency }     from "@/lib/utils";
import { CarCard }            from "@/components/CarCard";
import {
  Users, Fuel, Gauge, Zap, Wind, Settings2, ChevronRight,
} from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return cars.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const car = getCarBySlug(params.slug);
  if (!car) return {};
  return {
    title: `${car.name} — ${car.category} Rental`,
    description: car.description,
    openGraph: {
      title: car.name,
      description: car.description,
      images: [{ url: car.images.hero, width: 1920, height: 1080, alt: car.name }],
    },
  };
}

export default function CarDetailPage({ params }: Props) {
  const car = getCarBySlug(params.slug);
  if (!car) notFound();

  const related = cars
    .filter((c) => c.id !== car.id && c.category === car.category)
    .slice(0, 3);

  return (
    <>
      {/* Cinematic hero */}
      <section className="relative h-[60vh] md:h-[75vh] overflow-hidden bg-brand-black">
        <Image
          src={car.images.hero}
          alt={car.name}
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 container-brand pb-12">
          <p className="label-tag mb-2">{car.category}</p>
          <h1 className="font-display text-display-xl font-bold text-brand-white leading-none">
            {car.brand}<br />
            <span className="text-gold">{car.model}</span>
          </h1>
        </div>
      </section>

      {/* Detail body */}
      <section className="bg-brand-black py-16">
        <div className="container-brand">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left — specs + features */}
            <div className="lg:col-span-2 space-y-10">
              {/* Tagline */}
              <p className="text-brand-silver text-lg leading-relaxed border-l-2 border-brand-accent pl-4 italic">
                {car.tagline}
              </p>

              {/* Description */}
              <p className="text-brand-silver leading-relaxed">{car.description}</p>

              {/* Quick spec tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: Users,    label: "Seats",        value: `${car.seats}` },
                  { icon: Fuel,     label: "Fuel",         value: car.fuel },
                  { icon: Gauge,    label: "Transmission", value: car.transmission },
                  { icon: Zap,      label: "Power",        value: `${car.horsepower} hp` },
                  { icon: Wind,     label: "Top Speed",    value: `${car.topSpeed} km/h` },
                  { icon: Settings2,label: "0–100 km/h",   value: car.acceleration },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-brand-card border border-brand-border rounded-xl p-4">
                    <Icon size={16} className="text-brand-accent mb-2" />
                    <p className="label-tag text-[10px]">{label}</p>
                    <p className="font-display font-bold text-brand-white mt-1">{value}</p>
                  </div>
                ))}
              </div>

              {/* Engine specs */}
              <div>
                <h2 className="font-display font-bold text-brand-white text-xl mb-4">
                  Technical Specs
                </h2>
                <dl className="grid grid-cols-2 gap-3">
                  {Object.entries(car.specs).map(([k, v]) => (
                    <div key={k} className="bg-brand-card border border-brand-border rounded-xl p-4">
                      <dt className="label-tag text-[10px] mb-1 capitalize">{k.replace(/([A-Z])/g, " $1")}</dt>
                      <dd className="font-display font-semibold text-brand-white text-sm">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Features */}
              <div>
                <h2 className="font-display font-bold text-brand-white text-xl mb-4">
                  Standard Features
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {car.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-brand-silver">
                      <span className="w-1 h-1 rounded-full bg-brand-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gallery */}
              {car.images.gallery.length > 0 && (
                <div>
                  <h2 className="font-display font-bold text-brand-white text-xl mb-4">Gallery</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {car.images.gallery.map((src, i) => (
                      <div key={i} className="aspect-[4/3] relative rounded-xl overflow-hidden bg-brand-muted">
                        <Image
                          src={src}
                          alt={`${car.name} gallery ${i + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right — pricing + booking CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-brand-card border border-brand-border rounded-2xl p-6 space-y-5">
                <div>
                  <p className="label-tag mb-1">Daily rate</p>
                  <p className="font-display text-4xl font-bold text-brand-accent">
                    {formatCurrency(car.pricePerDay)}
                  </p>
                  <p className="text-brand-silver text-xs mt-1">per day · all-inclusive</p>
                </div>

                <div className="pt-4 border-t border-brand-border">
                  <p className="label-tag mb-1">Weekly rate</p>
                  <p className="font-display text-2xl font-semibold text-brand-white">
                    {formatCurrency(car.pricePerWeek)}
                  </p>
                  <p className="text-brand-silver text-xs mt-1">Save vs daily rate</p>
                </div>

                <Link
                  href={`/book?car=${car.slug}`}
                  className="group flex items-center justify-center gap-2 w-full py-4 bg-brand-accent text-brand-black font-display font-bold rounded-xl hover:bg-brand-white transition-colors duration-300"
                >
                  Book This Car
                  <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full py-3 border border-brand-border text-brand-white text-sm rounded-xl hover:border-brand-accent hover:text-brand-accent transition-colors duration-300"
                >
                  Enquire / Negotiate
                </Link>

                <p className="text-brand-silver text-xs text-center pt-2">
                  Free cancellation up to 24h before pickup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related vehicles */}
      {related.length > 0 && (
        <section className="bg-brand-dark py-16 md:py-24">
          <div className="container-brand">
            <h2 className="font-display text-2xl font-bold text-brand-white mb-8">
              Similar Vehicles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((c, i) => (
                <CarCard key={c.id} car={c} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
