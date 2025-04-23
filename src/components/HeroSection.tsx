import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-br from-secondary to-secondary/60">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Shine a light on your pet's health.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed text-balance max-w-2xl mx-auto">
            Analyze your pet's stool for microscopic blood using your smartphone
          </p>
          <Link
            href="https://apps.apple.com/app/lumiinus/id1234567890"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download on iOS
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-16 mt-16">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            Unleash the power of Lumiinus
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance">
            Laboratory grade imaging on your smartphone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md text-center border border-border">
            <h3 className="text-xl font-bold text-card-foreground mb-4">
              Detect trace amounts of blood
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Microscopic blood in stool can be an early sign of serious health
              issues.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md text-center border border-border">
            <h3 className="text-xl font-bold text-card-foreground mb-4">
              Catch health issues early on
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              With early detection, Lumiinus gives your pets a healthier and
              longer life
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md text-center border border-border">
            <h3 className="text-xl font-bold text-card-foreground mb-4">
              Clinically Validated
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Partnered with the top gastrointestinal lab in the country.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-primary p-6 rounded-lg shadow-md text-center">
            <h3 className="text-3xl font-bold text-primary-foreground mb-2">
              96%
            </h3>
            <p className="text-primary-foreground text-lg">Sensitivity</p>
          </div>
          <div className="bg-primary p-6 rounded-lg shadow-md text-center">
            <h3 className="text-3xl font-bold text-primary-foreground mb-2">
              92%
            </h3>
            <p className="text-primary-foreground text-lg">Specificity</p>
          </div>
          <div className="bg-primary p-6 rounded-lg shadow-md text-center">
            <h3 className="text-3xl font-bold text-primary-foreground mb-2">
              1,000+
            </h3>
            <p className="text-primary-foreground text-lg">Samples Analyzed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
