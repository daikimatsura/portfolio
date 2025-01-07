import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-7xl font-bold text-blue-500">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          申し訳ありません。お探しのページは見つかりませんでした。
        </p>
        <Button asChild className="mt-8">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            トップページに戻る
          </Link>
        </Button>
      </div>
    </div>
  );
}
