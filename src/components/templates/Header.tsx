"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/atoms/Button";
import { Menu, X, Github } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md py-2 shadow-lg"
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
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Daiki Matsuura
              </span>
            </Link>
          </motion.div>

          {pathname === "/" && (
            <>
              {/* モバイルメニューボタン */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="lg:hidden text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </motion.button>

              {/* デスクトップメニュー */}
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    {item.isButton ? (
                      <Button
                        variant="outline"
                        className="border-gray-700 text-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 shadow-md rounded-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600"
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </Button>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-gray-300 hover:text-blue-400 transition-colors relative group"
                      >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <Link
                    href="https://github.com/daikimatsura"
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* モバイルメニュー */}
      {pathname === "/" && (
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden w-full bg-black/90 backdrop-blur-md border-t border-gray-800"
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
                        variant="outline"
                        className="w-full border-gray-700 text-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white bg-gradient-to-r from-blue-600 to-purple-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </Button>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-gray-300 hover:text-blue-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="pt-4 border-t border-gray-800 flex justify-center"
                >
                  <Link
                    href="https://github.com/daikimatsura"
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.nav>
  );
};

export default Header;
