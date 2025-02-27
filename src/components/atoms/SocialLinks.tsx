"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

// ソーシャルリンクの型定義
export interface SocialLink {
  name: string;
  icon: ReactNode;
  url: string;
  color?: string;
}

interface SocialLinksProps {
  links?: SocialLink[];
  className?: string;
  iconSize?: "sm" | "md" | "lg";
  variant?: "icon-only" | "with-text" | "button";
  direction?: "row" | "column";
}

/**
 * ソーシャルリンクコンポーネント
 *
 * 複数のソーシャルメディアリンクを表示するコンポーネント
 *
 * @param links ソーシャルリンクの配列（デフォルトはGitHubのみ）
 * @param className 追加のクラス名
 * @param iconSize アイコンのサイズ（デフォルトはmd）
 * @param variant 表示バリエーション（デフォルトはicon-only）
 * @param direction 表示方向（デフォルトはrow）
 */
const SocialLinks = ({
  links,
  className = "",
  iconSize = "md",
  variant = "icon-only",
  direction = "row",
}: SocialLinksProps) => {
  // デフォルトのリンク（GitHubのみ）
  const defaultLinks: SocialLink[] = [
    {
      name: "GitHub",
      icon: <Github />,
      url: "https://github.com/daikimatsura",
    },
  ];

  const socialLinks = links || defaultLinks;

  // アイコンサイズのクラス
  const iconSizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  // 方向のクラス
  const directionClasses = {
    row: "flex space-x-4",
    column: "flex flex-col space-y-4",
  };

  // バリアントに基づくスタイル
  const getItemStyle = (link: SocialLink) => {
    switch (variant) {
      case "with-text":
        return "flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors";
      case "button":
        return `bg-gray-800 p-2 rounded-full text-muted-foreground hover:text-foreground ${
          link.color || "hover:bg-blue-600"
        } transition-colors`;
      case "icon-only":
      default:
        return "text-muted-foreground hover:text-foreground transition-colors";
    }
  };

  return (
    <div className={`${directionClasses[direction]} ${className}`}>
      {socialLinks.map((link, index) => (
        <motion.div
          key={link.name}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
        >
          <Link
            href={link.url}
            target={link.url.startsWith("http") ? "_blank" : undefined}
            className={getItemStyle(link)}
            aria-label={link.name}
          >
            <span className={iconSizeClasses[iconSize]}>{link.icon}</span>
            {variant === "with-text" && <span>{link.name}</span>}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default SocialLinks;
