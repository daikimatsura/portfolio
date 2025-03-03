"use client";

import IntroductionThisSite from "@/components/molecules/IntroductionThisSite/IntroductionThisSite";
import { useEffect } from "react";

/**
 * このサイトについてのページコンポーネント
 *
 * このコンポーネントは、ポートフォリオサイトの技術的な詳細や実装について説明するページです。
 * molecules/IntroductionThisSiteコンポーネントをラップし、必要に応じてページレベルの処理を追加します。
 */
const IntroductionThisSitePage = () => {
  // ページ表示時にスクロール位置をトップに戻す
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <IntroductionThisSite />;
};

export default IntroductionThisSitePage;
