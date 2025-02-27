"use client";

import React from "react";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun, Monitor } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 bg-secondary/30 hover:bg-secondary/50 transition-colors border border-border"
      aria-label={
        theme === "light"
          ? "ダークモードに切り替え"
          : theme === "dark"
            ? "システムテーマに切り替え"
            : "ライトモードに切り替え"
      }
    >
      {theme === "light" && <Moon className="h-5 w-5 text-foreground" />}
      {theme === "dark" && <Sun className="h-5 w-5 text-foreground" />}
      {theme === "system" && <Monitor className="h-5 w-5 text-foreground" />}
      <span className="sr-only">
        {theme === "light"
          ? "ダークモードに切り替え"
          : theme === "dark"
            ? "システムテーマに切り替え"
            : "ライトモードに切り替え"}
      </span>
    </button>
  );
}
