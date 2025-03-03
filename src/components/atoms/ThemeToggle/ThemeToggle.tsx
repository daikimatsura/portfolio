import React from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export const ThemeToggle: React.FC = () => {
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
      className="p-2 rounded-md hover:bg-gray-800/50 transition-colors"
      aria-label={
        theme === "light"
          ? "ダークモードに切り替え"
          : theme === "dark"
            ? "システムテーマに切り替え"
            : "ライトモードに切り替え"
      }
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Monitor className="h-5 w-5" />
      )}
      <span className="sr-only">
        {theme === "light"
          ? "ダークモードに切り替え"
          : theme === "dark"
            ? "システムテーマに切り替え"
            : "ライトモードに切り替え"}
      </span>
    </button>
  );
};

export default ThemeToggle;
