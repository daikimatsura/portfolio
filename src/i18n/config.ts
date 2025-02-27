/**
 * 国際化の設定
 */

import commonJa from "./locales/ja/common.json";
import homeJa from "./locales/ja/home.json";
import aboutJa from "./locales/ja/about.json";
import errorJa from "./locales/ja/error.json";

/**
 * 日本語の翻訳リソース
 */
export const jaResources = {
  common: commonJa,
  home: homeJa,
  about: aboutJa,
  error: errorJa,
};

/**
 * サポートされている言語
 */
export const supportedLanguages = ["ja"];

/**
 * デフォルトの言語
 */
export const defaultLanguage = "ja";

/**
 * 言語の名前マッピング
 */
export const languageNames = {
  ja: "日本語",
};
