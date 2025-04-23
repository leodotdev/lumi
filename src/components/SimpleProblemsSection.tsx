// import Image from "next/image";

const problems = [
  {
    title: "Fee Gouging",
    description:
      "90% of tickets are marked up before they ever reach event goers.",
    color: "from-amber-800/80 to-amber-900/90",
    textColor: "text-amber-200",
    phoneColor: "bg-amber-950",
    delay: 0,
  },
  {
    title: "Snubbed artists",
    description:
      "Ticket prices are marked up 150% on average. 0% goes to artists and venues.",
    color: "from-indigo-800/80 to-purple-900/90",
    textColor: "text-amber-200",
    phoneColor: "bg-indigo-950",
    delay: 0.1,
  },
  {
    title: "Transfer risk",
    description:
      "There's no sure way to identify duplicates and fraudulent tickets.",
    color: "from-emerald-800/80 to-teal-900/90",
    textColor: "text-emerald-300",
    phoneColor: "bg-emerald-950",
    delay: 0.2,
  },
  {
    title: "Weak event navigation",
    description: "Fan experiences often start confusingly and end abruptly.",
    color: "from-blue-800/80 to-cyan-900/90",
    textColor: "text-blue-200",
    phoneColor: "bg-blue-950",
    delay: 0.3,
  },
];

// Sample phone screenshots - currently not used
// const phoneScreens = {
//   fee: "https://images.unsplash.com/photo-1622433172102-85d9eb911b77",
//   artists: "https://images.unsplash.com/photo-1472457974886-0ebcd59440cc",
//   transfer: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
//   navigation: "https://images.unsplash.com/photo-1604782206219-3b9576575203",
// };

export default function SimpleProblemsSection() {
  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-10 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-20 text-center animate-fade-in">
          We are eliminating the issues{" "}
          <span className="text-amber-200">of traditional ticketing</span>
        </h2>

        <div className="flex flex-col gap-8">
          {problems.map((problem, index) => {
            return (
              <div
                key={index}
                className={`w-full rounded-xl overflow-hidden bg-gradient-to-r ${problem.color} animate-slide-up`}
                style={{ animationDelay: `${problem.delay}s` }}
              >
                <div className="py-12 px-8 md:px-12 flex flex-col md:flex-row items-center md:items-start justify-between">
                  <div className="md:max-w-[60%] mb-8 md:mb-0">
                    <h3
                      className={`text-3xl font-bold mb-4 ${problem.textColor}`}
                    >
                      {problem.title}
                    </h3>
                    <p className="text-white/90 text-lg md:text-xl">
                      {problem.description}
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-end relative">
                    {/* Phone mockup with content */}
                    <div className="relative w-[180px] h-[350px] md:mt-[-30px] md:mr-2">
                      <div
                        className={`absolute inset-0 rounded-3xl overflow-hidden shadow-lg ${problem.phoneColor}`}
                      >
                        {/* Phone frame overlay */}
                        <div className="absolute inset-0 rounded-3xl border-[3px] border-gray-800 z-10" />
                        <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 rounded-t-3xl z-10" />
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-800 rounded-b-3xl z-10" />

                        {/* Phone screen content */}
                        <div className="absolute inset-4 flex flex-col items-center justify-center text-white">
                          <div className="w-10 h-10 rounded-full bg-white/10 mb-3 flex items-center justify-center">
                            {index === 0 && <span className="text-lg">$</span>}
                            {index === 1 && <span className="text-lg">🎭</span>}
                            {index === 2 && <span className="text-lg">🔒</span>}
                            {index === 3 && <span className="text-lg">🗺️</span>}
                          </div>
                          <div className="h-4 w-20 bg-white/20 rounded-full mb-2"></div>
                          <div className="h-4 w-16 bg-white/20 rounded-full mb-6"></div>
                          <div className="h-24 w-full bg-white/10 rounded-lg mb-4"></div>
                          <div className="h-4 w-24 bg-white/20 rounded-full mb-2"></div>
                          <div className="h-4 w-20 bg-white/20 rounded-full mb-6"></div>
                          <div className="h-12 w-full bg-white/10 rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
