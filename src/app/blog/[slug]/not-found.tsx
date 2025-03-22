import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-bold mb-6">記事が見つかりませんでした</h1>
      <p className="text-muted-foreground mb-8">
        お探しの記事は存在しないか、移動された可能性があります。
      </p>
      <Link
        href="/blog"
        className="inline-flex items-center text-primary hover:underline"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        ブログ一覧に戻る
      </Link>
    </div>
  );
}
