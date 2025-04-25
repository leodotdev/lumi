"use client";

import AnimatedButton from "./ui/AnimatedButton";

export default function CallToAction() {
  return (
    <section className="w-full bg-zinc-900">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24 text-center flex flex-col items-center gap-12">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why scoop, when you can snap?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scan in seconds and share results with your vet.
          </p>
        </div>
        <AnimatedButton href="https://apps.apple.com/app/lumiinus/id1234567890" />
      </div>
    </section>
  );
}
