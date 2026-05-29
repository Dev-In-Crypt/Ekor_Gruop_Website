import type { MetadataRoute } from "next";
import { categories, services } from "@/lib/services";
import { solutions } from "@/lib/solutions";
import { cases } from "@/lib/cases";
import { site } from "@/lib/site";

const BASE = "https://ekorgroup.com.ua";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/poslugy", priority: 0.9, freq: "monthly" },
    { path: "/rishennya", priority: 0.9, freq: "monthly" },
    { path: "/regiony", priority: 0.8, freq: "monthly" },
    { path: "/kejsy", priority: 0.7, freq: "monthly" },
    { path: "/ciny", priority: 0.7, freq: "monthly" },
    { path: "/vidguky", priority: 0.5, freq: "monthly" },
    { path: "/pro-kompaniyu", priority: 0.7, freq: "monthly" },
    { path: "/kontakty", priority: 0.8, freq: "yearly" },
    { path: "/sitemap", priority: 0.3, freq: "monthly" },
    { path: "/polityka", priority: 0.2, freq: "yearly" },
    { path: "/umovy", priority: 0.2, freq: "yearly" },
  ];

  const entries: MetadataRoute.Sitemap = staticPages.map((s) => ({
    url: BASE + s.path,
    lastModified: now,
    changeFrequency: s.freq,
    priority: s.priority,
  }));

  // Категорії послуг (Lv2)
  for (const cat of categories) {
    entries.push({
      url: `${BASE}/poslugy/${cat.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // Послуги (Lv3)
  for (const svc of services) {
    const cat = categories.find((c) => c.key === svc.category);
    if (!cat) continue;
    entries.push({
      url: `${BASE}/poslugy/${cat.slug}/${svc.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // Рішення (Lv2)
  for (const sol of solutions) {
    if (!sol.hasPage) continue;
    entries.push({
      url: `${BASE}/rishennya/${sol.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // Регіони (Lv2)
  for (const r of site.regions) {
    entries.push({
      url: `${BASE}/regiony/${r.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // Кейси (Lv2)
  for (const c of cases) {
    entries.push({
      url: `${BASE}/kejsy/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return entries;
}
