import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";

// 必要なモック
jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

// 最小限のテスト実装
describe("Header", () => {
  beforeEach(() => {
    // window.matchMediaのモック
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it("renders without crashing", () => {
    // エラーをキャッチしつつレンダリングを試みる
    expect(() => {
      const { container } = render(<Header />);
      expect(container).toBeInTheDocument();
    }).not.toThrow();
  });

  it("グローバルナビゲーションアイテムが表示される", () => {
    render(<Header />);

    // グローバルナビゲーションアイテム
    const blogLink = screen.getByText("ブログ");
    expect(blogLink).toBeInTheDocument();

    // リンク先を確認
    const linkElement = blogLink.closest("a");
    expect(linkElement).toHaveAttribute("href", "/blog");
  });
});
