import React from "react";
import { renderHook, act } from "@testing-library/react";
import { ThemeProvider, useTheme } from "@/hooks/useTheme";
import "@testing-library/jest-dom";

// localStorageのモック
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value;
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();

// window.matchMediaのモック
const matchMediaMock = (matches: boolean) => {
  return jest.fn().mockImplementation((query) => ({
    matches,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
};

describe("useTheme", () => {
  // テスト前の設定
  beforeEach(() => {
    // localStorageのモックを設定
    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
      writable: true,
    });

    // テスト前にlocalStorageをクリア
    localStorageMock.clear();

    // window.matchMediaのモックを設定（デフォルトはダークモード）
    window.matchMedia = matchMediaMock(true);

    // documentのモック
    document.documentElement.classList.remove("light", "dark");
  });

  it("ThemeProviderなしで使用するとエラーがスローされる", () => {
    // エラーメッセージをキャプチャするためにconsole.errorをモック
    const originalError = console.error;
    console.error = jest.fn();

    // useThemeフックを直接使用するとエラーがスローされることを確認
    expect(() => {
      renderHook(() => useTheme());
    }).toThrow("useTheme must be used within a ThemeProvider");

    // console.errorを元に戻す
    console.error = originalError;
  });

  it("デフォルトではダークテーマが設定される", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    expect(result.current.theme).toBe("dark");
  });

  it("テーマを変更できる", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    // 初期状態はdark
    expect(result.current.theme).toBe("dark");

    // テーマをlightに変更
    act(() => {
      result.current.setTheme("light");
    });

    // テーマがlightに変更されたことを確認
    expect(result.current.theme).toBe("light");

    // localStorageに保存されたことを確認
    expect(localStorageMock.setItem).toHaveBeenCalledWith("theme", "light");

    // documentのクラスが更新されたことを確認
    expect(document.documentElement.classList.contains("light")).toBe(true);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("システムテーマに設定するとシステムの設定に従う（ダークモード）", () => {
    // システムがダークモードの場合
    window.matchMedia = matchMediaMock(true);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    // テーマをsystemに変更
    act(() => {
      result.current.setTheme("system");
    });

    // テーマがsystemに変更されたことを確認
    expect(result.current.theme).toBe("system");

    // documentのクラスがdarkに設定されたことを確認
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(document.documentElement.classList.contains("light")).toBe(false);
  });

  it("システムテーマに設定するとシステムの設定に従う（ライトモード）", () => {
    // システムがライトモードの場合
    window.matchMedia = matchMediaMock(false);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    // テーマをsystemに変更
    act(() => {
      result.current.setTheme("system");
    });

    // テーマがsystemに変更されたことを確認
    expect(result.current.theme).toBe("system");

    // documentのクラスがlightに設定されたことを確認
    expect(document.documentElement.classList.contains("light")).toBe(true);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("localStorageに保存されたテーマが読み込まれる", () => {
    // localStorageにテーマを設定
    localStorageMock.getItem.mockReturnValueOnce("light");

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    // localStorageから読み込まれたテーマがlightであることを確認
    expect(result.current.theme).toBe("light");
  });
});
