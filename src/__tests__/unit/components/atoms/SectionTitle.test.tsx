import React from "react";
import { render, screen } from "@testing-library/react";
import SectionTitle from "@/components/atoms/SectionTitle";
import "@testing-library/jest-dom";

// framer-motionのモックは既にjest.setup.jsで設定されています

describe("SectionTitle", () => {
  it("タイトルが正しく表示される", () => {
    render(<SectionTitle title="テストタイトル" />);

    const title = screen.getByText("テストタイトル");
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("text-transparent");
    expect(title).toHaveClass("bg-clip-text");
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

    const container = screen
      .getByText("左揃えタイトル")
      .closest("h2")?.parentElement;
    expect(container).toHaveClass("text-left");
  });

  it("中央揃えで表示される（デフォルト）", () => {
    render(<SectionTitle title="中央揃えタイトル" />);

    const container = screen
      .getByText("中央揃えタイトル")
      .closest("h2")?.parentElement;
    expect(container).toHaveClass("text-center");
  });

  it("右揃えで表示される", () => {
    render(<SectionTitle title="右揃えタイトル" align="right" />);

    const container = screen
      .getByText("右揃えタイトル")
      .closest("h2")?.parentElement;
    expect(container).toHaveClass("text-right");
  });

  it("追加のクラス名が適用される", () => {
    render(
      <SectionTitle title="カスタムクラス" className="custom-test-class" />
    );

    const container = screen
      .getByText("カスタムクラス")
      .closest("h2")?.parentElement;
    expect(container).toHaveClass("custom-test-class");
  });
});
