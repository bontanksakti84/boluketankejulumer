import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import ProductsSection from "@/sections/ProductsSection";
import AdvantagesSection from "@/sections/AdvantagesSection";
import FranchiseSection from "@/sections/FranchiseSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import CTASection from "@/sections/CTASection";
import FAQSection from "@/sections/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <ProductsSection />
        <AdvantagesSection />
        <FranchiseSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
