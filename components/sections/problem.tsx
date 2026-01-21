"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer, cardHover } from "@/lib/animations";

const problems = [
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
        />
      </svg>
    ),
    title: "Candidates apply and never hear back",
    description:
      "Applications vanish into a black hole. No status updates. No closure. Just silence that erodes trust in the entire hiring system.",
    stat: "75%",
    statLabel: "never get a response",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Recruiters drown in irrelevant resumes",
    description:
      "Hundreds of applications per role, most unqualified. Hours spent screening instead of engaging with the right people.",
    stat: "250+",
    statLabel: "applications per role",
  },
  {
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Weeks lost to coordination, not decisions",
    description:
      "Hiring managers juggle calendars, chase feedback, and lose candidates to faster companies. Time kills all deals.",
    stat: "36",
    statLabel: "days average time-to-hire",
  },
];

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="problem" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

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
            The Problem
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Hiring today is{" "}
            <span className="text-primary">broken</span> in three ways
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-muted-foreground leading-relaxed"
          >
            Most ATS tools optimize for <em>process</em>, not <em>people</em>.
            They collect resumes — but fail to create understanding.
          </motion.p>
        </motion.div>

        {/* Problem cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="rest"
              whileHover="hover"
              className="group relative"
            >
              <motion.div
                variants={cardHover}
                className="relative h-full rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm transition-colors hover:border-primary/30"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6 inline-flex items-center justify-center rounded-xl border border-destructive/20 bg-destructive/10 p-3 text-destructive">
                    {problem.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold leading-snug">
                    {problem.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>

                  {/* Stat */}
                  <div className="mt-6 flex items-baseline gap-2 border-t border-border pt-6">
                    <span className="text-3xl font-bold text-destructive">
                      {problem.stat}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {problem.statLabel}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xl font-semibold text-primary">
            BelloHire exists to fix that.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

