"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Candidates Build a Real Profile",
    subtitle: "Not just a resume.",
    description:
      "Candidates create a structured profile that includes resume, skills matrix, auto-calculated experience, and optional video responses explaining their value, fit, and intent.",
    highlights: ["No gender", "No bias"],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Jobs Are Clear Before Candidates Apply",
    subtitle: "Understand, don't just read.",
    description:
      "For every published job, Keelzo summarizes the company and role using AI, explains how the role impacts the team and business, and shows which skills match — and which don't.",
    highlights: ["No false hope", "No blind applications"],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "One-Click Apply, Full Transparency",
    subtitle: "Apply once — not repeatedly.",
    description:
      "Resume and profile submitted together. Application status visible at every stage. No silent rejections. Withdrawal or resume updates allowed within a clear window.",
    highlights: ["A simple 'no' delivered with respect beats silence"],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Recruiters See Signal, Not Noise",
    subtitle: "Focus on the right people.",
    description:
      "Keelzo filters resumes before recruiters waste time. AI matches resumes against must-have criteria. Candidates ranked transparently. Low-fit resumes separated — not deleted.",
    highlights: ["Human decisions", "Assisted by AI — not replaced"],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
        />
      </svg>
    ),
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="text-sm font-semibold uppercase tracking-widest text-primary"
          >
            How It Works
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Simple flow, <span className="text-primary">powerful results</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-muted-foreground"
          >
            Four steps that respect everyone&apos;s time and create better outcomes.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="mt-20 relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden lg:block lg:left-1/2 lg:-translate-x-px" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Number indicator - mobile & desktop */}
                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 -translate-y-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                    className="relative flex h-16 w-16 items-center justify-center"
                  >
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-md" />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-background">
                      <span className="text-lg font-bold text-primary">
                        {step.number}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div
                  className={`ml-24 lg:ml-0 ${
                    index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:col-start-2 lg:pl-16"
                  }`}
                >
                  <div className="rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card">
                    {/* Icon */}
                    <div
                      className={`mb-6 inline-flex items-center justify-center rounded-xl border border-primary/20 bg-primary/10 p-3 text-primary ${
                        index % 2 === 0 ? "lg:ml-auto" : ""
                      }`}
                    >
                      {step.icon}
                    </div>

                    {/* Text content */}
                    <div className={index % 2 === 0 ? "lg:text-right" : ""}>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <p className="mt-2 text-sm font-medium text-primary">
                        {step.subtitle}
                      </p>
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      {/* Highlights */}
                      <div
                        className={`mt-6 flex flex-wrap gap-2 ${
                          index % 2 === 0 ? "lg:justify-end" : ""
                        }`}
                      >
                        {step.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

