"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { blueBlurDecoration, purpleBlurDecoration } from "@/lib/styles";
import { cn } from "@/lib/utils";

interface GradientBlurDecorationProps {
  className?: string;
  animate?: boolean;
  children?: ReactNode;
  withBackground?: boolean;
  asContainer?: boolean;
}

/**
 * グラデーションぼかし装飾コンポーネント
 *
 * 青と紫のぼかし効果を持つ装飾要素
 * アニメーション付きまたは静的に表示可能
 * コンテナとしても使用可能
 *
 * @param className 追加のクラス名
 * @param animate アニメーションを適用するかどうか
 * @param children 子要素（コンテナとして使用する場合）
 * @param withBackground 背景グラデーションを適用するかどうか
 * @param asContainer コンテナとして使用するかどうか
 */
const GradientBlurDecoration = ({
  className,
  animate = true,
  children,
  withBackground = false,
  asContainer = false,
}: GradientBlurDecorationProps) => {
  // 装飾要素のレンダリング
  const renderDecoration = () => {
    if (animate) {
      return (
        <motion.div
          className={cn("absolute inset-0 overflow-hidden", className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className={blueBlurDecoration}
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className={purpleBlurDecoration}
            animate={{
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      );
    }

    return (
      <div className={cn("absolute inset-0 overflow-hidden", className)}>
        <div className={blueBlurDecoration} />
        <div className={purpleBlurDecoration} />
      </div>
    );
  };

  // コンテナとして使用する場合
  if (asContainer) {
    return (
      <div className="relative overflow-hidden">
        {/* 背景のグラデーションエフェクト */}
        {withBackground && (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/20" />
        )}

        {/* 装飾要素 */}
        {renderDecoration()}

        {/* コンテンツ */}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  // 装飾要素のみを返す
  return renderDecoration();
};

export default GradientBlurDecoration;
