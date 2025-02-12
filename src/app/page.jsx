import CallToAction from "@/components/CallToAction";
import EarnMoney from "@/components/EarnMoney";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowSection from "@/components/HowSection";
import ReviewSection from "@/components/ReviewSection";
import WhySection from "@/components/WhySection";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <HowSection />
      <ReviewSection />
      <WhySection />
      <EarnMoney />
      <FaqSection />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;
