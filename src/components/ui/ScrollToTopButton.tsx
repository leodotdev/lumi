"use client";

import { IconArrowUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position and update button visibility
  useEffect(() => {
    const toggleVisibility = () => {
      // Get total scrollable height (document height - viewport height)
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      // Show button when scrolled past 50% of the total scrollable height
      const scrolledPercentage = (window.scrollY / scrollableHeight) * 100;
      setIsVisible(scrolledPercentage >= 50);
    };

    // Check visibility on mount
    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg hover:opacity-90 transition-opacity"
          aria-label="Scroll to top"
        >
          <IconArrowUp size={20} />
          <span className="text-sm font-medium">Back to top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
