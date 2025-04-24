"use client";

import Link from "next/link";
import { scrollToElement } from "@/utils/scroll";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimation } from "@/providers/AnimationProvider";
import { useState, useEffect } from "react";
import { IconMenu2, IconX, IconArrowLeft } from "@tabler/icons-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu on window resize (if window becomes large enough for desktop nav)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    scrollToElement(id);
    setIsMenuOpen(false); // Close menu when navigation link is clicked
  };

  // Get animation preferences from context
  const { enableAnimations, prefersReducedMotion, animationSpeed } =
    useAnimation();

  // Skip animations if reduced motion is preferred or animations are disabled
  const shouldAnimate = enableAnimations && !prefersReducedMotion;

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5 / animationSpeed,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1 / animationSpeed,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3 / animationSpeed,
        ease: "easeOut",
      },
    },
  };

  // Mobile menu animation variants
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3 / animationSpeed,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4 / animationSpeed,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1 / animationSpeed,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3 / animationSpeed,
      },
    },
  };

  // Wrapper component that conditionally applies animations
  const AnimatedContainer = shouldAnimate ? motion.header : "header";
  const AnimatedItem = shouldAnimate ? motion.div : "div";
  const AnimatedNav = shouldAnimate ? motion.nav : "nav";

  // Navigation links data for DRY code
  const navLinks = [
    { href: "#how-it-works", label: "How it works" },
    { href: "#about-us", label: "About us" },
    { href: "#for-pet-owners", label: "For pet owners" },
    { href: "#for-clinics", label: "For clinics" },
    { href: "#contact", label: "Contact us" },
  ];

  return (
    <AnimatedContainer
      className="w-full py-6 px-6 md:px-10 lg:px-16 flex items-center justify-between sticky top-0 bg-background/90 backdrop-blur-sm z-50 border-b border-border"
      variants={shouldAnimate ? headerVariants : undefined}
      initial="hidden"
      animate="visible"
    >
      <AnimatedItem variants={shouldAnimate ? itemVariants : undefined}>
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo_white.png"
            alt="Lumiinus Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>
      </AnimatedItem>

      {/* Desktop Navigation */}
      <AnimatedNav
        className="hidden md:flex items-center space-x-8"
        variants={shouldAnimate ? itemVariants : undefined}
      >
        {navLinks.map((link, index) => (
          <AnimatedItem
            key={index}
            variants={shouldAnimate ? itemVariants : undefined}
          >
            <Link
              href={link.href}
              className="text-foreground hover:text-primary transition-colors font-medium"
              onClick={(e) => handleNavClick(e, link.href.substring(1))}
            >
              {link.label}
            </Link>
          </AnimatedItem>
        ))}
      </AnimatedNav>

      {/* Mobile Menu Toggle Button */}
      <AnimatedItem
        variants={shouldAnimate ? itemVariants : undefined}
        className="block md:hidden"
      >
        <button
          className="p-2 text-foreground hover:text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <IconMenu2 size={24} stroke={1.5} />
        </button>
      </AnimatedItem>

      {/* Mobile Menu (Slide-in) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Solid background overlay */}
            <div className="fixed inset-0 bg-black z-40 md:hidden" />

            <motion.div
              className="fixed inset-0 z-40 md:hidden"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={shouldAnimate ? mobileMenuVariants : undefined}
            >
              <div className="h-full w-full flex flex-col bg-black pt-16 px-8 relative">
                {/* Close button */}
                <button
                  className="absolute top-6 right-6 p-2 text-foreground hover:text-primary rounded-full hover:bg-muted transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <IconX size={24} stroke={1.5} />
                </button>

                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    variants={shouldAnimate ? mobileItemVariants : undefined}
                    className="py-4 border-b border-border"
                  >
                    <Link
                      href={link.href}
                      className="text-xl font-medium text-foreground hover:text-primary transition-colors"
                      onClick={(e) => handleNavClick(e, link.href.substring(1))}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </AnimatedContainer>
  );
}
