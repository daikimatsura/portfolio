// components/layout/Footer.tsx
import { Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10 ">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; 2024 daiki matsuura.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="https://github.com/daikimatsura"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
