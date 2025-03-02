import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Error from "@/app/error";

// console.errorのモック
const originalConsoleError = console.error;
const mockConsoleError = jest.fn();

describe("Error", () => {
  beforeEach(() => {
    // console.errorをモック化
    console.error = mockConsoleError;
  });

  afterEach(() => {
    // モックをリセット
    mockConsoleError.mockReset();
    // 元のconsole.errorを復元
    console.error = originalConsoleError;
  });

  it("エラーページが正しくレンダリングされる", () => {
    // Errorコンポーネントに渡すエラーオブジェクトを作成
    const mockError = {
      name: "TestError",
      message: "テストエラー",
      digest: "test-digest",
    } as Error & { digest?: string };

    const mockReset = jest.fn();

    render(<Error error={mockError} reset={mockReset} />);

    // エラーメッセージが表示されていることを確認
    expect(screen.getByText("エラーが発生しました")).toBeInTheDocument();
    expect(
      screen.getByText(
        "申し訳ありませんが、ページの読み込み中に問題が発生しました。 もう一度お試しいただくか、後ほどアクセスしてください。"
      )
    ).toBeInTheDocument();

    // リセットボタンが表示されていることを確認
    expect(screen.getByText("再読み込み")).toBeInTheDocument();

    // エラーがコンソールに出力されていることを確認
    expect(mockConsoleError).toHaveBeenCalledWith(mockError);
  });

  it("リセットボタンをクリックするとリセット関数が呼び出される", () => {
    // Errorコンポーネントに渡すエラーオブジェクトを作成
    const mockError = {
      name: "TestError",
      message: "テストエラー",
      digest: "test-digest",
    } as Error & { digest?: string };

    const mockReset = jest.fn();

    render(<Error error={mockError} reset={mockReset} />);

    // リセットボタンをクリック
    fireEvent.click(screen.getByText("再読み込み"));

    // リセット関数が呼び出されたことを確認
    expect(mockReset).toHaveBeenCalledTimes(1);
  });
});
