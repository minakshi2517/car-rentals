import Link from "next/link";
import { Instagram, Twitter, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";

const fleet = [
  { label: "Luxury Cars",  href: "/cars?category=Luxury" },
  { label: "Sedans",       href: "/cars?category=Sedan" },
  { label: "SUVs",         href: "/cars?category=SUV" },
  { label: "Sports Cars",  href: "/cars?category=Sports" },
  { label: "Economy",      href: "/cars?category=Economy" },
  { label: "Premium",      href: "/cars?category=Premium" },
];

const services = [
  { label: "Self Drive",        href: "/services#self-drive" },
  { label: "Chauffeur Driven",  href: "/services#chauffeur" },
  { label: "Airport Transfers", href: "/services#airport-transfers" },
  { label: "Corporate Rentals", href: "/services#corporate" },
  { label: "Luxury Rentals",    href: "/services#luxury" },
  { label: "Long-Term Rentals", href: "/services#long-term" },
];

const company = [
  { label: "About Us",      href: "/about" },
  { label: "Locations",     href: "/locations" },
  { label: "Contact",       href: "/contact" },
  { label: "Book a Car",    href: "/book" },
];

const social = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter,   href: "#", label: "Twitter" },
  { icon: Linkedin,  href: "#", label: "LinkedIn" },
  { icon: Youtube,   href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-border mt-0">
      {/* CTA band */}
      <div className="container-brand py-20 md:py-28 text-center">
        <p className="label-tag mb-4">Ready to drive?</p>
        <h2 className="font-display text-display-xl font-bold text-brand-white mb-8 max-w-2xl mx-auto leading-none">
          Your next drive<br/>
          <span className="text-gold">starts here.</span>
        </h2>
        <Link
          href="/book"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-brand-black font-display font-bold text-lg rounded-full hover:bg-brand-white transition-colors duration-300"
        >
          Book Your Car
        </Link>
      </div>

      {/* Main footer grid */}
      <div className="border-t border-brand-border">
        <div className="container-brand py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <span className="font-display text-2xl font-bold text-brand-white">
                  VELOC<span className="text-brand-accent">È</span>
                </span>
              </Link>
              <p className="text-brand-silver text-sm leading-relaxed max-w-xs mb-8">
                Premium self-drive, chauffeur and luxury car rentals across India.
                Drive something worth remembering.
              </p>
              {/* Social */}
              <div className="flex items-center gap-3">
                {social.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-brand-border text-brand-silver hover:text-brand-accent hover:border-brand-accent transition-colors duration-300"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>

            {/* Fleet */}
            <div>
              <h3 className="label-tag mb-5 text-brand-white">Fleet</h3>
              <ul className="space-y-3">
                {fleet.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-brand-silver hover:text-brand-accent transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="label-tag mb-5 text-brand-white">Services</h3>
              <ul className="space-y-3">
                {services.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-brand-silver hover:text-brand-accent transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company + Contact */}
            <div>
              <h3 className="label-tag mb-5 text-brand-white">Company</h3>
              <ul className="space-y-3 mb-8">
                {company.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-brand-silver hover:text-brand-accent transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="label-tag mb-5 text-brand-white">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-brand-silver">
                  <Phone size={12} className="text-brand-accent shrink-0" />
                  <a href="tel:+919810000001" className="hover:text-brand-accent transition-colors">+91 98100 00001</a>
                </li>
                <li className="flex items-center gap-2 text-sm text-brand-silver">
                  <Mail size={12} className="text-brand-accent shrink-0" />
                  <a href="mailto:hello@veloce.rentals" className="hover:text-brand-accent transition-colors">hello@veloce.rentals</a>
                </li>
                <li className="flex items-start gap-2 text-sm text-brand-silver">
                  <MapPin size={12} className="text-brand-accent shrink-0 mt-0.5" />
                  <span>Mumbai · Delhi · Bengaluru</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-border">
        <div className="container-brand py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-silver">
            © {new Date().getFullYear()} Veloce Rentals. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-xs text-brand-silver hover:text-brand-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="text-xs text-brand-silver hover:text-brand-accent transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
