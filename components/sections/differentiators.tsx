"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer, cardHover } from "@/lib/animations";

const differentiators = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Candidate Experience Is a First-Class Feature",
    description:
      "Not an afterthought. Every design decision considers how candidates will feel. Because great hiring starts with treating people well.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "AI Is Used Where It Actually Helps",
    description:
      "Resume-JD matching. Job understanding. Candidate clarity. No gimmicky recommendations. No spam alerts. Just useful intelligence.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    title: "Fewer Filters, Better Results",
    description:
      "We avoid over-engineered search. Focus on what actually works: Skills. Experience. Location. Job type. Simple inputs, powerful matching.",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    title: "Transparency Over Guesswork",
    description:
      "Candidates know where they stand, when roles close, if recruiters are active. Recruiters know why candidates rank, where drop-offs happen.",
  },
];

export function DifferentiatorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="difference" className="relative py-24 sm:py-32">
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
            What Makes Us Different
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Built on <span className="text-primary">principles</span>, not features
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg text-muted-foreground"
          >
            We made intentional choices about what to build — and what not to build.
          </motion.p>
        </motion.div>

        {/* Differentiator cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mt-16 grid gap-6 sm:grid-cols-2"
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="rest"
              whileHover="hover"
              className="group relative"
            >
              <motion.div
                variants={cardHover}
                className="relative h-full rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm overflow-hidden transition-colors hover:border-primary/30"
              >
                {/* Subtle glow on hover */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10" />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-primary/10 border border-primary/20 p-3 text-primary">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold leading-snug">{item.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

