"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Fleet",      href: "/cars" },
  { label: "Services",   href: "/services" },
  { label: "Locations",  href: "/locations" },
  { label: "About",      href: "/about" },
  { label: "Contact",    href: "/contact" },
];

const menuVariants = {
  closed: { opacity: 0, clipPath: "inset(0 0 100% 0)", transition: { duration: 0.5, ease: [0.16,1,0.3,1] } },
  open:   { opacity: 1, clipPath: "inset(0 0 0% 0)",   transition: { duration: 0.6, ease: [0.16,1,0.3,1] } },
};

const itemVariants = {
  closed: { opacity: 0, y: 24 },
  open:   (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.16,1,0.3,1] },
  }),
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const pathname                = usePathname();
  const prevPath                = useRef(pathname);

  // Close menu on route change
  useEffect(() => {
    if (prevPath.current !== pathname) {
      setOpen(false);
      prevPath.current = pathname;
    }
  }, [pathname]);

  // Background blur on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-brand-border bg-brand-black/90 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="container-brand flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Veloce home">
            <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-brand-white group-hover:text-brand-accent transition-colors duration-300">
              VELOC<span className="text-brand-accent">È</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "label-tag hover:text-brand-white transition-colors duration-300 relative",
                  pathname.startsWith(link.href)
                    ? "text-brand-accent"
                    : "text-brand-silver"
                )}
              >
                {link.label}
                {pathname.startsWith(link.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-brand-accent"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/book"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-brand-accent text-brand-black font-display font-semibold text-sm tracking-wide rounded-full hover:bg-brand-white transition-colors duration-300"
            >
              Book Now
            </Link>

            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="md:hidden w-10 h-10 flex items-center justify-center text-brand-white hover:text-brand-accent transition-colors"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-brand-black flex flex-col pt-24 pb-12 px-8"
          >
            <nav className="flex flex-col gap-2 flex-1" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div key={link.href} custom={i} variants={itemVariants} initial="closed" animate="open" exit="closed">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block font-display text-4xl font-bold py-3 border-b border-brand-border hover:text-brand-accent transition-colors",
                      pathname.startsWith(link.href) ? "text-brand-accent" : "text-brand-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              custom={navLinks.length}
              variants={itemVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col gap-4 pt-8"
            >
              <Link
                href="/book"
                onClick={() => setOpen(false)}
                className="w-full py-4 bg-brand-accent text-brand-black font-display font-bold text-center text-lg rounded-full hover:bg-brand-white transition-colors"
              >
                Book Now
              </Link>
              <a
                href="tel:+919810000001"
                className="w-full py-4 border border-brand-border text-brand-white font-display font-semibold text-center text-lg rounded-full hover:border-brand-accent transition-colors"
              >
                Call Us
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
