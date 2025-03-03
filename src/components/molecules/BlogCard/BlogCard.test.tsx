import React from "react";
import { render, screen } from "@testing-library/react";
import { BlogCard } from "./BlogCard";
import "@testing-library/jest-dom";

describe("BlogCard", () => {
  const mockBlog = {
    id: 1,
    title: "テストブログ記事",
    tags: ["React", "TypeScript"],
    link: "https://example.com/blog/1",
    image: "/images/test-blog.jpg",
  };

  it("ブログカードが正しくレンダリングされる", () => {
    render(<BlogCard blog={mockBlog} />);

    // タイトルが表示されていることを確認
    expect(screen.getByText("テストブログ記事")).toBeInTheDocument();

    // タグが表示されていることを確認
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();

    // リンクが正しく設定されていることを確認
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://example.com/blog/1");
    expect(link).toHaveAttribute("target", "_blank");

    // 「記事を読む」テキストが表示されていることを確認
    expect(screen.getByText("記事を読む")).toBeInTheDocument();

    // 画像が表示されていることを確認
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "/images/test-blog.jpg");
    expect(image).toHaveAttribute("alt", "テストブログ記事");
  });

  it("画像がない場合はプレースホルダーが表示される", () => {
    const blogWithoutImage = {
      ...mockBlog,
      image: undefined,
    };

    render(<BlogCard blog={blogWithoutImage} />);

    // タイトルが表示されていることを確認
    expect(screen.getByText("テストブログ記事")).toBeInTheDocument();

    // 画像の代わりにプレースホルダーが表示されていることを確認
    expect(screen.getByText("📝")).toBeInTheDocument();

    // 画像要素がないことを確認
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("タグがない場合もカードが正しく表示される", () => {
    const blogWithoutTags = {
      ...mockBlog,
      tags: [],
    };

    render(<BlogCard blog={blogWithoutTags} />);

    // タイトルが表示されていることを確認
    expect(screen.getByText("テストブログ記事")).toBeInTheDocument();

    // タグが表示されていないことを確認
    expect(screen.queryByText("React")).not.toBeInTheDocument();
    expect(screen.queryByText("TypeScript")).not.toBeInTheDocument();
  });

  it("長いタイトルが適切に切り詰められる", () => {
    const blogWithLongTitle = {
      ...mockBlog,
      title:
        "これは非常に長いブログ記事のタイトルです。このタイトルは複数行にわたって表示されるべきです。そして適切に切り詰められるべきです。",
    };

    render(<BlogCard blog={blogWithLongTitle} />);

    // タイトル要素が存在することを確認
    const titleElement =
      screen.getByText(/これは非常に長いブログ記事のタイトルです/);
    expect(titleElement).toBeInTheDocument();

    // line-clamp-2クラスが適用されていることを確認
    expect(titleElement).toHaveClass("line-clamp-2");
  });
});
