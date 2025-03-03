"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  gradient?: boolean;
}

export const Card = ({
  children,
  className,
  hoverEffect = true,
  gradient = false,
}: CardProps) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={cn(
        "relative rounded-xl overflow-hidden",
        gradient ? "bg-gradient-to-br from-card to-background" : "bg-card",
        "border border-border backdrop-blur-sm",
        className
      )}
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export const CardHeader = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};

export const CardTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 dark:from-blue-400 dark:to-purple-400",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("text-muted-foreground text-sm mt-2", className)}>
      {children}
    </p>
  );
};

export const CardContent = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-6 pt-0", className)}>{children}</div>;
};

export const CardFooter = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center p-6 pt-0 border-t border-border mt-6",
        className
      )}
    >
      {children}
    </div>
  );
};
