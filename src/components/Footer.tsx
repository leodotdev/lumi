"use client";

import Link from "next/link";
import { scrollToElement } from "@/utils/scroll";

export default function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    scrollToElement(id);
  };

  return (
    <footer className="w-full py-12 bg-background">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              Lumiinus
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-10 justify-center">
            <Link
              href="#how-it-works"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, "how-it-works")}
            >
              How it works
            </Link>
            <Link
              href="#about-us"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, "about-us")}
            >
              About us
            </Link>
            <Link
              href="#for-pet-owners"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, "for-pet-owners")}
            >
              For pet owners
            </Link>
            <Link
              href="#for-clinics"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, "for-clinics")}
            >
              For clinics
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Contact us
            </Link>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Lumiinus. All rights reserved.
          </p>
          <p className="text-muted-foreground mt-2">Made in 🇺🇸</p>
        </div>
      </div>
    </footer>
  );
}
