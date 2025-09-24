import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import VercelHero from "@/components/VercelHero";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import ProductsGrid from "@/components/ProductsGrid";
import PenquinCountdown from "@/components/PenquinCountdown";
import InnovativeFeatures from "@/components/InnovativeFeatures";
import ParallaxSection from "@/components/ParallaxSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <VercelHero />
        <PenquinCountdown />
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
