import React from "react";
import { render, screen } from "@testing-library/react";
import GradientBlurDecoration from "./GradientBlurDecoration";
import "@testing-library/jest-dom";

// framer-motionのモックは既にjest.setup.jsで設定されています

describe("GradientBlurDecoration", () => {
  it("デフォルトでアニメーションが有効", () => {
    render(<GradientBlurDecoration />);

    // コンポーネントが正しくレンダリングされることを確認
    const decorationElement = document.querySelector(
      ".absolute.inset-0.overflow-hidden"
    );
    expect(decorationElement).toBeInTheDocument();
  });

  it("アニメーションを無効にできる", () => {
    render(<GradientBlurDecoration animate={false} />);

    // 静的な装飾要素が存在することを確認
    const staticDecoration = document.querySelector(
      ".absolute.inset-0.overflow-hidden"
    );
    expect(staticDecoration).toBeInTheDocument();
  });

  it("カスタムクラス名が適用される", () => {
    render(<GradientBlurDecoration className="custom-test-class" />);

    const decorationElement = document.querySelector(
      ".absolute.inset-0.overflow-hidden"
    );
    expect(decorationElement).toHaveClass("custom-test-class");
  });

  it("コンテナとして使用できる", () => {
    render(
      <GradientBlurDecoration asContainer>
        <div>テストコンテンツ</div>
      </GradientBlurDecoration>
    );

    expect(screen.getByText("テストコンテンツ")).toBeInTheDocument();

    // コンテナ要素が存在することを確認
    const containerElement = document.querySelector(
      ".relative.overflow-hidden"
    );
    expect(containerElement).toBeInTheDocument();

    // コンテンツが相対的な位置とz-indexを持つことを確認
    const contentContainer = screen
      .getByText("テストコンテンツ")
      .closest("div");
    // 親要素（.relative.z-10）のクラスをチェック
    expect(contentContainer?.parentElement).toHaveClass("relative");
    expect(contentContainer?.parentElement).toHaveClass("z-10");
  });

  it("背景グラデーションを適用できる", () => {
    render(
      <GradientBlurDecoration asContainer withBackground>
        <div>背景あり</div>
      </GradientBlurDecoration>
    );

    expect(screen.getByText("背景あり")).toBeInTheDocument();

    // 背景グラデーション要素が存在することを確認
    const backgroundElement = document.querySelector(
      ".absolute.inset-0.bg-gradient-to-b"
    );
    expect(backgroundElement).toBeInTheDocument();
  });

  it("背景グラデーションなしでコンテナとして使用できる", () => {
    render(
      <GradientBlurDecoration asContainer withBackground={false}>
        <div>背景なし</div>
      </GradientBlurDecoration>
    );

    expect(screen.getByText("背景なし")).toBeInTheDocument();

    // 背景グラデーション要素が存在しないことを確認
    const backgroundElement = document.querySelector(
      ".absolute.inset-0.bg-gradient-to-b"
    );
    expect(backgroundElement).not.toBeInTheDocument();
  });
});
