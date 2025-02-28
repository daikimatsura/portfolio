/**
 * アニメーション設定のエクスポート
 *
 * このファイルは、アプリケーション全体で使用されるアニメーション設定を一元管理します。
 * - モーションプロパティ: 直接使用するためのアニメーション設定
 * - バリアント: variants属性で使用するアニメーション設定
 */

// モーションプロパティ（直接使用）
export {
  fadeInProps,
  fadeInDelayedProps,
  fadeInUpProps,
  scaleUpProps,
} from "./animations";

// バリアント（variants属性で使用）
// animations.tsからのエクスポートは非推奨とし、variants.tsからのエクスポートを優先使用
export {
  staggerContainer,
  fadeInUp,
  scaleUp,
  slideInLeft,
  slideInRight,
} from "./variants";

/**
 * 注意: 現在のアニメーション定義には以下の問題があります：
 *
 * 1. 重複する定義:
 *    - animations.ts、variants.ts、config.tsに類似した定義が存在
 *    - 例: fadeInUpProps（animations.ts）とfadeInUp（variants.ts）は同様の機能
 *
 * 2. 一貫性のない命名規則:
 *    - xxxProps（animations.ts）
 *    - xxx（variants.ts）
 *    - xxxVariants（animations.ts）
 *
 * 3. 分散したファイル構造:
 *    - 関連する定義が複数のファイルに分散
 *
 * 推奨されるリファクタリング:
 *
 * 1. 命名規則の統一:
 *    - 直接使用するプロパティ: xxxProps（例: fadeInProps）
 *    - variants属性で使用するバリアント: xxxVariant（例: fadeInVariant）
 *
 * 2. ファイル構造の整理:
 *    - properties.ts: 直接使用するプロパティ定義
 *    - variants.ts: variants属性で使用するバリアント定義
 *    - index.ts: すべてのエクスポートを集約
 *
 * 3. 重複の排除:
 *    - 類似した機能を持つ定義を統合
 *    - 共通のベース定義から派生させる
 *
 * 4. ドキュメント化:
 *    - 各アニメーション定義に詳細なJSDocコメントを追加
 *    - 使用例を含める
 */
