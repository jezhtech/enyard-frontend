import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import VercelHero from "@/components/VercelHero";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import ProductsGrid from "@/components/ProductsGrid";
import PenquinCountdown from "@/components/PenquinCountdown";
import InnovativeFeatures from "@/components/InnovativeFeatures";
import ParallaxSection from "@/components/ParallaxSection";
import InfiniteLogoScroll from "../components/InfiniteLogoScroll";
import { PAGE_PATHS } from "@/seo/routeMeta";
import { SeoMeta } from "@/components/SeoMeta";

const Index = () => {
	return (
		<>
			<SeoMeta path={PAGE_PATHS.HOME} />
			<div className="min-h-screen">
				<Navigation />
				<main>
					<VercelHero />
					<PenquinCountdown />
					<InnovativeFeatures />
					<InfiniteMarquee />
					<ProductsGrid />
					<InfiniteLogoScroll />
					<ParallaxSection />
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Index;
