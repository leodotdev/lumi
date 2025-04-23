"use client";

import Link from "next/link";
import { scrollToElement } from "@/utils/scroll";

export default function Header() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    scrollToElement(id);
  };

  return (
    <header className="w-full py-6 px-6 md:px-10 lg:px-16 flex items-center justify-between sticky top-0 bg-background/90 backdrop-blur-sm z-50 border-b border-border">
      <Link href="/" className="flex items-center">
        <span className="text-2xl font-bold text-primary">Lumiinus</span>
      </Link>

      <nav className="hidden md:flex items-center space-x-8">
        <Link
          href="#how-it-works"
          className="text-foreground hover:text-primary transition-colors font-medium"
          onClick={(e) => handleNavClick(e, "how-it-works")}
        >
          How it works
        </Link>
        <Link
          href="#about-us"
          className="text-foreground hover:text-primary transition-colors font-medium"
          onClick={(e) => handleNavClick(e, "about-us")}
        >
          About us
        </Link>
        <Link
          href="#for-pet-owners"
          className="text-foreground hover:text-primary transition-colors font-medium"
          onClick={(e) => handleNavClick(e, "for-pet-owners")}
        >
          For pet owners
        </Link>
        <Link
          href="#for-clinics"
          className="text-foreground hover:text-primary transition-colors font-medium"
          onClick={(e) => handleNavClick(e, "for-clinics")}
        >
          For clinics
        </Link>
        <Link
          href="#contact"
          className="text-foreground hover:text-primary transition-colors font-medium"
          onClick={(e) => handleNavClick(e, "contact")}
        >
          Contact us
        </Link>
      </nav>

      <div className="block md:hidden">
        <button className="p-2 text-foreground hover:text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
