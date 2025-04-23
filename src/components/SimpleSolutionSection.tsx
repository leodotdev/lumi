export default function SimpleSolutionSection() {
  const organizerFeatures = [
    "Control over fee-gouging",
    "Personalized experience for event goers",
    "Event mapping and navigation capabilities",
    "RealBackup eliminates the fear of lost tickets",
    "Real-time metrics with detailed customer analytics",
  ];

  return (
    <section className="w-full py-20 md:py-28 px-6 md:px-10 bg-background text-foreground">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
          We are resetting the playing field
        </h2>

        <p className="text-xl text-muted-foreground mb-20 max-w-2xl mx-auto animate-slide-up italic">
          realticket shifts the power to the people, where it belongs
        </p>

        <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-10 md:p-16 text-white shadow-xl animate-fade-in">
          <div className="animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-bold mb-12 max-w-3xl mx-auto leading-tight">
              Event organizers enjoy advanced control with the realticket Total
              Event Control Platform
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
            {organizerFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 animate-slide-up flex items-center justify-center text-center h-32"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="font-medium text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
