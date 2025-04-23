"use client";

export default function ForPetOwnersSection() {
  return (
    <div className="container mx-auto px-6 md:px-10 lg:px-16 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          For pet owners
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Detect microscopic blood in pet stool using your smartphone.
        </p>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
          Three easy steps to monitoring your pet's stool for microscopic blood.
          Take control of your pet's health and catch symptoms with clarity and
          ease.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Blood in Stool is a Problem
          </h3>
          <p className="text-muted-foreground mb-6">
            Blood in your pet's stool can be an early sign of hidden health
            issues, like gastrointestinal problems or infections. Catching these
            signs early helps keep your furry friend healthy and happy. That's
            why monitoring their stool is a simple yet powerful way to stay
            ahead of potential problems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2"></div>
              <p className="text-muted-foreground">Parasites</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2"></div>
              <p className="text-muted-foreground">
                Allergies or Food Sensitivities
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2"></div>
              <p className="text-muted-foreground">
                Inflammatory Bowel Disease (IBD)
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2"></div>
              <p className="text-muted-foreground">Stress or Anxiety</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2"></div>
              <p className="text-muted-foreground">Dietary Indiscretion</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2"></div>
              <p className="text-muted-foreground">Ulcers</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2"></div>
              <p className="text-muted-foreground">Infections</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-2"></div>
              <p className="text-muted-foreground">Tumors</p>
            </div>
          </div>
        </div>

        <div className="bg-secondary/40 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            3 Easy Steps
          </h3>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                <span className="text-primary-foreground font-bold">1</span>
              </div>
              <h4 className="text-xl font-bold text-foreground">
                Input Symptoms
              </h4>
            </div>
            <p className="text-muted-foreground ml-12">
              Share symptoms your pet is experiencing
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                <span className="text-primary-foreground font-bold">2</span>
              </div>
              <h4 className="text-xl font-bold text-foreground">Scan Stool</h4>
            </div>
            <p className="text-muted-foreground ml-12">
              Perform 3 scans on your pets stool from different angles
            </p>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4">
                <span className="text-primary-foreground font-bold">3</span>
              </div>
              <h4 className="text-xl font-bold text-foreground">
                Share with Vet
              </h4>
            </div>
            <p className="text-muted-foreground ml-12">
              Receive your lab results in 5 minutes and share with your vet
            </p>
          </div>
        </div>
      </div>

      <div
        id="contact"
        className="bg-secondary/70 p-8 md:p-12 rounded-lg shadow-md text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          Contact Us
        </h3>
        <form className="max-w-xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
