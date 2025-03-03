import React from "react";
import { render, screen } from "@testing-library/react";
import { CareerTimeline } from "./CareerTimeline";

describe("CareerTimeline", () => {
  const mockCareers = [
    {
      id: "1",
      company: "テスト株式会社",
      position: "シニアエンジニア",
      period: {
        start: "2020年4月",
        end: "現在",
      },
      description: "Webアプリケーション開発\nインフラ構築",
      achievements: ["売上30%増加", "コスト20%削減"],
      projectHighlights: [
        {
          name: "ECサイトリニューアル",
          role: "テックリード",
          period: {
            start: "2021年1月",
            end: "2021年6月",
          },
          description: "レガシーシステムのモダン化\nパフォーマンス改善",
          technologies: ["React", "TypeScript", "Node.js"],
        },
      ],
    },
    {
      id: "2",
      company: "サンプル株式会社",
      position: "フロントエンドエンジニア",
      period: {
        start: "2018年4月",
        end: "2020年3月",
      },
      description: "UIコンポーネント開発",
      achievements: ["ユーザビリティ向上"],
      projectHighlights: [],
    },
  ];

  it("会社名と役職が表示されること", () => {
    render(<CareerTimeline careers={mockCareers} />);

    expect(screen.getByText("テスト株式会社")).toBeInTheDocument();
    expect(screen.getByText("シニアエンジニア")).toBeInTheDocument();
    expect(screen.getByText("サンプル株式会社")).toBeInTheDocument();
    expect(screen.getByText("フロントエンドエンジニア")).toBeInTheDocument();
  });

  it("勤務期間が表示されること", () => {
    render(<CareerTimeline careers={mockCareers} />);

    expect(screen.getByText("2020年4月 - 現在")).toBeInTheDocument();
    expect(screen.getByText("2018年4月 - 2020年3月")).toBeInTheDocument();
  });

  it("業務内容が表示されること", () => {
    render(<CareerTimeline careers={mockCareers} />);

    expect(screen.getAllByText("業務内容")[0]).toBeInTheDocument();
    expect(screen.getByText("Webアプリケーション開発")).toBeInTheDocument();
    expect(screen.getByText("インフラ構築")).toBeInTheDocument();
    expect(screen.getByText("UIコンポーネント開発")).toBeInTheDocument();
  });

  it("成果・実績が表示されること", () => {
    render(<CareerTimeline careers={mockCareers} />);

    expect(screen.getAllByText("主な成果・実績")[0]).toBeInTheDocument();
    expect(screen.getByText("売上30%増加")).toBeInTheDocument();
    expect(screen.getByText("コスト20%削減")).toBeInTheDocument();
    expect(screen.getByText("ユーザビリティ向上")).toBeInTheDocument();
  });

  it("プロジェクト情報が表示されること", () => {
    render(<CareerTimeline careers={mockCareers} />);

    expect(screen.getByText("プロジェクト詳細")).toBeInTheDocument();
    expect(screen.getByText("ECサイトリニューアル")).toBeInTheDocument();
    expect(screen.getByText("テックリード")).toBeInTheDocument();
    expect(screen.getByText("2021年1月 - 2021年6月")).toBeInTheDocument();
    expect(screen.getByText("レガシーシステムのモダン化")).toBeInTheDocument();
    expect(screen.getByText("パフォーマンス改善")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
  });

  it("キャリアがない場合は何も表示されないこと", () => {
    const { container } = render(<CareerTimeline careers={[]} />);
    expect(container.firstChild?.childNodes.length).toBe(0);
  });
});
