import React from "react";
import { render } from "@testing-library/react";
import { Footer } from "./Footer";

// 必要なモック
jest.mock("framer-motion", () => ({
  motion: {
    h3: ({
      children,
      ...props
    }: {
      children: React.ReactNode;
      [key: string]: unknown;
    }) => (
      <h3 data-testid="motion-h3" {...props}>
        {children}
      </h3>
    ),
    p: ({
      children,
      ...props
    }: {
      children: React.ReactNode;
      [key: string]: unknown;
    }) => (
      <p data-testid="motion-p" {...props}>
        {children}
      </p>
    ),
    ul: ({
      children,
      ...props
    }: {
      children: React.ReactNode;
      [key: string]: unknown;
    }) => (
      <ul data-testid="motion-ul" {...props}>
        {children}
      </ul>
    ),
    div: ({
      children,
      ...props
    }: {
      children: React.ReactNode;
      [key: string]: unknown;
    }) => (
      <div data-testid="motion-div" {...props}>
        {children}
      </div>
    ),
  },
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} data-testid="next-link">
      {children}
    </a>
  ),
}));

// 最小限のテスト実装
describe("Footer", () => {
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
      const { container } = render(<Footer />);
      expect(container).toBeInTheDocument();
    }).not.toThrow();
  });
});
