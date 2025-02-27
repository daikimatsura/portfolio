"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import About from "@/components/molecules/About";
import Blogs from "@/components/organisms/Blogs";
import Skills from "@/components/organisms/Skills";
import Contact from "@/components/molecules/Contact";

const Home = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // スクロールインジケーターの表示/非表示を制御
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative">
        <About />

        {/* スクロールインジケーター */}
        <AnimatePresence>
          {showScrollIndicator && (
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-muted-foreground text-sm mb-2">
                スクロールして続きを見る
              </span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ChevronDown className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* コンテンツセクション */}
      <div className="space-y-0">
        <Blogs />
        <Skills />
        <Contact />
      </div>
    </>
  );
};

export default Home;
