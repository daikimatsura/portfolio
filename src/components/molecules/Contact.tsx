"use client";

import { Button } from "@/components/atoms/Button";
import { Clock, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  // const socialLinks = [
  //   {
  //     name: "GitHub",
  //     icon: <Github className="w-5 h-5" />,
  //     url: "https://github.com/daikimatsura",
  //     color: "hover:text-white hover:bg-gray-800",
  //   },
  //   {
  //     name: "LinkedIn",
  //     icon: <Linkedin className="w-5 h-5" />,
  //     url: "#",
  //     color: "hover:text-white hover:bg-blue-600",
  //   },
  //   {
  //     name: "Email",
  //     icon: <Mail className="w-5 h-5" />,
  //     url: "#",
  //     color: "hover:text-white hover:bg-green-600",
  //   },
  // ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* 背景のグラデーションエフェクト */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20" />

      {/* デコレーション要素 */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute -left-4 -top-4 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -right-4 -bottom-4 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>

      <div className="container relative mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* ヘッダー部分 */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            >
              <div className="relative">
                <div className="absolute inset-0 animate-ping rounded-full bg-blue-400/20" />
                <div className="relative bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full p-5 backdrop-blur-sm border border-blue-500/30">
                  <Mail className="w-8 h-8 text-blue-700 dark:text-blue-400" />
                </div>
              </div>
            </motion.div>
            <motion.h2
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-800 to-purple-800 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              お問い合わせ
            </motion.h2>
            <motion.p
              className="text-foreground text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              現在、お問い合わせフォームを準備中です。
              <br />
              {/* 下記のソーシャルリンクからご連絡いただけます。 */}
            </motion.p>
          </motion.div>

          {/* ソーシャルリンク */}
          {/* <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              >
                <Link href={link.url} target="_blank" className="block">
                  <div
                    className={`bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex items-center justify-center transition-colors ${link.color}`}
                  >
                    <div className="flex flex-col items-center">
                      <div className="mb-3">{link.icon}</div>
                      <span className="font-medium">{link.name}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div> */}

          {/* ステータス表示 */}
          <motion.div
            className="bg-gradient-to-br from-card/80 to-card backdrop-blur-xl rounded-2xl p-8 border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Clock className="w-5 h-5 text-blue-700 dark:text-blue-400 animate-pulse" />
              <span className="text-blue-800 dark:text-blue-400 font-medium">
                お問い合わせフォーム準備中
              </span>
            </div>

            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-blue-700/50 to-purple-700/50 hover:from-blue-700/70 hover:to-purple-700/70 transition-colors duration-300 backdrop-blur-sm"
              disabled
            >
              <div className="flex items-center justify-center space-x-2">
                <span>Coming Soon</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
              </div>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
