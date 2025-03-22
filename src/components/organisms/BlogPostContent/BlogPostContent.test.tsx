import React from "react";
import { render, screen } from "@testing-library/react";
import BlogPostContent from "./BlogPostContent";
import { MarkdownPost } from "@/types/markdown";

// TableOfContentsコンポーネントのモック
jest.mock("@/components/molecules/TableOfContents", () => ({
  TableOfContents: jest
    .fn()
    .mockImplementation(() => (
      <div data-testid="table-of-contents">Table of Contents Mock</div>
    )),
}));

// next/linkのモック
jest.mock(
  "next/link",
  () =>
    function Link({
      children,
      href,
    }: {
      children: React.ReactNode;
      href: string;
    }) {
      return <a href={href}>{children}</a>;
    }
);

// next/imageのモック
jest.mock("next/image", () => ({
  __esModule: true,
  default: function Image({
    src,
    alt,
    className,
  }: {
    src: string;
    alt: string;
    className?: string;
    fill?: boolean;
    priority?: boolean;
  }) {
    return <img src={src} alt={alt} className={className} />;
  },
}));

// lucide-reactのモック
jest.mock("lucide-react", () => ({
  ArrowLeft: () => <span>←</span>,
}));

describe("BlogPostContent", () => {
  const mockPost: MarkdownPost = {
    slug: "test-post",
    title: "テスト記事",
    published_at: "2023-05-01",
    content: "<p>テスト内容</p>",
    excerpt: "テスト記事の説明",
    topics: ["テスト", "ブログ"],
    emoji: "📝",
  };

  const mockContentRef = { current: document.createElement("div") };

  it("renders the blog post title", () => {
    render(<BlogPostContent post={mockPost} contentRef={mockContentRef} />);
    expect(screen.getByText("テスト記事")).toBeInTheDocument();
  });

  it("renders the published date", () => {
    render(<BlogPostContent post={mockPost} contentRef={mockContentRef} />);
    expect(screen.getByText("2023-05-01")).toBeInTheDocument();
  });

  it("renders the emoji", () => {
    render(<BlogPostContent post={mockPost} contentRef={mockContentRef} />);
    expect(screen.getByText("📝")).toBeInTheDocument();
  });

  it("renders the topics", () => {
    render(<BlogPostContent post={mockPost} contentRef={mockContentRef} />);
    expect(screen.getByText("テスト")).toBeInTheDocument();
    expect(screen.getByText("ブログ")).toBeInTheDocument();
  });

  it("renders the back to blog link", () => {
    render(<BlogPostContent post={mockPost} contentRef={mockContentRef} />);
    expect(screen.getByText("ブログ一覧に戻る")).toBeInTheDocument();
  });

  it("renders the table of contents", () => {
    render(<BlogPostContent post={mockPost} contentRef={mockContentRef} />);
    // モックされたTableOfContentsが表示されていることを確認
    expect(screen.getAllByTestId("table-of-contents")).toHaveLength(2); // デスクトップとモバイル用の2つ
  });
});
