/**
 * アニメーション設定のエクスポート
 */

// configからのエクスポート（motion props用）
export { fadeIn, fadeInDelayed, containerStagger, itemStagger } from "./config";

// configの名前衝突するものは名前を変更してエクスポート
export { fadeInUp as fadeInUpProps, scaleUp as scaleUpProps } from "./config";

// variantsからのエクスポート（variants用）
export {
  staggerContainer,
  fadeInUp,
  scaleUp,
  slideInLeft,
  slideInRight,
} from "./variants";
