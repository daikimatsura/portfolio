import { useState } from "react";

type SkillCardProps = {
  skill: Skill;
};

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };
  return (
    <div className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
      <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
      <div className="space-y-4">
        {skill.skills
          .slice(0, expanded ? skill.skills.length : 4)
          .map((skill, skillIndex) => (
            <div key={skillIndex} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{skill.name}</span>
                <span className="text-gray-400">{skill.percentage}%</span>
              </div>
              <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        {skill.skills.length > 4 && (
          <div
            className="text-sm text-gray-400 mt-4 italic text-right cursor-pointer"
            onClick={toggleExpand}
          >
            {expanded ? "少なく表示" : "さらに詳細"}
          </div>
        )}
      </div>
    </div>
  );
};
