"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GradientBackgroundProps {
  children: ReactNode;
  className?: string;
  withAnimation?: boolean;
}

/**
 * グラデーション背景コンポーネント
 *
 * 装飾的な背景グラデーションとアニメーションを提供するコンポーネント
 *
 * @param children 子要素
 * @param className 追加のクラス名
 * @param withAnimation アニメーションを有効にするかどうか（デフォルトはtrue）
 */
const GradientBackground = ({
  children,
  className = "",
  withAnimation = true,
}: GradientBackgroundProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 背景のグラデーションエフェクト */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/20" />

      {/* デコレーション要素 */}
      {withAnimation ? (
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="absolute -left-4 -top-4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
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
            className="absolute -right-4 -bottom-4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
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
      ) : (
        <>
          <div className="absolute -left-4 -top-4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -right-4 -bottom-4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        </>
      )}

      {/* コンテンツ */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GradientBackground;
