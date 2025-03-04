import { render, screen } from "@testing-library/react";
import { JobHistoryPage } from "./JobHistory";

// CareerTimelineコンポーネントをモック化
jest.mock("@/components/molecules/CareerTimeline", () => {
  return {
    __esModule: true,
    default: () => (
      <div data-testid="career-timeline">モックCareerTimeline</div>
    ),
  };
});

// Cardコンポーネントをモック化
jest.mock("@/components/atoms/Card", () => {
  return {
    Card: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="card">{children}</div>
    ),
    CardContent: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="card-content">{children}</div>
    ),
  };
});

// Badgeコンポーネントをモック化
jest.mock("@/components/atoms/Badge", () => {
  return {
    Badge: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="badge">{children}</div>
    ),
  };
});

describe("JobHistoryPage", () => {
  test("正しくレンダリングされること", () => {
    render(<JobHistoryPage />);

    // タイトルが表示されていることを確認
    expect(screen.getByText("職務経歴書")).toBeInTheDocument();

    // 各セクションが表示されていることを確認
    expect(screen.getByText("自己PR")).toBeInTheDocument();
    expect(screen.getByText("資格")).toBeInTheDocument();
    expect(screen.getByText("主要スキル")).toBeInTheDocument();
    expect(screen.getByText("職務経歴")).toBeInTheDocument();

    // CareerTimelineコンポーネントが表示されていることを確認
    expect(screen.getByTestId("career-timeline")).toBeInTheDocument();

    // スキルバッジが表示されていることを確認
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("AWS")).toBeInTheDocument();
  });
});
