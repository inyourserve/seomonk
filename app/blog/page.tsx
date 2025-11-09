import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import { Breadcrumb } from "@/components/breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - SEOMonk",
  description: "SEO tips, tutorials, and insights about schema markup and technical SEO.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>

      {/* Content */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <Breadcrumb items={[{ label: "Blog" }]} />

          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Blog
            </h1>
            <p className="text-xl text-black/60 max-w-3xl">
              SEO tips, tutorials, and insights about schema markup and technical SEO.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-black/60 mb-4">No blog posts yet.</p>
              <p className="text-sm text-black/50">Check back soon for new content!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <Card className="border-black/10 hover:shadow-lg hover:border-primary/20 transition-all bg-white h-full flex flex-col overflow-hidden">
                    {post.featuredImage ? (
                      <div className="relative w-full h-48 bg-black/5 overflow-hidden">
                        <Image
                          src={post.featuredImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                        <div className="text-center p-4">
                          <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="text-2xl font-bold text-primary">S</span>
                          </div>
                        </div>
                      </div>
                    )}
                    <CardHeader className="flex-1 flex flex-col">
                      <CardTitle className="text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3 mb-4 flex-1">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-sm text-black/50 mt-auto pt-4 border-t border-black/10">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

