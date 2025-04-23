"use client";

import React from "react";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <div className="bg-zinc-900 py-20 vr-section">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">
            Contact Us
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
