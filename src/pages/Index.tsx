import Navigation from "@/components/Navigation";
import InnovativeHero from "@/components/InnovativeHero";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import ProductsGrid from "@/components/ProductsGrid";
import ParallaxSection from "@/components/ParallaxSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <InnovativeHero />
        <InfiniteMarquee />
        <ProductsGrid />
        <ParallaxSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
