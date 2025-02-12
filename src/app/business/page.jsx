import BusinessHeader from "@/components/business/BusinessHeader";
import BusinessHero from "@/components/business/BusinessHero";
import BusinessReview from "@/components/business/BusinessReview";
import BusinessWhySection from "@/components/business/BusinessWhySection";
import PricingSection from "@/components/business/PricingSection";
import PromotionSection from "@/components/business/PromotionSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import HowSection from "@/components/HowSection";

const Business = () => {
  return (
    <main className="max-w-[100vw] overflow-x-hidden bg-black text-white">
      <BusinessHeader />
      <BusinessHero />
      <HowSection />
      <PromotionSection />
      <BusinessWhySection />
      <BusinessReview />
      <PricingSection />
      <CallToAction />
      <Footer />
    </main>
  );
};

export default Business;
