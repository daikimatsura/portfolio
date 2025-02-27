"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  icon?: ReactNode;
}

/**
 * セクションタイトルコンポーネント
 *
 * グラデーションテキストとアンダーラインを持つセクションタイトル
 *
 * @param title メインタイトル
 * @param subtitle サブタイトル（オプション）
 * @param align テキストの配置（デフォルトはcenter）
 * @param className 追加のクラス名
 * @param icon タイトルの前に表示するアイコン（オプション）
 */
const SectionTitle = ({
  title,
  subtitle,
  align = "center",
  className = "",
  icon,
}: SectionTitleProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <motion.div
      className={`mb-16 ${alignmentClasses[align]} ${className}`}
      {...fadeInUp}
    >
      <h2 className="text-4xl font-bold mb-4 inline-block relative">
        {icon && <span className="mr-2">{icon}</span>}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          {title}
        </span>
        <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
      </h2>
      {subtitle && (
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
