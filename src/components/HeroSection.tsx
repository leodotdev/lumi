import Link from "next/link";
import { IconBrandAppleFilled } from "@tabler/icons-react";
import { CursorEffect } from "./ui/CursorEffect";
import Script from "next/script";

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
        className="vr-section bg-background relative overflow-hidden min-h-screen flex flex-col justify-center"
        aria-labelledby="hero-heading"
      >
        {/* Cursor Effect */}
        <CursorEffect
          colors={["92, 0, 255", "0, 92, 255", "255, 0, 255"]}
          sizes={[400, 300, 250]}
          blur={60}
          opacity={0.4}
          particleCount={7}
          zIndex={1}
        />

        <div className="container mx-auto px-6 md:px-10 lg:px-16 relative z-10 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-left vr-content">
              <h1
                id="hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground vr-heading-spacing text-balance"
              >
                Shine a light on your pet&apos;s health
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed text-balance">
                Analyze your pet&apos;s stool for microscopic blood using your
                smartphone.
              </p>
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
                <svg
                  className="ml-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>

            <div
              className="aspect-video bg-card rounded-lg flex items-center justify-center border border-border overflow-hidden"
              role="img"
              aria-label="Lumiinus Product Demo Video"
            >
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-16 h-16 mx-auto text-primary opacity-60"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
                <p className="mt-4 text-muted-foreground">Product Demo Video</p>
              </div>
            </div>
          </div>
        </div>

        <section
          className="container mx-auto px-6 md:px-10 lg:px-16 mt-16 md:mt-24 mb-16 relative z-10"
          aria-labelledby="features-heading"
        >
          <div className="text-center vr-text-blocks">
            <h2
              id="features-heading"
              className="text-2xl md:text-3xl font-bold text-foreground vr-heading-spacing text-balance"
            >
              Unleash the power of Lumiinus
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
              Laboratory grade imaging on your smartphone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 vr-grid gap-6">
            <article className="bg-card p-6 rounded-lg text-center vr-card-content">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Detect trace amounts of blood
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Microscopic blood in stool can be an early sign of serious
                health issues.
              </p>
            </article>
            <article className="bg-card p-6 rounded-lg text-center vr-card-content">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Catch health issues early on
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With early detection, Lumiinus gives your pets a healthier and
                longer life.
              </p>
            </article>
            <article className="bg-card p-6 rounded-lg text-center vr-card-content">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Clinically validated
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Partnered with the top gastrointestinal lab in the country.
              </p>
            </article>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 vr-grid mt-12 gap-6">
            <div className="bg-card p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-foreground mb-2">96%</h3>
              <p className="text-muted-foreground text-lg">Sensitivity</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-foreground mb-2">92%</h3>
              <p className="text-muted-foreground text-lg">Specificity</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <h3 className="text-3xl font-bold text-foreground mb-2">
                1,000+
              </h3>
              <p className="text-muted-foreground text-lg">Samples analyzed</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
