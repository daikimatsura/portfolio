import { Button } from "@/components/atoms/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about-me"
      className="relative min-h-[calc(100vh-20px)] flex items-center justify-center bg-grid-white/[0.02] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
      <div className="container mx-auto px-6 relative">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Software Engineer
          </span>
          <br />
          daiki matsuura
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-8">
          I am a software engineer who is funtastic about creating exciting
          solutions.
        </p>
        <div className="flex gap-4">
          <Button className="bg-blue-500 hover:bg-blue-600">
            <Link href="/job-history" className="flex items-center">
              View My Job History
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" className="bg-white text-black">
            <Link href="/introduction-this-site" className="flex items-center">
              About this site
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
