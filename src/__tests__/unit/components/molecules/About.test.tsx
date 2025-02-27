import React from "react";
import { render, screen } from "@testing-library/react";
import About from "@/components/molecules/About";
import "@testing-library/jest-dom";

// framer-motionのモックは既にjest.setup.jsで設定されています
// next/linkのモックも既にjest.setup.jsで設定されています

describe("About", () => {
  it("タイトルとサブタイトルが正しく表示される", () => {
    render(<About />);

    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("daiki matsuura")).toBeInTheDocument();
  });

  it("自己紹介文が表示される", () => {
    render(<About />);

    // 自己紹介文の一部をチェック
    expect(
      screen.getByText(
        "React、Next.js、TypeScript、Amplify、AWS CDKを活用したWebアプリケーション開発が得意です。"
      )
    ).toBeInTheDocument();
  });

  it("メールリンクが正しく表示される", () => {
    render(<About />);

    const mailIcon = screen.getByTestId("mail-icon");
    expect(mailIcon).toBeInTheDocument();
    const mailLink = mailIcon.closest("a");
    expect(mailLink).toBeInTheDocument();
    expect(mailLink).toHaveAttribute("href", "#contact");
  });

  it("GitHubリンクが正しく表示される", () => {
    render(<About />);

    const githubIcon = screen.getByTestId("github-icon");
    expect(githubIcon).toBeInTheDocument();
    const githubLink = githubIcon.closest("a");
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/daikimatsura"
    );
    expect(githubLink).toHaveAttribute("target", "_blank");
  });

  it("職務経歴を見るリンクが表示される", () => {
    render(<About />);

    const jobHistoryLink = screen.getByText("職務経歴を見る").closest("a");
    expect(jobHistoryLink).toBeInTheDocument();
    expect(jobHistoryLink).toHaveAttribute("href", "/job-history");
  });

  it("このサイトについてリンクが表示される", () => {
    render(<About />);

    const aboutSiteLink = screen.getByText("このサイトについて").closest("a");
    expect(aboutSiteLink).toBeInTheDocument();
    expect(aboutSiteLink).toHaveAttribute("href", "/introduction-this-site");
  });

  it("背景エフェクト要素が存在する", () => {
    render(<About />);

    // 背景グラデーションの要素をチェック
    const gradientBg = document.querySelector(".bg-gradient-to-br");
    expect(gradientBg).toBeInTheDocument();
  });
});
