import React from "react";
import { render, screen } from "@testing-library/react";
import RootLayout from "@/app/layout";

// jest.setup.jsで共通モックを使用するため、個別のモックは削除

describe("RootLayout", () => {
  it("レイアウトが正しくレンダリングされる", () => {
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );

    // ヘッダーとフッターが表示されていることを確認
    expect(screen.getByTestId("header-mock")).toBeInTheDocument();
    expect(screen.getByTestId("footer-mock")).toBeInTheDocument();

    // テーマプロバイダーが表示されていることを確認
    expect(screen.getByTestId("theme-provider-mock")).toBeInTheDocument();

    // 子要素が表示されていることを確認
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("適切なHTML属性が設定されている", () => {
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );

    // htmlとbody要素の属性を確認
    const html = document.documentElement;
    expect(html).toHaveAttribute("lang", "ja");
    expect(html).toHaveClass("scroll-smooth");

    const body = document.body;
    // フォント変数が設定されていることを確認
    expect(body.className).toContain("--font-geist-sans");
    expect(body.className).toContain("--font-noto-sans-jp");
    expect(body.className).toContain("--font-geist-mono");
    expect(body.className).toContain("font-sans");
    expect(body.className).toContain("antialiased");
  });
});
