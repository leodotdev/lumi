"use client";

import Link from "next/link";
import { scrollToElement } from "@/utils/scroll";
import Script from "next/script";

export default function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    scrollToElement(id);
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <Script id="organization-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Lumiinus",
            "url": "https://lumiinus.com",
            "logo": "https://lumiinus.com/logo.png",
            "description": "Lumiinus provides pet health blood detection technology through a mobile app that analyzes pet stool for microscopic blood using smartphone cameras.",
            "foundingDate": "2022",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "support@lumiinus.com"
            },
            "sameAs": [
              "https://twitter.com/lumiinus",
              "https://www.instagram.com/lumiinus",
              "https://www.facebook.com/lumiinus"
            ]
          }
        `}
      </Script>

      <footer className="w-full py-12 bg-background" role="contentinfo">
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <Link
                href="/"
                className="text-2xl font-bold text-primary"
                aria-label="Lumiinus Home"
              >
                Lumiinus
              </Link>
            </div>

            <nav aria-label="Footer Navigation">
              <ul className="flex flex-wrap gap-6 md:gap-10 justify-center">
                <li>
                  <Link
                    href="#how-it-works"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => handleNavClick(e, "how-it-works")}
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about-us"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => handleNavClick(e, "about-us")}
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#for-pet-owners"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => handleNavClick(e, "for-pet-owners")}
                  >
                    For pet owners
                  </Link>
                </li>
                <li>
                  <Link
                    href="#for-clinics"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => handleNavClick(e, "for-clinics")}
                  >
                    For clinics
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => handleNavClick(e, "contact")}
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground">
              © {currentYear} Lumiinus. All rights reserved.
            </p>
            <p className="text-muted-foreground mt-2">
              <span aria-label="Made in United States">Made in 🇺🇸</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
