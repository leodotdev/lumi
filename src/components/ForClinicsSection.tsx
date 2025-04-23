"use client";

import Link from "next/link";

export default function ForClinicsSection() {
  return (
    <div className="container mx-auto px-6 md:px-10 lg:px-16 py-20 bg-secondary/40">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          For clinics
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Diagnose Faster, Treat Sooner
        </p>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
          Empower pet owners to drive detection to treatment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-card p-6 rounded-lg shadow-md border border-border">
          <h3 className="text-xl font-bold text-card-foreground mb-4">
            Clinically Validated
          </h3>
          <p className="text-muted-foreground">
            96% sensitivity &amp; 92% specificity in spiked samples
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md border border-border">
          <h3 className="text-xl font-bold text-card-foreground mb-4">
            Multiple Studies
          </h3>
          <p className="text-muted-foreground">
            Partnered with the top GI veterinary lab in the country
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md border border-border">
          <h3 className="text-xl font-bold text-card-foreground mb-4">
            Repeated Testing
          </h3>
          <p className="text-muted-foreground">
            Provides precision health for your pet and continuous monitoring
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md border border-border">
          <h3 className="text-xl font-bold text-card-foreground mb-4">
            Early Detection
          </h3>
          <p className="text-muted-foreground">
            Pet owners catching health issues before its too late
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md border border-border">
          <h3 className="text-xl font-bold text-card-foreground mb-4">
            Receive Patient's Results
          </h3>
          <p className="text-muted-foreground">
            Real-time lab results sent to your clinic via email
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md border border-border">
          <h3 className="text-xl font-bold text-card-foreground mb-4">
            Drive Treatment
          </h3>
          <p className="text-muted-foreground">
            Perform necessary testing the moment your patient arrives
          </p>
        </div>
      </div>

      <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-lg shadow-md text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Why scoop, when you can snap?
        </h3>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Scan in seconds and share results with your vet.
        </p>
        <a
          className="inline-flex items-center px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:opacity-90 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          href="https://apps.apple.com/app/lumiinus/id1234567890"
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
        </a>
      </div>
    </div>
  );
}
