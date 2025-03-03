import { Badge } from "@/components/atoms/Badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/Card";
import { Briefcase, Calendar, Award, Code } from "lucide-react";
import { ReactNode } from "react";

// 型定義
interface Period {
  start: string;
  end: string;
}

interface Project {
  name: string;
  role: string;
  period: Period;
  description: string;
  technologies: string[];
}

interface CareerHistory {
  id: string;
  company: string;
  position: string;
  period: Period;
  description?: string;
  achievements?: string[];
  projectHighlights?: Project[];
}

interface CareerTimelineProps {
  careers: CareerHistory[];
}

// 共通コンポーネント
// セクションタイトル
const SectionTitle = ({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) => (
  <h4 className="font-semibold mb-3 flex items-center text-foreground">
    {icon}
    <span className="bg-gradient-to-r from-blue-800 to-purple-800 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
      {children}
    </span>
  </h4>
);

// 期間表示
const PeriodDisplay = ({ period }: { period: Period }) => (
  <div className="flex items-center text-muted-foreground text-sm">
    <Calendar className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
    {period.start} - {period.end}
  </div>
);

// 複数行テキスト表示
const MultiLineText = ({ text }: { text: string }) => (
  <div className="text-foreground dark:text-gray-300">
    {text.split("\n").map((line, index) => (
      <p key={index} className="mb-1">
        {line}
      </p>
    ))}
  </div>
);

// テクノロジーバッジ
const TechBadge = ({ tech }: { tech: string }) => (
  <Badge
    variant="outline"
    className="text-xs bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-foreground hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
  >
    {tech}
  </Badge>
);

// プロジェクトカードコンポーネント
const ProjectCard = ({ project }: { project: Project }) => (
  <div className="p-4 bg-gray-100/80 dark:bg-gray-900/80 rounded-lg border border-gray-300 dark:border-gray-800 shadow-md hover:shadow-blue-900/20 transition-all duration-200">
    <div className="flex justify-between items-start mb-2">
      <h5 className="font-medium text-blue-700 dark:text-blue-300">
        {project.name}
      </h5>
      <div className="flex flex-col items-end">
        <PeriodDisplay period={project.period} />
        <Badge className="mt-1 bg-blue-100/50 dark:bg-blue-900/30 hover:bg-blue-200/60 dark:hover:bg-blue-800/40 text-blue-700 dark:text-blue-300">
          {project.role}
        </Badge>
      </div>
    </div>
    <MultiLineText text={project.description} />
    <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech, techIndex) => (
        <TechBadge key={techIndex} tech={tech} />
      ))}
    </div>
  </div>
);

export const CareerTimeline = ({ careers }: CareerTimelineProps) => {
  return (
    <div className="space-y-8">
      {careers.map((career) => (
        <Card
          key={career.id}
          className="relative overflow-hidden bg-card dark:bg-gray-900/60 border-border dark:border-gray-800 shadow-lg"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-600 dark:bg-blue-500" />
          <CardHeader>
            <CardTitle>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground dark:text-white">
                    {career.company}
                  </h3>
                  <p className="text-muted-foreground dark:text-gray-300 text-sm mt-1">
                    {career.position}
                  </p>
                </div>
                <PeriodDisplay period={career.period} />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 業務内容 */}
            {career.description && (
              <div>
                <SectionTitle
                  icon={
                    <Briefcase className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                  }
                >
                  業務内容
                </SectionTitle>
                <MultiLineText text={career.description} />
              </div>
            )}

            {/* 成果・実績 */}
            {career.achievements && (
              <div>
                <SectionTitle
                  icon={
                    <Award className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                  }
                >
                  主な成果・実績
                </SectionTitle>
                <ul className="list-disc list-inside space-y-2 text-foreground dark:text-gray-300">
                  {career.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* プロジェクトハイライト */}
            {career.projectHighlights &&
              career.projectHighlights.length > 0 && (
                <div>
                  <SectionTitle
                    icon={
                      <Code className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
                    }
                  >
                    プロジェクト詳細
                  </SectionTitle>
                  <div className="grid gap-4">
                    {career.projectHighlights.map((project, index) => (
                      <ProjectCard key={index} project={project} />
                    ))}
                  </div>
                </div>
              )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CareerTimeline;
