"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeInUpProps } from "@/lib/animations";
import { gradientText, gradientUnderline } from "@/lib/styles";
import { cn } from "@/lib/utils";

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
      className={cn(`mb-16 ${alignmentClasses[align]}`, className)}
      {...fadeInUpProps}
    >
      <h2 className="text-4xl font-bold mb-4 inline-block relative">
        {icon && <span className="mr-2">{icon}</span>}
        <span className={gradientText}>{title}</span>
        <div className={gradientUnderline} />
      </h2>
      {subtitle && (
        <motion.p
          className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto"
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
