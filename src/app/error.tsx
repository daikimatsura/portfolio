"use client";

import { useEffect } from "react";
import { Button } from "@/components/atoms/Button";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { errorCardBg, errorIconBg, errorText } from "@/lib/styles";
import { cn } from "@/lib/utils";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <motion.div
        className={cn(errorCardBg, "max-w-md w-full p-8 rounded-xl")}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <motion.div
            className={cn(errorIconBg, "mb-6 mx-auto")}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 0.2,
            }}
          >
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </motion.div>

          <motion.h2
            className={cn(errorText, "text-2xl font-bold mb-3")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            エラーが発生しました
          </motion.h2>

          <motion.p
            className="text-foreground dark:text-gray-400 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            申し訳ありませんが、ページの読み込み中に問題が発生しました。
            もう一度お試しいただくか、後ほどアクセスしてください。
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button onClick={reset} gradient>
              <RefreshCw className="mr-2 h-4 w-4" />
              再読み込み
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
