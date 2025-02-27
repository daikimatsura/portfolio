import { Metadata } from "next";
import JobHistory from "@/components/pages/JobHistory";

export const metadata: Metadata = {
  title: "Job History| daiki matsuura ポートフォリオ",
  description: "Job History",
};

const JobHistoryPage = () => {
  return <JobHistory />;
};

export default JobHistoryPage;
