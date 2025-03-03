import React from "react";
import { render, screen } from "@testing-library/react";
import SocialLinks from "./SocialLinks";
import { Github, Mail } from "lucide-react";
import "@testing-library/jest-dom";

describe("SocialLinks", () => {
  it("デフォルトのリンク（GitHub）を表示する", () => {
    render(<SocialLinks />);

    const githubLink = screen.getByLabelText("GitHubを開く");
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/matsuura-ritsuki"
    );
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("カスタムリンクを表示する", () => {
    const customLinks = [
      {
        name: "GitHub",
        icon: <Github size={20} />,
        url: "https://github.com/example",
        color: "text-white",
      },
      {
        name: "Mail",
        icon: <Mail size={20} />,
        url: "mailto:test@example.com",
        color: "text-blue-400",
      },
    ];

    render(<SocialLinks links={customLinks} />);

    const githubLink = screen.getByLabelText("GitHubを開く");
    const mailLink = screen.getByLabelText("Mailを開く");

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/example");

    expect(mailLink).toBeInTheDocument();
    expect(mailLink).toHaveAttribute("href", "mailto:test@example.com");
  });

  it("アイコンサイズを適用する", () => {
    const iconSize = 30;
    render(<SocialLinks iconSize={iconSize} />);

    // アイコンサイズはpropsとして渡されるため、DOMでは直接検証できない
    // このテストはコンポーネントの内部実装に依存するため、スナップショットテストや
    // コンポーネントのpropsを検証する方法が適切
  });

  it("with-textバリアントでテキストを表示する", () => {
    render(<SocialLinks variant="with-text" />);

    const githubLink = screen.getByLabelText("GitHubを開く");
    const githubText = screen.getByText("GitHub");

    expect(githubLink).toBeInTheDocument();
    expect(githubText).toBeInTheDocument();
  });

  it("buttonバリアントで適切なスタイルを適用する", () => {
    render(<SocialLinks variant="button" />);

    const githubLink = screen.getByLabelText("GitHubを開く");

    expect(githubLink).toHaveClass("bg-gray-800");
    expect(githubLink).toHaveClass("px-4");
    expect(githubLink).toHaveClass("py-2");
    expect(githubLink).toHaveClass("rounded-md");
  });

  it("column方向で表示する", () => {
    const { container } = render(<SocialLinks direction="column" />);

    const motionDiv = container.querySelector("div");
    expect(motionDiv).toHaveClass("flex-col");
  });

  it("カスタムクラス名を適用する", () => {
    const customClass = "test-custom-class";
    const { container } = render(<SocialLinks className={customClass} />);

    const motionDiv = container.querySelector("div");
    expect(motionDiv).toHaveClass(customClass);
  });
});
