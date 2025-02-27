import { renderHook, act } from "@testing-library/react";
import { useAnimationInView } from "./useAnimationInView";

// モックの設定
const mockStart = jest.fn();
const mockInView = jest.fn();
const mockUseInView = jest.fn();
const mockUseAnimation = jest.fn();

// オプションの型定義
type UseInViewOptions = {
  triggerOnce?: boolean;
  threshold?: number;
};

jest.mock("react-intersection-observer", () => ({
  useInView: (options: UseInViewOptions) => mockUseInView(options),
}));

jest.mock("framer-motion", () => ({
  useAnimation: () => mockUseAnimation(),
}));

describe("useAnimationInView", () => {
  beforeEach(() => {
    mockStart.mockClear();
    mockInView.mockClear();
    mockUseInView.mockClear();
    mockUseAnimation.mockClear();

    // デフォルトのモック実装を設定
    mockUseInView.mockImplementation((options: UseInViewOptions) => {
      mockInView(options?.triggerOnce, options?.threshold);
      return {
        ref: { current: null },
        inView: false,
        entry: null,
      };
    });

    mockUseAnimation.mockImplementation(() => ({
      start: mockStart,
      stop: jest.fn(),
    }));
  });

  it("should return ref, controls and inView", () => {
    const { result } = renderHook(() => useAnimationInView());

    expect(result.current).toHaveProperty("ref");
    expect(result.current).toHaveProperty("controls");
    expect(result.current).toHaveProperty("inView");
  });

  it("should call useInView with default parameters", () => {
    renderHook(() => useAnimationInView());

    expect(mockInView).toHaveBeenCalledWith(true, 0.1);
  });

  it("should call useInView with custom parameters", () => {
    renderHook(() => useAnimationInView(0.5, false));

    expect(mockInView).toHaveBeenCalledWith(false, 0.5);
  });

  it("should start animation when element comes into view", () => {
    // 初期状態ではinViewはfalse
    mockUseInView.mockImplementationOnce((options: UseInViewOptions) => {
      mockInView(options?.triggerOnce, options?.threshold);
      return {
        ref: { current: null },
        inView: false,
        entry: null,
      };
    });

    const { rerender } = renderHook(() => useAnimationInView());

    // アニメーションはまだ開始されていない
    expect(mockStart).not.toHaveBeenCalled();

    // 要素が表示される状態に変更
    mockUseInView.mockImplementationOnce((options: UseInViewOptions) => {
      mockInView(options?.triggerOnce, options?.threshold);
      return {
        ref: { current: null },
        inView: true,
        entry: null,
      };
    });

    // フックを再レンダリング
    rerender();

    // アニメーションが開始された
    expect(mockStart).toHaveBeenCalled();
  });

  // 注: 実際のテストでは、IntersectionObserverのモックをより詳細に設定し、
  // 要素が表示されたときのアニメーション開始などをテストする必要があります。
});
