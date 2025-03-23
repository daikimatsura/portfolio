import Link from "next/link";
import Image from "next/image";
import { getAllPostsMeta } from "@/lib/markdown";
import { Metadata } from "next";
import { blogs } from "@/constants/blogs";
import { BlogCard, NewBlogCard } from "@/components/molecules/BlogCard";

export const metadata: Metadata = {
  title: "ブログ記事一覧",
  description: "技術的な知見や経験を共有するブログ記事の一覧です。",
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 inline-block relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 dark:from-blue-400 dark:to-purple-400">
            ブログ記事一覧
          </span>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-800 to-purple-800 dark:from-blue-400 dark:to-purple-400 rounded-full" />
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          技術的な知見や経験を共有するために執筆した記事です。
        </p>
      </div>
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold mb-4 inline-block relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 dark:from-blue-400 dark:to-purple-400">
            サイト内の記事を読む
          </span>
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {posts.length > 0 &&
          posts.map((post) => <NewBlogCard key={post.slug} post={post} />)}
      </div>
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold mb-4 inline-block relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 dark:from-blue-400 dark:to-purple-400">
            所属企業で執筆した記事を読む
          </span>
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          注：外部リンクへ飛びます
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
}
