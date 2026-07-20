import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import HeroSection from "@/components/organisms/HeroSection";
import TrustStatsBar from "@/components/organisms/TrustStatsBar";
import WhyChooseSection from "@/components/organisms/WhyChooseSection";
import ProductCategoriesSection from "@/components/organisms/ProductCategoriesSection";
import FeaturedProductsSection from "@/components/organisms/FeaturedProductsSection";
import TrendingCarousel from "@/components/organisms/TrendingCarousel";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import FinalCTASection from "@/components/organisms/FinalCTASection";

export default function HomeTemplate() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustStatsBar />
        <WhyChooseSection />
        <ProductCategoriesSection />
        <FeaturedProductsSection />
        <TrendingCarousel />
        {/* <TestimonialsSection /> */}
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
