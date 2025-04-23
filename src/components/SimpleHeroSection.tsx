import Image from "next/image";
import SimpleButton from "./SimpleButton";

export default function SimpleHeroSection() {
  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-10 lg:px-16 relative overflow-hidden">
      {/* Curved background elements - similar to the website design */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-b from-slate-800/70 to-slate-900/40 rounded-bl-[300px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-t from-slate-800/70 to-slate-900/40 rounded-tr-[300px] -z-10"></div>

      {/* Text content */}
      <div className="w-full md:w-1/2 pt-24 md:pt-0 z-10 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-left leading-tight">
          Giving event organizers the power of smart ticketing
        </h1>

        <div className="mt-12 hover:scale-105 transition-transform duration-300">
          <SimpleButton className="rounded-full px-8 py-4 text-lg bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
            Request demo
          </SimpleButton>
        </div>
      </div>

      {/* Phone image */}
      <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end items-center z-10 animate-slide-up">
        <div className="relative max-w-xs md:max-w-sm">
          <Image
            src="https://images.unsplash.com/photo-1644693902439-a429edf1dbe4"
            alt="Person holding phone with ticketing app"
            width={500}
            height={600}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
