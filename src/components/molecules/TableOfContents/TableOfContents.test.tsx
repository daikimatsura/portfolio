import { render, screen } from "@testing-library/react";
import { TableOfContents } from "./TableOfContents";

describe("TableOfContents", () => {
  it("should render null when no headings are found", () => {
    // contentRefがnullやheadingsが空の場合はnullを返すためのテスト
    const contentRef = { current: document.createElement("div") };
    const { container } = render(<TableOfContents contentRef={contentRef} />);

    // コンポーネントが何も描画しないことを確認
    expect(container.firstChild).toBeNull();
  });

  it("should extract headings and render them", () => {
    // テスト用のDOM要素を作成
    const contentElement = document.createElement("div");

    // 見出し要素を追加
    const h2 = document.createElement("h2");
    h2.textContent = "見出し1";
    h2.id = "heading1";
    contentElement.appendChild(h2);

    const h3 = document.createElement("h3");
    h3.textContent = "サブ見出し";
    h3.id = "heading2";
    contentElement.appendChild(h3);

    // contentRefを作成
    const contentRef = { current: contentElement };

    // コンポーネントをレンダリング
    render(<TableOfContents contentRef={contentRef} />);

    // 見出しテキストが表示されることを確認
    expect(screen.getByText("見出し1")).toBeInTheDocument();
    expect(screen.getByText("サブ見出し")).toBeInTheDocument();
  });
});
