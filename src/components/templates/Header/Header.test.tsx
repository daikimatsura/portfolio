import React from "react";
import { render } from "@testing-library/react";
import { Header } from "./Header";

// 必要なモック
jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

// 最小限のテスト実装
describe("Header", () => {
  it("renders without crashing", () => {
    // window.matchMediaのモック
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    // エラーをキャッチしつつレンダリングを試みる
    expect(() => {
      const { container } = render(<Header />);
      expect(container).toBeInTheDocument();
    }).not.toThrow();
  });
});
