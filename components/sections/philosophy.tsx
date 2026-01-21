"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[400px] w-[400px] rounded-full border border-primary/10 animate-pulse" />
          <div className="absolute inset-8 rounded-full border border-primary/10 animate-pulse [animation-delay:0.5s]" />
          <div className="absolute inset-16 rounded-full border border-primary/10 animate-pulse [animation-delay:1s]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
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
            Our Philosophy
          </motion.span>

          {/* Main quote */}
          <motion.blockquote
            variants={fadeInUp}
            className="mt-10"
          >
            <p className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
              &ldquo;<span className="text-primary">Clear, efficient, role-aligned hiring</span>{" "}
              creates better outcomes for everyone.&rdquo;
            </p>
          </motion.blockquote>

          {/* Supporting text */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 space-y-4"
          >
            <p className="text-xl text-muted-foreground">
              Hiring is not interrogation.
            </p>
            <p className="text-xl text-muted-foreground">
              It&apos;s a <span className="text-foreground font-medium">two-way evaluation</span>.
            </p>
          </motion.div>

          {/* Final statement */}
          <motion.p
            variants={fadeInUp}
            className="mt-12 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            BelloHire is built to reflect that belief in every interaction — from the first
            job listing a candidate sees, to the final hiring decision a company makes.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}

