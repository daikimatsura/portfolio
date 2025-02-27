import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "@/components/molecules/Contact";

// framer-motionのモックは既にjest.setup.jsで設定されています

describe("Contact", () => {
  it("お問い合わせセクションが表示される", () => {
    render(<Contact />);

    // セクションタイトルが表示されていることを確認
    expect(screen.getByText("お問い合わせ")).toBeInTheDocument();

    // 説明文が表示されていることを確認
    expect(
      screen.getByText("現在、お問い合わせフォームを準備中です。")
    ).toBeInTheDocument();
  });

  it("準備中のステータスが表示される", () => {
    render(<Contact />);

    // 準備中のメッセージが表示されていることを確認
    expect(screen.getByText("お問い合わせフォーム準備中")).toBeInTheDocument();
  });

  it("Coming Soonボタンが表示され、無効化されている", () => {
    render(<Contact />);

    // Coming Soonボタンが表示されていることを確認
    const comingSoonButton = screen.getByText("Coming Soon");
    expect(comingSoonButton).toBeInTheDocument();

    // ボタンが無効化されていることを確認
    const button = comingSoonButton.closest("button");
    expect(button).toBeDisabled();
  });

  it("背景のグラデーションエフェクトが表示される", () => {
    render(<Contact />);

    // 背景のグラデーションエフェクト要素が存在することを確認
    const gradientElement = document.querySelector(
      ".absolute.inset-0.bg-gradient-to-b"
    );
    expect(gradientElement).toBeInTheDocument();
  });
});
