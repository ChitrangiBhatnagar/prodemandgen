import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/Home/HeroSection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import StatsSection from "@/components/Home/StatsSection";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import CTASection from "@/components/Home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
