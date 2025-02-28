import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

/**
 * 要素が画面内に入ったときにアニメーションを開始するカスタムフック
 * @param threshold 要素がどれだけ画面内に入ったらアニメーションを開始するか（0〜1）
 * @param triggerOnce 一度だけトリガーするかどうか
 * @returns ref - 監視する要素に設定するref, controls - アニメーションコントロール, inView - 要素が表示されているかどうか
 */
export function useAnimationInView(threshold = 0.1, triggerOnce = true) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce,
    threshold,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else if (!triggerOnce) {
      controls.start("hidden");
    }
  }, [controls, inView, triggerOnce]);

  return { ref, controls, inView };
}
