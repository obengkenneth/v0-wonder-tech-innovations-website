import type { MetadataRoute } from "next"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://wondertechinnovations.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "", priority: 1, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/portfolio", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  ]

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: url ? `${baseUrl}${url}` : baseUrl,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
