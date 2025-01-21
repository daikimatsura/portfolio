type CareerHistory = {
  id: string;
  company: string;
  position: string;
  period: {
    start: string;
    end: string | "present";
  };
  description?: string;
  achievements?: string[];
  projectHighlights?: {
    name: string;
    role: string;
    description: string;
    technologies: string[];
    period: {
      start: string;
      end: string;
    };
  }[];
};
