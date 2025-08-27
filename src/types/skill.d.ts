type ExperienceLevel = "業務でよく使う" | "使用経験あり" | "学習したことがある";

type Skill = {
  title: string;
  skills: {
    name: string;
    experienceLevel: ExperienceLevel;
  }[];
};
