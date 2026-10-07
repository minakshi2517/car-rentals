export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string; // lucide icon name
}

export const services: Service[] = [
  {
    id: "self-drive",
    slug: "self-drive",
    title: "Self Drive",
    subtitle: "Freedom to drive your way.",
    description:
      "Take the wheel and go wherever your journey leads. Our self-drive fleet is immaculately maintained, fully insured and available with flexible daily, weekly or monthly terms.",
    features: [
      "Flexible pickup & drop-off times",
      "Comprehensive insurance included",
      "GPS navigation equipped",
      "Roadside assistance 24/7",
      "No hidden charges",
    ],
    icon: "Steering",
  },
  {
    id: "chauffeur",
    slug: "chauffeur",
    title: "Chauffeur Driven",
    subtitle: "Professional chauffeur service.",
    description:
      "Arrive in style with a uniformed, professionally trained chauffeur. Perfect for business meetings, airport transfers, weddings and events where first impressions matter.",
    features: [
      "Vetted & trained chauffeurs",
      "Impeccably presented vehicles",
      "Real-time flight tracking",
      "Meet & greet at arrivals",
      "Complimentary water & Wi-Fi",
    ],
    icon: "UserCheck",
  },
  {
    id: "airport-transfers",
    slug: "airport-transfers",
    title: "Airport Transfers",
    subtitle: "Reliable airport pickup & drop.",
    description:
      "Start and end your journey stress-free. Our airport transfer service monitors your flight in real time and has a vehicle ready the moment you land.",
    features: [
      "All major airports covered",
      "Live flight monitoring",
      "Fixed fare — no surge pricing",
      "Name board meet & greet",
      "Free waiting time",
    ],
    icon: "Plane",
  },
  {
    id: "corporate",
    slug: "corporate",
    title: "Corporate Rentals",
    subtitle: "Flexible business transportation.",
    description:
      "Dedicated corporate accounts with monthly billing, priority booking and a dedicated relationship manager — so your team travels efficiently without the administrative overhead.",
    features: [
      "Dedicated account manager",
      "Monthly consolidated billing",
      "GST invoices provided",
      "Priority fleet allocation",
      "Multi-city coverage",
    ],
    icon: "Briefcase",
  },
  {
    id: "luxury",
    slug: "luxury",
    title: "Luxury Rentals",
    subtitle: "Premium vehicles for every occasion.",
    description:
      "When the occasion demands nothing but the best — weddings, anniversary celebrations, high-profile events — our exotic and luxury vehicle selection creates an unforgettable statement.",
    features: [
      "Exotic & ultra-luxury fleet",
      "White-glove preparation",
      "Bespoke packages available",
      "Red-carpet arrival options",
      "Photographer coordination",
    ],
    icon: "Crown",
  },
  {
    id: "long-term",
    slug: "long-term",
    title: "Long-Term Rentals",
    subtitle: "Flexible monthly rental options.",
    description:
      "Monthly rentals at significantly reduced daily rates — the smart alternative to vehicle ownership for business travellers, expatriates and project-based assignments.",
    features: [
      "Substantial monthly discounts",
      "Vehicle swap flexibility",
      "Maintenance included",
      "No depreciation risk",
      "Cancel with notice",
    ],
    icon: "CalendarDays",
  },
];
