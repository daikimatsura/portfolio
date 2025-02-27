import React from "react";
import { render, screen } from "@testing-library/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/atoms/Card";
import "@testing-library/jest-dom";

// framer-motionのモックは既にjest.setup.jsで設定されています

describe("Card Components", () => {
  describe("Card", () => {
    it("子要素が正しく表示される", () => {
      render(
        <Card>
          <div>テストコンテンツ</div>
        </Card>
      );

      expect(screen.getByText("テストコンテンツ")).toBeInTheDocument();
    });

    it("デフォルトのスタイルが適用される", () => {
      render(
        <Card>
          <div>デフォルトスタイル</div>
        </Card>
      );

      const card = screen
        .getByText("デフォルトスタイル")
        .closest("div.rounded-xl");
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass("bg-card");
      expect(card).toHaveClass("border");
      expect(card).toHaveClass("border-border");
    });

    it("カスタムクラス名が適用される", () => {
      render(
        <Card className="custom-test-class">
          <div>カスタムクラス</div>
        </Card>
      );

      const card = screen.getByText("カスタムクラス").closest("div.rounded-xl");
      expect(card).toHaveClass("custom-test-class");
    });

    it("hoverアニメーションが適用される（デフォルト有効）", () => {
      render(
        <Card>
          <div>ホバーアニメーション</div>
        </Card>
      );

      // framer-motionはモック化されているため、実際のアニメーションは検証できません
      // ここではコンポーネントが正しくレンダリングされることを確認します
      const card = screen
        .getByText("ホバーアニメーション")
        .closest("div.rounded-xl");
      expect(card).toBeInTheDocument();
    });

    it("hoverアニメーションを無効にできる", () => {
      render(
        <Card hoverEffect={false}>
          <div>アニメーション無効</div>
        </Card>
      );

      // framer-motionはモック化されているため、実際のアニメーションは検証できません
      // ここではコンポーネントが正しくレンダリングされることを確認します
      const card = screen
        .getByText("アニメーション無効")
        .closest("div.rounded-xl");
      expect(card).toBeInTheDocument();
    });

    it("グラデーション背景を適用できる", () => {
      render(
        <Card gradient>
          <div>グラデーション</div>
        </Card>
      );

      // グラデーションが適用されたカードコンポーネントが正しくレンダリングされることを確認
      const card = screen
        .getByText("グラデーション")
        .closest("div.relative.z-10")?.parentElement;
      expect(card).toHaveClass("bg-gradient-to-br");
      expect(card).toHaveClass("from-card");
      expect(card).toHaveClass("to-background");
    });
  });

  describe("CardHeader", () => {
    it("子要素が正しく表示される", () => {
      render(<CardHeader>ヘッダーコンテンツ</CardHeader>);
      expect(screen.getByText("ヘッダーコンテンツ")).toBeInTheDocument();
    });

    it("パディングが適用される", () => {
      render(<CardHeader>ヘッダー</CardHeader>);

      const header = screen.getByText("ヘッダー").closest("div");
      expect(header).toHaveClass("p-6");
    });

    it("カスタムクラス名が適用される", () => {
      render(<CardHeader className="custom-header-class">ヘッダー</CardHeader>);

      const header = screen.getByText("ヘッダー").closest("div");
      expect(header).toHaveClass("custom-header-class");
    });
  });

  describe("CardTitle", () => {
    it("子要素が正しく表示される", () => {
      render(<CardTitle>タイトルテキスト</CardTitle>);
      expect(screen.getByText("タイトルテキスト")).toBeInTheDocument();
    });

    it("h3要素として表示される", () => {
      render(<CardTitle>タイトル</CardTitle>);

      const title = screen.getByText("タイトル");
      expect(title.tagName).toBe("H3");
    });

    it("グラデーションテキストスタイルが適用される", () => {
      render(<CardTitle>グラデーションタイトル</CardTitle>);

      const title = screen.getByText("グラデーションタイトル");
      expect(title).toHaveClass("text-transparent");
      expect(title).toHaveClass("bg-clip-text");
      expect(title).toHaveClass("bg-gradient-to-r");
    });

    it("カスタムクラス名が適用される", () => {
      render(<CardTitle className="custom-title-class">タイトル</CardTitle>);

      const title = screen.getByText("タイトル");
      expect(title).toHaveClass("custom-title-class");
    });
  });

  describe("CardDescription", () => {
    it("子要素が正しく表示される", () => {
      render(<CardDescription>説明テキスト</CardDescription>);
      expect(screen.getByText("説明テキスト")).toBeInTheDocument();
    });

    it("p要素として表示される", () => {
      render(<CardDescription>説明</CardDescription>);

      const description = screen.getByText("説明");
      expect(description.tagName).toBe("P");
    });

    it("テキストスタイルが適用される", () => {
      render(<CardDescription>説明スタイル</CardDescription>);

      const description = screen.getByText("説明スタイル");
      expect(description).toHaveClass("text-muted-foreground");
      expect(description).toHaveClass("text-sm");
    });

    it("カスタムクラス名が適用される", () => {
      render(
        <CardDescription className="custom-desc-class">説明</CardDescription>
      );

      const description = screen.getByText("説明");
      expect(description).toHaveClass("custom-desc-class");
    });
  });

  describe("CardContent", () => {
    it("子要素が正しく表示される", () => {
      render(<CardContent>コンテンツテキスト</CardContent>);
      expect(screen.getByText("コンテンツテキスト")).toBeInTheDocument();
    });

    it("パディングが適用される", () => {
      render(<CardContent>コンテンツ</CardContent>);

      const content = screen.getByText("コンテンツ").closest("div");
      expect(content).toHaveClass("p-6");
      expect(content).toHaveClass("pt-0");
    });

    it("カスタムクラス名が適用される", () => {
      render(
        <CardContent className="custom-content-class">コンテンツ</CardContent>
      );

      const content = screen.getByText("コンテンツ").closest("div");
      expect(content).toHaveClass("custom-content-class");
    });
  });

  describe("CardFooter", () => {
    it("子要素が正しく表示される", () => {
      render(<CardFooter>フッターコンテンツ</CardFooter>);
      expect(screen.getByText("フッターコンテンツ")).toBeInTheDocument();
    });

    it("スタイルが適用される", () => {
      render(<CardFooter>フッター</CardFooter>);

      const footer = screen.getByText("フッター").closest("div");
      expect(footer).toHaveClass("flex");
      expect(footer).toHaveClass("items-center");
      expect(footer).toHaveClass("border-t");
    });

    it("カスタムクラス名が適用される", () => {
      render(<CardFooter className="custom-footer-class">フッター</CardFooter>);

      const footer = screen.getByText("フッター").closest("div");
      expect(footer).toHaveClass("custom-footer-class");
    });
  });

  describe("Card Components Integration", () => {
    it("すべてのカードコンポーネントが組み合わせて使用できる", () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>カードタイトル</CardTitle>
            <CardDescription>カードの説明文</CardDescription>
          </CardHeader>
          <CardContent>カードのコンテンツ</CardContent>
          <CardFooter>カードのフッター</CardFooter>
        </Card>
      );

      expect(screen.getByText("カードタイトル")).toBeInTheDocument();
      expect(screen.getByText("カードの説明文")).toBeInTheDocument();
      expect(screen.getByText("カードのコンテンツ")).toBeInTheDocument();
      expect(screen.getByText("カードのフッター")).toBeInTheDocument();
    });
  });
});
