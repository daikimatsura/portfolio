/**
 * UIコンポーネント関連の型定義
 */

/**
 * ナビゲーションアイテムの型定義
 */
export interface NavItem {
  name: string;
  href: string;
  isButton?: boolean;
}

/**
 * ソーシャルリンクの型定義
 */
export interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color?: string;
}
