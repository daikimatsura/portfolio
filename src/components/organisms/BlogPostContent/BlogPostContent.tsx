"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, List, X } from "lucide-react";
import { TableOfContents } from "@/components/molecules/TableOfContents";
import { MarkdownPost } from "@/types/markdown";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface BlogPostContentProps {
  post: MarkdownPost;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

export const BlogPostContent = ({ post, contentRef }: BlogPostContentProps) => {
  const [isTocOpen, setIsTocOpen] = useState(false);

  return (
    <div className="container max-w-screen-xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        {/* サイドバー（目次とブログ一覧に戻るボタンを含む）- デスクトップのみ表示 */}
        <div className="hidden lg:block lg:w-64 xl:w-72 flex-shrink-0 ">
          <div className="sticky top-24 space-y-6">
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
            <div>
              <h2 className="text-xl font-bold mb-4">目次</h2>
              <TableOfContents contentRef={contentRef} />
            </div>
          </div>
        </div>

        {/* モバイルのヘッダー - スクロールしても固定表示 */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b px-4 py-3">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              ブログ一覧に戻る
            </Link>

            <button
              onClick={() => setIsTocOpen(!isTocOpen)}
              className="flex items-center space-x-2 bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1.5 rounded-lg transition-colors"
            >
              {isTocOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <List className="w-4 h-4" />
              )}
              <span className="text-sm">{isTocOpen ? "閉じる" : "目次"}</span>
            </button>
          </div>
        </div>

        {/* モバイル向け目次（クリックで表示・非表示） - 固定ヘッダーの下に表示 */}
        <div
          className={cn(
            "lg:hidden fixed top-[53px] left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b",
            "transition-all duration-300 ease-in-out",
            isTocOpen
              ? "opacity-100 max-h-[70vh] overflow-y-auto"
              : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
          )}
        >
          <div className="max-w-screen-xl mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">目次</h2>
            <TableOfContents
              contentRef={contentRef}
              setIsTocOpen={setIsTocOpen}
            />
          </div>
        </div>

        {/* モバイル用のパディング - 固定ヘッダーの高さ分を確保 */}
        <div className="lg:hidden h-[53px] mb-4"></div>

        {/* メインコンテンツ - 中央に配置 */}
        <article className="flex-1 max-w-3xl">
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
