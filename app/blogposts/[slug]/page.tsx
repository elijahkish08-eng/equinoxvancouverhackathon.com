import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog-data"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, Calendar, User } from "lucide-react"

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: `${post.title} | Equinox Vancouver Hackathon`,
    description: post.description,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main>
      <Navbar />
      <article className="px-4 pt-32 pb-24">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            href="/blogs"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all posts
          </Link>

          {/* Hero image */}
          <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <Image
              src={post.heroImage}
              alt={post.heroImageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Meta */}
          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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

          {/* Title */}
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            {post.title}
          </h1>

          {/* Description */}
          <p className="mb-10 border-l-4 border-primary/30 pl-4 text-lg leading-relaxed text-muted-foreground italic">
            {post.description}
          </p>

          {/* Content */}
          <div className="prose-equinox">
            {post.content.map((section, i) => {
              switch (section.type) {
                case "heading":
                  return (
                    <h2
                      key={i}
                      className="mb-4 mt-10 text-2xl font-bold tracking-tight text-foreground md:text-3xl"
                    >
                      {section.text}
                    </h2>
                  )
                case "subheading":
                  return (
                    <h3
                      key={i}
                      className="mb-3 mt-8 text-xl font-semibold text-foreground"
                    >
                      {section.text}
                    </h3>
                  )
                case "paragraph":
                  return (
                    <p
                      key={i}
                      className="mb-5 text-base leading-relaxed text-foreground/80"
                    >
                      {section.text}
                    </p>
                  )
                case "list":
                  return (
                    <ul
                      key={i}
                      className="mb-5 flex flex-col gap-2 pl-6"
                    >
                      {section.items?.map((item, j) => (
                        <li
                          key={j}
                          className="list-disc text-base leading-relaxed text-foreground/80 marker:text-primary"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )
                default:
                  return null
              }
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl border border-border bg-secondary p-8 text-center">
            <h3 className="mb-3 text-xl font-bold text-foreground">
              Ready to join the hackathon?
            </h3>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              Sign up for Equinox Vancouver Hackathon 2026 and put your ideas into action.
            </p>
            <a
              href="https://tally.so/r/xXpzlk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Sign Up Now
            </a>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
