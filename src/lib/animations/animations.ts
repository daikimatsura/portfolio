/**
 * Framer Motionで使用する共通アニメーション設定とバリアント
 */

import { useReducedMotion } from "framer-motion";

/**
 * アクセシビリティに配慮したアニメーション設定を提供するフック
 * prefers-reduced-motionの設定に基づいてアニメーションを調整します
 *
 * @returns アクセシビリティに配慮したアニメーションプロパティ
 */
export const useAccessibleAnimations = () => {
  const prefersReducedMotion = useReducedMotion();

  // 動きを減らすことを好むユーザー向けの設定
  const noMotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  };

  // アクセシビリティに配慮したアニメーションプロパティ
  const accessibleFadeInUpProps = prefersReducedMotion
    ? noMotionProps
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      };

  const accessibleFadeInProps = prefersReducedMotion
    ? noMotionProps
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
      };

  const accessibleFadeInDelayedProps = prefersReducedMotion
    ? { ...noMotionProps, transition: { duration: 0.5, delay: 0.2 } }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5, delay: 0.2 },
      };

  const accessibleScaleUpProps = prefersReducedMotion
    ? noMotionProps
    : {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5 },
      };

  return {
    fadeInUpProps: accessibleFadeInUpProps,
    fadeInProps: accessibleFadeInProps,
    fadeInDelayedProps: accessibleFadeInDelayedProps,
    scaleUpProps: accessibleScaleUpProps,
  };
};

// ===============================
// モーションプロパティ（直接使用）
// ===============================

/**
 * フェードインアップアニメーション
 * 下から上に要素をフェードインさせる
 *
 * @deprecated useAccessibleAnimations()を使用してください
 */
export const fadeInUpProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

/**
 * フェードインアニメーション
 * 要素をフェードインさせる
 */
export const fadeInProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

/**
 * 遅延フェードインアニメーション
 * 要素を遅延付きでフェードインさせる
 */
export const fadeInDelayedProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 0.2, duration: 0.5 },
};

/**
 * スケールアップアニメーション
 * 要素を小さい状態から通常サイズにアニメーションさせる
 */
export const scaleUpProps = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

// ===============================
// バリアント（variants属性で使用）
// ===============================

/**
 * スタガーコンテナバリアント
 * 子要素を順番に表示するコンテナ用
 */
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/**
 * スタガー子要素バリアント
 * コンテナスタガーアニメーションと組み合わせて使用する子要素用
 */
export const staggerItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

/**
 * フェードインアップバリアント
 */
export const fadeInUpVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

/**
 * スケールアップバリアント
 */
export const scaleUpVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

/**
 * 左からスライドインするバリアント
 */
export const slideInLeftVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

/**
 * 右からスライドインするバリアント
 */
export const slideInRightVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
