import React from "react";
import { render, screen } from "@testing-library/react";
import SectionTitle from "./SectionTitle";
import "@testing-library/jest-dom";

// framer-motionのモックは既にjest.setup.jsで設定されています

describe("SectionTitle", () => {
  it("タイトルが正しく表示される", () => {
    render(<SectionTitle title="テストタイトル" />);

    const sectionTitle = screen.getByTestId("section-title-mock");
    expect(sectionTitle).toBeInTheDocument();
    expect(screen.getByText("テストタイトル")).toBeInTheDocument();
  });

  it("サブタイトルが表示される", () => {
    render(
      <SectionTitle title="メインタイトル" subtitle="これはサブタイトルです" />
    );

    expect(screen.getByText("メインタイトル")).toBeInTheDocument();
    expect(screen.getByText("これはサブタイトルです")).toBeInTheDocument();
  });

  it("アイコンが表示される", () => {
    render(
      <SectionTitle
        title="アイコン付きタイトル"
        icon={<span data-testid="test-icon">🔍</span>}
      />
    );

    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });

  it("左揃えで表示される", () => {
    render(<SectionTitle title="左揃えタイトル" align="left" />);

    const sectionTitle = screen.getByTestId("section-title-mock");
    expect(sectionTitle).toHaveClass("text-left");
  });

  it("中央揃えで表示される（デフォルト）", () => {
    render(<SectionTitle title="中央揃えタイトル" />);

    const sectionTitle = screen.getByTestId("section-title-mock");
    expect(sectionTitle).toHaveClass("text-center");
  });

  it("右揃えで表示される", () => {
    render(<SectionTitle title="右揃えタイトル" align="right" />);

    const sectionTitle = screen.getByTestId("section-title-mock");
    expect(sectionTitle).toHaveClass("text-right");
  });

  it("追加のクラス名が適用される", () => {
    render(
      <SectionTitle title="カスタムクラス" className="custom-test-class" />
    );

    const sectionTitle = screen.getByTestId("section-title-mock");
    expect(sectionTitle).toHaveClass("custom-test-class");
  });
});
