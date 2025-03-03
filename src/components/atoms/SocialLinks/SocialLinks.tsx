import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github } from "lucide-react";

export interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color?: string;
}

export interface SocialLinksProps {
  links?: SocialLink[];
  className?: string;
  iconSize?: number;
  variant?: "icon-only" | "with-text" | "button";
  direction?: "row" | "column";
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  links,
  className,
  iconSize = 20,
  variant = "icon-only",
  direction = "row",
}) => {
  // デフォルトのリンク（GitHubのみ）
  const defaultLinks: SocialLink[] = [
    {
      name: "GitHub",
      icon: <Github size={iconSize} />,
      url: "https://github.com/matsuura-ritsuki",
      color: "text-white",
    },
  ];

  const socialLinks = links || defaultLinks;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={cn(
        "flex gap-4",
        direction === "column" ? "flex-col" : "flex-row",
        className
      )}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {socialLinks.map((link) => (
        <motion.div key={link.name} variants={item}>
          {variant === "button" ? (
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-md",
                "bg-gray-800 hover:bg-gray-700 transition-colors",
                link.color
              )}
              aria-label={`${link.name}を開く`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ) : (
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-2",
                "hover:text-blue-400 transition-colors",
                link.color
              )}
              aria-label={`${link.name}を開く`}
            >
              {link.icon}
              {variant === "with-text" && <span>{link.name}</span>}
            </Link>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
