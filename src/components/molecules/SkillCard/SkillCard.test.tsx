import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SkillCard } from "./SkillCard";
import "@testing-library/jest-dom";

// framer-motionのモックは既にjest.setup.jsで設定されています

describe("SkillCard", () => {
  const mockSkill = {
    title: "フロントエンド",
    icon: "🌐",
    skills: [
      { name: "React", experienceLevel: "業務でよく使う" as const },
      { name: "TypeScript", experienceLevel: "業務でよく使う" as const },
      { name: "Next.js", experienceLevel: "使用経験あり" as const },
      { name: "HTML/CSS", experienceLevel: "業務でよく使う" as const },
      { name: "Tailwind CSS", experienceLevel: "使用経験あり" as const },
      { name: "Vue.js", experienceLevel: "学習したことがある" as const },
    ],
  };

  it("スキルカードのタイトルとアイコンが正しく表示される", () => {
    render(<SkillCard skill={mockSkill} />);

    expect(screen.getByText("フロントエンド")).toBeInTheDocument();
    expect(screen.getByText("🌐")).toBeInTheDocument();
    expect(screen.getByText("6 スキル")).toBeInTheDocument();
  });

  it("初期状態では最初の4つのスキルのみが表示される", () => {
    render(<SkillCard skill={mockSkill} />);

    // 最初の4つのスキルは表示されている
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("HTML/CSS")).toBeInTheDocument();

    // 残りのスキルは表示されていない
    expect(screen.queryByText("Vue.js")).not.toBeInTheDocument();
  });

  it("「すべて表示」ボタンをクリックすると全てのスキルが表示される", () => {
    render(<SkillCard skill={mockSkill} />);

    // 「すべて表示」ボタンをクリック
    fireEvent.click(screen.getByText("すべて表示"));

    // 全てのスキルが表示されている
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("HTML/CSS")).toBeInTheDocument();
    expect(screen.getByText("Tailwind CSS")).toBeInTheDocument();
    expect(screen.getByText("Vue.js")).toBeInTheDocument();

    // ボタンのテキストが「折りたたむ」に変わっている
    expect(screen.getByText("折りたたむ")).toBeInTheDocument();
  });

  it("「折りたたむ」ボタンをクリックすると最初の4つのスキルのみが表示される", () => {
    render(<SkillCard skill={mockSkill} />);

    // 「すべて表示」ボタンをクリック
    fireEvent.click(screen.getByText("すべて表示"));

    // 「折りたたむ」ボタンをクリック
    fireEvent.click(screen.getByText("折りたたむ"));

    // 最初の4つのスキルは表示されている
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("HTML/CSS")).toBeInTheDocument();

    // 残りのスキルは表示されていない
    expect(screen.queryByText("Vue.js")).not.toBeInTheDocument();

    // ボタンのテキストが「すべて表示」に戻っている
    expect(screen.getByText("すべて表示")).toBeInTheDocument();
  });

  it("スキルが4つ以下の場合は展開/折りたたみボタンが表示されない", () => {
    const shortSkill = {
      title: "バックエンド",
      icon: "⚙️",
      skills: [
        { name: "Node.js", experienceLevel: "業務でよく使う" as const },
        { name: "Express", experienceLevel: "使用経験あり" as const },
        { name: "MongoDB", experienceLevel: "学習したことがある" as const },
      ],
    };

    render(<SkillCard skill={shortSkill} />);

    // 全てのスキルが表示されている
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("Express")).toBeInTheDocument();
    expect(screen.getByText("MongoDB")).toBeInTheDocument();

    // 展開/折りたたみボタンは表示されていない
    expect(screen.queryByText("すべて表示")).not.toBeInTheDocument();
    expect(screen.queryByText("折りたたむ")).not.toBeInTheDocument();
  });

  it("アイコンがない場合でも正しく表示される", () => {
    const skillWithoutIcon = {
      title: "その他",
      skills: [
        { name: "Git", experienceLevel: "業務でよく使う" as const },
        { name: "Docker", experienceLevel: "使用経験あり" as const },
      ],
    };

    render(<SkillCard skill={skillWithoutIcon} />);

    expect(screen.getByText("その他")).toBeInTheDocument();
    expect(screen.getByText("Git")).toBeInTheDocument();
    expect(screen.getByText("Docker")).toBeInTheDocument();
  });

  it("経験レベルとアイコンが正しく表示される", () => {
    render(<SkillCard skill={mockSkill} />);

    // 「すべて表示」ボタンをクリックして全てのスキルを表示
    fireEvent.click(screen.getByText("すべて表示"));

    // 経験レベルが表示されている（複数存在する場合はgetAllByTextを使用）
    const businessLevels = screen.getAllByText("業務でよく使う");
    const touchedLevels = screen.getAllByText("使用経験あり");
    const studiedLevels = screen.getAllByText("学習したことがある");

    expect(businessLevels.length).toBeGreaterThan(0);
    expect(touchedLevels.length).toBeGreaterThan(0);
    expect(studiedLevels.length).toBeGreaterThan(0);

    // レベルアイコンが表示されている
    const starIcons = screen.getAllByText("⭐"); // 業務でよく使う
    const toolIcons = screen.getAllByText("🔧"); // 使用経験あり
    const bookIcons = screen.getAllByText("📚"); // 学習したことがある

    expect(starIcons.length).toBeGreaterThan(0);
    expect(toolIcons.length).toBeGreaterThan(0);
    expect(bookIcons.length).toBeGreaterThan(0);
  });
});
