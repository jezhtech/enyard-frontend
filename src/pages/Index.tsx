import Navigation from "@/components/Navigation";
import VercelHero from "@/components/VercelHero";
import InnovativeFeatures from "@/components/InnovativeFeatures";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import ProductsGrid from "@/components/ProductsGrid";
import ParallaxSection from "@/components/ParallaxSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <VercelHero />
        <InnovativeFeatures />
        <InfiniteMarquee />
        <ProductsGrid />
        <ParallaxSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
