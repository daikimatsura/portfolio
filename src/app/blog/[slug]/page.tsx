import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/markdown";
import { Metadata } from "next";
import { BlogPostClient } from "./page.client";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const post = await getPostBySlug(resolvedParams.slug);

    return {
      title: post.title,
      keywords: post.topics,
      description: post.excerpt || `${post.title}の詳細記事です。`,
      ...(post.coverImage && {
        openGraph: {
          images: [post.coverImage],
        },
      }),
    };
  } catch (error) {
    return {
      title: "ブログ記事",
      description: "ブログ記事のページです。",
    };
  }
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  try {
    const resolvedParams = await params;
    const post = await getPostBySlug(resolvedParams.slug);

    // 非公開記事の場合は404ページにリダイレクト
    if (post.published === false) {
      notFound();
    }

    return <BlogPostClient post={post} />;
  } catch (error) {
    notFound();
  }
}
