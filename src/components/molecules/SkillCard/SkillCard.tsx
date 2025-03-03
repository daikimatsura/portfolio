"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

type Skill = {
  name: string;
  percentage: number;
};

type SkillCategory = {
  title: string;
  icon?: string;
  skills: Skill[];
};

type SkillCardProps = {
  skill: SkillCategory;
};

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-card to-card/90 rounded-xl overflow-hidden"
    >
      <div className="border border-border rounded-xl overflow-hidden backdrop-blur-sm">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold flex items-center">
              {skill.icon && (
                <span className="mr-2 text-2xl">{skill.icon}</span>
              )}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 dark:from-blue-400 dark:to-purple-400">
                {skill.title}
              </span>
            </h3>
            <div className="bg-muted/50 px-2 py-1 rounded-full text-xs text-muted-foreground">
              {skill.skills.length} スキル
            </div>
          </div>

          <div className="space-y-4">
            {skill.skills
              .slice(0, expanded ? skill.skills.length : 4)
              .map((item, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: skillIndex * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-foreground">
                      {item.name}
                    </span>
                    <span className="text-muted-foreground">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-500 dark:to-purple-500 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}

            <AnimatePresence>
              {skill.skills.length > 4 && (
                <motion.button
                  onClick={toggleExpand}
                  className="w-full mt-4 flex items-center justify-center space-x-1 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors bg-muted/30 rounded-lg border border-border"
                  whileHover={{ backgroundColor: "rgba(var(--muted), 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{expanded ? "折りたたむ" : "すべて表示"}</span>
                  {expanded ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
