"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { TableOfContents } from "@/components/molecules/TableOfContents";
import { MarkdownPost } from "@/types/markdown";

interface BlogPostContentProps {
  post: MarkdownPost;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

export const BlogPostContent = ({ post, contentRef }: BlogPostContentProps) => {
  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        {/* サイドバー（目次とブログ一覧に戻るボタンを含む）- 常に表示 */}
        <div className="lg:w-64 xl:w-72 flex-shrink-0">
          <div className="lg:sticky lg:top-24 space-y-6">
            {/* ブログ一覧に戻るリンク */}
            <div>
              <Link
                href="/blog"
                className="inline-flex items-center text-primary hover:underline"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                ブログ一覧に戻る
              </Link>
            </div>

            {/* デスクトップの目次 - 左側固定 */}
            <div className="hidden lg:block">
              <h2 className="text-xl font-bold mb-4">目次</h2>
              <TableOfContents contentRef={contentRef} />
            </div>
          </div>
        </div>

        {/* メインコンテンツ - 中央に配置 */}
        <article className="flex-1 max-w-3xl">
          {/* スマートフォン用の目次（ページの上部に表示） */}
          <div className="lg:hidden mb-8">
            <h2 className="text-xl font-bold mb-4">目次</h2>
            <TableOfContents contentRef={contentRef} />
          </div>

          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {post.title}
            </h1>

            <div className="flex items-center mb-6">
              <time className="text-muted-foreground">{post.published_at}</time>
            </div>

            {post.coverImage ? (
              <div className="mb-8 aspect-video w-full relative rounded-lg overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ) : post.emoji ? (
              <div className="mb-8 flex justify-center items-center py-12 bg-muted/20 rounded-lg">
                <span className="text-9xl">{post.emoji}</span>
              </div>
            ) : null}

            {post.topics && post.topics.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.topics.map((topic, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div
            ref={contentRef}
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
};

export default BlogPostContent;
