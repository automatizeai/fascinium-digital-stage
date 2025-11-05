import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import PromoBanner from "@/components/PromoBanner";
import ContactSection from "@/components/ContactSection";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <FloatingWhatsApp />
      <ServicesSection />
      <BenefitsSection />
      <DifferentialsSection />
      <PromoBanner />
      <ContactSection />
      <TrustSection />
      <Footer />
    </main>
  );
};

export default Index;
