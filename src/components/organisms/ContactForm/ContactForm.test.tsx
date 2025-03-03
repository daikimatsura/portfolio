import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ContactForm } from "./ContactForm";
import { useActionState } from "react";

// fetchのモックはjest.setup.jsで定義されています

describe("ContactForm", () => {
  // 各テスト前にモックをリセット
  beforeEach(() => {
    jest.clearAllMocks();
    // デフォルトのuseActionStateの実装は既にjest.setup.jsで定義されています
  });

  // 環境変数がない場合のテスト
  it("should display coming soon message when FORMSPREE_ENDPOINT is not set", () => {
    // 環境変数をクリア
    const originalEnv = process.env;
    process.env = { ...originalEnv, NEXT_PUBLIC_FORMSPREE_ENDPOINT: "" };

    render(<ContactForm />);

    // Coming Soonメッセージが表示されることを確認
    expect(screen.getByText("Coming Soon")).toBeInTheDocument();
    expect(screen.getByText("お問い合わせフォーム準備中")).toBeInTheDocument();

    // 環境変数を元に戻す
    process.env = originalEnv;
  });

  // フォームが表示される場合のテスト
  it("should render the form when FORMSPREE_ENDPOINT is set", () => {
    // 環境変数を設定
    const originalEnv = process.env;
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_FORMSPREE_ENDPOINT: "https://formspree.io/f/example",
    };

    render(<ContactForm />);

    // フォーム要素が表示されることを確認
    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
    expect(screen.getByLabelText(/お名前/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/メールアドレス/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/件名/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/メッセージ/i)).toBeInTheDocument();
    expect(screen.getByText("送信する")).toBeInTheDocument();

    // 環境変数を元に戻す
    process.env = originalEnv;
  });

  // フォーム送信時のテスト
  it("should handle form submission", async () => {
    // 環境変数を設定
    const originalEnv = process.env;
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_FORMSPREE_ENDPOINT: "https://formspree.io/f/example",
    };

    // モックの実装
    const mockDispatch = jest.fn();
    (useActionState as jest.Mock).mockImplementation(() => [
      { status: "idle" },
      mockDispatch,
      false,
    ]);

    render(<ContactForm />);

    // フォームに入力
    fireEvent.change(screen.getByLabelText(/お名前/i), {
      target: { value: "テスト太郎" },
    });
    fireEvent.change(screen.getByLabelText(/メールアドレス/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/件名/i), {
      target: { value: "テスト件名" },
    });
    fireEvent.change(screen.getByLabelText(/メッセージ/i), {
      target: { value: "これはテストメッセージです。" },
    });

    // フォーム送信 - getByRole("form")の代わりにgetByTestId("contact-form")内のformタグを使用
    const contactFormContainer = screen.getByTestId("contact-form");
    const formElement = contactFormContainer.querySelector("form");
    if (!formElement) throw new Error("Form element not found");

    fireEvent.submit(formElement);

    // dispatchが呼ばれたことを確認
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({
        name: "テスト太郎",
        email: "test@example.com",
        subject: "テスト件名",
        message: "これはテストメッセージです。",
      });
    });

    // 環境変数を元に戻す
    process.env = originalEnv;
  });

  // 送信成功時のテスト
  it("should display success message when form submission is successful", () => {
    // 環境変数を設定
    const originalEnv = process.env;
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_FORMSPREE_ENDPOINT: "https://formspree.io/f/example",
    };

    // 成功状態のモック
    (useActionState as jest.Mock).mockImplementation(() => [
      { status: "success" },
      jest.fn(),
      false,
    ]);

    render(<ContactForm />);

    // 成功メッセージが表示されることを確認
    expect(screen.getByText("送信完了")).toBeInTheDocument();
    expect(
      screen.getByText(
        "お問い合わせありがとうございます。できるだけ早くご返信いたします。"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("新しいメッセージを送信")).toBeInTheDocument();

    // 環境変数を元に戻す
    process.env = originalEnv;
  });

  // エラー時のテスト
  it("should display error message when form submission fails", () => {
    // 環境変数を設定
    const originalEnv = process.env;
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_FORMSPREE_ENDPOINT: "https://formspree.io/f/example",
    };

    // エラー状態のモック
    (useActionState as jest.Mock).mockImplementation(() => [
      {
        status: "error",
        errorMessage: "テストエラーメッセージ",
      },
      jest.fn(),
      false,
    ]);

    render(<ContactForm />);

    // エラーメッセージが表示されることを確認
    expect(screen.getByText("エラーが発生しました")).toBeInTheDocument();
    expect(screen.getByText("テストエラーメッセージ")).toBeInTheDocument();

    // 環境変数を元に戻す
    process.env = originalEnv;
  });
});
