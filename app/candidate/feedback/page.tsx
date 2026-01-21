import { FeedbackForm } from "@/components/feedback-form";

export const metadata = {
  title: "Voice of Candidates | Keelzo",
  description: "Share your feedback and suggestions to help us improve the candidate experience on Keelzo.",
};

const candidateCategories = [
  "Job Search Experience",
  "Application Process",
  "Profile & Resume Tools",
  "Job Recommendations",
  "Communication & Notifications",
  "Platform Suggestions",
  "Other",
];

export default function CandidateFeedbackPage() {
  return (
    <FeedbackForm
      title="Voice of Candidates"
      subtitle="Help us build a better hiring experience. Your feedback shapes the future of Keelzo."
      userName="Candidate"
      userRole="Job Seeker"
      categories={candidateCategories}
    />
  );
}

