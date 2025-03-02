import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";

// FormDataの型定義
type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// useActionStateのモック
jest.mock("react", () => {
  const originalReact = jest.requireActual("react");
  return {
    ...originalReact,
    useActionState: jest.fn().mockImplementation((actionFn, initialState) => {
      const [state, setState] = originalReact.useState(initialState);
      const [isPending, setIsPending] = originalReact.useState(false);

      const dispatch = async (payload: FormData) => {
        setIsPending(true);
        try {
          const result = await actionFn(state, payload);
          setState(result);
        } finally {
          setIsPending(false);
        }
      };

      return [state, dispatch, isPending];
    }),
  };
});

// Lucide Reactアイコンのモック
jest.mock("lucide-react", () => ({
  Send: () => <span data-testid="send-icon">Send Icon</span>,
  CheckCircle: () => (
    <span data-testid="check-circle-icon">CheckCircle Icon</span>
  ),
  AlertCircle: () => (
    <span data-testid="alert-circle-icon">AlertCircle Icon</span>
  ),
  Clock: () => <span data-testid="clock-icon">Clock Icon</span>,
}));

// ContactFormコンポーネントのインポート
// モックの後にインポートする必要がある
import ContactForm from "@/components/organisms/ContactForm";

// fetchのモック
global.fetch = jest.fn();

describe("ContactForm", () => {
  beforeEach(() => {
    // 各テスト前にfetchのモックをリセット
    (global.fetch as jest.Mock).mockReset();

    // 環境変数のモック
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT = "https://formspree.io/f/test";
  });

  it("初期状態でフォームが正しく表示されること", async () => {
    await act(async () => {
      render(<ContactForm />);
    });

    // 必須フィールドが存在することを確認
    expect(screen.getByLabelText(/お名前/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/メールアドレス/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/件名/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/メッセージ/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /送信する/i })
    ).toBeInTheDocument();
  });

  it("必須フィールドが空の場合、ブラウザのバリデーションが働くこと", async () => {
    // HTML5のバリデーションをモック
    HTMLFormElement.prototype.checkValidity = jest.fn().mockReturnValue(false);

    await act(async () => {
      render(<ContactForm />);
    });

    // フォーム送信ボタンをクリック
    const submitButton = screen.getByRole("button", { name: /送信する/i });
    await act(async () => {
      fireEvent.click(submitButton);
    });

    // HTML5のバリデーションが働くため、fetchは呼ばれないはず
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("フォーム送信中は送信ボタンが無効化され、ローディング表示になること", async () => {
    // fetchのレスポンスを遅延させる
    (global.fetch as jest.Mock).mockImplementationOnce(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            ok: true,
            json: () => Promise.resolve({}),
          });
        }, 100);
      });
    });

    // HTML5のバリデーションをモック（有効なフォーム）
    HTMLFormElement.prototype.checkValidity = jest.fn().mockReturnValue(true);

    await act(async () => {
      render(<ContactForm />);
    });

    // フォームに値を入力
    await act(async () => {
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
    });

    // フォーム送信
    const submitButton = screen.getByRole("button", { name: /送信する/i });
    await act(async () => {
      const form = submitButton.closest("form");
      if (form) {
        fireEvent.submit(form);
      }
    });

    // 送信中の状態を確認
    await waitFor(() => {
      expect(screen.getByText(/送信中/i)).toBeInTheDocument();
      expect(submitButton).toBeDisabled();
    });
  });

  it("フォーム送信が成功した場合、成功メッセージが表示されること", async () => {
    // 成功レスポンスをモック
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({}),
    });

    // HTML5のバリデーションをモック（有効なフォーム）
    HTMLFormElement.prototype.checkValidity = jest.fn().mockReturnValue(true);

    await act(async () => {
      render(<ContactForm />);
    });

    // フォームに値を入力
    await act(async () => {
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
    });

    // フォーム送信
    await act(async () => {
      const container = screen.getByTestId("contact-form");
      const form = container.querySelector("form");
      if (form) fireEvent.submit(form);
    });

    // 成功メッセージが表示されることを確認
    await waitFor(() => {
      expect(screen.getByText(/送信完了/i)).toBeInTheDocument();
      expect(
        screen.getByText(/お問い合わせありがとうございます/i)
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /新しいメッセージを送信/i })
      ).toBeInTheDocument();
    });
  });

  it("フォーム送信が失敗した場合、エラーメッセージが表示されること", async () => {
    // エラーレスポンスをモック
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: () => Promise.resolve({ error: "送信に失敗しました" }),
    });

    // HTML5のバリデーションをモック（有効なフォーム）
    HTMLFormElement.prototype.checkValidity = jest.fn().mockReturnValue(true);

    await act(async () => {
      render(<ContactForm />);
    });

    // フォームに値を入力
    await act(async () => {
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
    });

    // フォーム送信
    await act(async () => {
      const container = screen.getByTestId("contact-form");
      const form = container.querySelector("form");
      if (form) fireEvent.submit(form);
    });

    // エラーメッセージが表示されることを確認
    await waitFor(() => {
      expect(screen.getByText(/エラーが発生しました/i)).toBeInTheDocument();
      expect(screen.getByText(/送信に失敗しました/i)).toBeInTheDocument();
    });
  });

  it("ネットワークエラーが発生した場合、適切なエラーメッセージが表示されること", async () => {
    // ネットワークエラーをモック
    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error("ネットワークエラー")
    );

    // HTML5のバリデーションをモック（有効なフォーム）
    HTMLFormElement.prototype.checkValidity = jest.fn().mockReturnValue(true);

    await act(async () => {
      render(<ContactForm />);
    });

    // フォームに値を入力
    await act(async () => {
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
    });

    // フォーム送信
    await act(async () => {
      const container = screen.getByTestId("contact-form");
      const form = container.querySelector("form");
      if (form) fireEvent.submit(form);
    });

    // エラーメッセージが表示されることを確認
    await waitFor(() => {
      expect(screen.getByText(/エラーが発生しました/i)).toBeInTheDocument();
      expect(screen.getByText(/ネットワークエラー/i)).toBeInTheDocument();
    });
  });

  it("成功後に「新しいメッセージを送信」ボタンをクリックすると、フォームが再表示されること", async () => {
    // 成功レスポンスをモック
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({}),
    });

    // HTML5のバリデーションをモック（有効なフォーム）
    HTMLFormElement.prototype.checkValidity = jest.fn().mockReturnValue(true);

    await act(async () => {
      render(<ContactForm />);
    });

    // フォームに値を入力して送信
    await act(async () => {
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
    });

    await act(async () => {
      const container = screen.getByTestId("contact-form");
      const form = container.querySelector("form");
      if (form) fireEvent.submit(form);
    });

    // 成功メッセージが表示されるのを待つ
    await waitFor(() => {
      expect(screen.getByText(/送信完了/i)).toBeInTheDocument();
    });

    // 「新しいメッセージを送信」ボタンをクリック
    await act(async () => {
      fireEvent.click(
        screen.getByRole("button", { name: /新しいメッセージを送信/i })
      );
    });

    // フォームが再表示されることを確認
    expect(screen.getByLabelText(/お名前/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/メールアドレス/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/件名/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/メッセージ/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /送信する/i })
    ).toBeInTheDocument();
  });
});
