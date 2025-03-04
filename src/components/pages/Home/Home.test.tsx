import React from "react";
import { render, screen, act } from "@testing-library/react";
import { Home } from "./Home";

// モックの作成をjest.setup.jsに移動したため、このファイルではモックを定義しない

describe("Home", () => {
  beforeEach(() => {
    // window.scrollYのモック
    Object.defineProperty(window, "scrollY", { value: 0, writable: true });
  });

  it("すべてのセクションコンポーネントがレンダリングされる", () => {
    render(<Home />);

    // 各セクションコンポーネントが表示されていることを確認
    expect(screen.getByTestId("mock-about")).toBeInTheDocument();
    expect(screen.getByTestId("mock-blogs")).toBeInTheDocument();
    expect(screen.getByTestId("mock-skills")).toBeInTheDocument();
    expect(screen.getByTestId("mock-contact")).toBeInTheDocument();
  });

  it("初期状態ではスクロールインジケーターが表示される", () => {
    render(<Home />);

    // スクロールインジケーターが表示されていることを確認
    expect(screen.getByText("スクロールして続きを見る")).toBeInTheDocument();
  });

  it("スクロールするとスクロールインジケーターが非表示になる", () => {
    render(<Home />);

    // 初期状態ではスクロールインジケーターが表示されている
    expect(screen.getByText("スクロールして続きを見る")).toBeInTheDocument();

    // スクロール後の状態をシミュレート
    act(() => {
      window.scrollY = 300;
      window.dispatchEvent(new Event("scroll"));
    });

    // スクロールインジケーターが非表示になったことを確認
    expect(
      screen.queryByText("スクロールして続きを見る")
    ).not.toBeInTheDocument();
  });

  it("スクロールが戻るとスクロールインジケーターが再表示される", () => {
    render(<Home />);

    // スクロール後の状態をシミュレート
    act(() => {
      window.scrollY = 300;
      window.dispatchEvent(new Event("scroll"));
    });

    // スクロールインジケーターが非表示になったことを確認
    expect(
      screen.queryByText("スクロールして続きを見る")
    ).not.toBeInTheDocument();

    // スクロールが戻った状態をシミュレート
    act(() => {
      window.scrollY = 0;
      window.dispatchEvent(new Event("scroll"));
    });

    // スクロールインジケーターが再表示されたことを確認
    expect(screen.getByText("スクロールして続きを見る")).toBeInTheDocument();
  });
});
