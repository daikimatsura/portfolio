"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/organisms/ContactForm";
import { Mail } from "lucide-react";
import { fadeInUp } from "@/lib/animations/variants";

// フォームコンテナのアニメーション
const formAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={fadeInUp.hidden}
            animate={fadeInUp.visible}
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
                  <Mail
                    className="w-8 h-8 text-blue-700 dark:text-blue-400"
                    data-testid="mail-icon"
                    aria-hidden="true"
                  />
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
              ご質問やお仕事のご依頼など、お気軽にお問い合わせください。
              <br />
              下記のフォームからメッセージを送信いただけます。
            </motion.p>
          </motion.div>

          {/* コンタクトフォーム */}
          <motion.div
            className="bg-gradient-to-br from-card/80 to-card backdrop-blur-xl rounded-2xl p-8 border border-border"
            initial={formAnimation.initial}
            animate={formAnimation.animate}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
