"use client";

import { useState } from "react";
import { SkillCard } from "../molecules/SkillCard";
const Skills = () => {
  const skillData = [
    {
      title: "Frontend",
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
      skills: [
        {
          name: "Node.js",
          percentage: 99,
        },
        {
          name: "Python",
          percentage: 40,
        },
      ],
    },
    {
      title: "AWS Infrastructure",
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
  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Main Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
