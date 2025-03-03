import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ErrorBoundary } from "@/lib/errors/ErrorBoundary";
import { logError } from "@/lib/errors/errorHandlers";

// logErrorをモック
jest.mock("@/lib/errors/errorHandlers", () => ({
  logError: jest.fn(),
  toAppError: jest.fn((error) => ({
    code: "TEST_ERROR",
    message: error.message,
    details: { stack: error.stack },
  })),
}));

// エラーを投げるコンポーネント
const ErrorComponent = ({ shouldThrow = false }) => {
  if (shouldThrow) {
    throw new Error("テストエラー");
  }
  return <div>正常なコンポーネント</div>;
};

// カスタムフォールバックコンポーネント
const CustomFallback = (error: Error, reset: () => void) => (
  <div>
    <h2>カスタムエラー表示</h2>
    <p>{error.message}</p>
    <button onClick={reset}>リセット</button>
  </div>
);

describe("ErrorBoundary", () => {
  // 注: console.errorのモックはjest.setup.jsで一元管理されています

  afterEach(() => {
    // 注: jest.clearAllMocksはjest.setup.jsで一元管理されています
  });

  it("子コンポーネントが正常な場合、そのまま表示される", () => {
    render(
      <ErrorBoundary>
        <ErrorComponent shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText("正常なコンポーネント")).toBeInTheDocument();
  });

  it("子コンポーネントがエラーを投げた場合、デフォルトのフォールバックUIが表示される", () => {
    // エラーバウンダリーのテストではact警告を抑制するためにconsole.errorをモック化
    // 注: console.errorのモックはjest.setup.jsで一元管理されています

    render(
      <ErrorBoundary>
        <ErrorComponent shouldThrow={true} />
      </ErrorBoundary>
    );

    // デフォルトのエラーメッセージが表示されていることを確認
    expect(screen.getByText("エラーが発生しました")).toBeInTheDocument();
    expect(screen.getByText("テストエラー")).toBeInTheDocument();
    expect(screen.getByText("再試行")).toBeInTheDocument();

    // エラーがログに記録されたことを確認
    expect(logError).toHaveBeenCalled();
  });

  it("カスタムフォールバックが提供された場合、それが表示される", () => {
    // エラーバウンダリーのテストではact警告を抑制するためにconsole.errorをモック化
    // 注: console.errorのモックはjest.setup.jsで一元管理されています

    render(
      <ErrorBoundary fallback={CustomFallback}>
        <ErrorComponent shouldThrow={true} />
      </ErrorBoundary>
    );

    // カスタムフォールバックが表示されていることを確認
    expect(screen.getByText("カスタムエラー表示")).toBeInTheDocument();
    expect(screen.getByText("テストエラー")).toBeInTheDocument();
    expect(screen.getByText("リセット")).toBeInTheDocument();
  });

  it("リセットボタンをクリックするとエラー状態がリセットされる", () => {
    // エラーバウンダリーのテストではact警告を抑制するためにconsole.errorをモック化
    // 注: console.errorのモックはjest.setup.jsで一元管理されています

    const TestComponent = () => {
      const [shouldThrow, setShouldThrow] = React.useState(true);
      return (
        <div>
          <button onClick={() => setShouldThrow(false)}>エラーを修正</button>
          <ErrorBoundary>
            {shouldThrow ? (
              <ErrorComponent shouldThrow={true} />
            ) : (
              <div>エラーが修正されました</div>
            )}
          </ErrorBoundary>
        </div>
      );
    };

    render(<TestComponent />);

    // エラーメッセージが表示されていることを確認
    expect(screen.getByText("エラーが発生しました")).toBeInTheDocument();

    // エラーを修正ボタンをクリック
    fireEvent.click(screen.getByText("エラーを修正"));

    // 再試行ボタンをクリック
    fireEvent.click(screen.getByText("再試行"));

    // エラーが修正されたメッセージが表示されていることを確認
    expect(screen.getByText("エラーが修正されました")).toBeInTheDocument();
  });
});
