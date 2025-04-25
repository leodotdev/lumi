export default function HowItWorksSection() {
  return (
    <div className="container mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24 flex flex-col gap-12 md:gap-16">
      <div className="text-center flex flex-col gap-6">
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          How it works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          As easy as taking a selfie.
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Three easy steps to monitoring your pet's stool for microscopic blood.
          Take control of your pet's health and catch symptoms with clarity and
          ease.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card/50 border border-border/50 p-8 rounded-lg shadow-md flex flex-col gap-4">
          <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
            <span className="text-primary font-bold">1</span>
          </div>
          <h3 className="text-xl font-bold text-card-foreground">
            Input symptoms
          </h3>
          <p className="text-card-foreground">
            Tell us if your pet is experiencing any symptoms.
          </p>
          <p className="text-muted-foreground">
            Before testing, tell us about your pet, any preexisting conditions,
            and if they're experiencing any symptoms. This will give us enough
            data to provide a thorough plan of action.
          </p>
        </div>

        <div className="bg-card/50 border border-border/50 p-8 rounded-lg shadow-md flex flex-col gap-4">
          <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
            <span className="text-primary font-bold">2</span>
          </div>
          <h3 className="text-xl font-bold text-card-foreground">
            Ready to test
          </h3>
          <p className="text-card-foreground">Scan your pet's stool sample.</p>
          <p className="text-muted-foreground">
            Perform the test at different angles to guarantee the best results.
            Using our clinically proven and lab-based technology, we can
            accurately detect hemoglobin in seconds.
          </p>
        </div>

        <div className="bg-card/50 border border-border/50 p-8 rounded-lg shadow-md flex flex-col gap-4">
          <div className="bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
            <span className="text-primary font-bold">3</span>
          </div>
          <h3 className="text-xl font-bold text-card-foreground">
            Receive and share results
          </h3>
          <p className="text-card-foreground">Send your results to the vet.</p>
          <p className="text-muted-foreground">
            Within minutes, you will receive your lab results. Review them and
            share with your vet!
          </p>
        </div>
      </div>
    </div>
  );
}
