"use client";

import { SkillCard } from "../../molecules/SkillCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillData = [
    {
      title: "Frontend",
      icon: "💻",
      skills: [
        {
          name: "React",
          experienceLevel: "業務でよく使う" as const,
        },
        {
          name: "TypeScript",
          experienceLevel: "業務でよく使う" as const,
        },
        {
          name: "GraphQL",
          experienceLevel: "業務でよく使う" as const,
        },
        {
          name: "Next.js",
          experienceLevel: "使用経験あり" as const,
        },
        {
          name: "React Native",
          experienceLevel: "学習したことがある" as const,
        },
      ],
    },
    {
      title: "Backend",
      icon: "🔧",
      skills: [
        {
          name: "Node.js",
          experienceLevel: "業務でよく使う" as const,
        },
        {
          name: "Python",
          experienceLevel: "使用経験あり" as const,
        },
        {
          name: "Golang",
          experienceLevel: "学習したことがある" as const,
        },
      ],
    },
    {
      title: "AWS Infrastructure",
      icon: "☁️",
      skills: [
        {
          name: "AWS CDK",
          experienceLevel: "業務でよく使う" as const,
        },
        {
          name: "IAM",
          experienceLevel: "業務でよく使う" as const,
        },
        {
          name: "AWS Lambda",
          experienceLevel: "業務でよく使う" as const,
        },
        {
          name: "DynamoDB",
          experienceLevel: "業務でよく使う" as const,
        },
        {
          name: "Amplify",
          experienceLevel: "業務でよく使う" as const,
        },
        {
          name: "AWS S3",
          experienceLevel: "業務でよく使う" as const,
        },
        {
          name: "AWS CloudFront",
          experienceLevel: "業務でよく使う" as const,
        },
        {
          name: "AWS AppSync",
          experienceLevel: "業務でよく使う" as const,
        },
        {
          name: "AWS API Gateway",
          experienceLevel: "業務でよく使う" as const,
        },
        {
          name: "Amazon Connect",
          experienceLevel: "使用経験あり" as const,
        },
        {
          name: "Amazon Bedrock",
          experienceLevel: "使用経験あり" as const,
        },
      ],
    },
    {
      title: "Design",
      icon: "🎨",
      skills: [
        {
          name: "Figma",
          experienceLevel: "使用経験あり" as const,
        },
        {
          name: "Draw.io",
          experienceLevel: "使用経験あり" as const,
        },
      ],
    },
    {
      title: "Tools",
      icon: "🛠️",
      skills: [
        {
          name: "Git",
          experienceLevel: "業務でよく使う" as const,
        },
        {
          name: "Notion",
          experienceLevel: "業務でよく使う" as const,
        },
        {
          name: "Google Workspace",
          experienceLevel: "業務でよく使う" as const,
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-background relative overflow-hidden bg-grid-pattern"
    >
      {/* 装飾要素 */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 inline-block relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-800 dark:from-blue-400 dark:to-purple-400">
              スキルセット
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-800 to-purple-800 dark:from-blue-400 dark:to-purple-400 rounded-full" />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            フロントエンド開発からAWSインフラ構築まで、幅広いスキルを持っています。
            常に新しい技術を学び、実践することで技術力を高めています。
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillData.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
