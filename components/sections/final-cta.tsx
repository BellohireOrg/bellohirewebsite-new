"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer, buttonHover } from "@/lib/animations";
import { SparklesCore } from "@/components/ui/sparkles";

export function FinalCTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="cta" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background with sparkles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background" />
        <SparklesCore
          id="cta-sparkles"
          background="transparent"
          minSize={0.3}
          maxSize={1}
          particleDensity={30}
          className="h-full w-full"
          particleColor="#3b82f6"
          speed={0.3}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="text-sm font-semibold uppercase tracking-widest text-primary"
          >
            Get Started
          </motion.span>

          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Start using <span className="text-primary">BelloHire</span> today
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            You don&apos;t need a sales call to get started. Candidates can create a profile
            and apply. Companies can post jobs and manage candidates. Recruiters can run
            hiring end-to-end.
          </motion.p>

          {/* Feature bullets */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Create an account</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Explore the platform</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Decide if it fits</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#"
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="group relative inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all glow w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                I&apos;m a Candidate
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </motion.a>

            <motion.a
              href="#"
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="group relative inline-flex items-center justify-center rounded-full border border-primary/50 bg-primary/10 px-8 py-4 text-lg font-semibold text-foreground transition-all hover:bg-primary/20 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                I&apos;m Hiring
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </motion.a>
          </motion.div>

          {/* Trust note */}
          <motion.p
            variants={fadeInUp}
            className="mt-8 text-sm text-muted-foreground"
          >
            Free to start. No credit card required.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

