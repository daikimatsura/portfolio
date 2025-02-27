"use client";

import { Button } from "@/components/atoms/Button";
import { ArrowRight, Github, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about-me"
      className="relative min-h-[calc(100vh-20px)] flex items-center justify-center bg-grid-white/[0.02] overflow-hidden"
    >
      {/* 背景エフェクト */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />

      {/* 装飾要素 */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
              >
                Software Engineer
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                daiki matsuura
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-gray-300 text-lg md:text-xl max-w-lg mb-8 leading-relaxed"
            >
              フロントエンド開発とAWSインフラ構築を専門とするソフトウェアエンジニアです。
              ユーザー体験を向上させる革新的なソリューションの開発に情熱を持っています。
              <span className="block mt-2 text-blue-400">
                React、Next.js、TypeScript、AWS
                CDKを活用したプロジェクト開発が得意です。
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg">
                <Link href="/job-history" className="flex items-center">
                  職務経歴を見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="bg-white/5 backdrop-blur-sm border-gray-700 hover:bg-white/10"
              >
                <Link
                  href="/introduction-this-site"
                  className="flex items-center"
                >
                  このサイトについて
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex gap-4 mt-8"
            >
              <Link
                href="https://github.com/daikimatsura"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="#contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-md" />
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className="font-mono text-sm text-gray-300">
                  <code>
                    <span className="text-blue-400">const</span>{" "}
                    <span className="text-green-400">developer</span> = {"{"}
                    <br />
                    {"  "}name:{" "}
                    <span className="text-yellow-300">'daiki matsuura'</span>,
                    <br />
                    {"  "}role:{" "}
                    <span className="text-yellow-300">'Software Engineer'</span>
                    ,
                    <br />
                    {"  "}skills: [
                    <span className="text-yellow-300">'React'</span>,{" "}
                    <span className="text-yellow-300">'Next.js'</span>,{" "}
                    <span className="text-yellow-300">'TypeScript'</span>,{" "}
                    <span className="text-yellow-300">'AWS'</span>],
                    <br />
                    {"  "}loves:{" "}
                    <span className="text-yellow-300">
                      'Creating innovative solutions'
                    </span>
                    <br />
                    {"}"};
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
