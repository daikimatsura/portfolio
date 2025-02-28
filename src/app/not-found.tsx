"use client";

import { Button } from "@/components/atoms/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";
import { notFoundCardBg, notFoundIconBg, notFoundText } from "@/lib/styles";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <motion.div
        className={cn(notFoundCardBg, "max-w-md w-full p-8 rounded-xl")}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <motion.div
            className="relative w-24 h-24 mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <div className={notFoundIconBg} />
            <div className="relative flex items-center justify-center h-full">
              <span className="text-6xl">🔍</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className={cn(notFoundText, "text-4xl font-bold mb-2")}>404</h2>
            <h3 className="text-xl font-medium mb-4 text-foreground">
              ページが見つかりません
            </h3>
          </motion.div>

          <motion.p
            className="text-foreground dark:text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            お探しのページは存在しないか、移動した可能性があります。
            URLを確認するか、以下のリンクからホームページに戻ってください。
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button asChild gradient>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                ホームに戻る
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="bg-background/5 backdrop-blur-sm border-border hover:bg-background/10"
            >
              <Link href="/#contact">
                <Search className="mr-2 h-4 w-4" />
                お問い合わせ
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
