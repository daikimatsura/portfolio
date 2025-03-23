"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Blog {
  id: number;
  title: string;
  tags: string[];
  link: string;
  image?: string;
}

interface MarkdownPostMeta {
  slug: string;
  title: string;
  coverImage?: string;
  emoji?: string;
  topics?: string[];
  excerpt?: string;
  published_at: string;
}

interface BlogCardProps {
  blog: Blog;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <Link href={blog.link} target="_blank" className="block h-full">
      <div className="group relative h-full bg-gradient-to-br from-card to-card/90 rounded-xl overflow-hidden border border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 dark:from-blue-500/5 dark:to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="flex flex-col h-full">
          {/* 画像部分 */}
          <div className="aspect-video bg-muted relative overflow-hidden">
            {blog.image ? (
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 dark:from-blue-800/20 dark:to-purple-800/20 flex items-center justify-center">
                <span className="text-4xl">📝</span>
              </div>
            )}

            {/* オーバーレイグラデーション */}
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />

            {/* タグ */}
            {blog.tags.length > 0 && (
              <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="bg-blue-100 backdrop-blur-sm text-blue-800 dark:bg-blue-600/20 dark:text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-300 dark:border-blue-600/30"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            )}
          </div>

          {/* コンテンツ部分 */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-lg font-bold mb-3 line-clamp-2 text-foreground group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
              {blog.title}
            </h3>

            <div className="mt-auto pt-4">
              <span className="inline-flex items-center text-sm text-blue-700 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                <span>記事を読む</span>
                <ExternalLink className="ml-1 h-3 w-3" />
              </span>
            </div>
          </div>
        </div>

        {/* ホバーエフェクト用の装飾 */}
        <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-600/30 rounded-xl transition-all duration-300" />
      </div>
    </Link>
  );
};

export const NewBlogCard = ({
  post,
  isOutLink = false,
  link = "",
}: {
  post: MarkdownPostMeta;
  isOutLink?: boolean;
  link?: string;
}) => {
  return (
    <Link
      href={isOutLink ? link : `/blog/${post.slug}`}
      target="_blank"
      className="block h-full"
    >
      <div className="group relative h-full bg-gradient-to-br from-card to-card/90 rounded-xl overflow-hidden border border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 dark:from-blue-500/5 dark:to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="flex flex-col h-full">
          {/* 画像部分 */}
          <div className="aspect-video bg-muted relative overflow-hidden">
            {post.coverImage ? (
              <Image
                src={post.coverImage}
                alt={post.title}
                width={500}
                height={300}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            ) : post.emoji ? (
              <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 dark:from-blue-800/20 dark:to-purple-800/20 flex items-center justify-center">
                <span className="text-6xl transition-transform duration-500 group-hover:scale-110">
                  {post.emoji}
                </span>
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 dark:from-blue-800/20 dark:to-purple-800/20 flex items-center justify-center">
                <span className="text-6xl transition-transform duration-500 group-hover:scale-110">
                  📝
                </span>
              </div>
            )}

            {/* オーバーレイグラデーション */}
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />

            {/* トピック（タグと同等） */}
            {post.topics && post.topics.length > 0 && (
              <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                {post.topics.map((topic, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="bg-blue-100 backdrop-blur-sm text-blue-800 dark:bg-blue-600/20 dark:text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-300 dark:border-blue-600/30"
                  >
                    {topic}
                  </motion.span>
                ))}
              </div>
            )}
          </div>

          {/* コンテンツ部分 */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-lg font-bold mb-3 line-clamp-2 text-foreground group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
              {post.title}
            </h3>

            {post.excerpt && (
              <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
            )}

            <div className="mt-auto pt-4 flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                {post.published_at}
              </span>
              <span className="inline-flex items-center text-sm text-blue-700 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                <span>記事を読む</span>
                <svg
                  className="ml-1 h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* ホバーエフェクト用の装飾 */}
        <div className="absolute inset-0 border border-blue-500/0 group-hover:border-blue-600/30 rounded-xl transition-all duration-300" />
      </div>
    </Link>
  );
};
