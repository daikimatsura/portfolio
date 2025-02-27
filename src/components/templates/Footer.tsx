// components/layout/Footer.tsx
"use client";

import { Github, Mail, Linkedin, Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// アニメーション設定
const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const fadeInDelayedAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 0.2, duration: 0.5 },
};

// ナビゲーションリンク
const navLinks = [
  { name: "ホーム", path: "/" },
  { name: "職務経歴", path: "/job-history" },
  { name: "このサイトについて", path: "/introduction-this-site" },
];

// // ソーシャルリンク
// const socialLinks = [
//   {
//     name: "GitHub",
//     icon: <Github className="h-5 w-5" />,
//     url: "https://github.com/daikimatsura",
//   },
// ];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-gray-800 overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50" />
      <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* プロフィールセクション */}
          <div>
            <motion.h3
              className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              {...fadeInAnimation}
            >
              Daiki Matsuura
            </motion.h3>
            <motion.p
              className="text-gray-400 text-sm"
              {...fadeInDelayedAnimation}
            >
              フロントエンド開発とAWSネイティブなシステム開発を専門とするソフトウェアエンジニア
            </motion.p>
          </div>

          {/* ナビゲーションリンク */}
          <div>
            <motion.h3
              className="text-lg font-medium mb-4"
              {...fadeInAnimation}
            >
              リンク
            </motion.h3>
            <motion.ul className="space-y-2" {...fadeInDelayedAnimation}>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* ソーシャルリンク */}
          {/* <div>
            <motion.h3
              className="text-lg font-medium mb-4"
              {...fadeInAnimation}
            >
              ソーシャル
            </motion.h3>
            <motion.div className="flex space-x-4" {...fadeInDelayedAnimation}>
              {socialLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div> */}
        </div>

        {/* フッターボトム */}
        <motion.div
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Daiki Matsuura. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
