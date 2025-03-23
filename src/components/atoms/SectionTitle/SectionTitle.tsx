import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useAccessibleAnimations } from "@/lib/animations";
import { gradientText, gradientUnderline } from "@/lib/styles";

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  icon?: ReactNode;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  className,
  icon,
}: SectionTitleProps) {
  const alignmentClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const { fadeInUpProps } = useAccessibleAnimations();

  return (
    <motion.div
      className={cn(`mb-16 ${alignmentClass[align]}`, className)}
      {...fadeInUpProps}
      data-testid="section-title-mock"
    >
      <h2 className="text-4xl font-bold mb-4 inline-block relative">
        {icon && <span className="mr-2">{icon}</span>}
        <span className={gradientText}>{title}</span>
        <div className={gradientUnderline} />
      </h2>
      {subtitle && (
        <motion.p
          className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
