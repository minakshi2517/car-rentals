import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Instagram, Twitter, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Veloce — call, email or visit one of our rental locations.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-brand-black">
        <div className="container-brand">
          <p className="label-tag mb-4 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-brand-accent" />
            Contact
          </p>
          <h1 className="font-display text-display-xl font-bold text-brand-white leading-none mb-4">
            Let&apos;s talk<br />
            <span className="text-gold">about your journey.</span>
          </h1>
        </div>
      </section>

      <section className="bg-brand-black pb-24">
        <div className="container-brand grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact details */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display font-bold text-brand-white text-xl mb-5">Reach us</h2>
              <ul className="space-y-4">
                {[
                  { icon: Phone, label: "Phone", value: "+91 98100 00001", href: "tel:+919810000001" },
                  { icon: Mail,  label: "Email", value: "hello@veloce.rentals", href: "mailto:hello@veloce.rentals" },
                  { icon: MapPin, label: "Head Office", value: "BKC, Mumbai 400051", href: "#" },
                  { icon: Clock, label: "Hours", value: "24 / 7 for bookings", href: undefined },
                ].map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-brand-muted flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={15} className="text-brand-accent" />
                    </div>
                    <div>
                      <p className="label-tag text-[10px] mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-brand-white hover:text-brand-accent transition-colors text-sm">
                          {value}
                        </a>
                      ) : (
                        <p className="text-brand-white text-sm">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display font-bold text-brand-white text-xl mb-4">Follow us</h2>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Twitter,   href: "#", label: "Twitter" },
                  { icon: Linkedin,  href: "#", label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-brand-border text-brand-silver hover:text-brand-accent hover:border-brand-accent transition-colors duration-300"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-brand-card border border-brand-border rounded-2xl p-7 space-y-5"
          >
            <h2 className="font-display font-bold text-brand-white text-xl">Send a message</h2>

            {[
              { id: "name",    label: "Your name",        type: "text",  placeholder: "Arjun Mehta" },
              { id: "email",   label: "Email address",    type: "email", placeholder: "arjun@example.com" },
              { id: "phone",   label: "Phone (optional)", type: "tel",   placeholder: "+91 98765 43210" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="label-tag block mb-1.5">{label}</label>
                <input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  className="w-full bg-brand-muted border border-brand-border rounded-xl px-4 py-3 text-brand-white text-sm placeholder:text-brand-silver/40 focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="label-tag block mb-1.5">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Tell us about your rental needs…"
                className="w-full bg-brand-muted border border-brand-border rounded-xl px-4 py-3 text-brand-white text-sm placeholder:text-brand-silver/40 focus:outline-none focus:border-brand-accent transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-brand-accent text-brand-black font-display font-bold rounded-xl hover:bg-brand-white transition-colors duration-300"
            >
              Send Message
            </button>

            <p className="text-brand-silver text-xs text-center">
              We typically respond within 2 hours during business hours.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
