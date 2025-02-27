import React from "react";
import { render, screen } from "@testing-library/react";
import { Badge } from "@/components/atoms/Badge";
import "@testing-library/jest-dom";

// framer-motionのモックは既にjest.setup.jsで設定されています

describe("Badge", () => {
  it("デフォルトのバリアントとサイズで正しくレンダリングされる", () => {
    render(<Badge>テストバッジ</Badge>);

    const badge = screen.getByText("テストバッジ");
    expect(badge).toBeInTheDocument();
    expect(badge.tagName).toBe("SPAN");
    expect(badge).toHaveClass("bg-primary/20");
    expect(badge).toHaveClass("text-xs");
  });

  it("outlineバリアントで正しくレンダリングされる", () => {
    render(<Badge variant="outline">アウトラインバッジ</Badge>);

    const badge = screen.getByText("アウトラインバッジ");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-transparent");
    expect(badge).toHaveClass("border-border");
  });

  it("gradientバリアントで正しくレンダリングされる", () => {
    render(<Badge variant="gradient">グラデーションバッジ</Badge>);

    const badge = screen.getByText("グラデーションバッジ");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-gradient-to-r");
    expect(badge).toHaveClass("from-blue-700/20");
  });

  it("secondaryバリアントで正しくレンダリングされる", () => {
    render(<Badge variant="secondary">セカンダリバッジ</Badge>);

    const badge = screen.getByText("セカンダリバッジ");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-secondary");
    expect(badge).toHaveClass("text-secondary-foreground");
  });

  it("smサイズで正しくレンダリングされる", () => {
    render(<Badge size="sm">小さいバッジ</Badge>);

    const badge = screen.getByText("小さいバッジ");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("text-xs");
    expect(badge).toHaveClass("px-2");
  });

  it("lgサイズで正しくレンダリングされる", () => {
    render(<Badge size="lg">大きいバッジ</Badge>);

    const badge = screen.getByText("大きいバッジ");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("text-sm");
    expect(badge).toHaveClass("px-3");
  });

  it("アニメーション付きで正しくレンダリングされる", () => {
    render(<Badge animated>アニメーションバッジ</Badge>);

    // framer-motionはモック化されているため、motion.spanはdivとしてレンダリングされます
    const badge = screen.getByText("アニメーションバッジ");
    expect(badge).toBeInTheDocument();

    // アニメーションプロパティはモックされているため、
    // ここではコンポーネントが正しくレンダリングされることだけを確認します
  });

  it("カスタムクラス名が適用される", () => {
    render(<Badge className="custom-class">カスタムバッジ</Badge>);

    const badge = screen.getByText("カスタムバッジ");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("custom-class");
  });
});
