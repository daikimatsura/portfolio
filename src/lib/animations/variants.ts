/**
 * Framer Motionで使用する共通バリアント
 */

import { useReducedMotion } from "framer-motion";

/**
 * アクセシビリティに配慮したアニメーションバリアントを提供するフック
 * prefers-reduced-motionの設定に基づいてアニメーションを調整します
 *
 * @returns アクセシビリティに配慮したアニメーションバリアント
 */
export const useAccessibleVariants = () => {
  const prefersReducedMotion = useReducedMotion();

  // 動きを減らすことを好むユーザー向けの設定
  const noMotionVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  // アクセシビリティに配慮したアニメーションバリアント
  const accessibleStaggerContainer = prefersReducedMotion
    ? {
        hidden: {},
        visible: { transition: { staggerChildren: 0 } },
      }
    : {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      };

  const accessibleFadeInUp = prefersReducedMotion
    ? noMotionVariant
    : {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };

  const accessibleScaleUp = prefersReducedMotion
    ? noMotionVariant
    : {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { type: "spring", stiffness: 100, damping: 15 },
        },
      };

  const accessibleSlideInLeft = prefersReducedMotion
    ? noMotionVariant
    : {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
      };

  const accessibleSlideInRight = prefersReducedMotion
    ? noMotionVariant
    : {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
      };

  return {
    staggerContainer: accessibleStaggerContainer,
    fadeInUp: accessibleFadeInUp,
    scaleUp: accessibleScaleUp,
    slideInLeft: accessibleSlideInLeft,
    slideInRight: accessibleSlideInRight,
  };
};
