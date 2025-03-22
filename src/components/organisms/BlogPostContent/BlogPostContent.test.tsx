import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BlogPostContent } from "./BlogPostContent";
import { MarkdownPost } from "@/types/markdown";
import { createRef } from "react";

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
    fill,
    priority,
  }: {
    src: string;
    alt: string;
    className?: string;
    fill?: boolean;
    priority?: boolean;
  }) {
    // img要素の代わりにdiv要素を使用して画像をモックする
    return (
      <div
        data-testid="next-image"
        data-src={src}
        data-alt={alt}
        className={className}
        data-fill={fill ? "true" : "false"}
        data-priority={priority ? "true" : "false"}
        aria-label={alt}
      />
    );
  },
}));

// cnユーティリティのモック
jest.mock("@/lib/utils", () => ({
  cn: (...classes: string[]) => classes.filter(Boolean).join(" "),
}));

// lucide-reactのモック
jest.mock("lucide-react", () => ({
  ArrowLeft: () => <span data-testid="arrow-left-icon">←</span>,
  List: () => <span data-testid="list-icon">≡</span>,
  X: () => <span data-testid="x-icon">×</span>,
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

  const contentRef = createRef<HTMLDivElement>();

  it("renders the blog post title", () => {
    render(<BlogPostContent post={mockPost} contentRef={contentRef} />);
    expect(screen.getByText("テスト記事")).toBeInTheDocument();
  });

  it("renders the published date", () => {
    render(<BlogPostContent post={mockPost} contentRef={contentRef} />);
    expect(screen.getByText("2023-05-01")).toBeInTheDocument();
  });

  it("renders the emoji", () => {
    render(<BlogPostContent post={mockPost} contentRef={contentRef} />);
    expect(screen.getByText("📝")).toBeInTheDocument();
  });

  it("renders the topics", () => {
    render(<BlogPostContent post={mockPost} contentRef={contentRef} />);
    expect(screen.getByText("テスト")).toBeInTheDocument();
    expect(screen.getByText("ブログ")).toBeInTheDocument();
  });

  it("renders the back to blog link", () => {
    render(<BlogPostContent post={mockPost} contentRef={contentRef} />);
    // 複数あるリンクのうち、最初のものを取得
    expect(screen.getAllByText("ブログ一覧に戻る")[0]).toBeInTheDocument();
  });

  it("renders the table of contents", () => {
    render(<BlogPostContent post={mockPost} contentRef={contentRef} />);
    // モックされたTableOfContentsが表示されていることを確認
    expect(screen.getAllByTestId("table-of-contents")).toHaveLength(2); // デスクトップとモバイル用の2つ
  });

  it("デスクトップ表示で目次とブログ一覧リンクがサイドバーに表示される", () => {
    // window.innerWidthをデスクトップサイズに設定
    global.innerWidth = 1200;
    global.dispatchEvent(new Event("resize"));

    render(<BlogPostContent post={mockPost} contentRef={contentRef} />);

    // サイドバーに表示される要素を確認（hidden lg:blockクラスを持つ最も近い親要素を検索）
    const desktopSidebar = document.querySelector(".hidden.lg\\:block");
    expect(desktopSidebar).toBeInTheDocument();

    // サイドバー内のブログ一覧リンクを確認
    const backLinkInSidebar = desktopSidebar?.querySelector("a");
    expect(backLinkInSidebar).toBeInTheDocument();
    expect(backLinkInSidebar?.textContent).toContain("ブログ一覧に戻る");
  });

  it("モバイル表示で固定ヘッダーとトグル可能な目次が表示される", () => {
    // window.innerWidthをモバイルサイズに設定
    global.innerWidth = 600;
    global.dispatchEvent(new Event("resize"));

    render(<BlogPostContent post={mockPost} contentRef={contentRef} />);

    // 固定ヘッダーの存在を確認
    const mobileHeader = document.querySelector(".lg\\:hidden.fixed");
    expect(mobileHeader).toBeInTheDocument();

    // ブログ一覧リンクが固定ヘッダーに表示されていることを確認
    const backLinkInHeader = mobileHeader?.querySelector("a");
    expect(backLinkInHeader).toBeInTheDocument();
    expect(backLinkInHeader?.textContent).toContain("ブログ一覧に戻る");

    // 初期状態では目次が閉じられていることを確認
    const tocButton = mobileHeader?.querySelector("button");
    expect(tocButton).toBeInTheDocument();
    expect(tocButton?.textContent).toContain("目次");

    // 目次ボタンをクリックして目次を開く
    if (tocButton) {
      fireEvent.click(tocButton);
    }

    // ボタンテキストが「閉じる」に変わることを確認
    expect(screen.getByText("閉じる")).toBeInTheDocument();

    // 目次パネルが表示されることを確認（opacity-100クラスで判断）
    const tocPanel = document.querySelector(".fixed.top-\\[53px\\]");
    expect(tocPanel).toHaveClass("opacity-100");

    // 再度クリックして目次を閉じる
    const closeButton = mobileHeader?.querySelector("button");
    if (closeButton) {
      fireEvent.click(closeButton);
    }

    // ボタンテキストが「目次」に戻ることを確認
    const updatedTocButton = mobileHeader?.querySelector("button");
    expect(updatedTocButton?.textContent).toContain("目次");
  });

  it("記事のコンテンツが正しく表示される", () => {
    render(<BlogPostContent post={mockPost} contentRef={contentRef} />);

    // 記事タイトルが表示されていることを確認
    expect(screen.getByText("テスト記事")).toBeInTheDocument();

    // 公開日が表示されていることを確認
    expect(screen.getByText("2023-05-01")).toBeInTheDocument();

    // トピックが表示されていることを確認
    expect(screen.getByText("テスト")).toBeInTheDocument();
    expect(screen.getByText("ブログ")).toBeInTheDocument();

    // 記事の内容（HTML）が挿入されていることを確認
    const articleContent = document.querySelector(".prose");
    expect(articleContent).toBeInTheDocument();
    expect(articleContent?.innerHTML).toContain("<p>テスト内容</p>");
  });
});
