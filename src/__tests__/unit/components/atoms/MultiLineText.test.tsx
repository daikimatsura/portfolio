import React from "react";
import { render } from "@testing-library/react";
import MultiLineText from "@/components/atoms/MultiLineText";
import "@testing-library/jest-dom";

describe("MultiLineText", () => {
  it("コンポーネントがクラッシュせずにレンダリングされる", () => {
    // 最も基本的なテスト - コンポーネントがエラーなくレンダリングされるか
    const { container } = render(<MultiLineText text="テスト" />);

    // コンテナが存在することを確認
    expect(container).toBeTruthy();

    // コンテナ内にテキストが含まれていることを確認
    expect(container.textContent).toContain("テスト");
  });
});
