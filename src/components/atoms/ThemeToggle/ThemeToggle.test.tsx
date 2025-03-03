import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "@/hooks/useTheme";
import "@testing-library/jest-dom";

// useThemeフックをモック
jest.mock("@/hooks/useTheme", () => ({
  useTheme: jest.fn(),
}));

describe("ThemeToggle", () => {
  const mockSetTheme = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("ライトモード時に月アイコンが表示され、クリックするとダークモードに切り替わる", () => {
    // useThemeフックのモック実装
    (useTheme as jest.Mock).mockReturnValue({
      theme: "light",
      setTheme: mockSetTheme,
    });

    render(<ThemeToggle />);

    // 月アイコンが表示されていることを確認
    expect(screen.getByLabelText("ダークモードに切り替え")).toBeInTheDocument();

    // ボタンをクリック
    fireEvent.click(screen.getByRole("button"));

    // setThemeがdarkで呼ばれたことを確認
    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });

  it("ダークモード時に太陽アイコンが表示され、クリックするとシステムモードに切り替わる", () => {
    // useThemeフックのモック実装
    (useTheme as jest.Mock).mockReturnValue({
      theme: "dark",
      setTheme: mockSetTheme,
    });

    render(<ThemeToggle />);

    // 太陽アイコンが表示されていることを確認
    expect(
      screen.getByLabelText("システムテーマに切り替え")
    ).toBeInTheDocument();

    // ボタンをクリック
    fireEvent.click(screen.getByRole("button"));

    // setThemeがsystemで呼ばれたことを確認
    expect(mockSetTheme).toHaveBeenCalledWith("system");
  });

  it("システムモード時にモニターアイコンが表示され、クリックするとライトモードに切り替わる", () => {
    // useThemeフックのモック実装
    (useTheme as jest.Mock).mockReturnValue({
      theme: "system",
      setTheme: mockSetTheme,
    });

    render(<ThemeToggle />);

    // モニターアイコンが表示されていることを確認
    expect(screen.getByLabelText("ライトモードに切り替え")).toBeInTheDocument();

    // ボタンをクリック
    fireEvent.click(screen.getByRole("button"));

    // setThemeがlightで呼ばれたことを確認
    expect(mockSetTheme).toHaveBeenCalledWith("light");
  });
});
