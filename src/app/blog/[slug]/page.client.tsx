"use client";

import { useRef } from "react";
import { BlogPostContent } from "@/components/organisms/BlogPostContent";

interface BlogPostClientProps {
  post: MarkdownPost;
}

export function BlogPostClient({ post }: BlogPostClientProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return <BlogPostContent post={post} contentRef={contentRef} />;
}
