"use client";

import {
  Button as ShadcnButton,
  ButtonProps as ShadcnButtonProps,
} from "@/components/ui/button";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { gradientButtonBg } from "@/lib/styles";

export interface ButtonProps extends ShadcnButtonProps {
  // 追加のプロパティがあれば定義
  gradient?: boolean; // グラデーションスタイルを適用するかどうか
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, gradient = false, ...props }, ref) => {
    // デフォルトのスタイルを適用
    return (
      <ShadcnButton
        className={cn(
          // ここにデフォルトのスタイルを追加
          gradient && [gradientButtonBg, "text-white font-medium rounded-xl"],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
