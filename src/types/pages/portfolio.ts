/**
 * ポートフォリオページ関連の型定義
 */

/**
 * ブログ記事の型定義
 */
export interface Blog {
  id: number;
  title: string;
  tags: string[];
  link: string;
  image?: string;
}

/**
 * スキルの型定義
 */
export interface Skill {
  name: string;
  percentage: number;
}

/**
 * スキルカテゴリの型定義
 */
export interface SkillCategory {
  title: string;
  icon?: string;
  skills: Skill[];
}

/**
 * 職務経歴の型定義
 */
export interface JobExperience {
  company: string;
  position: string;
  period: {
    start: string;
    end: string | null;
  };
  description: string;
  skills: string[];
  achievements: string[];
}

/**
 * プロジェクト経験の型定義
 */
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  role: string;
  period: {
    start: string;
    end: string | null;
  };
  achievements: string[];
}
