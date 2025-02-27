"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "gradient" | "secondary";
  size?: "default" | "sm" | "lg";
  animated?: boolean;
}

export const Badge = ({
  children,
  className,
  variant = "default",
  size = "default",
  animated = false,
}: BadgeProps) => {
  const variants = {
    default: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    outline: "bg-transparent border-gray-700 text-gray-300",
    gradient:
      "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30",
    secondary: "bg-gray-800 text-gray-300 border-gray-700",
  };

  const sizes = {
    default: "text-xs px-2.5 py-0.5",
    sm: "text-xs px-2 py-0.5",
    lg: "text-sm px-3 py-1",
  };

  const Component = animated ? motion.span : "span";
  const animationProps = animated
    ? {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.3 },
        whileHover: { scale: 1.05 },
      }
    : {};

  return (
    <Component
      className={cn(
        "inline-flex items-center rounded-full border backdrop-blur-sm font-medium",
        variants[variant],
        sizes[size],
        className
      )}
      {...animationProps}
    >
      {children}
    </Component>
  );
};
