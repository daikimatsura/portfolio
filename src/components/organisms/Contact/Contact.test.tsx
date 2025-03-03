import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Contact } from "./Contact";

// ContactFormコンポーネントをモック
jest.mock("../ContactForm", () => ({
  __esModule: true,
  default: () => <div data-testid="contact-form">Contact Form Mock</div>,
  ContactForm: () => <div data-testid="contact-form">Contact Form Mock</div>,
}));

describe("Contact", () => {
  it("セクションIDが正しく設定されている", () => {
    render(<Contact />);
    const section = document.getElementById("contact");
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("id", "contact");
  });

  it("タイトルが正しく表示される", () => {
    render(<Contact />);
    expect(screen.getByText("お問い合わせ")).toBeInTheDocument();
  });

  it("説明文が正しく表示される", () => {
    render(<Contact />);
    // 正規表現を使用して部分一致で検索
    expect(
      screen.getByText(
        /ご質問やお仕事のご依頼など、お気軽にお問い合わせください/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/下記のフォームからメッセージを送信いただけます/i)
    ).toBeInTheDocument();
  });

  it("メールアイコンが表示される", () => {
    render(<Contact />);
    expect(screen.getByTestId("mail-icon")).toBeInTheDocument();
  });

  it("ContactFormコンポーネントがレンダリングされる", () => {
    render(<Contact />);
    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
  });

  it("装飾要素が表示される", () => {
    render(<Contact />);
    // セクションを直接取得し、その中の装飾要素を確認
    const section = document.getElementById("contact");
    expect(section).toBeInTheDocument();

    // 絶対配置の要素（装飾用の背景要素）が存在することを確認
    const decorations = section?.querySelectorAll(".absolute");
    expect(decorations?.length).toBeGreaterThanOrEqual(2); // 少なくとも2つの装飾要素
  });
});
