import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GradientBlurDecorationProps {
  className?: string;
  animate?: boolean;
  children?: React.ReactNode;
  withBackground?: boolean;
  asContainer?: boolean;
}

const GradientBlurDecoration: React.FC<GradientBlurDecorationProps> = ({
  className,
  animate = true,
  children,
  withBackground = false,
  asContainer = false,
}) => {
  const renderDecoration = () => {
    if (animate) {
      return (
        <div
          className={cn(
            "absolute inset-0 overflow-hidden",
            asContainer ? "-z-10" : "",
            className
          )}
        >
          <motion.div
            className="absolute -inset-[100px] opacity-50"
            animate={{
              background: [
                "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.1) 0%, rgba(0, 0, 0, 0) 50%)",
                "radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, rgba(0, 0, 0, 0) 50%)",
                "radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.1) 0%, rgba(0, 0, 0, 0) 50%)",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -inset-[100px] opacity-50"
            animate={{
              background: [
                "radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.1) 0%, rgba(0, 0, 0, 0) 50%)",
                "radial-gradient(circle at 30% 70%, rgba(56, 189, 248, 0.1) 0%, rgba(0, 0, 0, 0) 50%)",
                "radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.1) 0%, rgba(0, 0, 0, 0) 50%)",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
      );
    }

    return (
      <div
        className={cn(
          "absolute inset-0 overflow-hidden",
          asContainer ? "-z-10" : "",
          className
        )}
      >
        <div className="absolute -inset-[100px] opacity-50 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1)_0%,rgba(0,0,0,0)_50%)]" />
        <div className="absolute -inset-[100px] opacity-50 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.1)_0%,rgba(0,0,0,0)_50%)]" />
      </div>
    );
  };

  if (asContainer) {
    return (
      <div className="relative overflow-hidden">
        {withBackground && (
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60 -z-10" />
        )}
        {renderDecoration()}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }

  return renderDecoration();
};

export default GradientBlurDecoration;
