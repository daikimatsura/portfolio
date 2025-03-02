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
  Cpu,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import React, { ReactNode } from "react";
import { useAccessibleAnimations } from "@/lib/animations";
import {
  gradientText,
  blueIconColor,
  greenIconColor,
  redIconColor,
  purpleIconColor,
  yellowIconColor,
  orangeIconColor,
  cardBg,
  iconBg,
  getTechCardColor,
  gradientIconBg,
} from "@/lib/styles";
import { cn } from "@/lib/utils";
import GradientBlurDecoration from "@/components/atoms/GradientBlurDecoration";
import { useInView } from "react-intersection-observer";
import { useAccessibleVariants } from "@/lib/animations";

// 型定義
interface Technology {
  name: string;
  description: string;
  icon: ReactNode;
  color: string;
}

const IntroductionThisSite = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // アクセシビリティに配慮したアニメーションプロパティを取得
  const { fadeInUpProps: accessibleFadeInUpProps, fadeInProps } =
    useAccessibleAnimations();

  // アクセシビリティに配慮したアニメーションバリアントを取得
  const { staggerContainer: staggerContainerVariants } =
    useAccessibleVariants();

  const technologies: Technology[] = [
    {
      name: "Next.js & React",
      description:
        "モダンなUIとシームレスなユーザー体験を実現するフレームワーク",
      icon: <Zap className={cn("w-6 h-6", yellowIconColor)} />,
      color: getTechCardColor("yellow"),
    },
    {
      name: "TypeScript",
      description: "型安全性を確保し、開発効率と保守性を向上",
      icon: <Code className={cn("w-6 h-6", blueIconColor)} />,
      color: getTechCardColor("blue"),
    },
    {
      name: "Tailwind CSS & Shadcn UI",
      description: "美しく一貫性のあるデザインシステムを構築",
      icon: <Palette className={cn("w-6 h-6", purpleIconColor)} />,
      color: getTechCardColor("purple"),
    },
    {
      name: "アトミックデザイン",
      description: "再利用可能で保守性の高いコンポーネント設計",
      icon: <Layers className={cn("w-6 h-6", greenIconColor)} />,
      color: getTechCardColor("green"),
    },
    {
      name: "テスト実装",
      description: "Jest & React Testing Libraryによる堅牢なテスト",
      icon: <TestTube className={cn("w-6 h-6", redIconColor)} />,
      color: getTechCardColor("red"),
    },
    {
      name: "CI/CD対応",
      description: "効率的な開発フローと安定したデプロイを実現",
      icon: <Rocket className={cn("w-6 h-6", orangeIconColor)} />,
      color: getTechCardColor("orange"),
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
      description:
        "Radix UIの機能とprefers-reduced-motionに対応した高いアクセシビリティ",
    },
  ];

  // 実装ポイント
  const implementationPoints = [
    {
      title: "Next.js App Router",
      description:
        "最新のNext.js App Routerを使用して、効率的なルーティングとレンダリングを実現しています。",
      icon: <Zap className="h-6 w-6 text-blue-400" />,
    },
    {
      title: "Shadcn UI + Tailwind CSS",
      description:
        "美しく機能的なUIコンポーネントを、Tailwind CSSによるカスタマイズ性の高いスタイリングで実装しています。",
      icon: <Palette className="h-6 w-6 text-blue-400" />,
    },
    {
      title: "パフォーマンス最適化",
      description:
        "Next.jsの画像最適化、コード分割、サーバーサイドレンダリング、キャッシュ戦略を活用して高速なページ読み込みを実現しています。",
      icon: <Cpu className="h-6 w-6 text-blue-400" />,
    },
    {
      title: "アクセシビリティ対応",
      description:
        "WAI-ARIAに準拠したアクセシブルなUIと、prefers-reduced-motionに対応したアニメーションを実装しています。",
      icon: <Zap className="h-6 w-6 text-blue-400" />,
    },
    {
      title: "ダークモード対応",
      description:
        "ユーザー設定に応じたダークモード/ライトモードの切り替えに対応しています。",
      icon: <Palette className="h-6 w-6 text-blue-400" />,
    },
    {
      title: "レスポンシブデザイン",
      description:
        "モバイルからデスクトップまで、あらゆる画面サイズに最適化されたレイアウトを提供しています。",
      icon: <Cpu className="h-6 w-6 text-blue-400" />,
    },
  ];

  // 高度な実装ポイント
  const advancedImplementationPoints = [
    {
      title: ".cursorrules自動生成システム",
      description:
        "Gitのpre-commitフックを活用して.cursorrulesを自動生成・更新するシステムを実装し、AIアシスタントとの効率的な協業を実現しています。",
      icon: "🚀",
    },
    {
      title: "アトミックデザインの厳格な適用",
      description:
        "UIコンポーネントをatoms、molecules、organisms、templates、pagesの5階層に分類し、再利用性と保守性を高めています。",
      icon: "🚀",
    },
    {
      title: "型安全性の徹底",
      description:
        "TypeScriptの厳格モードを有効にし、型エラーを未然に防止することで、コードの品質と信頼性を向上させています。",
      icon: "🚀",
    },
    {
      title: "アクセシビリティ対応のアニメーション",
      description:
        "prefers-reduced-motionメディアクエリに対応したアニメーションを実装し、モーションに敏感なユーザーに配慮しています。",
      icon: "🚀",
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="introduction-this-site"
      className="py-16 px-4 md:px-8"
      variants={staggerContainerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* 背景のグラデーションエフェクト */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-200/30 dark:to-gray-900/20" />

      {/* デコレーション要素 */}
      <GradientBlurDecoration animate={true} />

      <div className="container relative mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* ヘッダー部分 */}
          <motion.div
            className="text-center mb-16"
            {...accessibleFadeInUpProps}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className={cn("text-5xl font-bold mb-6", gradientText)}
              {...fadeInProps}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              このサイトについて
            </motion.h1>
            <motion.p
              className="text-foreground dark:text-gray-300 text-lg leading-relaxed"
              {...fadeInProps}
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
            {...fadeInProps}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-8 text-center text-foreground"
              {...fadeInProps}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              使用技術
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => {
                // 色に基づいて適切なグラデーションクラスを選択
                let gradientClass = "";
                if (tech.name === "Next.js & React") {
                  gradientClass =
                    "bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-yellow-500/30";
                } else if (tech.name === "TypeScript") {
                  gradientClass =
                    "bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-500/30";
                } else if (tech.name === "Tailwind CSS & Shadcn UI") {
                  gradientClass =
                    "bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30";
                } else if (tech.name === "アトミックデザイン") {
                  gradientClass =
                    "bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30";
                } else if (tech.name === "テスト実装") {
                  gradientClass =
                    "bg-gradient-to-br from-red-500/20 to-red-600/20 border-red-500/30";
                } else if (tech.name === "CI/CD対応") {
                  gradientClass =
                    "bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-orange-500/30";
                }

                return (
                  <motion.div
                    key={tech.name}
                    className={cn(
                      "backdrop-blur-sm border rounded-xl p-6",
                      gradientClass
                    )}
                    {...accessibleFadeInUpProps}
                    transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start">
                      <div className={cn(iconBg, "p-3.5 mr-4")}>
                        <div className="w-6 h-6">{tech.icon}</div>
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
                );
              })}
            </div>
          </motion.div>

          {/* 実装詳細セクション */}
          <motion.div
            className="mb-16"
            {...fadeInProps}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-8 text-center text-foreground"
              {...fadeInProps}
              transition={{ delay: 1.7, duration: 0.8 }}
            >
              実装詳細
            </motion.h2>
            <motion.div
              className={cn(cardBg, "p-8")}
              {...accessibleFadeInUpProps}
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
            {...fadeInProps}
            transition={{ delay: 2.0, duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-8 text-center text-foreground"
              {...fadeInProps}
              transition={{ delay: 2.1, duration: 0.8 }}
            >
              実装ポイント
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {implementationPoints.map((point, index) => {
                return (
                  <motion.div
                    key={point.title}
                    className={cn(
                      "backdrop-blur-sm border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 rounded-xl p-6"
                    )}
                    {...accessibleFadeInUpProps}
                    transition={{ delay: 2.2 + index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start">
                      <div className={cn(gradientIconBg, "p-3.5 mr-4")}>
                        <div className="w-6 h-6">{point.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">
                          {point.title}
                        </h3>
                        <p className="text-foreground dark:text-gray-300">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* 新しい実装ポイントセクション */}
          <motion.div
            className="mb-16"
            {...fadeInProps}
            transition={{ delay: 2.0, duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-8 text-center text-foreground"
              {...fadeInProps}
              transition={{ delay: 2.1, duration: 0.8 }}
            >
              高度な実装ポイント
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advancedImplementationPoints.map((point, index) => {
                return (
                  <motion.div
                    key={point.title}
                    className={cn(
                      "backdrop-blur-sm border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 rounded-xl p-6"
                    )}
                    {...accessibleFadeInUpProps}
                    transition={{ delay: 2.2 + index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start">
                      <div className={cn(gradientIconBg, "p-3.5 mr-4")}>
                        <div className="w-6 h-6">{point.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">
                          {point.title}
                        </h3>
                        <p className="text-foreground dark:text-gray-300">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ソースコードリンク */}
          <motion.div
            className="text-center"
            {...fadeInProps}
            transition={{ delay: 2.6, duration: 0.8 }}
          >
            <motion.p
              className="text-foreground dark:text-gray-300 mb-6"
              {...fadeInProps}
              transition={{ delay: 2.7, duration: 0.8 }}
            >
              このポートフォリオサイトのソースコードはGitHubで公開しています。
              <br />
              コーディングガイドラインに基づいた一貫性のある実装を確認できます。
            </motion.p>
            <motion.div
              {...accessibleFadeInUpProps}
              transition={{ delay: 2.8, duration: 0.8 }}
            >
              <Button
                className="bg-gray-800 hover:bg-gray-700 text-white"
                asChild
              >
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
    </motion.section>
  );
};

export default IntroductionThisSite;
