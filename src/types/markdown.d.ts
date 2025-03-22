export interface MarkdownPost {
  slug: string;
  title: string;
  published_at: string;
  content: string;
  excerpt?: string;
  topics?: string[];
  coverImage?: string;
  emoji?: string;
  published?: boolean;
}

export interface MarkdownPostMeta {
  slug: string;
  title: string;
  published_at: string;
  excerpt?: string;
  topics?: string[];
  coverImage?: string;
  emoji?: string;
  published?: boolean;
}
