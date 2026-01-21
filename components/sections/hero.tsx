"use client";

import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import {
  fadeInUp,
  staggerSlow,
  buttonHover,
} from "@/lib/animations";

const words = ["Hiring,", "without", "the", "noise"];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      {/* Sparkles background */}
      <div className="absolute inset-0">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.4}
          particleDensity={50}
          className="h-full w-full"
          particleColor="#3b82f6"
          speed={0.5}
        />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerSlow}
        className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div variants={fadeInUp} className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Now in Beta
          </span>
        </motion.div>

        {/* Main headline with word animation */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`inline-block ${
                index === words.length - 1 ? "text-primary" : ""
              }`}
            >
              {word}
              {index < words.length - 1 && "\u00A0"}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-primary"
          >
            .
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl leading-relaxed"
        >
          A candidate-first hiring platform that replaces outdated ATS workflows
          with{" "}
          <span className="text-foreground font-medium">clarity</span>,{" "}
          <span className="text-foreground font-medium">speed</span>, and{" "}
          <span className="text-foreground font-medium">trust</span>.
        </motion.p>

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
            className="group relative inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all glow-hover w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              I&apos;m a Candidate
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
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
            className="group relative inline-flex items-center justify-center rounded-full border border-border bg-card/50 px-8 py-4 text-lg font-semibold text-foreground transition-all hover:bg-card hover:border-primary/30 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              I&apos;m Hiring
              <svg
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
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

        {/* Trust indicators */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-green-500"
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
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-green-500"
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
            <span>Free for candidates</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-green-500"
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
            <span>Setup in 5 minutes</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

