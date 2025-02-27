"use client";

import { Button } from "@/components/atoms/Button";
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

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
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

export default BlogCard;
