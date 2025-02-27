"use client";

import { motion } from "framer-motion";
import {
  Code,
  Layers,
  Palette,
  Zap,
  Github,
  TestTube,
  Rocket,
  Shield,
  Gauge,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { ReactNode } from "react";

// 型定義
interface Technology {
  name: string;
  description: string;
  icon: ReactNode;
  color: string;
}

// アニメーション設定の共通化
const fadeInUpAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const IntroductionThisSite = () => {
  const technologies: Technology[] = [
    {
      name: "Next.js & React",
      description:
        "モダンなUIとシームレスなユーザー体験を実現するフレームワーク",
      icon: <Zap className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
      color:
        "from-yellow-600/20 to-yellow-700/20 dark:from-yellow-500/20 dark:to-yellow-600/20 border-yellow-600/30 dark:border-yellow-500/30",
    },
    {
      name: "TypeScript",
      description: "型安全性を確保し、開発効率と保守性を向上",
      icon: <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      color:
        "from-blue-600/20 to-blue-700/20 dark:from-blue-500/20 dark:to-blue-600/20 border-blue-600/30 dark:border-blue-500/30",
    },
    {
      name: "Tailwind CSS & Shadcn UI",
      description: "美しく一貫性のあるデザインシステムを構築",
      icon: (
        <Palette className="w-6 h-6 text-purple-600 dark:text-purple-400" />
      ),
      color:
        "from-purple-600/20 to-purple-700/20 dark:from-purple-500/20 dark:to-purple-600/20 border-purple-600/30 dark:border-purple-500/30",
    },
    {
      name: "アトミックデザイン",
      description: "再利用可能で保守性の高いコンポーネント設計",
      icon: <Layers className="w-6 h-6 text-green-600 dark:text-green-400" />,
      color:
        "from-green-600/20 to-green-700/20 dark:from-green-500/20 dark:to-green-600/20 border-green-600/30 dark:border-green-500/30",
    },
    {
      name: "テスト実装",
      description: "Jest & React Testing Libraryによる堅牢なテスト",
      icon: <TestTube className="w-6 h-6 text-red-600 dark:text-red-400" />,
      color:
        "from-red-600/20 to-red-700/20 dark:from-red-500/20 dark:to-red-600/20 border-red-600/30 dark:border-red-500/30",
    },
    {
      name: "CI/CD対応",
      description: "効率的な開発フローと安定したデプロイを実現",
      icon: <Rocket className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
      color:
        "from-orange-600/20 to-orange-700/20 dark:from-orange-500/20 dark:to-orange-600/20 border-orange-600/30 dark:border-orange-500/30",
    },
  ];

  // 実装詳細リスト
  const implementationDetails = [
    {
      title: "App Router",
      description: "Next.jsの最新機能を活用したルーティングシステム",
    },
    {
      title: "サーバーコンポーネント",
      description:
        "パフォーマンスを最適化するためのReactサーバーコンポーネント",
    },
    {
      title: "レスポンシブデザイン",
      description: "あらゆるデバイスで最適な表示を実現",
    },
    {
      title: "アニメーション",
      description: "Framer Motionを使用した滑らかなアニメーション",
    },
    {
      title: "アクセシビリティ",
      description: "Radix UIの機能を活用した高いアクセシビリティ",
    },
  ];

  // 新しい実装ポイント
  const advancedFeatures = [
    {
      title: "パフォーマンス最適化",
      description: "Webバイタルを継続的に計測し、最適なユーザー体験を提供",
      icon: <Gauge className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "テスト自動化",
      description: "単体テスト、統合テスト、E2Eテストによる品質保証",
      icon: <TestTube className="w-6 h-6 text-green-600 dark:text-green-400" />,
    },
    {
      title: "エラーハンドリング",
      description: "統一されたエラー処理とフォールバックUIの実装",
      icon: <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />,
    },
    {
      title: "CI/CD対応",
      description: "ESLintとTypeScriptによる厳格なコード品質管理",
      icon: <Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* 背景のグラデーションエフェクト */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-200/30 dark:to-gray-900/20" />

      {/* デコレーション要素 */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute -left-4 -top-4 w-64 h-64 bg-blue-600/10 dark:bg-blue-500/10 rounded-full blur-3xl"
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
          className="absolute -right-4 -bottom-4 w-64 h-64 bg-purple-600/10 dark:bg-purple-500/10 rounded-full blur-3xl"
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
        <div className="max-w-4xl mx-auto">
          {/* ヘッダー部分 */}
          <motion.div
            className="text-center mb-16"
            {...fadeInUpAnimation}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-800 to-purple-800 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              このサイトについて
            </motion.h1>
            <motion.p
              className="text-foreground dark:text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              このポートフォリオサイトは、私のスキルと経験を紹介するために作成しました。
              <br />
              モダンなWeb技術を活用し、パフォーマンスとユーザー体験を重視した設計になっています。
              <br />
              テスト駆動開発とCI/CD対応により、高品質なコードベースを維持しています。
            </motion.p>
          </motion.div>

          {/* 使用技術セクション */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-8 text-center text-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              使用技術
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className={`bg-gradient-to-br ${tech.color} backdrop-blur-sm border rounded-xl p-6`}
                  {...fadeInUpAnimation}
                  transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start">
                    <div className="bg-gray-100/80 dark:bg-gray-900/50 p-3 rounded-lg mr-4">
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {tech.name}
                      </h3>
                      <p className="text-foreground dark:text-gray-300">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 実装詳細セクション */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-8 text-center text-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.8 }}
            >
              実装詳細
            </motion.h2>
            <motion.div
              className="bg-gray-100/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-8"
              {...fadeInUpAnimation}
              transition={{ delay: 1.9, duration: 0.8 }}
            >
              <ul className="space-y-4 text-foreground">
                {implementationDetails.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-700 dark:text-blue-400 mr-2">
                      •
                    </span>
                    <span>
                      <strong className="text-foreground">
                        {detail.title}
                      </strong>
                      : {detail.description}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* 新しい実装ポイントセクション */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-8 text-center text-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.8 }}
            >
              高度な実装ポイント
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advancedFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-gray-100/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-6"
                  {...fadeInUpAnimation}
                  transition={{ delay: 2.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 dark:from-blue-500/20 dark:to-purple-500/20 p-3 rounded-lg mr-4">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-foreground dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ソースコードリンク */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.8 }}
          >
            <motion.p
              className="text-foreground dark:text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.7, duration: 0.8 }}
            >
              このポートフォリオサイトのソースコードはGitHubで公開しています。
              <br />
              コーディングガイドラインに基づいた一貫性のある実装を確認できます。
            </motion.p>
            <motion.div
              {...fadeInUpAnimation}
              transition={{ delay: 2.8, duration: 0.8 }}
            >
              <Button className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800">
                <Link
                  href="https://github.com/daikimatsura/portfolio"
                  target="_blank"
                  className="flex items-center"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHubでコードを見る
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionThisSite;
