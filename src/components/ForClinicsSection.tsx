"use client";

import {
  IconTestPipe,
  IconMicroscope,
  IconRepeat,
  IconEye,
  IconMailFast,
  IconStethoscope,
} from "@tabler/icons-react";

export default function ForClinicsSection() {
  return (
    <div className="container mx-auto px-6 md:px-10 lg:px-16 py-20 bg-background flex flex-col gap-16">
      <div className="text-center flex flex-col gap-4">
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          For clinics
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Diagnose faster, treat sooner.
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Empower pet owners to drive detection to treatment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-card border border-border p-6 rounded-lg text-center flex flex-col gap-4">
          <div className="flex justify-center">
            <IconTestPipe size={32} className="text-primary" stroke={1.5} />
          </div>
          <h3 className="text-xl font-bold text-foreground">
            Clinically validated
          </h3>
          <p className="text-muted-foreground">
            96% sensitivity &amp; 92% specificity in spiked samples.
          </p>
        </div>
        <div className="bg-card border border-border p-6 rounded-lg text-center flex flex-col gap-4">
          <div className="flex justify-center">
            <IconMicroscope size={32} className="text-primary" stroke={1.5} />
          </div>
          <h3 className="text-xl font-bold text-foreground">
            Multiple studies
          </h3>
          <p className="text-muted-foreground">
            Partnered with the top GI veterinary lab in the country.
          </p>
        </div>
        <div className="bg-card border border-border p-6 rounded-lg text-center flex flex-col gap-4">
          <div className="flex justify-center">
            <IconRepeat size={32} className="text-primary" stroke={1.5} />
          </div>
          <h3 className="text-xl font-bold text-foreground">
            Repeated testing
          </h3>
          <p className="text-muted-foreground">
            Provides precision health for your pet and continuous monitoring.
          </p>
        </div>
        <div className="bg-card border border-border p-6 rounded-lg text-center flex flex-col gap-4">
          <div className="flex justify-center">
            <IconEye size={32} className="text-primary" stroke={1.5} />
          </div>
          <h3 className="text-xl font-bold text-foreground">Early detection</h3>
          <p className="text-muted-foreground">
            Pet owners catching health issues before its too late.
          </p>
        </div>
        <div className="bg-card border border-border p-6 rounded-lg text-center flex flex-col gap-4">
          <div className="flex justify-center">
            <IconMailFast size={32} className="text-primary" stroke={1.5} />
          </div>
          <h3 className="text-xl font-bold text-foreground">
            Receive patient's results
          </h3>
          <p className="text-muted-foreground">
            Real-time lab results sent to your clinic via email.
          </p>
        </div>
        <div className="bg-card border border-border p-6 rounded-lg text-center flex flex-col gap-4">
          <div className="flex justify-center">
            <IconStethoscope size={32} className="text-primary" stroke={1.5} />
          </div>
          <h3 className="text-xl font-bold text-foreground">Drive treatment</h3>
          <p className="text-muted-foreground">
            Perform necessary testing the moment your patient arrives.
          </p>
        </div>
      </div>
    </div>
  );
}
