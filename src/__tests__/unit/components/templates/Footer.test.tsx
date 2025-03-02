import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/templates/Footer";

// jest.setup.jsで共通モックを使用するため、個別のモックは削除

describe("Footer", () => {
  it("フッターが正しくレンダリングされる", () => {
    render(<Footer />);

    // モックされたフッターが表示されていることを確認
    expect(screen.getByTestId("footer-mock")).toBeInTheDocument();
    expect(screen.getByText("Footer Mock")).toBeInTheDocument();
  });
});
