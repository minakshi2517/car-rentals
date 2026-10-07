import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PageTransition } from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet-brains-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veloce.rentals"),
  title: {
    default: "Veloce — Premium Car Rentals",
    template: "%s | Veloce Car Rentals",
  },
  description:
    "Drive something worth remembering. Premium self-drive, chauffeur and luxury car rentals across India. BMW, Mercedes, Porsche, Range Rover and more.",
  keywords: [
    "premium car rental",
    "luxury car hire",
    "self drive car rental",
    "chauffeur service",
    "BMW rental",
    "Mercedes rental",
    "Porsche rental",
    "car rental India",
  ],
  openGraph: {
    title: "Veloce — Premium Car Rentals",
    description:
      "Drive something worth remembering. Premium self-drive, chauffeur and luxury car rentals.",
    type: "website",
    locale: "en_IN",
    siteName: "Veloce Car Rentals",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Veloce Premium Car Rentals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veloce — Premium Car Rentals",
    description: "Drive something worth remembering.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-brand-black text-brand-white antialiased noise">
        <SmoothScroll>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
