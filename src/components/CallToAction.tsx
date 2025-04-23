"use client";

import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="w-full py-16 bg-primary">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
          Why scoop, when you can snap?
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto">
          Scan in seconds and share results with your vet.
        </p>
        <Link
          href="https://apps.apple.com/app/lumiinus/id1234567890"
          className="inline-flex items-center px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-medium text-lg hover:opacity-90 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download on iOS
          <svg
            className="ml-2 w-6 h-6"
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
    </section>
  );
}
