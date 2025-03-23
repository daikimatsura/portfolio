import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Blogs = () => {
  return (
    <section id="blogs" className="py-20 relative overflow-hidden">
      {/* 装飾要素 */}
      <div className="absolute -top-40 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 inline-block relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 dark:from-blue-400 dark:to-purple-400">
              技術ブログ
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-800 to-purple-800 dark:from-blue-400 dark:to-purple-400 rounded-full" />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            技術的な知見や経験を共有するために執筆したブログ記事です。
            <br />
            主にフロントエンド開発やAWSサービスに関する内容を発信しています。
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center "
        >
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
          >
            <span>ブログ記事一覧</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
