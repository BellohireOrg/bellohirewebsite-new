import { FeedbackForm } from "@/components/feedback-form";

export const metadata = {
  title: "Voice of Customer | Keelzo",
  description: "Share your feedback and suggestions to help us improve the recruiting experience on Keelzo.",
};

const companyCategories = [
  "Candidate Quality",
  "ATS Features",
  "Hiring Workflow",
  "Job Posting Experience",
  "Team Collaboration",
  "Analytics & Reporting",
  "Support & Documentation",
  "Other",
];

export default function CompanyFeedbackPage() {
  return (
    <FeedbackForm
      title="Voice of Customer"
      subtitle="Your insights help us build better hiring tools. Share your recommendations with us."
      userName="Hiring Manager"
      userRole="Recruiter"
      categories={companyCategories}
    />
  );
}

