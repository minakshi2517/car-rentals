export type CarCategory = "Luxury" | "Sedan" | "SUV" | "Sports" | "Economy" | "Premium";
export type Transmission = "Automatic" | "Manual";
export type Fuel = "Petrol" | "Diesel" | "Electric" | "Hybrid";

export interface Car {
  id: string;
  slug: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  category: CarCategory;
  tagline: string;
  description: string;
  pricePerDay: number;
  pricePerWeek: number;
  transmission: Transmission;
  fuel: Fuel;
  seats: number;
  doors: number;
  luggage: number;
  horsepower: number;
  topSpeed: number;
  acceleration: string; // 0-100 km/h
  features: string[];
  images: {
    hero: string;
    gallery: string[];
    thumbnail: string;
  };
  specs: {
    engine: string;
    displacement: string;
    torque: string;
    drive: string;
  };
  available: boolean;
  featured: boolean;
}

export const cars: Car[] = [
  {
    id: "bmw-5-series",
    slug: "bmw-5-series",
    name: "BMW 5 Series",
    brand: "BMW",
    model: "5 Series 530i",
    year: 2024,
    category: "Luxury",
    tagline: "Precision in every mile.",
    description:
      "The BMW 5 Series represents the pinnacle of executive driving. With its powerful turbocharged engine, adaptive suspension, and a cabin finished in the finest materials, every journey becomes an event.",
    pricePerDay: 8500,
    pricePerWeek: 52000,
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 5,
    doors: 4,
    luggage: 3,
    horsepower: 252,
    topSpeed: 250,
    acceleration: "6.1s",
    features: [
      "iDrive 8.5 Infotainment",
      "Harman Kardon Sound System",
      "Heated & Ventilated Seats",
      "Panoramic Sunroof",
      "Adaptive LED Headlights",
      "Parking Assist Plus",
      "Live Cockpit Professional",
      "Wireless Apple CarPlay",
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&q=90",
      thumbnail: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=85",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=85",
        "https://images.unsplash.com/photo-1493238792000-8113da705763?w=1200&q=85",
      ],
    },
    specs: {
      engine: "2.0L TwinPower Turbo Inline-4",
      displacement: "1998cc",
      torque: "400 Nm",
      drive: "Rear-Wheel Drive",
    },
    available: true,
    featured: true,
  },
  {
    id: "mercedes-e-class",
    slug: "mercedes-e-class",
    name: "Mercedes E-Class",
    brand: "Mercedes-Benz",
    model: "E 220d",
    year: 2024,
    category: "Luxury",
    tagline: "The epitome of refined travel.",
    description:
      "The Mercedes-Benz E-Class is a masterclass in understated luxury. Its turbocharged diesel delivers effortless cruising range, while the MBUX infotainment and ENERGIZING comfort programs make every journey restorative.",
    pricePerDay: 9200,
    pricePerWeek: 56000,
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 5,
    doors: 4,
    luggage: 3,
    horsepower: 194,
    topSpeed: 240,
    acceleration: "7.3s",
    features: [
      "MBUX Infotainment",
      "Burmester Sound System",
      "Air Body Control Suspension",
      "ENERGIZING Comfort",
      "64-color Ambient Lighting",
      "Active Distance Assist",
      "Augmented Reality Navigation",
      "Wireless Charging",
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1920&q=90",
      thumbnail: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=85",
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=85",
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=85",
      ],
    },
    specs: {
      engine: "2.0L OM654 Inline-4 Diesel",
      displacement: "1950cc",
      torque: "440 Nm",
      drive: "Rear-Wheel Drive",
    },
    available: true,
    featured: true,
  },
  {
    id: "porsche-panamera",
    slug: "porsche-panamera",
    name: "Porsche Panamera",
    brand: "Porsche",
    model: "Panamera 4S",
    year: 2024,
    category: "Sports",
    tagline: "Sports car soul. Saloon comfort.",
    description:
      "The Porsche Panamera 4S blurs the line between a racing thoroughbred and a grand tourer. Its twin-turbo V6 delivers a surge that pushes you into your seat while the adaptive air suspension floats over imperfections.",
    pricePerDay: 14500,
    pricePerWeek: 88000,
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 4,
    doors: 4,
    luggage: 2,
    horsepower: 440,
    topSpeed: 289,
    acceleration: "4.0s",
    features: [
      "Porsche Communication Management",
      "Bose Surround Sound",
      "Sport Chrono Package",
      "PASM Sport Suspension",
      "Rear-Axle Steering",
      "Night Vision Assist",
      "Head-Up Display",
      "4-Zone Climate Control",
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=90",
      thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=85",
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=85",
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=85",
      ],
    },
    specs: {
      engine: "2.9L Twin-Turbo V6",
      displacement: "2894cc",
      torque: "550 Nm",
      drive: "All-Wheel Drive",
    },
    available: true,
    featured: true,
  },
  {
    id: "range-rover-sport",
    slug: "range-rover-sport",
    name: "Range Rover Sport",
    brand: "Land Rover",
    model: "Sport P400e",
    year: 2024,
    category: "SUV",
    tagline: "Commanding presence. Everywhere.",
    description:
      "The Range Rover Sport combines commanding road presence with effortless performance. Its plug-in hybrid powertrain delivers both efficiency and the legendary Terrain Response that conquers any surface.",
    pricePerDay: 11500,
    pricePerWeek: 70000,
    transmission: "Automatic",
    fuel: "Hybrid",
    seats: 5,
    doors: 5,
    luggage: 4,
    horsepower: 404,
    topSpeed: 240,
    acceleration: "5.4s",
    features: [
      "Pivi Pro Infotainment",
      "Meridian Surround Sound",
      "Air Suspension",
      "Terrain Response 2",
      "Wade Sensing",
      "ClearSight Ground View",
      "Head-Up Display",
      "Pixel-LED Headlights",
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=90",
      thumbnail: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=85",
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=85",
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=85",
      ],
    },
    specs: {
      engine: "3.0L Inline-6 + Electric Motor",
      displacement: "2997cc",
      torque: "640 Nm",
      drive: "All-Wheel Drive",
    },
    available: true,
    featured: false,
  },
  {
    id: "audi-a6",
    slug: "audi-a6",
    name: "Audi A6",
    brand: "Audi",
    model: "A6 45 TFSI",
    year: 2024,
    category: "Sedan",
    tagline: "Sophisticated intelligence.",
    description:
      "The Audi A6 is a study in purposeful elegance. Its virtual cockpit, quattro all-wheel drive and progressive steering create a driving experience that's as engaging as it is refined.",
    pricePerDay: 7800,
    pricePerWeek: 47000,
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 5,
    doors: 4,
    luggage: 3,
    horsepower: 245,
    topSpeed: 250,
    acceleration: "5.8s",
    features: [
      "MMI Navigation Plus",
      "Bang & Olufsen Sound",
      "quattro AWD",
      "Adaptive Air Suspension",
      "Matrix LED Headlights",
      "Virtual Cockpit Plus",
      "Pre Sense City",
      "4-Zone Climate Control",
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=1920&q=90",
      thumbnail: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1493238792000-8113da705763?w=1200&q=85",
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=85",
        "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200&q=85",
      ],
    },
    specs: {
      engine: "2.0L TFSI Inline-4",
      displacement: "1984cc",
      torque: "370 Nm",
      drive: "All-Wheel Drive",
    },
    available: true,
    featured: false,
  },
  {
    id: "toyota-fortuner",
    slug: "toyota-fortuner",
    name: "Toyota Fortuner",
    brand: "Toyota",
    model: "Fortuner 2.8 4x4",
    year: 2024,
    category: "SUV",
    tagline: "Built for every road.",
    description:
      "The Toyota Fortuner is the trusted workhorse of adventure travel. Robust ladder-frame construction, a torque-rich diesel and genuine 4x4 capability make it the go-to choice for both city driving and remote exploration.",
    pricePerDay: 4500,
    pricePerWeek: 27000,
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 7,
    doors: 5,
    luggage: 5,
    horsepower: 204,
    topSpeed: 190,
    acceleration: "9.1s",
    features: [
      "9-inch Touchscreen",
      "JBL Sound System",
      "4WD with Low Range",
      "Crawl Control",
      "Downhill Assist Control",
      "360° Camera",
      "Ventilated Front Seats",
      "Wireless Apple CarPlay",
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1920&q=90",
      thumbnail: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=85",
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=85",
        "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=85",
      ],
    },
    specs: {
      engine: "2.8L GD-6 Diesel",
      displacement: "2755cc",
      torque: "500 Nm",
      drive: "4-Wheel Drive",
    },
    available: true,
    featured: false,
  },
  {
    id: "honda-city",
    slug: "honda-city",
    name: "Honda City",
    brand: "Honda",
    model: "City ZX CVT",
    year: 2024,
    category: "Economy",
    tagline: "Smart, sharp, effortless.",
    description:
      "The Honda City ZX offers a premium commuting experience without excess. Its refined 1.5L engine, Honda Sensing safety suite and spacious, well-appointed cabin deliver genuine value.",
    pricePerDay: 2200,
    pricePerWeek: 13000,
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 5,
    doors: 4,
    luggage: 2,
    horsepower: 121,
    topSpeed: 195,
    acceleration: "10.8s",
    features: [
      "8-inch Touchscreen",
      "Honda Sensing",
      "Lane Keeping Assist",
      "Adaptive Cruise Control",
      "One-Touch Sunroof",
      "Wireless CarPlay",
      "Remote Engine Start",
      "Ambient Lighting",
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1920&q=90",
      thumbnail: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1200&q=85",
        "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200&q=85",
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=85",
      ],
    },
    specs: {
      engine: "1.5L DOHC i-VTEC",
      displacement: "1498cc",
      torque: "145 Nm",
      drive: "Front-Wheel Drive",
    },
    available: true,
    featured: false,
  },
  {
    id: "lamborghini-huracan",
    slug: "lamborghini-huracan",
    name: "Lamborghini Huracán",
    brand: "Lamborghini",
    model: "Huracán EVO",
    year: 2024,
    category: "Premium",
    tagline: "Unleash the extraordinary.",
    description:
      "The Lamborghini Huracán EVO is the definition of visceral performance. Its naturally aspirated V10, all-wheel drive and razor-sharp dynamics create an experience that cannot be replicated. Reserve in advance.",
    pricePerDay: 45000,
    pricePerWeek: 280000,
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 2,
    doors: 2,
    luggage: 1,
    horsepower: 640,
    topSpeed: 325,
    acceleration: "2.9s",
    features: [
      "8.4-inch HMI Touchscreen",
      "Lamborghini Infotainment System",
      "LDVI Vehicle Dynamics",
      "Magnetorheological Suspension",
      "Ceramic Brakes",
      "Carbon Fibre Interior",
      "Lifting System Front",
      "Sport Exhaust",
    ],
    images: {
      hero: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1920&q=90",
      thumbnail: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=85",
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=85",
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=85",
      ],
    },
    specs: {
      engine: "5.2L Naturally Aspirated V10",
      displacement: "5204cc",
      torque: "600 Nm",
      drive: "All-Wheel Drive",
    },
    available: true,
    featured: true,
  },
];

export const carCategories: CarCategory[] = [
  "Luxury",
  "Sedan",
  "SUV",
  "Sports",
  "Economy",
  "Premium",
];

export const featuredCars = cars.filter((c) => c.featured);

export const getCarBySlug = (slug: string): Car | undefined =>
  cars.find((c) => c.slug === slug);

export const getCarsByCategory = (category: CarCategory): Car[] =>
  cars.filter((c) => c.category === category);
