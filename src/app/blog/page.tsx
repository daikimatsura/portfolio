import Link from "next/link";
import Image from "next/image";
import { getAllPostsMeta } from "@/lib/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ブログ記事一覧",
  description: "技術的な知見や経験を共有するブログ記事の一覧です。",
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 inline-block relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 dark:from-blue-400 dark:to-purple-400">
            ブログ記事一覧
          </span>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-800 to-purple-800 dark:from-blue-400 dark:to-purple-400 rounded-full" />
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          技術的な知見や経験を共有するために執筆した記事です。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post.slug}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="p-6">
                  {post.coverImage ? (
                    <div className="mb-4 aspect-video relative overflow-hidden rounded-md">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : post.emoji ? (
                    <div className="mb-4 flex justify-center items-center py-6 bg-muted/30 rounded-md">
                      <span className="text-7xl">{post.emoji}</span>
                    </div>
                  ) : null}

                  {post.topics && post.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  <div className="text-sm text-muted-foreground">
                    {post.published_at}
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-12">
            <p className="text-muted-foreground">
              現在記事はありません。もうしばらくお待ちください。
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
