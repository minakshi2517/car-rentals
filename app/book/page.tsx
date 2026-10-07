import type { Metadata } from "next";
import { BookingForm }    from "@/components/BookingForm";
import { ShieldCheck, Clock, BadgeCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Car",
  description: "Book your premium rental car with Veloce. Self-drive or chauffeur-driven, flexible dates and locations.",
};

export default function BookPage() {
  return (
    <>
      <section className="pt-32 pb-0 bg-brand-black">
        <div className="container-brand mb-12">
          <p className="label-tag mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-brand-accent" />
            Booking
          </p>
          <h1 className="font-display text-display-xl font-bold text-brand-white leading-none mb-4">
            Your drive<br />
            <span className="text-gold">starts here.</span>
          </h1>
          <p className="text-brand-silver text-lg max-w-md leading-relaxed">
            Complete the form below and we&apos;ll confirm availability within minutes.
          </p>
        </div>
      </section>

      <section className="bg-brand-black pb-24">
        <div className="container-brand grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <BookingForm compact />
          </div>

          {/* Trust signals */}
          <div className="space-y-5">
            {[
              {
                icon: ShieldCheck,
                title: "Free cancellation",
                copy: "Cancel up to 24 hours before pickup at no charge.",
              },
              {
                icon: BadgeCheck,
                title: "Transparent pricing",
                copy: "The price you see is the price you pay. No hidden fees.",
              },
              {
                icon: Clock,
                title: "Confirmed in minutes",
                copy: "We review and confirm every booking within 30 minutes.",
              },
            ].map(({ icon: Icon, title, copy }) => (
              <div key={title} className="flex items-start gap-4 bg-brand-card border border-brand-border rounded-xl p-5">
                <Icon size={18} className="text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-display font-semibold text-brand-white text-sm mb-1">{title}</p>
                  <p className="text-brand-silver text-xs leading-relaxed">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
