"use client";

import { motion } from "framer-motion";
import { loadingBg, loadingText } from "@/lib/styles";
import { cn } from "@/lib/utils";

export default function Loading() {
  return (
    <div
      className={cn(
        loadingBg,
        "fixed inset-0 flex items-center justify-center z-50"
      )}
    >
      <div className="text-center">
        <motion.div
          className="relative w-24 h-24 mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* ローディングアニメーション */}
          <motion.div
            className="absolute inset-0 rounded-full border-t-2 border-blue-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-r-2 border-purple-500"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              DM
            </span>
          </motion.div>
        </motion.div>

        <motion.p
          className={cn(loadingText, "text-sm")}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          読み込み中...
        </motion.p>
      </div>
    </div>
  );
}
