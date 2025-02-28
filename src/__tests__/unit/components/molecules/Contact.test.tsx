import { render, screen } from "@testing-library/react";
import { act } from "react";
import Contact from "@/components/molecules/Contact";
import "@testing-library/jest-dom";

// ContactFormコンポーネントをモック
jest.mock("@/components/organisms/ContactForm", () => {
  return function MockContactForm() {
    return <div data-testid="contact-form-mock">ContactForm Mock</div>;
  };
});

describe("Contact", () => {
  it("コンポーネントが正しくレンダリングされること", async () => {
    await act(async () => {
      render(<Contact />);
    });

    // ヘッダー部分が表示されていることを確認
    expect(screen.getByText("お問い合わせ")).toBeInTheDocument();
    expect(
      screen.getByText(
        /ご質問やお仕事のご依頼など、お気軽にお問い合わせください。/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/下記のフォームからメッセージを送信いただけます。/i)
    ).toBeInTheDocument();

    // メールアイコンが表示されていることを確認
    expect(screen.getByTestId("mail-icon")).toBeInTheDocument();

    // ContactFormコンポーネントがレンダリングされていることを確認
    expect(screen.getByTestId("contact-form-mock")).toBeInTheDocument();
  });

  it("セクションIDが正しく設定されていること", async () => {
    await act(async () => {
      render(<Contact />);
    });

    const contactSection = document.getElementById("contact");
    expect(contactSection).toBeInTheDocument();
  });

  it("アニメーション要素が存在すること", async () => {
    await act(async () => {
      render(<Contact />);
    });

    // 背景のグラデーションエフェクトが存在することを確認
    const gradientElement = document.querySelector(".bg-gradient-to-b");
    expect(gradientElement).toBeInTheDocument();

    // デコレーション要素が存在することを確認
    const decorationElements = document.querySelectorAll(".blur-3xl");
    expect(decorationElements.length).toBe(2);
  });
});
