"use client";

import React from "react";

interface MultiLineTextProps {
  text: string;
  className?: string;
}

/**
 * 複数行テキスト表示コンポーネント
 *
 * 改行を含むテキストを複数行で表示するコンポーネント
 *
 * @param text 表示するテキスト（改行を含む）
 * @param className 追加のクラス名
 */
const MultiLineText = ({
  text,
  className = "text-foreground dark:text-gray-300",
}: MultiLineTextProps) => (
  <div className={className}>
    {text.split("\n").map((line, index) => (
      <p key={index} className="mb-1">
        {line}
      </p>
    ))}
  </div>
);

export default MultiLineText;
