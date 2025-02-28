/**
 * 共通スタイル定義
 * アプリケーション全体で使用される共通のスタイルクラスを定義
 */
import { cn } from "@/lib/utils";

// ===============================
// グラデーションスタイル
// ===============================

/**
 * タイトル用グラデーションテキスト
 * 青から紫へのグラデーションテキスト（ライト/ダークモード対応）
 */
export const gradientText = cn(
  "text-transparent bg-clip-text bg-gradient-to-r",
  "from-blue-800 to-purple-800 dark:from-blue-400 dark:to-purple-400"
);

/**
 * グラデーションアンダーライン
 * セクションタイトルなどの下線に使用
 */
export const gradientUnderline = cn(
  "absolute -bottom-2 left-0 w-full h-1 rounded-full",
  "bg-gradient-to-r from-blue-800 to-purple-800 dark:from-blue-400 dark:to-purple-400"
);

/**
 * プライマリボタン用グラデーション背景
 */
export const gradientButtonBg = cn(
  "bg-gradient-to-r from-blue-700 to-purple-700 text-white",
  "hover:from-blue-800 hover:to-purple-800 transition-colors duration-300",
  "shadow-lg shadow-blue-700/30 dark:shadow-purple-700/30"
);

/**
 * ダークボタン用グラデーション背景
 */
export const darkGradientButtonBg = cn(
  "bg-gradient-to-r from-gray-800 to-gray-900 text-white",
  "hover:from-gray-700 hover:to-gray-800"
);

// ===============================
// アイコンカラー
// ===============================

/**
 * 青系アイコンカラー
 */
export const blueIconColor = "text-blue-600 dark:text-blue-400";

/**
 * 緑系アイコンカラー
 */
export const greenIconColor = "text-green-600 dark:text-green-400";

/**
 * 赤系アイコンカラー
 */
export const redIconColor = "text-red-600 dark:text-red-400";

/**
 * 紫系アイコンカラー
 */
export const purpleIconColor = "text-purple-600 dark:text-purple-400";

/**
 * 黄系アイコンカラー
 */
export const yellowIconColor = "text-yellow-600 dark:text-yellow-400";

/**
 * オレンジ系アイコンカラー
 */
export const orangeIconColor = "text-orange-600 dark:text-orange-400";

// ===============================
// 背景スタイル
// ===============================

/**
 * カード背景（ライト/ダークモード対応）
 */
export const cardBg = cn(
  "bg-white/80 dark:bg-gray-950/90 backdrop-blur-sm",
  "border border-gray-200 dark:border-gray-800 rounded-xl"
);

/**
 * アイコン背景（ライト/ダークモード対応）
 */
export const iconBg = "bg-white/90 dark:bg-gray-900/50 p-3 rounded-lg";

/**
 * エラー背景
 */
export const errorBg =
  "bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded-lg";

/**
 * 成功メッセージ背景
 */
export const successBg = cn(
  "bg-gradient-to-br from-green-50 to-green-100/70 dark:from-green-500/20 dark:to-green-600/20",
  "backdrop-blur-xl rounded-2xl border border-green-200 dark:border-green-500/30"
);

/**
 * フォーム入力要素の共通スタイル
 */
export const formInputStyle = cn(
  "w-full px-4 py-3 rounded-lg",
  "bg-white dark:bg-gray-900/80",
  "border border-gray-200 dark:border-gray-700",
  "text-gray-900 dark:text-gray-100",
  "focus:border-blue-500 dark:focus:border-blue-400",
  "focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20",
  "focus:outline-none transition-colors",
  "placeholder:text-gray-500 dark:placeholder:text-gray-400"
);

// ===============================
// 装飾要素
// ===============================

/**
 * 青色ぼかし装飾（左上）
 */
export const blueBlurDecoration = cn(
  "absolute -left-4 -top-4 w-64 h-64",
  "bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl"
);

/**
 * 紫色ぼかし装飾（右下）
 */
export const purpleBlurDecoration = cn(
  "absolute -right-4 -bottom-4 w-64 h-64",
  "bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl"
);

/**
 * グラデーションアイコン背景
 */
export const gradientIconBg = cn(
  "bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-500/20 dark:to-purple-500/20",
  "p-3 rounded-lg"
);

// ===============================
// テキストスタイル
// ===============================

/**
 * 青系テキストカラー
 */
export const blueText = "text-blue-600 dark:text-blue-400";

/**
 * 緑系テキストカラー
 */
export const greenText = "text-green-600 dark:text-green-400";

/**
 * 黄系テキストカラー
 */
export const yellowText = "text-yellow-600 dark:text-yellow-300";

/**
 * 成功テキストカラー
 */
export const successText = "text-green-600 dark:text-green-500";

// ===============================
// 技術カードスタイル
// ===============================

/**
 * 技術カードの色設定を取得する関数
 * @param color カラーキー（blue, green, red, purple, yellow, orange）
 * @returns 対応するカラークラス
 */
export function getTechCardColor(color: string): string {
  const colorMap: Record<string, string> = {
    blue: cn(
      "from-blue-50 to-blue-100/70 dark:from-blue-500/20 dark:to-blue-600/20",
      "border-blue-200 dark:border-blue-500/30"
    ),
    green: cn(
      "from-green-50 to-green-100/70 dark:from-green-500/20 dark:to-green-600/20",
      "border-green-200 dark:border-green-500/30"
    ),
    purple: cn(
      "from-purple-50 to-purple-100/70 dark:from-purple-500/20 dark:to-purple-600/20",
      "border-purple-200 dark:border-purple-500/30"
    ),
    yellow: cn(
      "from-yellow-50 to-yellow-100/70 dark:from-yellow-500/20 dark:to-yellow-600/20",
      "border-yellow-200 dark:border-yellow-500/30"
    ),
    red: cn(
      "from-red-50 to-red-100/70 dark:from-red-500/20 dark:to-red-600/20",
      "border-red-200 dark:border-red-500/30"
    ),
    orange: cn(
      "from-orange-50 to-orange-100/70 dark:from-orange-500/20 dark:to-orange-600/20",
      "border-orange-200 dark:border-orange-500/30"
    ),
  };

  return colorMap[color] || colorMap.blue;
}

// ===============================
// システムページスタイル
// ===============================

/**
 * エラーページのカード背景
 * ライト/ダークモード対応のエラーページ用背景
 */
export const errorCardBg = cn(
  "bg-gradient-to-br",
  "from-white to-gray-100 dark:from-gray-900 dark:to-black",
  "border border-gray-200 dark:border-gray-800",
  "shadow-xl"
);

/**
 * エラーアイコン背景
 * エラーアイコン用の背景スタイル
 */
export const errorIconBg = cn(
  "inline-flex items-center justify-center w-16 h-16 rounded-full",
  "bg-red-500/10 dark:bg-red-500/20"
);

/**
 * エラーテキスト
 * エラーメッセージのタイトル用グラデーションテキスト
 */
export const errorText = cn(
  "text-transparent bg-clip-text bg-gradient-to-r",
  "from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400"
);

/**
 * 404ページのカード背景
 * ライト/ダークモード対応の404ページ用背景
 */
export const notFoundCardBg = cn(
  "bg-gradient-to-br",
  "from-white to-gray-100 dark:from-gray-900 dark:to-black",
  "border border-gray-200 dark:border-gray-800",
  "shadow-xl"
);

/**
 * 404アイコン背景
 * 404アイコン用の背景スタイル
 */
export const notFoundIconBg = cn(
  "absolute inset-0 rounded-full",
  "bg-blue-500/10 dark:bg-blue-500/20"
);

/**
 * 404テキスト
 * 404メッセージのタイトル用グラデーションテキスト
 */
export const notFoundText = cn(
  "text-transparent bg-clip-text bg-gradient-to-r",
  "from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
);

/**
 * ローディング背景
 * ライト/ダークモード対応のローディング画面背景
 */
export const loadingBg = cn("bg-white dark:bg-black");

/**
 * ローディングテキスト
 * ローディングメッセージ用テキストカラー
 */
export const loadingText = cn("text-gray-600 dark:text-gray-400");
