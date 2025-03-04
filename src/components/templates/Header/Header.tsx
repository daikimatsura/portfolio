"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/atoms/Button";
import { Menu, X, Github } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import { gradientText } from "@/lib/styles";
import { cn } from "@/lib/utils";

/**
 * アプリケーションのヘッダーコンポーネント
 * ナビゲーションリンク、テーマトグル、モバイルメニューを含む
 */
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // スクロール検出
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "About me", href: "#about-me" },
    { name: "Blogs", href: "#blogs" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact", isButton: true },
  ];

  // ナビゲーション項目のレンダリング
  const renderNavItems = () => {
    if (!isHomePage) return null;

    return navItems.map((item, index) => (
      <motion.div
        key={item.name}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
      >
        {item.isButton ? (
          <Button
            gradient
            className="text-white font-medium rounded-xl shadow-lg"
            asChild
          >
            <Link
              href={item.href}
              className="flex items-center justify-center w-full h-full px-4 py-2"
            >
              {item.name}
            </Link>
          </Button>
        ) : (
          <Link
            href={item.href}
            className="text-foreground hover:text-primary transition-colors relative group"
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        )}
      </motion.div>
    ));
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md py-2 shadow-lg border-b border-border"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link href="/">
              <span className={cn("text-xl font-bold", gradientText)}>
                Daiki Matsuura
              </span>
            </Link>
          </motion.div>

          {/* モバイルメニューボタン */}
          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="https://github.com/daikimatsura"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            {isHomePage && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </motion.button>
            )}
          </div>

          {/* デスクトップメニュー */}
          <div className="hidden lg:flex items-center space-x-8">
            {renderNavItems()}

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Link
                href="https://github.com/daikimatsura"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {isMenuOpen && isHomePage && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-background/90 backdrop-blur-md border-t border-border"
          >
            <div className="container mx-auto px-6 py-6 space-y-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {item.isButton ? (
                    <Button
                      gradient
                      className="w-full text-white font-medium rounded-xl shadow-lg"
                      asChild
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center justify-center w-full h-full px-4 py-2"
                      >
                        {item.name}
                      </Link>
                    </Button>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;
