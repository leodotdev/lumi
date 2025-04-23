export default function SimpleBlockchainSection() {
  const blockchainFeatures = [
    {
      icon: "🔒",
      title: "Secure",
      description: "Immutable ledger ensures ticket authenticity",
    },
    {
      icon: "⚡",
      title: "Fast",
      description: "Instant transfers and validations",
    },
    {
      icon: "🌐",
      title: "Transparent",
      description: "Full visibility throughout the ticket lifecycle",
    },
  ];

  return (
    <section className="w-full py-20 md:py-28 px-6 md:px-10 bg-background text-foreground">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 animate-fade-in">
          All born of and backed by blockchain technology
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {blockchainFeatures.map((item, index) => (
            <div
              key={index}
              className="bg-card text-card-foreground p-10 rounded-2xl shadow-xl hover:-translate-y-2 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-5xl mb-6 bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="relative h-40 flex items-center justify-center overflow-hidden">
          <div className="flex space-x-6 animate-slide-up">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg animate-pulse flex items-center justify-center text-white font-mono"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {index + 1}
              </div>
            ))}
          </div>
          {/* Connect blocks with lines */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-1 bg-blue-200 -z-10"></div>
        </div>
      </div>
    </section>
  );
}
