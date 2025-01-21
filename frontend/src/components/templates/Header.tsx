"use client";
import { useState } from "react";
import { Button } from "@/components/atoms/Button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 bg-black/80 backdrop-blur-md`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <span className="text-xl font-bold font-serif">Portfolio Site</span>
          </Link>

          {pathname === "/" && (
            <>
              {/* モバイルメニューボタン */}
              <button
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>

              {/* デスクトップメニュー */}
              <div className="hidden lg:flex items-center space-x-8">
                <Link
                  href="#about-me"
                  className="hover:text-blue-400 transition-colors"
                >
                  About me
                </Link>
                <Link
                  href="#blogs"
                  className="hover:text-blue-400 transition-colors"
                >
                  Blogs
                </Link>
                <Link
                  href="#skills"
                  className="hover:text-blue-400 transition-colors"
                >
                  Skills
                </Link>
                <Button
                  variant="outline"
                  className="border-gray-800 text-gray-300 hover:bg-purple-800 hover:text-gray-300 shadow-md rounded-lg font-semibold bg-purple-600"
                >
                  <Link href="#contact">Contact</Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* モバイルメニュー */}
      {pathname === "/" && (
        <>
          <div
            className={`lg:hidden absolute w-full bg-transparent backdrop-blur-md transition-all duration-300 ${
              isMenuOpen ? "max-h-64" : "max-h-0 overflow-hidden"
            }`}
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              <Link
                href="#about"
                className="block hover:text-blue-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="#blogs"
                className="block hover:text-blue-400 transition-colors"
              >
                Blogs
              </Link>
              <Link
                href="#skills"
                className="block hover:text-blue-400 transition-colors"
              >
                Skills
              </Link>
              <Button
                variant="outline"
                className="w-full border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              >
                Contact
              </Button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
