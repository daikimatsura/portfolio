import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/atoms/Button";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("デフォルトのバリアントとサイズで正しくレンダリングされる", () => {
    render(<Button>テストボタン</Button>);

    const button = screen.getByTestId("button-mock");
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe("BUTTON");
  });

  it("secondaryバリアントで正しくレンダリングされる", () => {
    render(<Button variant="secondary">セカンダリボタン</Button>);

    const button = screen.getByTestId("button-mock");
    expect(button).toBeInTheDocument();
  });

  it("outlineバリアントで正しくレンダリングされる", () => {
    render(<Button variant="outline">アウトラインボタン</Button>);

    const button = screen.getByTestId("button-mock");
    expect(button).toBeInTheDocument();
  });

  it("destructiveバリアントで正しくレンダリングされる", () => {
    render(<Button variant="destructive">破壊的ボタン</Button>);

    const button = screen.getByTestId("button-mock");
    expect(button).toBeInTheDocument();
  });

  it("ghostバリアントで正しくレンダリングされる", () => {
    render(<Button variant="ghost">ゴーストボタン</Button>);

    const button = screen.getByTestId("button-mock");
    expect(button).toBeInTheDocument();
  });

  it("linkバリアントで正しくレンダリングされる", () => {
    render(<Button variant="link">リンクボタン</Button>);

    const button = screen.getByTestId("button-mock");
    expect(button).toBeInTheDocument();
  });

  it("smサイズで正しくレンダリングされる", () => {
    render(<Button size="sm">小さいボタン</Button>);

    const button = screen.getByTestId("button-mock");
    expect(button).toBeInTheDocument();
  });

  it("lgサイズで正しくレンダリングされる", () => {
    render(<Button size="lg">大きいボタン</Button>);

    const button = screen.getByTestId("button-mock");
    expect(button).toBeInTheDocument();
  });

  it("iconサイズで正しくレンダリングされる", () => {
    render(<Button size="icon">アイコン</Button>);

    const button = screen.getByTestId("button-mock");
    expect(button).toBeInTheDocument();
  });

  it("asChildプロパティが適用される", () => {
    render(
      <Button asChild>
        <a href="https://example.com">リンクとしてのボタン</a>
      </Button>
    );

    const button = screen.getByTestId("button-mock");
    expect(button).toBeInTheDocument();
  });

  it("disabledプロパティが適用される", () => {
    render(<Button disabled>無効ボタン</Button>);

    const button = screen.getByTestId("button-mock");
    expect(button).toBeInTheDocument();
  });

  it("カスタムクラス名が適用される", () => {
    render(<Button className="custom-class">カスタムボタン</Button>);

    const button = screen.getByTestId("button-mock");
    expect(button).toBeInTheDocument();
  });

  it("onClick関数が呼び出される", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>クリックボタン</Button>);

    const button = screen.getByTestId("button-mock");
    button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
