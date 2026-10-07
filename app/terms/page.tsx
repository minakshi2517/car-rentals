import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 bg-brand-black">
      <div className="container-brand max-w-3xl">
        <p className="label-tag mb-4">Legal</p>
        <h1 className="font-display text-display-md font-bold text-brand-white mb-8">Terms of Use</h1>
        <div className="text-brand-silver space-y-4 text-sm leading-relaxed">
          <p>Last updated: October 2024</p>
          <p>
            By using the Veloce Rentals website you agree to these terms. Bookings are subject to vehicle
            availability, driver licence verification and payment authorisation. Minimum rental age is 21.
          </p>
          <p>
            For full terms, contact{" "}
            <a href="mailto:hello@veloce.rentals" className="text-brand-accent hover:underline">
              hello@veloce.rentals
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
