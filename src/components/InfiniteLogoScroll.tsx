import { ClientsLogo } from "@/assets";
import { useEffect, useState } from "react";
import Slider from "react-infinite-logo-slider";

export interface Logo {
	src: string;
	alt: string;
}
const InfiniteLogoScroll = () => {
  const clients: Logo[] = [
	{
		src: ClientsLogo.adarsh,
		alt: "Adarsh Logo",
	},
	{
		src: ClientsLogo.dssc,
		alt: "DSSC Logo",
	},
	{
		src: ClientsLogo.lgConstruction,
		alt: "LG Construction Logo",
	},
	{
		src: ClientsLogo.ramakrishnaCollege,
		alt: "Ramakrishna College Logo",
	},
	{
		src: ClientsLogo.rojavanamSchool,
		alt: "Rojavanam International School Logo",
	},
	{
		src: ClientsLogo.sidone,
		alt: "Sidone Logo",
	},
	{
		src: ClientsLogo.fcFleet,
		alt: "Fc Fleet Logo",
	},
];
	const [sliderWidth, setSliderWidth] = useState("280px");
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				// Mobile
				setSliderWidth("180px");
			} else if (window.innerWidth < 1024) {
				// Tablet
				setSliderWidth("220px");
			} else {
				// Desktop
				setSliderWidth("250px");
			}
		};

		handleResize(); // set initial
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<div className="w-full py-12  shadow-inner items-center overflow-hidden">
			<Slider
				width={sliderWidth}
				duration={20}
				pauseOnHover={false}
				blurBorders={false}>
				{clients.map((logo, index) => (
					<Slider.Slide key={index}>
						<div className="flex items-center justify-center px-8">
							<img
								src={logo.src}
								alt={logo.alt}
								className="object-contain h-35 w-70 transition-transform duration-500 hover:scale-110"
							/>
						</div>
					</Slider.Slide>
				))}
			</Slider>
			<h1 className="w-full flex items-center justify-center gap-5 text-4xl sm:text-2xl md:text-4xl lg:text-6xl  font-bold">
				<span className="block text-black">Our</span>
				<span className="block text-gradient-animate">Clients</span>
			</h1>
		</div>
	);
};

export default InfiniteLogoScroll;
