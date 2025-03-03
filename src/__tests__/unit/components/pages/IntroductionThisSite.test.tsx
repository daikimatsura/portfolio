import React from "react";
import { render, screen } from "@testing-library/react";
import IntroductionThisSitePage from "@/components/pages/IntroductionThisSite";

// 依存コンポーネントのモック
jest.mock(
  "@/components/molecules/IntroductionThisSite/IntroductionThisSite",
  () => {
    return function MockIntroductionThisSite() {
      return (
        <div data-testid="mock-introduction-this-site">
          IntroductionThisSite Component
        </div>
      );
    };
  }
);

// window.scrollToのモック
const scrollToMock = jest.fn();
Object.defineProperty(window, "scrollTo", { value: scrollToMock });

describe("IntroductionThisSitePage", () => {
  beforeEach(() => {
    // テスト前にモックをリセット
    scrollToMock.mockClear();
  });

  it("IntroductionThisSiteコンポーネントがレンダリングされる", () => {
    render(<IntroductionThisSitePage />);

    // IntroductionThisSiteコンポーネントが表示されていることを確認
    expect(
      screen.getByTestId("mock-introduction-this-site")
    ).toBeInTheDocument();
  });

  it("ページ表示時にスクロール位置がトップに戻される", () => {
    render(<IntroductionThisSitePage />);

    // window.scrollToが呼び出されたことを確認
    expect(scrollToMock).toHaveBeenCalledTimes(1);
    expect(scrollToMock).toHaveBeenCalledWith(0, 0);
  });
});
