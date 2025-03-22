"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TableOfContentsProps {
  contentRef: React.RefObject<HTMLDivElement | null>;
  setIsTocOpen?: (isOpen: boolean) => void;
}

interface Heading {
  id: string;
  text: string;
  level: number;
}

export const TableOfContents = ({
  contentRef,
  setIsTocOpen,
}: TableOfContentsProps) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  // 記事内の見出し要素を取得
  useEffect(() => {
    if (!contentRef.current) {
      console.log("contentRef.current is null");
      return;
    }

    const contentElement = contentRef.current;
    console.log("コンテンツ要素:", contentElement);

    // すべての見出し要素を含むセレクタを使用
    const headingElements = Array.from(
      contentElement.querySelectorAll("h1, h2, h3, h4, h5, h6")
    );

    console.log("見出し要素の数:", headingElements.length);
    console.log(
      "見出し要素のタグ名:",
      headingElements.map((h) => h.tagName)
    );
    console.log(
      "見出し要素のテキスト:",
      headingElements.map((h) => h.textContent)
    );
    console.log(
      "見出し要素のID:",
      headingElements.map((h) => h.id)
    );

    // 見出し情報を抽出
    const allHeadingsData = headingElements.map((heading) => {
      // 見出しにIDがない場合は自動的に付与
      if (!heading.id) {
        const text = heading.textContent || "";
        // 日本語文字を保持したまま、空白をハイフンに変換
        // 特殊文字（記号など）は削除
        const generatedId = text
          .toLowerCase()
          .trim()
          .replace(/[\s\t\n]+/g, "-") // 空白文字をハイフンに置換
          .replace(/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g, "") // 特殊記号を削除
          .replace(/-+/g, "-") // 連続するハイフンを単一のハイフンに
          .replace(/^-|-$/g, ""); // 先頭と末尾のハイフンを削除

        // IDが空文字列の場合は、見出しのレベルとタイムスタンプでユニークなIDを生成
        const finalId =
          generatedId ||
          `heading-${heading.tagName.toLowerCase()}-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;

        heading.id = finalId;
        console.log(`IDを生成: "${text}" -> "${finalId}"`);
      }

      const id = heading.id;
      const text = heading.textContent?.trim() || "";
      const level = parseInt(heading.tagName.charAt(1));

      return { id, text, level };
    });

    console.log("フィルター前の全見出し:", allHeadingsData);

    // フィルタリングを段階的に適用
    const nonEmptyHeadings = allHeadingsData.filter(
      (heading) => heading.id && heading.text
    );
    console.log("空でない見出し:", nonEmptyHeadings);

    const finalHeadings = nonEmptyHeadings.filter(
      (heading) => !heading.text.match(/^目次$/i)
    );
    console.log("最終的な見出し:", finalHeadings);

    setHeadings(finalHeadings);

    // IntersectionObserverを設定
    const observerOptions = {
      rootMargin: "-80px 0px -70% 0px",
      threshold: [0.1, 0.5, 0.9],
    };

    const headingObserver = new IntersectionObserver((entries) => {
      // 画面に表示されている見出し要素を収集
      const visibleHeadings = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target.id);

      // 表示されている見出しがある場合、最初の見出しをアクティブに設定
      if (visibleHeadings.length > 0) {
        setActiveId(visibleHeadings[0]);
      }
    }, observerOptions);

    // 各見出し要素を監視
    headingElements.forEach((heading) => {
      if (heading.id) {
        headingObserver.observe(heading);
      }
    });

    return () => {
      headingElements.forEach((heading) => {
        if (heading.id) {
          headingObserver.unobserve(heading);
        }
      });
    };
  }, [contentRef]);

  if (headings.length === 0) {
    console.log("見出しが見つかりませんでした");
    return null;
  }

  return (
    <nav className="w-full">
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={cn(
              "transition-colors",
              heading.level === 1 && "mt-3 font-semibold",
              heading.level === 2 && "font-medium",
              heading.level === 3 && "pl-3",
              heading.level === 4 && "pl-5 text-sm",
              heading.level >= 5 && "pl-6 text-xs"
            )}
          >
            <a
              href={`#${heading.id}`}
              className={cn(
                "block py-1.5 border-l-2 pl-3 hover:text-primary transition-colors",
                activeId === heading.id
                  ? "border-primary text-primary font-medium bg-primary/5"
                  : "border-transparent text-muted-foreground"
              )}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(heading.id);
                if (element) {
                  // スムーズスクロール
                  window.scrollTo({
                    top: element.offsetTop - 100, // ヘッダーの高さを考慮
                    behavior: "smooth",
                  });
                  // URLのハッシュを更新
                  history.pushState(null, "", `#${heading.id}`);
                  // アクティブIDを設定
                  setActiveId(heading.id);
                  // モバイルの目次を閉じる
                  setIsTocOpen && setIsTocOpen(false);
                }
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
