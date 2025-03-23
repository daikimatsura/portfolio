import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "article", "contents");

/**
 * スラッグに基づいて記事データを取得する
 */
export async function getPostBySlug(slug: string): Promise<MarkdownPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // gray-matterを使用してメタデータを解析
  const { data, content } = matter(fileContents);

  // remarkを使用してMarkdownをHTMLに変換
  const processor = remark().use(html, {
    sanitize: false, // HTML出力時に属性を維持する
  });

  const processedContent = await processor.process(content);
  const htmlContent = processedContent.toString();

  // HTMLを修正して見出しにID属性を追加
  // headタグからidを抽出するための正規表現
  const headingRegex = /<h([1-6])>(.*?)<\/h\1>/g;
  const idGeneratedHeadings: { level: string; text: string; id: string }[] = [];

  const htmlWithIds = htmlContent.replace(
    headingRegex,
    (match, level, text) => {
      // 日本語文字を保持したまま、空白をハイフンに変換
      // 特殊文字（記号など）は削除
      const id = text
        .toLowerCase()
        .trim()
        .replace(/[\s\t\n]+/g, "-") // 空白文字をハイフンに置換
        .replace(/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g, "") // 特殊記号を削除
        .replace(/-+/g, "-") // 連続するハイフンを単一のハイフンに
        .replace(/^-|-$/g, ""); // 先頭と末尾のハイフンを削除

      // IDが空文字列の場合は、見出しのテキストをそのまま使用
      const finalId = id || `heading-${level}-${Date.now()}`;

      idGeneratedHeadings.push({ level, text, id: finalId });
      return `<h${level} id="${finalId}">${text}</h${level}>`;
    }
  );

  return {
    slug,
    content: htmlWithIds,
    title: data.title,
    published_at: data.published_at || data.date, // 互換性のため
    excerpt: data.excerpt,
    topics: data.topics || data.tags || [], // 互換性のため両方サポート
    coverImage: data.coverImage,
    emoji: data.emoji,
    published: data.published, // デフォルトはtrue
  };
}

/**
 * 全ての記事のメタデータを取得する
 */
export function getAllPostsMeta(): MarkdownPostMeta[] {
  // mdファイルの一覧を取得
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      // ファイル名から.mdを除いてスラッグとして使用
      const slug = fileName.replace(/\.md$/, "");

      // ファイルの内容を読み込む
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // gray-matterを使用してメタデータを解析
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        published_at: data.published_at || data.date, // 互換性のため
        excerpt: data.excerpt,
        topics: data.topics || data.tags || [], // 互換性のため両方サポート
        coverImage: data.coverImage,
        emoji: data.emoji,
        published: data.published, // デフォルトはtrue
      };
    })
    // 非公開記事を除外
    .filter((post) => post.published)
    .filter((post) => {
      // 公開日が設定されていない場合は表示する
      if (!post.published_at) return true;

      // 公開日が現在時刻より過去の場合のみ表示する
      const publishDate = new Date(post.published_at);
      const now = new Date();
      return publishDate <= now;
    });

  // 公開日でソート（新しい順）
  return allPostsData.sort((a, b) => {
    if (a.published_at < b.published_at) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * 全ての記事のスラッグを取得する
 */
export function getAllPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);

  // published: falseの記事も含めてスラッグを取得する
  // (管理画面などからのアクセス用)
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}
