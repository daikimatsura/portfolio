import { Badge } from "@/components/atoms/Badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/Card";
import { Briefcase, Calendar, Award } from "lucide-react";

interface CareerTimelineProps {
  careers: CareerHistory[];
}

export default function CareerTimeline({ careers }: CareerTimelineProps) {
  return (
    <div className="space-y-8">
      {careers.map((career) => (
        <Card key={career.id} className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
          <CardHeader>
            <CardTitle>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">{career.company}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    {career.position}
                  </p>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {career.period.start} - {career.period.end}
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 業務内容 */}
            {career.description && (
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  業務内容
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {career.description.split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </p>
              </div>
            )}

            {/* 成果・実績 */}
            {career.achievements && (
              <div>
                <h4 className="font-semibold mb-2 flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  主な成果・実績
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {career.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* プロジェクトハイライト */}
            {career.projectHighlights && (
              <div>
                <h4 className="font-semibold mb-3">プロジェクト詳細</h4>
                <div className="grid gap-4">
                  {career.projectHighlights.map((project, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-medium">{project.name}</h5>
                        <div className="flex flex-col items-end">
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            {project.period.start} - {project.period.end}
                          </div>
                          <Badge className="mt-1">{project.role}</Badge>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        {project.description.split("\n").map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
