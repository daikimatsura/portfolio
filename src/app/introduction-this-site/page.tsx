import IntroductionThisSite from "@/components/pages/IntroductionThisSite";
import { Metadata } from "next";

/**
 * このサイトについてページのメタデータ
 */
export const metadata: Metadata = {
  title: "このサイトについて | daiki matsuura ポートフォリオ",
  description:
    "このポートフォリオサイトで使用している技術や実装の詳細について紹介しています。",
};

/**
 * このサイトについてページ
 *
 * ポートフォリオサイトの技術的な詳細や実装について説明するページです。
 */
const IntroductionThisSitePage = () => {
  return <IntroductionThisSite />;
};

export default IntroductionThisSitePage;
