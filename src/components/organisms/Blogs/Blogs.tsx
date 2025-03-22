"use client";

import { BlogCard } from "@/components/molecules/BlogCard";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Blogs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const control = useAnimation();

  const blogs = [
    {
      id: 1,
      title:
        "Next.jsでAmazon Connectの標準CCPを埋め込み動的データを取得する方法",
      tags: ["Next.js", "TypeScript", "Amazon Connect"],
      link: "https://www.geekfeed.co.jp/geekblog/nextjs-amazon-connect/",
      image: "/blog1.png",
    },
    {
      id: 2,
      title: "AWS Bedrockを活用したAI生成テキスト評価と再生成の実装技法",
      tags: ["Amazon Bedrock", "TypeScript", "Gen AI"],
      link: "https://www.geekfeed.co.jp/geekblog/amazon-bedrock-review-logic",
      image: "/blog2.png",
    },
    {
      id: 3,
      title: "Twilio Flex v2.x.x系でLINE連携を実装する方法",
      tags: ["Twilio", "LINE"],
      link: "https://www.geekfeed.co.jp/geekblog/twilio-flex-v2-line/",
      image: "/blog3.png",
    },
    {
      id: 4,
      title: "ブログ一覧",
      tags: [],
      link: "https://www.geekfeed.co.jp/author/matsura/",
    },
  ];

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

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
            主にフロントエンド開発やAWSサービスに関する内容を発信しています。
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center m-32"
        >
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors"
          >
            <span>サイト内の記事を見る</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              ref={index === 0 ? ref : undefined}
              custom={index}
              animate={control}
              initial="hidden"
              variants={{
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.2,
                    duration: 0.5,
                    ease: "easeOut",
                  },
                }),
                hidden: { opacity: 0, y: 50 },
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
