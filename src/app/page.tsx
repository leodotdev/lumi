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
    <div className="flex flex-col min-h-screen vr-base">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        <section id="about-us">
          <AboutUsSection />
        </section>
        <section id="for-pet-owners" className="vr-section-inner">
          <ForPetOwnersSection />
        </section>
        <section id="for-clinics" className="vr-section-inner">
          <ForClinicsSection />
        </section>
        <section className="vr-section-inner">
          <FaqSection />
        </section>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
