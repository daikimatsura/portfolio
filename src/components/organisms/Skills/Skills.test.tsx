import React from "react";
import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";
import "@testing-library/jest-dom";

// framer-motionのモックは既にjest.setup.jsで設定されています
// react-intersection-observerのモックも既にjest.setup.jsで設定されています

describe("Skills", () => {
  it("セクションタイトルが正しく表示される", () => {
    render(<Skills />);

    expect(screen.getByText("スキルセット")).toBeInTheDocument();
  });

  it("サブタイトルが表示される", () => {
    render(<Skills />);

    expect(
      screen.getByText(
        /フロントエンド開発からAWSインフラ構築まで、幅広いスキルを持っています/
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /常に新しい技術を学び、実践することで技術力を高めています/
      )
    ).toBeInTheDocument();
  });

  it("フロントエンドスキルカードが表示される", () => {
    render(<Skills />);

    expect(screen.getByText("Frontend")).toBeInTheDocument();

    // フロントエンドスキルの一部が表示されていることを確認
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("TailwindCSS")).toBeInTheDocument();
  });

  it("バックエンドスキルカードが表示される", () => {
    render(<Skills />);

    expect(screen.getByText("Backend")).toBeInTheDocument();

    // バックエンドスキルの一部が表示されていることを確認
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("Python")).toBeInTheDocument();
    expect(screen.getByText("Golang")).toBeInTheDocument();
  });

  it("AWSインフラスキルカードが表示される", () => {
    render(<Skills />);

    expect(screen.getByText("AWS Infrastructure")).toBeInTheDocument();

    // AWSインフラスキルの一部が表示されていることを確認
    expect(screen.getByText("AWS CDK")).toBeInTheDocument();
    expect(screen.getByText("IAM")).toBeInTheDocument();
    expect(screen.getByText("AWS Lambda")).toBeInTheDocument();
  });

  it("デザインスキルカードが表示される", () => {
    render(<Skills />);

    expect(screen.getByText("Design")).toBeInTheDocument();

    // デザインスキルの一部が表示されていることを確認
    expect(screen.getByText("Figma")).toBeInTheDocument();
    expect(screen.getByText("Draw.io")).toBeInTheDocument();
  });

  it("ツールスキルカードが表示される", () => {
    render(<Skills />);

    expect(screen.getByText("Tools")).toBeInTheDocument();

    // ツールスキルの一部が表示されていることを確認
    expect(screen.getByText("Git")).toBeInTheDocument();
    expect(screen.getByText("Notion")).toBeInTheDocument();
  });

  it("その他のスキルカードが表示される", () => {
    render(<Skills />);

    expect(screen.getByText("Other")).toBeInTheDocument();

    // その他のスキルの一部が表示されていることを確認
    expect(screen.getByText("AWS Architect")).toBeInTheDocument();
    expect(screen.getByText("Developer Leadership")).toBeInTheDocument();
  });

  it("スキルカードにアイコンが表示される", () => {
    render(<Skills />);

    // 各スキルカードのアイコンが表示されていることを確認
    expect(screen.getByText("💻")).toBeInTheDocument(); // Frontend
    expect(screen.getByText("🔧")).toBeInTheDocument(); // Backend
    expect(screen.getByText("☁️")).toBeInTheDocument(); // AWS Infrastructure
    expect(screen.getByText("🎨")).toBeInTheDocument(); // Design
    expect(screen.getByText("🛠️")).toBeInTheDocument(); // Tools
    expect(screen.getByText("🌟")).toBeInTheDocument(); // Other
  });
});
