import { render, screen } from "@testing-library/react";
import Contact from "@/components/organisms/Contact";

// ContactFormコンポーネントをモックする（依存関係のみ）
jest.mock("@/components/organisms/ContactForm", () => {
  return {
    __esModule: true,
    default: () => <div data-testid="contact-form">Contact Form Component</div>,
  };
});

describe("Contact", () => {
  it("renders correctly", () => {
    render(<Contact />);

    // 見出しが表示されていることを確認
    expect(screen.getByText("お問い合わせ")).toBeInTheDocument();

    // 説明文が表示されていることを確認（部分一致で検索）
    expect(
      screen.getByText(
        /ご質問やお仕事のご依頼など、お気軽にお問い合わせください。/i
      )
    ).toBeInTheDocument();

    // メールアイコンが表示されていることを確認
    expect(screen.getByTestId("mail-icon")).toBeInTheDocument();

    // コンタクトフォームが表示されていることを確認
    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
  });

  it("has the correct section ID", () => {
    render(<Contact />);

    // セクション要素をIDで直接取得
    const section = document.getElementById("contact");
    expect(section).toHaveAttribute("id", "contact");
  });

  it("contains animation elements", () => {
    render(<Contact />);
    // アニメーション要素が存在することを確認
    const animationElements = document.querySelectorAll(
      "[initial][animate][transition]"
    );
    expect(animationElements.length).toBeGreaterThan(0);
  });
});
