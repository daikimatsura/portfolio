import React from "react";
import { render, screen } from "@testing-library/react";
import NotFound from "@/app/not-found";

// lucide-reactのアイコンをモック
jest.mock("lucide-react", () => ({
  Home: ({ className }: { className?: string }) => (
    <span data-testid="home-icon" className={className}>
      Home Icon
    </span>
  ),
  Search: ({ className }: { className?: string }) => (
    <span data-testid="search-icon" className={className}>
      Search Icon
    </span>
  ),
}));

describe("NotFound", () => {
  it("404ページが正しくレンダリングされる", () => {
    render(<NotFound />);

    // 404メッセージが表示されていることを確認
    expect(screen.getByText("404")).toBeInTheDocument();
    expect(screen.getByText("ページが見つかりません")).toBeInTheDocument();
    expect(
      screen.getByText(
        "お探しのページは存在しないか、移動した可能性があります。 URLを確認するか、以下のリンクからホームページに戻ってください。"
      )
    ).toBeInTheDocument();
  });

  it("ホームに戻るリンクが正しく表示される", () => {
    render(<NotFound />);

    // ホームに戻るリンクが表示されていることを確認
    const homeLink = screen.getByText("ホームに戻る").closest("a");
    expect(homeLink).toHaveAttribute("href", "/");
    expect(screen.getByTestId("home-icon")).toBeInTheDocument();
  });
});
