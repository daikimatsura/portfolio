"use client";

import BlogCard from "@/components/molecules/BlogCard";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Blogs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
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
    <section id="blogs" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">My Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              ref={ref}
              animate={control}
              initial="hidden"
              variants={{
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: index * 0.2,
                    type: "spring",
                  },
                },
                hidden: {
                  y: 30,
                  opacity: 0,
                },
              }}
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
