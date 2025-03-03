import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IntroductionThisSite } from "./IntroductionThisSite";

// アニメーション関連のフックをモック
jest.mock("@/lib/animations", () => ({
  useAnimationInView: () => ({
    ref: { current: null },
    inView: true,
    animation: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    transition: { duration: 0.5 },
  }),
  useAccessibleAnimations: () => ({
    fadeInUpProps: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    },
    fadeInProps: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
  }),
  useAccessibleVariants: () => ({
    staggerContainer: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
  }),
}));

// GradientBlurDecorationコンポーネントのモック
jest.mock("@/components/atoms/GradientBlurDecoration", () => ({
  __esModule: true,
  default: ({ animate }: { animate?: boolean }) => (
    <div data-testid="gradient-blur-decoration" data-animate={animate}>
      Gradient Blur Decoration
    </div>
  ),
}));

// react-intersection-observerのモック
jest.mock("react-intersection-observer", () => ({
  useInView: () => ({
    ref: { current: null },
    inView: true,
  }),
}));

// Lucide Reactアイコンのモック
jest.mock("lucide-react", () => ({
  Zap: () => <div data-testid="zap-icon">Zap Icon</div>,
  Code: () => <div data-testid="code-icon">Code Icon</div>,
  Palette: () => <div data-testid="palette-icon">Palette Icon</div>,
  Layers: () => <div data-testid="layers-icon">Layers Icon</div>,
  TestTube: () => <div data-testid="test-tube-icon">TestTube Icon</div>,
  Rocket: () => <div data-testid="rocket-icon">Rocket Icon</div>,
  Moon: () => <div data-testid="moon-icon">Moon Icon</div>,
  LayoutGrid: () => <div data-testid="layout-grid-icon">LayoutGrid Icon</div>,
  GitBranch: () => <div data-testid="git-branch-icon">GitBranch Icon</div>,
  Accessibility: () => (
    <div data-testid="accessibility-icon">Accessibility Icon</div>
  ),
  Github: () => <div data-testid="github-icon">Github Icon</div>,
}));

// スタイル関連のモック
jest.mock("@/lib/styles", () => ({
  gradientText: "gradient-text-class",
  blueIconColor: "blue-icon-color",
  greenIconColor: "green-icon-color",
  redIconColor: "red-icon-color",
  purpleIconColor: "purple-icon-color",
  yellowIconColor: "yellow-icon-color",
  orangeIconColor: "orange-icon-color",
  cardBg: "card-bg-class",
  iconBg: "icon-bg-class",
  getTechCardColor: () => "tech-card-color",
  gradientIconBg: "gradient-icon-bg",
}));

// Buttonコンポーネントのモック
jest.mock("@/components/atoms/Button", () => ({
  Button: ({
    children,
    ...props
  }: React.PropsWithChildren<
    React.ButtonHTMLAttributes<HTMLButtonElement>
  >) => (
    <button data-testid="button" {...props}>
      {children}
    </button>
  ),
}));

describe("IntroductionThisSite", () => {
  it("正しくレンダリングされる", () => {
    render(<IntroductionThisSite />);

    // セクションタイトルが表示されていることを確認
    expect(screen.getByText("このサイトについて")).toBeInTheDocument();

    // 説明文の一部が表示されていることを確認
    expect(
      screen.getByText(
        /このポートフォリオサイトは、私のスキルと経験を紹介するために作成しました。/
      )
    ).toBeInTheDocument();
  });

  it("使用技術セクションが表示される", () => {
    render(<IntroductionThisSite />);
    expect(screen.getByText("使用技術")).toBeInTheDocument();
    expect(screen.getByText("Next.js & React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("GitHubリポジトリへのリンクが表示される", () => {
    render(<IntroductionThisSite />);
    expect(screen.getByText("GitHubでコードを見る")).toBeInTheDocument();
  });
});
