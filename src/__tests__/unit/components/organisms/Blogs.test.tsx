import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Blogs from "@/components/organisms/Blogs";

// framer-motionのモックは既にjest.setup.jsで設定されています
// react-intersection-observerのモックも既にjest.setup.jsで設定されています
// next/imageのモックも既にjest.setup.jsで設定されています
// next/linkのモックも既にjest.setup.jsで設定されています
// lucide-reactのモックも既にjest.setup.jsで設定されています

describe("Blogs", () => {
  it("セクションタイトルが正しく表示される", () => {
    render(<Blogs />);

    expect(screen.getByText("技術ブログ")).toBeInTheDocument();
  });

  it("サブタイトルが正しく表示される", () => {
    render(<Blogs />);

    expect(
      screen.getByText(
        (content, element) =>
          content.includes(
            "技術的な知見や経験を共有するために執筆したブログ記事です"
          ) &&
          content.includes(
            "主にフロントエンド開発やAWSサービスに関する内容を発信しています"
          )
      )
    ).toBeInTheDocument();
  });

  it("ブログカードが表示される", () => {
    render(<Blogs />);

    expect(
      screen.getByText(
        "Next.jsでAmazon Connectの標準CCPを埋め込み動的データを取得する方法"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "AWS Bedrockを活用したAI生成テキスト評価と再生成の実装技法"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("Twilio Flex v2.x.x系でLINE連携を実装する方法")
    ).toBeInTheDocument();
    expect(screen.getByText("ブログ一覧")).toBeInTheDocument();
  });

  it("タグが正しく表示される", () => {
    render(<Blogs />);

    const typescriptTags = screen.getAllByText("TypeScript");
    expect(typescriptTags).toHaveLength(2);

    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("Amazon Connect")).toBeInTheDocument();
    expect(screen.getByText("Amazon Bedrock")).toBeInTheDocument();
    expect(screen.getByText("Gen AI")).toBeInTheDocument();
    expect(screen.getByText("Twilio")).toBeInTheDocument();
    expect(screen.getByText("LINE")).toBeInTheDocument();
  });

  it("ブログリンクが正しく設定されている", () => {
    render(<Blogs />);

    const links = screen.getAllByRole("link");
    expect(links[0]).toHaveAttribute(
      "href",
      "https://www.geekfeed.co.jp/geekblog/nextjs-amazon-connect/"
    );
    expect(links[1]).toHaveAttribute(
      "href",
      "https://www.geekfeed.co.jp/geekblog/amazon-bedrock-review-logic"
    );
    expect(links[2]).toHaveAttribute(
      "href",
      "https://www.geekfeed.co.jp/geekblog/twilio-flex-v2-line/"
    );
    expect(links[3]).toHaveAttribute(
      "href",
      "https://www.geekfeed.co.jp/author/matsura/"
    );
  });

  it("「記事を読む」テキストが表示される", () => {
    render(<Blogs />);

    expect(screen.getAllByText("記事を読む")).toHaveLength(4);
  });

  it("ブログ画像が表示される", () => {
    render(<Blogs />);

    const images = screen.getAllByRole("img");
    // Next.jsの画像最適化により、src属性は変換されるため、alt属性でテストする
    expect(images[0]).toHaveAttribute(
      "alt",
      "Next.jsでAmazon Connectの標準CCPを埋め込み動的データを取得する方法"
    );
    expect(images[1]).toHaveAttribute(
      "alt",
      "AWS Bedrockを活用したAI生成テキスト評価と再生成の実装技法"
    );
    expect(images[2]).toHaveAttribute(
      "alt",
      "Twilio Flex v2.x.x系でLINE連携を実装する方法"
    );
  });
});
