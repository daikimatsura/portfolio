import { Button } from "@/components/atoms/Button";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div
      key={blog.id}
      className={`group relative overflow-hidden rounded-xl bg-gray-900`}
    >
      <div className="aspect-video bg-gray-800 relative overflow-hidden">
        {/* プレースホルダー画像 */}
        {blog.image && (
          <Image
            src={blog.image}
            alt={blog.title}
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
      </div>
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
          <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
          <p className="text-gray-300 mb-4">{blog.tags.join(" • ")}</p>
          <div className="flex justify-center gap-4">
            {blog.link && (
              <Button
                size="sm"
                variant="outline"
                className="border-gray-800 text-gray-300 hover:bg-purple-800 hover:text-gray-300 shadow-md bg-purple-600"
              >
                <Link href={blog.link} target="_blank">
                  見に行く
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
