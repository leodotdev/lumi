import Image from "next/image";

const benefits = [
  "No duplication with safe and fair resale",
  "Paperless for the planet",
  "Transparent transaction and fees",
  "POAP (proof of attendance protocol)",
];

export default function SimpleBenefitsSection() {
  return (
    <section className="w-full py-20 md:py-28 px-6 md:px-10 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 animate-fade-in lg:animate-slide-left order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-2xl blur-lg -z-10"></div>
              <Image
                src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1000"
                alt="Happy concert attendees"
                width={600}
                height={400}
                className="rounded-xl shadow-xl w-full object-cover aspect-video"
              />
            </div>
          </div>

          <div className="flex-1 order-1 lg:order-2 lg:animate-slide-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 animate-fade-in">
              Event goers finally enjoy an{" "}
              <span className="text-blue-600">epic experience</span> from
              purchase through performance
            </h2>

            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-4 animate-slide-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md">
                    ✓
                  </div>
                  <span className="text-lg text-muted-foreground font-medium">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
