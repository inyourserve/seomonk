import { Calendar, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { markdownToHtml } from "@/lib/markdown";
import { Breadcrumb } from "@/components/breadcrumb";
import { BlogContent } from "@/components/blog/blog-content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - SEOMonk Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const content = await markdownToHtml(post.content);

  return (
    <div>

      {/* Content */}
      <article className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Breadcrumb items={[
            { label: "Blog", href: "/blog" },
            { label: post.title }
          ]} />

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-black/60 mb-6 flex-wrap">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>
            <p className="text-xl text-black/60 leading-relaxed mb-8">
              {post.excerpt}
            </p>
          </header>

          {post.featuredImage && (
            <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden bg-black/5">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <BlogContent content={content} />
        </div>
      </article>
    </div>
  );
}

