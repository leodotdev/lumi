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
import AnimatedButton from "./ui/AnimatedButton";

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
        className="bg-background relative overflow-hidden min-h-screen flex flex-col"
        aria-labelledby="hero-heading"
      >
        <ClientCursorEffect containerId="hero-section" />

        <div className="container mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24 relative z-10 flex flex-col gap-24 md:gap-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
            <div className="text-left flex flex-col gap-8">
              <ScrollReveal>
                <TextReveal
                  text="Shine A Light On Your Pet's Health"
                  as="h1"
                  id="hero-heading"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance tracking-normal"
                  splitBy="words"
                  staggerAmount={0.05}
                />
              </ScrollReveal>

              <ScrollReveal delay={0.3} direction="up">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-balance">
                  Analyze your pet's stool for microscopic blood using your
                  smartphone.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.5} direction="up">
                <AnimatedButton href="https://apps.apple.com/app/lumiinus/id1234567890" />
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2} direction="left" variant="slide">
              <div
                className="aspect-video bg-card/50 border border-border/50 rounded-lg flex flex-col items-center justify-center gap-4 overflow-hidden"
                role="img"
                aria-label="Lumiinus Product Demo Video"
              >
                <div className="text-center flex flex-col items-center gap-4">
                  <IconPlayerPlayFilled
                    className="text-primary/60"
                    size={64}
                    stroke={1.5}
                  />
                  <p className="text-muted-foreground">Product Demo Video</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <section
            className="flex flex-col gap-12 md:gap-16"
            aria-labelledby="features-heading"
          >
            <div className="text-center flex flex-col gap-6">
              <ScrollReveal>
                <h2
                  id="features-heading"
                  className="text-2xl md:text-3xl font-bold text-foreground text-balance"
                >
                  Unleash the power of Lumiinus
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1} direction="up">
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                  Laboratory grade imaging on your smartphone.
                </p>
              </ScrollReveal>
            </div>

            <StaggeredReveal
              staggerAmount={0.1}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <article className="bg-card/50 border border-border/50 p-8 rounded-lg text-center flex flex-col gap-4">
                <h3 className="text-xl font-bold text-foreground">
                  Detect trace amounts of blood
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Microscopic blood in stool can be an early sign of serious
                  health issues.
                </p>
              </article>
              <article className="bg-card/50 border border-border/50 p-8 rounded-lg text-center flex flex-col gap-4">
                <h3 className="text-xl font-bold text-foreground">
                  Catch health issues early on
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  With early detection, Lumiinus gives your pets a healthier and
                  longer life.
                </p>
              </article>
              <article className="bg-card/50 border border-border/50 p-8 rounded-lg text-center flex flex-col gap-4">
                <h3 className="text-xl font-bold text-foreground">
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
              className="grid grid-cols-3 gap-6"
            >
              <div className="bg-card/50 border border-border/50 p-6 rounded-lg text-center flex flex-col gap-2">
                <h3 className="text-3xl font-bold text-foreground">96%</h3>
                <p className="text-muted-foreground text-lg">Sensitivity</p>
              </div>
              <div className="bg-card/50 border border-border/50 p-6 rounded-lg text-center flex flex-col gap-2">
                <h3 className="text-3xl font-bold text-foreground">92%</h3>
                <p className="text-muted-foreground text-lg">Specificity</p>
              </div>
              <div className="bg-card/50 border border-border/50 p-6 rounded-lg text-center flex flex-col gap-2">
                <h3 className="text-3xl font-bold text-foreground">1,000+</h3>
                <p className="text-muted-foreground text-lg">
                  Samples analyzed
                </p>
              </div>
            </StaggeredReveal>
          </section>
        </div>
      </section>
    </>
  );
}
