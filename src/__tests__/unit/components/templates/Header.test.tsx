import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "@/components/templates/Header";

// jest.setup.jsで共通モックを使用するため、個別のモックは削除

describe("Header", () => {
  it("ヘッダーが正しくレンダリングされる", () => {
    render(<Header />);

    // モックされたヘッダーが表示されていることを確認
    expect(screen.getByTestId("header-mock")).toBeInTheDocument();
    expect(screen.getByText("Header Mock")).toBeInTheDocument();
  });
});
