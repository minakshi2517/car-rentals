export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  service: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Arjun Mehta",
    role: "Managing Director",
    company: "Nexora Capital",
    content:
      "The Panamera I rented for our board visit made a statement before anyone said a word. Flawless vehicle, on time, and the chauffeur was exceptionally professional.",
    rating: 5,
    service: "Chauffeur Driven",
  },
  {
    id: "t2",
    name: "Priya Sharma",
    role: "Wedding Planner",
    content:
      "I've used them for three weddings now. Every time, the car arrives perfectly detailed, the driver is courteous, and not once have they been late. My clients notice.",
    rating: 5,
    service: "Luxury Rentals",
  },
  {
    id: "t3",
    name: "Rahul Bose",
    role: "Senior Consultant",
    company: "Deloitte",
    content:
      "The corporate account has simplified our travel completely. One invoice, zero hassle, and the fleet is genuinely impressive. Our clients ask about it every time.",
    rating: 5,
    service: "Corporate Rentals",
  },
  {
    id: "t4",
    name: "Sneha Iyer",
    role: "Travel Blogger",
    content:
      "Drove the BMW 5 Series from Mumbai to Goa — fully fuelled, spotless, and the 24/7 support line answered immediately when I had a question. Will book again.",
    rating: 5,
    service: "Self Drive",
  },
  {
    id: "t5",
    name: "Vikram Nair",
    role: "CTO",
    company: "Stackline",
    content:
      "Monthly rental has saved us the depreciation headache. Three cars, flexible swap, maintenance covered. It's simply the smarter way to manage an executive fleet.",
    rating: 5,
    service: "Long-Term Rentals",
  },
  {
    id: "t6",
    name: "Ananya Kapoor",
    role: "Film Producer",
    content:
      "Airport transfers for an international cast — six bookings, six flights, zero issues. The meet-and-greet is a small touch that makes a significant impression.",
    rating: 5,
    service: "Airport Transfers",
  },
];

// ─── Locations ────────────────────────────────────────────────────────────────

export interface Location {
  id: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  hours: string;
  available: boolean;
  comingSoon?: boolean;
}

export const locations: Location[] = [
  {
    id: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    address: "Bandra Kurla Complex, Mumbai 400051",
    phone: "+91 98100 00001",
    hours: "24 / 7",
    available: true,
  },
  {
    id: "delhi",
    city: "New Delhi",
    state: "Delhi NCR",
    address: "Aerocity, New Delhi 110037",
    phone: "+91 98100 00002",
    hours: "24 / 7",
    available: true,
  },
  {
    id: "bangalore",
    city: "Bengaluru",
    state: "Karnataka",
    address: "Indiranagar, Bengaluru 560038",
    phone: "+91 98100 00003",
    hours: "06:00 – 23:00",
    available: true,
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    address: "Gachibowli, Hyderabad 500032",
    phone: "+91 98100 00004",
    hours: "06:00 – 23:00",
    available: true,
  },
  {
    id: "pune",
    city: "Pune",
    state: "Maharashtra",
    address: "Koregaon Park, Pune 411001",
    phone: "+91 98100 00005",
    hours: "07:00 – 22:00",
    available: true,
  },
  {
    id: "chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    address: "Nungambakkam, Chennai 600034",
    phone: "+91 98100 00006",
    hours: "07:00 – 22:00",
    available: false,
    comingSoon: true,
  },
];
