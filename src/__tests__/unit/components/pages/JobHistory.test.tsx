import React from "react";
import { render, screen } from "@testing-library/react";
import JobHistory from "@/components/pages/JobHistory";

// 依存コンポーネントのモック
jest.mock("@/components/molecules/CareerTimeline", () => {
  return function MockCareerTimeline({
    careers = [],
  }: {
    careers?: Array<{ id: string; company: string; [key: string]: unknown }>;
  }) {
    return (
      <div data-testid="mock-career-timeline">
        {careers.map((item: { id: string; company: string }) => (
          <div key={item.id} data-testid={`career-item-${item.id}`}>
            {item.company}
          </div>
        ))}
      </div>
    );
  };
});

jest.mock("@/components/atoms/Badge", () => ({
  Badge: ({ children }: { children: React.ReactNode }) => (
    <span data-testid="mock-badge">{children}</span>
  ),
}));

jest.mock("@/components/atoms/Card", () => ({
  Card: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mock-card">{children}</div>
  ),
  CardContent: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mock-card-content">{children}</div>
  ),
}));

describe("JobHistory", () => {
  it("職歴ページが正しくレンダリングされる", () => {
    render(<JobHistory />);

    // ページタイトルが表示されていることを確認
    expect(screen.getByText("職務経歴書")).toBeInTheDocument();
  });

  it("CareerTimelineコンポーネントが表示される", () => {
    render(<JobHistory />);

    // CareerTimelineコンポーネントが表示されていることを確認
    expect(screen.getByTestId("mock-career-timeline")).toBeInTheDocument();
  });

  it("自己PRセクションが表示される", () => {
    render(<JobHistory />);

    // 自己PRセクションのタイトルが表示されていることを確認
    expect(screen.getByText("自己PR")).toBeInTheDocument();

    // 自己PRの内容が表示されていることを確認
    expect(
      screen.getByText(
        /好きな領域はReact\/TypeScriptを使ったフロントエンド開発/
      )
    ).toBeInTheDocument();
  });

  it("資格セクションが表示される", () => {
    render(<JobHistory />);

    // 資格セクションのタイトルが表示されていることを確認
    expect(screen.getByText("資格")).toBeInTheDocument();

    // 資格の内容が表示されていることを確認
    expect(
      screen.getByText("AWS Certified Solutions Architect – Associate")
    ).toBeInTheDocument();
    expect(
      screen.getByText("AWS Certified Solutions Architect – Professional")
    ).toBeInTheDocument();
  });

  it("スキルセクションが表示される", () => {
    render(<JobHistory />);

    // スキルセクションのタイトルが表示されていることを確認
    expect(screen.getByText("主要スキル")).toBeInTheDocument();

    // スキルの内容が表示されていることを確認（一部のみ確認）
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
  });
});
