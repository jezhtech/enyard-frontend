import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
	Download,
	Search,
	FileText,
	Code,
	Video,
	Image,
	Archive,
	Smartphone,
	Monitor,
	Tablet,
	Star,
	Calendar,
	CheckCircle,
	Zap,
} from "lucide-react";
import { SeoMeta } from "@/components/SeoMeta";
import { PAGE_PATHS } from "@/seo/routeMeta";

const Downloads = () => {
	const [scrollY, setScrollY] = useState(0);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("all");

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const categories = [
		{ id: "all", name: "All Downloads", icon: Download, count: 42 },
		{ id: "mobile", name: "Mobile Apps", icon: Smartphone, count: 8 },
		{ id: "desktop", name: "Desktop Apps", icon: Monitor, count: 6 },
		{ id: "documentation", name: "Documentation", icon: FileText, count: 12 },
		{ id: "resources", name: "Resources", icon: Code, count: 10 },
		{ id: "media", name: "Media Kit", icon: Image, count: 6 },
	];

	const featuredDownloads = [
		{
			title: "TimeX Mobile App",
			description:
				"Complete attendance management solution for iOS and Android devices.",
			version: "v2.4.1",
			platform: "iOS & Android",
			size: "45.2 MB",
			downloads: "10K+",
			rating: 4.8,
			category: "mobile",
			type: "app",
			featured: true,
			icon: Smartphone,
		},
		{
			title: "CoreX Desktop Suite",
			description:
				"Full-featured ERP desktop application for Windows, macOS, and Linux.",
			version: "v3.1.0",
			platform: "Cross-platform",
			size: "256 MB",
			downloads: "5K+",
			rating: 4.9,
			category: "desktop",
			type: "app",
			featured: true,
			icon: Monitor,
		},
		{
			title: "API Documentation Package",
			description:
				"Complete API documentation with examples and SDK libraries.",
			version: "v1.8.2",
			platform: "All Platforms",
			size: "12.5 MB",
			downloads: "25K+",
			rating: 4.7,
			category: "documentation",
			type: "docs",
			featured: true,
			icon: FileText,
		},
	];

	const downloads = [
		{
			title: "FleetX Mobile Driver App",
			description:
				"Driver application for fleet management and booking system.",
			version: "v1.9.3",
			platform: "iOS & Android",
			size: "38.7 MB",
			downloads: "8K+",
			rating: 4.6,
			category: "mobile",
			type: "app",
			date: "2024-01-15",
			icon: Smartphone,
		},
		{
			title: "ChurchX Admin Panel",
			description:
				"Desktop application for church management and administration.",
			version: "v2.2.1",
			platform: "Windows & macOS",
			size: "128 MB",
			downloads: "3K+",
			rating: 4.8,
			category: "desktop",
			type: "app",
			date: "2024-01-12",
			icon: Monitor,
		},
		{
			title: "MedzorX Tablet Interface",
			description: "Optimized tablet interface for healthcare management.",
			version: "v1.5.4",
			platform: "iPad & Android Tablet",
			size: "67.3 MB",
			downloads: "2K+",
			rating: 4.5,
			category: "mobile",
			type: "app",
			date: "2024-01-10",
			icon: Tablet,
		},
		{
			title: "ENYARD SDK Documentation",
			description: "Software development kit documentation and guides.",
			version: "v2.0.0",
			platform: "All Platforms",
			size: "8.9 MB",
			downloads: "15K+",
			rating: 4.9,
			category: "documentation",
			type: "docs",
			date: "2024-01-08",
			icon: Code,
		},
		{
			title: "Integration Templates",
			description: "Ready-to-use integration templates and code samples.",
			version: "v1.3.2",
			platform: "All Platforms",
			size: "15.6 MB",
			downloads: "12K+",
			rating: 4.7,
			category: "resources",
			type: "code",
			date: "2024-01-05",
			icon: Code,
		},
		{
			title: "Video Tutorials Collection",
			description: "Complete video tutorial series for all ENYARD products.",
			version: "v1.0.0",
			platform: "All Platforms",
			size: "1.2 GB",
			downloads: "18K+",
			rating: 4.8,
			category: "media",
			type: "video",
			date: "2024-01-03",
			icon: Video,
		},
		{
			title: "Brand Assets & Logo Pack",
			description: "Official ENYARD brand assets, logos, and style guide.",
			version: "v2.1.0",
			platform: "All Platforms",
			size: "45.2 MB",
			downloads: "7K+",
			rating: 4.6,
			category: "media",
			type: "assets",
			date: "2024-01-01",
			icon: Image,
		},
		{
			title: "Database Schema Export",
			description: "Database schemas and migration scripts for all products.",
			version: "v1.7.1",
			platform: "All Platforms",
			size: "3.4 MB",
			downloads: "6K+",
			rating: 4.4,
			category: "resources",
			type: "database",
			date: "2023-12-28",
			icon: Archive,
		},
	];

	const allDownloads = [...featuredDownloads, ...downloads];

	const filteredDownloads = allDownloads.filter((download) => {
		const matchesSearch =
			download.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			download.description.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory =
			selectedCategory === "all" || download.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	const getTypeColor = (type: string) => {
		const colors = {
			app: "bg-blue-500/10 text-blue-500 border-blue-500/20",
			docs: "bg-green-500/10 text-green-500 border-green-500/20",
			code: "bg-purple-500/10 text-purple-500 border-purple-500/20",
			video: "bg-red-500/10 text-red-500 border-red-500/20",
			assets: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
			database: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
		};
		return (
			colors[type as keyof typeof colors] ||
			"bg-gray-500/10 text-gray-500 border-gray-500/20"
		);
	};

	return (
		<>
			<SeoMeta path={PAGE_PATHS.DOWNLOADS} />
			<div className="min-h-screen bg-background">
				<Navigation />

				{/* Hero Section */}
				<section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
					<div
						className="absolute inset-0 gradient-vercel opacity-30"
						style={{ transform: `translateY(${scrollY * 0.3}px)` }}
					/>

					<div className="container relative z-10 text-center">
						<div className="stagger-item" style={{ animationDelay: "0.1s" }}>
							<h1 className="text-6xl md:text-8xl font-bold mb-8 text-gradient-animate">
								Downloads
							</h1>
						</div>

						<div className="stagger-item" style={{ animationDelay: "0.2s" }}>
							<p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
								Access all ENYARD applications, documentation, resources, and
								tools. Everything you need to get started and succeed with our
								solutions.
							</p>
						</div>

						<div
							className="stagger-item max-w-md mx-auto"
							style={{ animationDelay: "0.3s" }}>
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
								<Input
									placeholder="Search downloads..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="pl-10 glass"
								/>
							</div>
						</div>
					</div>

					<div className="floating-orb w-64 h-64 top-10 right-10 bg-gradient-to-br from-orange-400 to-red-600 opacity-20" />
					<div className="floating-orb w-48 h-48 bottom-10 left-10 bg-gradient-to-br from-green-400 to-blue-600 opacity-20" />
				</section>

				{/* Featured Downloads */}
				<section className="py-24 relative">
					<div className="container">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-4 text-gradient">
								Featured Downloads
							</h2>
							<p className="text-muted-foreground">
								Most popular and recently updated applications
							</p>
						</div>

						<div className="grid lg:grid-cols-3 gap-8">
							{featuredDownloads.map((download, index) => (
								<Card
									key={index}
									className="overflow-hidden magnetic-card glass-strong relative">
									<div className="absolute top-4 right-4">
										<Badge className="bg-primary/10 text-primary border-primary/20">
											<Star className="h-3 w-3 mr-1 fill-current" />
											Featured
										</Badge>
									</div>

									<div className="p-8">
										<div className="flex items-center mb-6">
											<div className="p-3 rounded-xl bg-primary/10 mr-4">
												<download.icon className="h-8 w-8 text-primary" />
											</div>
											<div>
												<h3 className="text-xl font-bold">{download.title}</h3>
												<div className="flex items-center mt-1">
													<Badge variant="outline" className="text-xs mr-2">
														{download.version}
													</Badge>
													<div className="flex items-center text-sm text-muted-foreground">
														<Star className="h-3 w-3 mr-1 fill-current text-yellow-500" />
														{download.rating}
													</div>
												</div>
											</div>
										</div>

										<p className="text-muted-foreground mb-6 leading-relaxed">
											{download.description}
										</p>

										<div className="grid grid-cols-2 gap-4 mb-6 text-sm">
											<div>
												<div className="text-muted-foreground">Platform</div>
												<div className="font-medium">{download.platform}</div>
											</div>
											<div>
												<div className="text-muted-foreground">Size</div>
												<div className="font-medium">{download.size}</div>
											</div>
											<div>
												<div className="text-muted-foreground">Downloads</div>
												<div className="font-medium">{download.downloads}</div>
											</div>
											<div>
												<div className="text-muted-foreground">Type</div>
												<Badge
													className={`text-xs ${getTypeColor(download.type)}`}>
													{download.type.toUpperCase()}
												</Badge>
											</div>
										</div>

										<Button className="w-full">
											<Download className="h-4 w-4 mr-2" />
											Download Now
										</Button>
									</div>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Main Downloads */}
				<section className="py-24 relative overflow-hidden">
					<div className="absolute inset-0 grid-lines opacity-20" />
					<div className="container relative z-10">
						<div className="grid lg:grid-cols-4 gap-12">
							{/* Sidebar */}
							<div className="lg:col-span-1">
								<Card className="p-6 glass sticky top-24">
									<h3 className="text-lg font-bold mb-4">Categories</h3>
									<div className="space-y-2">
										{categories.map((category) => (
											<button
												key={category.id}
												onClick={() => setSelectedCategory(category.id)}
												className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
													selectedCategory === category.id
														? "bg-primary text-primary-foreground"
														: "hover:bg-accent"
												}`}>
												<div className="flex items-center">
													<category.icon className="h-4 w-4 mr-2" />
													<span className="text-sm">{category.name}</span>
												</div>
												<Badge
													variant={
														selectedCategory === category.id
															? "secondary"
															: "outline"
													}
													className="text-xs">
													{category.count}
												</Badge>
											</button>
										))}
									</div>
								</Card>
							</div>

							{/* Downloads Grid */}
							<div className="lg:col-span-3">
								<div className="grid md:grid-cols-2 gap-6">
									{filteredDownloads.slice(3).map((download, index) => (
										<Card
											key={index}
											className="overflow-hidden magnetic-card glass group">
											<div className="p-6">
												<div className="flex items-start justify-between mb-4">
													<div className="flex items-center">
														<div className="p-2 rounded-lg bg-primary/10 mr-3">
															<download.icon className="h-5 w-5 text-primary" />
														</div>
														<div>
															<h3 className="font-bold group-hover:text-primary transition-colors">
																{download.title}
															</h3>
															<div className="flex items-center mt-1">
																<Badge
																	variant="outline"
																	className="text-xs mr-2">
																	{download.version}
																</Badge>
																{download.rating && (
																	<div className="flex items-center text-xs text-muted-foreground">
																		<Star className="h-3 w-3 mr-1 fill-current text-yellow-500" />
																		{download.rating}
																	</div>
																)}
															</div>
														</div>
													</div>
													<Badge
														className={`text-xs ${getTypeColor(
															download.type
														)}`}>
														{download.type.toUpperCase()}
													</Badge>
												</div>

												<p className="text-muted-foreground text-sm mb-4 leading-relaxed">
													{download.description}
												</p>

												<div className="grid grid-cols-2 gap-3 mb-4 text-xs">
													<div>
														<div className="text-muted-foreground">
															Platform
														</div>
														<div className="font-medium">
															{download.platform}
														</div>
													</div>
													<div>
														<div className="text-muted-foreground">Size</div>
														<div className="font-medium">{download.size}</div>
													</div>
												</div>

												<div className="flex items-center justify-between">
													<div className="flex items-center text-xs text-muted-foreground">
														{"date" in download && download.date && (
															<>
																<Calendar className="h-3 w-3 mr-1" />
																{download.date}
															</>
														)}
													</div>
													<Button size="sm" variant="outline">
														<Download className="h-3 w-3 mr-1" />
														Download
													</Button>
												</div>
											</div>
										</Card>
									))}
								</div>

								{filteredDownloads.length === 0 && (
									<Card className="p-12 text-center glass">
										<Download className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
										<h3 className="text-xl font-semibold mb-2">
											No downloads found
										</h3>
										<p className="text-muted-foreground">
											Try adjusting your search terms or category filter.
										</p>
									</Card>
								)}
							</div>
						</div>
					</div>
				</section>

				{/* Quick Access */}
				<section className="py-24 relative">
					<div className="absolute inset-0 mesh-background opacity-10" />
					<div className="container relative z-10">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-4 text-gradient">
								Quick Access
							</h2>
							<p className="text-muted-foreground">
								Frequently downloaded resources and essential tools
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8">
							<Card className="p-6 text-center magnetic-card glass">
								<Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
								<h3 className="text-xl font-bold mb-2">Quick Start Bundle</h3>
								<p className="text-muted-foreground text-sm mb-4">
									Essential apps and documentation to get started quickly
								</p>
								<Button variant="outline" className="w-full">
									<Download className="h-4 w-4 mr-2" />
									Download Bundle
								</Button>
							</Card>

							<Card className="p-6 text-center magnetic-card glass">
								<CheckCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
								<h3 className="text-xl font-bold mb-2">License Keys</h3>
								<p className="text-muted-foreground text-sm mb-4">
									Manage and download your software license keys
								</p>
								<Button variant="outline" className="w-full">
									Access Licenses
								</Button>
							</Card>

							<Card className="p-6 text-center magnetic-card glass">
								<Code className="h-12 w-12 mx-auto mb-4 text-primary" />
								<h3 className="text-xl font-bold mb-2">Developer Tools</h3>
								<p className="text-muted-foreground text-sm mb-4">
									SDKs, APIs, and development resources for integration
								</p>
								<Button variant="outline" className="w-full">
									<Download className="h-4 w-4 mr-2" />
									Get Tools
								</Button>
							</Card>
						</div>
					</div>
				</section>

				<Footer />
			</div>
		</>
	);
};

export default Downloads;
