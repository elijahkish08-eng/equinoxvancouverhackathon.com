import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { getAllBlogPosts } from "@/lib/blog-data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Calendar, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Hackathon Blog — Tips, Project Ideas & Vancouver Youth Tech",
  description:
    "Read articles about hackathon project ideas for high school students, teen coding tips, and the Vancouver youth tech scene. Resources from Equinox Vancouver Hackathon 2026.",
  alternates: {
    canonical: "/blogs",
  },
}

export default function BlogsPage() {
  const posts = getAllBlogPosts()

  return (
    <main>
      <Navbar />
      <section className="px-4 pt-32 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Blog
            </span>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Latest from Equinox
            </h1>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Tips, ideas, and stories from the Vancouver youth hackathon community.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogposts/${post.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg hover:border-primary/30"
              >
                <div className="relative aspect-[21/9] w-full overflow-hidden">
                  <Image
                    src={post.heroImage}
                    alt={post.heroImageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.datePublished).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="mb-3 text-xl font-bold text-foreground md:text-2xl text-balance group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="mb-4 text-muted-foreground leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
