"use client";

import Link from "next/link";
import { IconBrandAppleFilled, IconArrowRight } from "@tabler/icons-react";

export default function CallToAction() {
  return (
    <section className="w-full vr-section bg-zinc-900">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 text-center vr-content">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground vr-heading-spacing">
          Why scoop, when you can snap?
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Scan in seconds and share results with your vet.
        </p>
        <Link
          href="https://apps.apple.com/app/lumiinus/id1234567890"
          className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:opacity-90 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandAppleFilled className="mr-2" size={24} />
          Download on iOS
          <IconArrowRight className="ml-2" size={24} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
