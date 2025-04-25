"use client";

import React from "react";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <div className="bg-zinc-900">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-md mx-auto flex flex-col gap-12">
          <h2 className="text-3xl font-bold text-foreground text-center">
            Contact Us
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
