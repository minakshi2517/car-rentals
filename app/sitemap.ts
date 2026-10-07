import type { MetadataRoute } from "next";
import { cars } from "@/data/cars";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://veloce.rentals";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,               lastModified: new Date(), changeFrequency: "weekly",  priority: 1 },
    { url: `${base}/cars`,     lastModified: new Date(), changeFrequency: "daily",   priority: 0.9 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/locations`,lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/book`,     lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
  ];

  const carRoutes: MetadataRoute.Sitemap = cars.map((car) => ({
    url: `${base}/cars/${car.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...carRoutes];
}
