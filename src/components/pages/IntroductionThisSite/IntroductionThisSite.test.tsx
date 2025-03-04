import { render, screen } from "@testing-library/react";
import { IntroductionThisSitePage } from "./IntroductionThisSite";

// IntroductionThisSiteコンポーネントのモック
jest.mock(
  "@/components/molecules/IntroductionThisSite/IntroductionThisSite",
  () => {
    return {
      __esModule: true,
      default: () => (
        <div data-testid="mocked-introduction-this-site">
          モックされたIntroductionThisSite
        </div>
      ),
    };
  }
);

describe("IntroductionThisSitePage", () => {
  it("正しくレンダリングされること", () => {
    render(<IntroductionThisSitePage />);

    // モックされたIntroductionThisSiteコンポーネントが表示されていることを確認
    expect(
      screen.getByTestId("mocked-introduction-this-site")
    ).toBeInTheDocument();
  });
});
