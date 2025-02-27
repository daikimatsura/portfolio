/**
 * 共通の型定義
 */

/**
 * 期間の型定義
 */
export interface Period {
  start: string;
  end: string | null;
}

/**
 * プロジェクトの基本型定義
 */
export interface BaseProject {
  name: string;
  role: string;
  period: Period;
  description: string;
  technologies: string[];
}

/**
 * 職歴の基本型定義
 */
export interface BaseCareerHistory {
  id: string;
  company: string;
  position: string;
  period: Period;
  description?: string;
  achievements?: string[];
  projectHighlights?: BaseProject[];
}

/**
 * スキルの基本型定義
 */
export interface BaseSkill {
  name: string;
  percentage: number;
}

/**
 * スキルカテゴリの基本型定義
 */
export interface BaseSkillCategory {
  title: string;
  icon?: string;
  skills: BaseSkill[];
}

/**
 * ブログ記事の基本型定義
 */
export interface BaseBlog {
  id: number;
  title: string;
  tags: string[];
  link: string;
  image?: string;
}
