import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "@/app/loading";

describe("Loading", () => {
  it("ローディングコンポーネントが正しくレンダリングされる", () => {
    render(<Loading />);

    // ローディングメッセージが表示されていることを確認
    expect(screen.getByText("読み込み中...")).toBeInTheDocument();

    // イニシャル「DM」が表示されていることを確認
    expect(screen.getByText("DM")).toBeInTheDocument();
  });

  it("ローディングコンポーネントが適切なスタイルを持つ", () => {
    const { container } = render(<Loading />);

    // ローディングコンテナが固定位置で表示されていることを確認
    const loadingContainer = container.firstChild;
    expect(loadingContainer).toHaveClass("fixed");
    expect(loadingContainer).toHaveClass("inset-0");
    expect(loadingContainer).toHaveClass("flex");
    expect(loadingContainer).toHaveClass("items-center");
    expect(loadingContainer).toHaveClass("justify-center");
    expect(loadingContainer).toHaveClass("z-50");

    // アニメーション要素が存在することを確認
    const animationElements = container.querySelectorAll(".rounded-full");
    expect(animationElements.length).toBeGreaterThan(0);
  });
});
