import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Keelzo | Hiring, without the noise",
  description:
    "A candidate-first hiring platform that replaces outdated ATS workflows with clarity, speed, and trust. Modern recruiting for startups and growing companies.",
  keywords: [
    "hiring platform",
    "ATS",
    "applicant tracking system",
    "recruiting software",
    "candidate experience",
    "AI recruiting",
    "job portal",
    "HR tech",
  ],
  openGraph: {
    title: "Keelzo | Hiring, without the noise",
    description:
      "A candidate-first hiring platform that replaces outdated ATS workflows with clarity, speed, and trust.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
