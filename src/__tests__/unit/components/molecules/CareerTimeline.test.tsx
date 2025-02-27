import React from "react";
import { render, screen } from "@testing-library/react";
import CareerTimeline from "@/components/molecules/CareerTimeline";
import "@testing-library/jest-dom";

describe("CareerTimeline", () => {
  const mockCareers = [
    {
      id: "career1",
      company: "テスト株式会社",
      position: "シニアエンジニア",
      period: {
        start: "2020-01",
        end: "現在",
      },
      description: "テスト会社での業務内容",
      achievements: ["実績1", "実績2"],
      projectHighlights: [
        {
          name: "テストプロジェクト",
          role: "リードエンジニア",
          period: {
            start: "2020-01",
            end: "2021-12",
          },
          description: "プロジェクトの説明",
          technologies: ["React", "TypeScript", "Next.js"],
        },
      ],
    },
    {
      id: "career2",
      company: "サンプル株式会社",
      position: "フロントエンドエンジニア",
      period: {
        start: "2018-04",
        end: "2019-12",
      },
      description: "サンプル会社での業務内容",
    },
  ];

  it("キャリア情報が正しく表示される", () => {
    render(<CareerTimeline careers={mockCareers} />);

    // 会社名と役職が表示されていることを確認
    expect(screen.getByText("テスト株式会社")).toBeInTheDocument();
    expect(screen.getByText("シニアエンジニア")).toBeInTheDocument();
    expect(screen.getByText("サンプル株式会社")).toBeInTheDocument();
    expect(screen.getByText("フロントエンドエンジニア")).toBeInTheDocument();
  });

  it("期間が正しく表示される", () => {
    render(<CareerTimeline careers={mockCareers} />);

    // 期間が表示されていることを確認
    expect(screen.getByText("2020-01 - 現在")).toBeInTheDocument();
    expect(screen.getByText("2018-04 - 2019-12")).toBeInTheDocument();
  });

  it("業務内容が表示される", () => {
    render(<CareerTimeline careers={mockCareers} />);

    // 業務内容が表示されていることを確認
    expect(screen.getByText("テスト会社での業務内容")).toBeInTheDocument();
    expect(screen.getByText("サンプル会社での業務内容")).toBeInTheDocument();
  });

  it("実績が表示される", () => {
    render(<CareerTimeline careers={mockCareers} />);

    // 実績が表示されていることを確認
    expect(screen.getByText("実績1")).toBeInTheDocument();
    expect(screen.getByText("実績2")).toBeInTheDocument();
  });

  it("プロジェクト情報が表示される", () => {
    render(<CareerTimeline careers={mockCareers} />);

    // プロジェクト情報が表示されていることを確認
    expect(screen.getByText("テストプロジェクト")).toBeInTheDocument();
    expect(screen.getByText("リードエンジニア")).toBeInTheDocument();
    expect(screen.getByText("2020-01 - 2021-12")).toBeInTheDocument();
    expect(screen.getByText("プロジェクトの説明")).toBeInTheDocument();
  });

  it("技術スタックが表示される", () => {
    render(<CareerTimeline careers={mockCareers} />);

    // 技術スタックが表示されていることを確認
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
  });

  it("キャリアがない場合は何も表示されない", () => {
    render(<CareerTimeline careers={[]} />);

    // 何も表示されないことを確認
    expect(screen.queryByText("テスト株式会社")).not.toBeInTheDocument();
  });
});
