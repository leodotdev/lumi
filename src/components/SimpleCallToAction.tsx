import SimpleButton from "./SimpleButton";

export default function SimpleCallToAction() {
  return (
    <section className="w-full py-20 md:py-32 px-6 md:px-10 bg-gradient-to-b from-slate-900 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 animate-fade-in">
          It&apos;s time to go live
        </h2>

        <p className="text-lg md:text-xl mb-12 text-gray-300 animate-slide-up max-w-xl mx-auto">
          Be the first to know when realticket is coming to your town.
        </p>

        <div className="hover:scale-105 transition-transform duration-300">
          <SimpleButton className="rounded-full px-10 py-5 text-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg shadow-blue-500/30">
            Request demo
          </SimpleButton>
        </div>

        <div className="mt-16 animate-slide-up">
          <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">
            Powered by advanced technology
          </span>
        </div>
      </div>
    </section>
  );
}
