import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 bg-brand-black">
      <div className="container-brand max-w-3xl">
        <p className="label-tag mb-4">Legal</p>
        <h1 className="font-display text-display-md font-bold text-brand-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-sm max-w-none text-brand-silver space-y-4">
          <p>Last updated: October 2024</p>
          <p>
            Veloce Rentals (&quot;we&quot;, &quot;us&quot;) collects personal data solely for the purpose of fulfilling
            rental bookings, communicating with customers and improving our service. We do not sell or
            share personal data with third parties except as required to fulfil a booking (e.g. payment processors).
          </p>
          <p>
            For questions about your data, email{" "}
            <a href="mailto:privacy@veloce.rentals" className="text-brand-accent hover:underline">
              privacy@veloce.rentals
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
