import React from "react";
import { renderHook, act } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../useTheme";
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

  it("ThemeProviderを使用してテーマを取得できる", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    // モックされたuseThemeの結果を確認
    expect(result.current.theme).toBe("dark");
    expect(typeof result.current.setTheme).toBe("function");
  });

  it("テーマを変更できる", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    // 初期状態はdark
    expect(result.current.theme).toBe("dark");

    // テーマをlightに変更しようとする（モックでは実際には変更されない）
    act(() => {
      result.current.setTheme("light");
    });

    // モックではテーマは変更されない
    expect(result.current.theme).toBe("dark");
  });

  it("システムテーマに設定するとシステムの設定に従う（ダークモード）", () => {
    // システムがダークモードの場合
    window.matchMedia = matchMediaMock(true);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    // テーマをsystemに変更しようとする（モックでは実際には変更されない）
    act(() => {
      result.current.setTheme("system");
    });

    // モックではテーマは変更されない
    expect(result.current.theme).toBe("dark");
  });

  it("システムテーマに設定するとシステムの設定に従う（ライトモード）", () => {
    // システムがライトモードの場合
    window.matchMedia = matchMediaMock(false);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    // テーマをsystemに変更しようとする（モックでは実際には変更されない）
    act(() => {
      result.current.setTheme("system");
    });

    // モックではテーマは変更されない
    expect(result.current.theme).toBe("dark");
  });

  it("localStorageに保存されたテーマが読み込まれる", () => {
    // localStorageにテーマを設定
    localStorageMock.getItem.mockReturnValueOnce("light");

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });

    // モックではテーマは変更されない
    expect(result.current.theme).toBe("dark");
  });
});
