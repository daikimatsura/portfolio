"use client";

import { SkillCard } from "../molecules/SkillCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
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
          percentage: 95,
        },
        {
          name: "Next.js",
          percentage: 90,
        },
        {
          name: "TypeScript",
          percentage: 90,
        },
        {
          name: "TailwindCSS",
          percentage: 90,
        },
        {
          name: "Shadcn/UI",
          percentage: 90,
        },
        {
          name: "MUI",
          percentage: 90,
        },
        {
          name: "GraphQL",
          percentage: 80,
        },
        {
          name: "React Native",
          percentage: 50,
        },
      ],
    },
    {
      title: "Backend",
      icon: "🔧",
      skills: [
        {
          name: "Node.js",
          percentage: 99,
        },
        {
          name: "Python",
          percentage: 40,
        },
        {
          name: "Golang",
          percentage: 40,
        },
      ],
    },
    {
      title: "AWS Infrastructure",
      icon: "☁️",
      skills: [
        {
          name: "AWS CDK",
          percentage: 90,
        },
        {
          name: "IAM",
          percentage: 90,
        },
        {
          name: "AWS Lambda",
          percentage: 90,
        },
        {
          name: "DynamoDB",
          percentage: 90,
        },
        {
          name: "Amplify",
          percentage: 90,
        },
        {
          name: "AWS S3",
          percentage: 90,
        },
        {
          name: "AWS CloudFront",
          percentage: 80,
        },
        {
          name: "AWS AppSync",
          percentage: 80,
        },
        {
          name: "AWS API Gateway",
          percentage: 80,
        },
        {
          name: "Amazon Bedrock",
          percentage: 70,
        },
        {
          name: "Amazon Connect",
          percentage: 70,
        },
      ],
    },
    {
      title: "Design",
      icon: "🎨",
      skills: [
        {
          name: "Figma",
          percentage: 80,
        },
        {
          name: "Draw.io",
          percentage: 80,
        },
      ],
    },
    {
      title: "Tools",
      icon: "🛠️",
      skills: [
        {
          name: "Git",
          percentage: 99,
        },
        {
          name: "Notion",
          percentage: 99,
        },
        {
          name: "Google Workspace",
          percentage: 90,
        },
      ],
    },
    {
      title: "Other",
      icon: "🌟",
      skills: [
        { name: "AWS Architect", percentage: 80 },
        {
          name: "Developer Leadership",
          percentage: 80,
        },
        {
          name: "Scrum",
          percentage: 60,
        },
        {
          name: "Agile",
          percentage: 60,
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
