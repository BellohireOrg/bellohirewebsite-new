"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    label: "Transparent job portal for candidates",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "AI-assisted ATS for recruiters",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    label: "Shared system of truth for teams",
  },
];

export function WhatIsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInLeft}
              className="text-sm font-semibold uppercase tracking-widest text-primary"
            >
              What We Are
            </motion.span>
            <motion.h2
              variants={fadeInLeft}
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              A modern hiring platform built around{" "}
              <span className="text-primary">one principle</span>
            </motion.h2>
            <motion.div
              variants={fadeInLeft}
              className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6"
            >
              <p className="text-xl font-medium text-center leading-relaxed">
                &ldquo;Respect people&apos;s time — candidates and recruiters alike.&rdquo;
              </p>
            </motion.div>
            <motion.p
              variants={fadeInLeft}
              className="mt-8 text-lg text-muted-foreground leading-relaxed"
            >
              BelloHire combines a transparent job portal, AI-assisted screening, and
              a unified hiring workspace — all designed to move faster while treating
              everyone with dignity.
            </motion.p>
          </motion.div>

          {/* Right content - Feature list */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInRight}
                className="group relative rounded-xl border border-border bg-card/50 p-6 transition-all hover:border-primary/30 hover:bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-lg border border-primary/20 bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{feature.label}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {index === 0 &&
                        "Clear expectations, honest feedback, and full visibility into your application status."}
                      {index === 1 &&
                        "Smart matching that surfaces the best candidates first, without hiding anyone."}
                      {index === 2 &&
                        "Everyone on the hiring team sees the same data, notes, and progress."}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Stats row */}
            <motion.div
              variants={fadeInRight}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50%</div>
                <div className="text-xs text-muted-foreground">Faster screening</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3x</div>
                <div className="text-xs text-muted-foreground">More responses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground">Transparent</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

