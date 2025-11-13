import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
	Search,
	BookOpen,
	Code,
	Zap,
	Settings,
	Shield,
	Database,
	Cloud,
	Smartphone,
	Users,
	FileText,
	Video,
	Download,
	ExternalLink,
} from "lucide-react";
import { SeoMeta } from "@/components/SeoMeta";
import { PAGE_PATHS } from "@/seo/routeMeta";

const Documentation = () => {
	const [scrollY, setScrollY] = useState(0);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("all");

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const categories = [
		{ id: "all", name: "All Docs", icon: BookOpen, count: 48 },
		{ id: "getting-started", name: "Getting Started", icon: Zap, count: 8 },
		{ id: "api", name: "API Reference", icon: Code, count: 15 },
		{ id: "integration", name: "Integration", icon: Settings, count: 12 },
		{ id: "security", name: "Security", icon: Shield, count: 6 },
		{ id: "deployment", name: "Deployment", icon: Cloud, count: 7 },
	];

	const docSections = [
		{
			title: "TimeX - Attendance Management",
			description:
				"Complete documentation for implementing and using TimeX attendance management system.",
			icon: Users,
			category: "getting-started",
			docs: [
				{ title: "Quick Start Guide", type: "guide", time: "5 min read" },
				{ title: "API Reference", type: "api", time: "15 min read" },
				{
					title: "Integration Tutorial",
					type: "tutorial",
					time: "20 min read",
				},
				{ title: "Mobile App Setup", type: "guide", time: "10 min read" },
			],
		},
		{
			title: "CoreX - ERP Solution",
			description:
				"Comprehensive enterprise resource planning system documentation and guides.",
			icon: Database,
			category: "integration",
			docs: [
				{ title: "System Architecture", type: "guide", time: "12 min read" },
				{
					title: "Module Configuration",
					type: "tutorial",
					time: "25 min read",
				},
				{ title: "API Integration", type: "api", time: "18 min read" },
				{ title: "Custom Reports", type: "guide", time: "8 min read" },
			],
		},
		{
			title: "FleetX - Fleet Management",
			description:
				"Documentation for fleet booking and management system implementation.",
			icon: Smartphone,
			category: "api",
			docs: [
				{ title: "Booking API", type: "api", time: "10 min read" },
				{ title: "Vehicle Management", type: "guide", time: "15 min read" },
				{ title: "Driver Integration", type: "tutorial", time: "20 min read" },
				{ title: "Analytics Dashboard", type: "guide", time: "7 min read" },
			],
		},
		{
			title: "ChurchX - Church Management",
			description:
				"Complete guide for church management system setup and administration.",
			icon: Users,
			category: "getting-started",
			docs: [
				{ title: "Initial Setup", type: "guide", time: "8 min read" },
				{ title: "Member Management", type: "tutorial", time: "15 min read" },
				{ title: "Event Planning", type: "guide", time: "12 min read" },
				{ title: "Donation Tracking", type: "api", time: "10 min read" },
			],
		},
		{
			title: "MedzorX - Hospital Management",
			description:
				"Healthcare management system documentation with security and compliance guides.",
			icon: Shield,
			category: "security",
			docs: [
				{ title: "HIPAA Compliance", type: "guide", time: "20 min read" },
				{ title: "Patient Data API", type: "api", time: "18 min read" },
				{
					title: "Security Implementation",
					type: "tutorial",
					time: "30 min read",
				},
				{ title: "Backup Procedures", type: "guide", time: "12 min read" },
			],
		},
		{
			title: "Cloud Deployment",
			description:
				"Guides for deploying ENYARD solutions on various cloud platforms.",
			icon: Cloud,
			category: "deployment",
			docs: [
				{ title: "AWS Deployment", type: "tutorial", time: "25 min read" },
				{ title: "Azure Setup", type: "tutorial", time: "22 min read" },
				{ title: "GCP Configuration", type: "tutorial", time: "20 min read" },
				{ title: "Kubernetes Guide", type: "guide", time: "35 min read" },
			],
		},
	];

	const quickLinks = [
		{ title: "Installation Guide", icon: Download, type: "PDF" },
		{ title: "Video Tutorials", icon: Video, type: "Video" },
		{ title: "API Postman Collection", icon: ExternalLink, type: "JSON" },
		{ title: "Sample Code Repository", icon: Code, type: "GitHub" },
	];

	const filteredSections = docSections.filter((section) => {
		const matchesSearch =
			section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			section.description.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory =
			selectedCategory === "all" || section.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	const getTypeIcon = (type: string) => {
		switch (type) {
			case "api":
				return Code;
			case "tutorial":
				return Video;
			case "guide":
				return FileText;
			default:
				return BookOpen;
		}
	};

	const getTypeBadge = (type: string) => {
		const colors = {
			api: "bg-blue-500/10 text-blue-500 border-blue-500/20",
			tutorial: "bg-green-500/10 text-green-500 border-green-500/20",
			guide: "bg-purple-500/10 text-purple-500 border-purple-500/20",
		};
		return (
			colors[type as keyof typeof colors] ||
			"bg-gray-500/10 text-gray-500 border-gray-500/20"
		);
	};

	return (
		<>
			<SeoMeta path={PAGE_PATHS.DOCUMENTATION} />
			<div className="min-h-screen bg-background">
				<Navigation />

				{/* Hero Section */}
				<section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
					<div
						className="absolute inset-0 gradient-mesh opacity-30"
						style={{ transform: `translateY(${scrollY * 0.3}px)` }}
					/>

					<div className="container relative z-10 text-center">
						<div className="stagger-item" style={{ animationDelay: "0.1s" }}>
							<h1 className="text-6xl md:text-8xl font-bold mb-8 text-gradient-animate">
								Documentation
							</h1>
						</div>

						<div className="stagger-item" style={{ animationDelay: "0.2s" }}>
							<p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
								Comprehensive guides, API references, and tutorials to help you
								integrate and maximize the potential of ENYARD solutions.
							</p>
						</div>

						<div
							className="stagger-item max-w-2xl mx-auto"
							style={{ animationDelay: "0.3s" }}>
							<div className="relative">
								<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
								<Input
									placeholder="Search documentation..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="pl-12 h-14 text-lg glass"
								/>
							</div>
						</div>
					</div>

					<div className="floating-orb w-64 h-64 top-10 right-10 bg-gradient-to-br from-indigo-400 to-purple-600 opacity-20" />
					<div className="floating-orb w-48 h-48 bottom-10 left-10 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-20" />
				</section>

				{/* Quick Links */}
				<section className="py-16 relative">
					<div className="container">
						<div className="grid md:grid-cols-4 gap-6">
							{quickLinks.map((link, index) => (
								<Card
									key={index}
									className="p-6 text-center magnetic-card glass group cursor-pointer">
									<link.icon className="h-8 w-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
									<h3 className="font-semibold mb-1">{link.title}</h3>
									<Badge variant="outline" className="text-xs">
										{link.type}
									</Badge>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Main Content */}
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

							{/* Documentation Sections */}
							<div className="lg:col-span-3">
								<div className="space-y-8">
									{filteredSections.map((section, index) => (
										<Card
											key={index}
											className="overflow-hidden magnetic-card glass">
											<div className="p-8">
												<div className="flex items-start justify-between mb-6">
													<div className="flex items-center">
														<div className="p-3 rounded-xl bg-primary/10 mr-4">
															<section.icon className="h-6 w-6 text-primary" />
														</div>
														<div>
															<h3 className="text-2xl font-bold mb-2">
																{section.title}
															</h3>
															<p className="text-muted-foreground">
																{section.description}
															</p>
														</div>
													</div>
												</div>

												<div className="grid md:grid-cols-2 gap-4">
													{section.docs.map((doc, docIndex) => {
														const IconComponent = getTypeIcon(doc.type);
														return (
															<div
																key={docIndex}
																className="flex items-center p-4 rounded-lg border border-border hover:bg-accent transition-colors cursor-pointer group">
																<IconComponent className="h-5 w-5 text-primary mr-3 group-hover:scale-110 transition-transform" />
																<div className="flex-1">
																	<h4 className="font-medium group-hover:text-primary transition-colors">
																		{doc.title}
																	</h4>
																	<div className="flex items-center mt-1">
																		<Badge
																			variant="outline"
																			className={`text-xs mr-2 ${getTypeBadge(
																				doc.type
																			)}`}>
																			{doc.type.toUpperCase()}
																		</Badge>
																		<span className="text-xs text-muted-foreground">
																			{doc.time}
																		</span>
																	</div>
																</div>
															</div>
														);
													})}
												</div>
											</div>
										</Card>
									))}
								</div>

								{filteredSections.length === 0 && (
									<Card className="p-12 text-center glass">
										<BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
										<h3 className="text-xl font-semibold mb-2">
											No documentation found
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

				{/* Support Section */}
				<section className="py-24 relative">
					<div className="absolute inset-0 mesh-background opacity-10" />
					<div className="container relative z-10 text-center">
						<h2 className="text-4xl font-bold mb-8 text-gradient">
							Need More Help?
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
							Can't find what you're looking for? Our support team is here to
							help you get the most out of ENYARD solutions.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button size="lg">Contact Support</Button>
							<Button size="lg" variant="outline">
								Join Community
							</Button>
							<Button size="lg" variant="outline">
								Request Feature
							</Button>
						</div>
					</div>
				</section>

				<Footer />
			</div>
		</>
	);
};

export default Documentation;
