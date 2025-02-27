import React from "react";
import { render, screen } from "@testing-library/react";
import SocialLinks, { SocialLink } from "@/components/atoms/SocialLinks";
import { Github, Mail, Linkedin } from "lucide-react";
import "@testing-library/jest-dom";

// framer-motionのモックは既にjest.setup.jsで設定されています

describe("SocialLinks", () => {
  const mockLinks: SocialLink[] = [
    {
      name: "GitHub",
      icon: <Github data-testid="github-icon" />,
      url: "https://github.com/testuser",
    },
    {
      name: "Email",
      icon: <Mail data-testid="mail-icon" />,
      url: "mailto:test@example.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin data-testid="linkedin-icon" />,
      url: "https://linkedin.com/in/testuser",
      color: "hover:bg-blue-700",
    },
  ];

  it("デフォルトのリンク（GitHub）が表示される", () => {
    render(<SocialLinks />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAttribute("href", "https://github.com/daikimatsura");
    expect(links[0]).toHaveAttribute("target", "_blank");
    expect(links[0]).toHaveAttribute("aria-label", "GitHub");
  });

  it("カスタムリンクが正しく表示される", () => {
    render(<SocialLinks links={mockLinks} />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);

    expect(links[0]).toHaveAttribute("href", "https://github.com/testuser");
    expect(links[0]).toHaveAttribute("aria-label", "GitHub");

    expect(links[1]).toHaveAttribute("href", "mailto:test@example.com");
    expect(links[1]).toHaveAttribute("aria-label", "Email");

    expect(links[2]).toHaveAttribute(
      "href",
      "https://linkedin.com/in/testuser"
    );
    expect(links[2]).toHaveAttribute("aria-label", "LinkedIn");
  });

  it("アイコンサイズが正しく適用される", () => {
    render(<SocialLinks links={[mockLinks[0]]} iconSize="lg" />);

    const githubIcon = screen.getByTestId("github-icon");
    expect(githubIcon.parentElement).toHaveClass("h-6");
    expect(githubIcon.parentElement).toHaveClass("w-6");
  });

  it("with-textバリアントでテキストが表示される", () => {
    render(<SocialLinks links={mockLinks} variant="with-text" />);

    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
  });

  it("buttonバリアントで正しいスタイルが適用される", () => {
    render(<SocialLinks links={mockLinks} variant="button" />);

    const links = screen.getAllByRole("link");

    // すべてのリンクがボタンスタイルを持っている
    links.forEach((link) => {
      expect(link).toHaveClass("bg-gray-800");
      expect(link).toHaveClass("p-2");
      expect(link).toHaveClass("rounded-full");
    });

    // LinkedInリンクはカスタムカラーを持っている
    expect(links[2]).toHaveClass("hover:bg-blue-700");
  });

  it("column方向で表示される", () => {
    render(<SocialLinks links={mockLinks} direction="column" />);

    const container = screen
      .getAllByRole("link")[0]
      .closest("div")?.parentElement;
    expect(container).toHaveClass("flex");
    expect(container).toHaveClass("flex-col");
    expect(container).toHaveClass("space-y-4");
  });

  it("カスタムクラス名が適用される", () => {
    render(<SocialLinks className="custom-test-class" />);

    const container = screen.getByRole("link").closest("div")?.parentElement;
    expect(container).toHaveClass("custom-test-class");
  });
});
