import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutUsSection from "@/components/AboutUsSection";
import ForPetOwnersSection from "@/components/ForPetOwnersSection";
import ForClinicsSection from "@/components/ForClinicsSection";
import FaqSection from "@/components/FaqSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        <section id="about-us">
          <AboutUsSection />
        </section>
        <section id="for-pet-owners">
          <ForPetOwnersSection />
        </section>
        <section id="for-clinics">
          <ForClinicsSection />
        </section>
        <FaqSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
