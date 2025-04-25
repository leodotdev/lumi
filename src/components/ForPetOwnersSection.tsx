"use client";

export default function ForPetOwnersSection() {
  return (
    <div className="container mx-auto px-6 md:px-10 lg:px-16 py-20 bg-background">
      <div className="text-center flex flex-col gap-6">
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          For pet owners
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Detect microscopic blood in pet stool using your smartphone.
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Three easy steps to monitoring your pet's stool for microscopic blood.
          Take control of your pet's health and catch symptoms with clarity and
          ease.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-foreground">
            Blood in Stool Is a Problem
          </h3>
          <p className="text-muted-foreground">
            Blood in your pet's stool can be an early sign of hidden health
            issues, like gastrointestinal problems or infections. Catching these
            signs early helps keep your furry friend healthy and happy. That's
            why monitoring their stool is a simple yet powerful way to stay
            ahead of potential problems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-muted-foreground">Parasites</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-muted-foreground">
                Allergies or Food Sensitivities
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-muted-foreground">
                Inflammatory Bowel Disease (IBD)
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-muted-foreground">Stress or Anxiety</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-muted-foreground">Dietary Indiscretion</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-muted-foreground">Ulcers</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-muted-foreground">Infections</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-muted-foreground">Tumors</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border p-8 rounded-lg flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-foreground">3 Easy Steps</h3>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">1</span>
              </div>
              <h4 className="text-xl font-bold text-foreground">
                Input symptoms
              </h4>
            </div>
            <p className="text-muted-foreground pl-12">
              Share symptoms your pet is experiencing
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">2</span>
              </div>
              <h4 className="text-xl font-bold text-foreground">Scan stool</h4>
            </div>
            <p className="text-muted-foreground pl-12">
              Perform 3 scans on your pets stool from different angles
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">3</span>
              </div>
              <h4 className="text-xl font-bold text-foreground">
                Share with vet
              </h4>
            </div>
            <p className="text-muted-foreground pl-12">
              Receive your lab results in 5 minutes and share with your vet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
