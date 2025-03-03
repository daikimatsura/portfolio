import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

/**
 * 要素が画面内に表示されたときにアニメーションを開始するためのカスタムフック
 * @param threshold 要素がどれだけ表示されたらアニメーションを開始するかの閾値（0〜1）
 * @param triggerOnce 一度だけトリガーするかどうか
 * @returns ref, controls, inView
 */
export const useAnimationInView = (threshold = 0.1, triggerOnce = true) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce, threshold });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return { ref, controls, inView };
};
