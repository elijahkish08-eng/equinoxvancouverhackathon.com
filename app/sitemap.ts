import type { MetadataRoute } from "next"
import { getAllBlogPosts } from "@/lib/blog-data"

const BASE_URL = "https://equinoxvancouver.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllBlogPosts()

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blogposts/${post.slug}`,
    lastModified: new Date(post.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date("2026-02-21"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date("2026-02-21"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...blogEntries,
  ]
}
