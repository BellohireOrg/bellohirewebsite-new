"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInDown, slideIn } from "@/lib/animations";

const navLinks = [
  { href: "#problem", label: "The Problem" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#for-who", label: "For Who" },
  { href: "#difference", label: "Why Us" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-strong border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
              <span className="text-lg font-bold text-primary">B</span>
              <div className="absolute inset-0 rounded-lg bg-primary/20 blur-sm" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Bello<span className="text-primary">Hire</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-1/2" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex md:items-center md:gap-3">
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Sign In
            </a>
            <a
              href="#cta"
              onClick={(e) => handleNavClick(e, "#cta")}
              className="group relative inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 glow-hover"
            >
              Get Started
              <svg
                className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
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
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors hover:bg-card hover:text-foreground md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideIn}
            className="fixed inset-x-0 top-16 bottom-0 glass-strong border-t border-border md:hidden"
          >
            <nav className="flex flex-col gap-2 p-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block rounded-lg px-4 py-3 text-lg font-medium text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                <a
                  href="#"
                  className="block rounded-lg px-4 py-3 text-center text-lg font-medium text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
                >
                  Sign In
                </a>
                <a
                  href="#cta"
                  onClick={(e) => handleNavClick(e, "#cta")}
                  className="block rounded-full bg-primary px-4 py-3 text-center text-lg font-semibold text-primary-foreground transition-all glow-hover"
                >
                  Get Started
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

