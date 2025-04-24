"use client";

import Link from "next/link";
import {
  IconBrandAppleFilled,
  IconPlayerPlayFilled,
  IconArrowRight,
} from "@tabler/icons-react";
import Script from "next/script";
import ClientCursorEffect from "./ClientCursorEffect";
import Image from "next/image";
import ScrollReveal from "./ui/ScrollReveal";
import TextReveal from "./ui/TextReveal";
import StaggeredReveal from "./ui/StaggeredReveal";

export default function HeroSection() {
  return (
    <>
      <Script id="product-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            "name": "Lumiinus",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "iOS",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Analyze your pet's stool for microscopic blood using your smartphone with lab-grade accuracy.",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "156"
            }
          }
        `}
      </Script>

      <section
        id="hero-section"
        className="vr-section bg-background relative overflow-hidden min-h-screen flex flex-col justify-center"
        aria-labelledby="hero-heading"
      >
        {/* Cursor Effect */}
        <ClientCursorEffect containerId="hero-section" />

        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-left vr-content">
              <ScrollReveal>
                <TextReveal
                  text="Shine A Light On Your Pet's Health"
                  as="h1"
                  id="hero-heading"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground vr-heading-spacing text-balance tracking-normal"
                  splitBy="words"
                  staggerAmount={0.05}
                />
              </ScrollReveal>

              <ScrollReveal delay={0.3} direction="up">
                <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed text-balance">
                  Analyze your pet's stool for microscopic blood using your
                  smartphone.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.5} direction="up">
                <Link
                  href="https://apps.apple.com/app/lumiinus/id1234567890"
                  className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Lumiinus on the App Store"
                >
                  <IconBrandAppleFilled
                    className="mr-2"
                    size={20}
                    aria-hidden="true"
                  />
                  Download on iOS
                  <IconArrowRight
                    className="ml-2"
                    size={20}
                    aria-hidden="true"
                  />
                </Link>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2} direction="left" variant="slide">
              <div
                className="aspect-video bg-card border border-border rounded-lg flex items-center justify-center overflow-hidden"
                role="img"
                aria-label="Lumiinus Product Demo Video"
              >
                <div className="text-center">
                  <IconPlayerPlayFilled
                    className="mx-auto text-primary opacity-60"
                    size={64}
                    stroke={1.5}
                  />
                  <p className="mt-4 text-muted-foreground">
                    Product Demo Video
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <section
          className="container mx-auto px-6 md:px-10 lg:px-16 mt-16 md:mt-24 mb-16 relative z-10"
          aria-labelledby="features-heading"
        >
          <div className="text-center vr-text-blocks">
            <ScrollReveal>
              <h2
                id="features-heading"
                className="text-2xl md:text-3xl font-bold text-foreground vr-heading-spacing text-balance"
              >
                Unleash the power of Lumiinus
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1} direction="up">
              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
                Laboratory grade imaging on your smartphone.
              </p>
            </ScrollReveal>
          </div>

          <StaggeredReveal
            staggerAmount={0.1}
            className="grid grid-cols-1 md:grid-cols-3 vr-grid gap-6"
          >
            <article className="bg-card border border-border p-6 rounded-lg text-center vr-card-content">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Detect trace amounts of blood
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Microscopic blood in stool can be an early sign of serious
                health issues.
              </p>
            </article>
            <article className="bg-card border border-border p-6 rounded-lg text-center vr-card-content">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Catch health issues early on
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With early detection, Lumiinus gives your pets a healthier and
                longer life.
              </p>
            </article>
            <article className="bg-card border border-border p-6 rounded-lg text-center vr-card-content">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Clinically validated
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Partnered with the top gastrointestinal lab in the country.
              </p>
            </article>
          </StaggeredReveal>

          <StaggeredReveal
            staggerAmount={0.1}
            direction="up"
            initialDelay={0.3}
            className="grid grid-cols-3 vr-grid mt-12 gap-6"
          >
            <div className="bg-card border border-border p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-foreground mb-2">96%</h3>
              <p className="text-muted-foreground text-lg">Sensitivity</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-foreground mb-2">92%</h3>
              <p className="text-muted-foreground text-lg">Specificity</p>
            </div>
            <div className="bg-card border border-border p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-foreground mb-2">
                1,000+
              </h3>
              <p className="text-muted-foreground text-lg">Samples analyzed</p>
            </div>
          </StaggeredReveal>
        </section>
      </section>
    </>
  );
}
