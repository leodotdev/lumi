"use client";

export default function ForClinicsSection() {
  return (
    <div className="container mx-auto px-6 md:px-10 lg:px-16 py-20 bg-background">
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-card border border-border p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Clinically validated
          </h3>
          <p className="text-muted-foreground">
            96% sensitivity &amp; 92% specificity in spiked samples.
          </p>
        </div>
        <div className="bg-card border border-border p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Multiple studies
          </h3>
          <p className="text-muted-foreground">
            Partnered with the top GI veterinary lab in the country.
          </p>
        </div>
        <div className="bg-card border border-border p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Repeated testing
          </h3>
          <p className="text-muted-foreground">
            Provides precision health for your pet and continuous monitoring.
          </p>
        </div>
        <div className="bg-card border border-border p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Early detection
          </h3>
          <p className="text-muted-foreground">
            Pet owners catching health issues before its too late.
          </p>
        </div>
        <div className="bg-card border border-border p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Receive patient's results
          </h3>
          <p className="text-muted-foreground">
            Real-time lab results sent to your clinic via email.
          </p>
        </div>
        <div className="bg-card border border-border p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Drive treatment
          </h3>
          <p className="text-muted-foreground">
            Perform necessary testing the moment your patient arrives.
          </p>
        </div>
      </div>
    </div>
  );
}
