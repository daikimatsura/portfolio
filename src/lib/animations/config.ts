/**
 * Framer Motionで使用する共通アニメーション設定
 */

/**
 * フェードインアップアニメーション
 * 下から上に要素をフェードインさせる
 */
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

/**
 * フェードインアニメーション
 * 要素をフェードインさせる
 */
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

/**
 * 遅延フェードインアニメーション
 * 要素を遅延付きでフェードインさせる
 */
export const fadeInDelayed = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 0.2, duration: 0.5 },
};

/**
 * スケールアップアニメーション
 * 要素を小さい状態から通常サイズにアニメーションさせる
 */
export const scaleUp = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

/**
 * コンテナスタガーアニメーション
 * 子要素を順番にアニメーションさせるコンテナ用
 */
export const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/**
 * 子要素スタガーアニメーション
 * コンテナスタガーアニメーションと組み合わせて使用する子要素用
 */
export const itemStagger = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
