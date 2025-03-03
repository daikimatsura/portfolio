import React from "react";
import { render, screen } from "@testing-library/react";
import IntroductionThisSite from "./IntroductionThisSite";
import "@testing-library/jest-dom";

// framer-motionのモックは既にjest.setup.jsで設定されています
// next/linkのモックも既にjest.setup.jsで設定されています

describe("IntroductionThisSite", () => {
  it("セクションタイトルが正しく表示される", () => {
    render(<IntroductionThisSite />);

    expect(screen.getByText("このサイトについて")).toBeInTheDocument();
  });

  it("サブタイトルが表示される", () => {
    render(<IntroductionThisSite />);

    expect(
      screen.getByText(
        /このポートフォリオサイトは、私のスキルと経験を紹介するために作成しました。/
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /モダンなWeb技術を活用し、パフォーマンスとユーザー体験を重視した設計になっています。/
      )
    ).toBeInTheDocument();
  });

  it("テクノロジーカードが表示される", () => {
    render(<IntroductionThisSite />);

    // 各テクノロジーのタイトルが表示されていることを確認
    expect(screen.getByText("Next.js & React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Tailwind CSS & Shadcn UI")).toBeInTheDocument();
    expect(screen.getByText("アトミックデザイン")).toBeInTheDocument();
  });

  it("テクノロジーの説明が表示される", () => {
    render(<IntroductionThisSite />);

    // 各テクノロジーの説明が表示されていることを確認
    expect(
      screen.getByText(
        /モダンなUIとシームレスなユーザー体験を実現するフレームワーク/
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/型安全性を確保し、開発効率と保守性を向上/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/美しく一貫性のあるデザインシステムを構築/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/再利用可能で保守性の高いコンポーネント設計/)
    ).toBeInTheDocument();
  });

  it("GitHubリンクが表示される", () => {
    render(<IntroductionThisSite />);

    const githubLink = screen.getByText(/GitHubでコードを見る/).closest("a");
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/daikimatsura/portfolio"
    );
    expect(githubLink).toHaveAttribute("target", "_blank");
  });

  it("実装詳細セクションが表示される", () => {
    render(<IntroductionThisSite />);

    // 実装詳細セクションのタイトルが表示されていることを確認
    expect(screen.getByText("実装詳細")).toBeInTheDocument();

    // 各実装詳細が表示されていることを確認
    expect(screen.getByText("App Router")).toBeInTheDocument();
    expect(screen.getByText("サーバーコンポーネント")).toBeInTheDocument();
    expect(screen.getAllByText("レスポンシブデザイン")[0]).toBeInTheDocument();
    expect(screen.getByText("アニメーション")).toBeInTheDocument();
    expect(screen.getByText("アクセシビリティ")).toBeInTheDocument();
  });

  it("背景エフェクト要素が存在する", () => {
    render(<IntroductionThisSite />);

    // 背景グラデーションの要素をチェック
    const gradientBg = document.querySelector(".bg-gradient-to-b");
    expect(gradientBg).toBeInTheDocument();
  });
});
