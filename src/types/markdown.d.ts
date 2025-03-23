type MarkdownPost = {
  slug: string;
  title: string;
  published_at: string;
  content: string;
  excerpt?: string;
  topics?: string[];
  coverImage?: string;
  emoji?: string;
  published?: boolean;
};

type MarkdownPostMeta = {
  slug: string;
  title: string;
  published_at: string;
  excerpt?: string;
  topics?: string[];
  coverImage?: string;
  emoji?: string;
  published?: boolean;
};
