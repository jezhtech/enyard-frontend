import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Heart,
	Brain,
	Activity,
	Pill,
	Users,
	Calendar,
	Play,
	Code,
	Terminal,
	Zap,
	Stethoscope,
	FileText,
} from "lucide-react";
import { SEO } from "@/components/Seo";
import { PAGE_PATHS } from "@/seo/routeMeta";

const MedzorX = () => {
	const [activeModule, setActiveModule] = useState(0);
	const [typedText, setTypedText] = useState("");

	const fullText = `// MedzorX Hospital Management System
import { MedzorX } from '@enyard/medzorx';

const hospital = new MedzorX({
  modules: [
    'patient-management',
    'lab-integration',
    'pharmacy-system',
    'billing-automation'
  ],
  ai: {
    diagnostics: true,
    analytics: true,
    predictions: true
  },
  integrations: ['HL7', 'DICOM', 'Epic']
});

await hospital.initialize();
console.log('🏥 Hospital System Online');`;

	useEffect(() => {
		let i = 0;
		const timer = setInterval(() => {
			if (i < fullText.length) {
				setTypedText(fullText.slice(0, i + 1));
				i++;
			} else {
				clearInterval(timer);
			}
		}, 25);

		return () => clearInterval(timer);
	}, []);

	const modules = [
		{
			icon: Users,
			title: "Patient Management",
			description:
				"Complete patient lifecycle from admission to discharge with AI insights",
			features: [
				"Electronic health records",
				"Appointment scheduling",
				"Patient portal",
				"Insurance verification",
			],
			color: "from-blue-500/20 to-cyan-600/20",
		},
		{
			icon: Activity,
			title: "Lab Integration",
			description:
				"Seamless laboratory management with automated result processing",
			features: [
				"Test ordering",
				"Result tracking",
				"Quality control",
				"Equipment integration",
			],
			color: "from-green-500/20 to-emerald-600/20",
		},
		{
			icon: Pill,
			title: "Pharmacy System",
			description:
				"Complete pharmacy management with drug interaction checking",
			features: [
				"Inventory management",
				"Prescription tracking",
				"Drug interactions",
				"Automated dispensing",
			],
			color: "from-purple-500/20 to-violet-600/20",
		},
		{
			icon: FileText,
			title: "Medical Records",
			description: "Secure digital medical records with AI-powered insights",
			features: [
				"Digital charts",
				"Clinical notes",
				"Imaging integration",
				"Audit trails",
			],
			color: "from-orange-500/20 to-red-600/20",
		},
	];

	const workflow = [
		{
			step: "Patient Check-in",
			description: "Automated registration and insurance verification",
		},
		{
			step: "Clinical Assessment",
			description: "AI-assisted diagnosis and treatment planning",
		},
		{
			step: "Lab & Imaging",
			description: "Integrated testing with real-time results",
		},
		{
			step: "Treatment & Medication",
			description: "Prescription management and pharmacy integration",
		},
		{
			step: "Billing & Discharge",
			description: "Automated billing and discharge planning",
		},
	];

	const stats = [
		{ label: "Hospitals Powered", value: "250+" },
		{ label: "Patients Served", value: "1M+" },
		{ label: "Lab Tests Processed", value: "10M+" },
		{ label: "Average Time Saved", value: "3.5 hrs" },
	];

	const plans = [
		{
			name: "Clinic",
			price: "$199",
			period: "/month",
			features: [
				"Up to 50 patients/day",
				"Basic modules",
				"Email support",
				"Mobile app",
				"Standard reporting",
			],
			popular: false,
		},
		{
			name: "Hospital",
			price: "$599",
			period: "/month",
			features: [
				"Unlimited patients",
				"All modules",
				"24/7 support",
				"Advanced AI",
				"Custom integrations",
				"API access",
			],
			popular: true,
		},
		{
			name: "Health System",
			price: "Custom",
			period: "",
			features: [
				"Multi-facility",
				"Enterprise features",
				"Dedicated support",
				"Custom development",
				"Advanced analytics",
			],
			popular: false,
		},
	];

	return (
		<>
			<SEO path={PAGE_PATHS.MEDZORX} />
			<div className="min-h-screen bg-background">
				<Navigation />

				{/* Hero Section */}
				<section className="relative pt-32 pb-20 overflow-hidden">
					<div className="absolute inset-0 mesh-background opacity-30" />
					<div className="floating-orb w-96 h-96 bg-primary/10 -top-48 -right-48" />
					<div className="floating-orb w-64 h-64 bg-red-500/10 top-1/2 -left-32" />

					<div className="max-w-7xl mx-auto px-6 relative z-10">
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<div className="space-y-8">
								<div className="space-y-4">
									<Badge variant="outline" className="glass">
										<Heart className="w-4 h-4 mr-2" />
										AI-Powered Healthcare
									</Badge>
									<h1 className="text-5xl md:text-6xl font-bold">
										Medzor<span className="text-gradient">X</span>
										<br />
										<span className="text-2xl md:text-3xl text-muted-foreground font-normal">
											Hospital Management Suite
										</span>
									</h1>
									<p className="text-xl text-muted-foreground max-w-lg">
										Advanced hospital management system with AI analytics,
										complete patient journey tracking, integrated pharmacy
										management, and comprehensive healthcare automation.
									</p>
								</div>

								<div className="flex flex-wrap gap-4">
									<Button size="lg" className="group">
										<Play className="w-4 h-4 mr-2" />
										Start Free Trial
										<Stethoscope className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
									</Button>
									<Button variant="outline" size="lg">
										<Code className="w-4 h-4 mr-2" />
										API Documentation
									</Button>
								</div>

								<div className="flex items-center space-x-8 text-sm text-muted-foreground">
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
										<span>HIPAA Compliant</span>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
										<span>HL7 Certified</span>
									</div>
								</div>
							</div>

							{/* Code Terminal */}
							<div className="relative">
								<Card className="glass border-border/50 overflow-hidden">
									<CardHeader className="bg-muted/30 border-b border-border/50">
										<div className="flex items-center space-x-2">
											<div className="flex space-x-2">
												<div className="w-3 h-3 bg-red-500 rounded-full" />
												<div className="w-3 h-3 bg-yellow-500 rounded-full" />
												<div className="w-3 h-3 bg-green-500 rounded-full" />
											</div>
											<span className="text-sm text-muted-foreground ml-4">
												medzorx-init.js
											</span>
										</div>
									</CardHeader>
									<CardContent className="p-6 bg-slate-900/50 font-mono text-sm">
										<pre className="text-green-400 whitespace-pre-wrap">
											{typedText}
											<span className="animate-pulse">|</span>
										</pre>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</section>

				{/* Modules Section */}
				<section className="py-20">
					<div className="max-w-7xl mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-4">
								Comprehensive{" "}
								<span className="text-gradient">Healthcare Modules</span>
							</h2>
							<p className="text-xl text-muted-foreground">
								Complete patient journey management from admission to discharge
							</p>
						</div>

						<div className="grid lg:grid-cols-2 gap-8">
							{modules.map((module, index) => (
								<Card
									key={module.title}
									className={`group hover-lift glass border-0 relative overflow-hidden cursor-pointer transition-all duration-300 ${
										activeModule === index ? "ring-2 ring-primary" : ""
									}`}
									onClick={() => setActiveModule(index)}>
									<div
										className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
									/>

									<CardHeader className="relative z-10">
										<div className="flex items-center space-x-4">
											<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
												<module.icon className="w-6 h-6 text-primary" />
											</div>
											<div>
												<CardTitle className="text-xl">
													{module.title}
												</CardTitle>
												<p className="text-muted-foreground text-sm">
													{module.description}
												</p>
											</div>
										</div>
									</CardHeader>

									<CardContent className="relative z-10">
										<div className="grid grid-cols-1 gap-2">
											{module.features.map((feature) => (
												<div
													key={feature}
													className="flex items-center space-x-2">
													<div className="w-1.5 h-1.5 bg-primary rounded-full" />
													<span className="text-sm text-muted-foreground">
														{feature}
													</span>
												</div>
											))}
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Workflow Section */}
				<section className="py-20 bg-muted/30">
					<div className="max-w-7xl mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-3xl font-bold mb-4">
								Patient Journey Workflow
							</h2>
							<p className="text-muted-foreground">
								Streamlined healthcare delivery from entry to exit
							</p>
						</div>

						<div className="grid md:grid-cols-5 gap-4">
							{workflow.map((item, index) => (
								<Card
									key={item.step}
									className="glass text-center p-6 relative">
									<div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mb-4 mx-auto">
										{index + 1}
									</div>
									<h3 className="font-semibold mb-2">{item.step}</h3>
									<p className="text-sm text-muted-foreground">
										{item.description}
									</p>

									{index < workflow.length - 1 && (
										<div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4 text-primary">
											→
										</div>
									)}
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Stats Section */}
				<section className="py-20">
					<div className="max-w-7xl mx-auto px-6">
						<div className="grid md:grid-cols-4 gap-8">
							{stats.map((stat) => (
								<div
									key={stat.label}
									className="text-center glass rounded-xl p-8">
									<div className="text-4xl font-bold text-primary mb-2">
										{stat.value}
									</div>
									<div className="text-muted-foreground">{stat.label}</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Pricing Section */}
				<section className="py-20 bg-muted/30">
					<div className="max-w-7xl mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-4">
								Healthcare <span className="text-gradient">Pricing</span>
							</h2>
							<p className="text-xl text-muted-foreground">
								Affordable solutions for healthcare providers of all sizes
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
							{plans.map((plan) => (
								<Card
									key={plan.name}
									className={`relative overflow-hidden ${
										plan.popular
											? "border-primary shadow-lg scale-105"
											: "glass"
									}`}>
									{plan.popular && (
										<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
											<Badge className="bg-primary">Most Popular</Badge>
										</div>
									)}

									<CardHeader className="text-center">
										<CardTitle className="text-2xl">{plan.name}</CardTitle>
										<div className="mt-4">
											<span className="text-4xl font-bold">{plan.price}</span>
											<span className="text-muted-foreground">
												{plan.period}
											</span>
										</div>
									</CardHeader>

									<CardContent className="space-y-4">
										{plan.features.map((feature) => (
											<div
												key={feature}
												className="flex items-center space-x-2">
												<div className="w-1.5 h-1.5 bg-primary rounded-full" />
												<span className="text-sm">{feature}</span>
											</div>
										))}

										<Button
											className="w-full mt-6"
											variant={plan.popular ? "default" : "outline"}>
											{plan.name === "Health System"
												? "Contact Sales"
												: "Start Free Trial"}
										</Button>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20">
					<div className="max-w-4xl mx-auto px-6 text-center">
						<div className="glass rounded-2xl p-12">
							<h2 className="text-3xl font-bold mb-4">
								Transform healthcare delivery with AI
							</h2>
							<p className="text-xl text-muted-foreground mb-8">
								Join leading healthcare providers who trust MedzorX for their
								patient management needs.
							</p>
							<div className="flex flex-wrap justify-center gap-4">
								<Button size="lg" className="group">
									Start Free Trial
									<Stethoscope className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
								</Button>
								<Button variant="outline" size="lg">
									Schedule Demo
								</Button>
							</div>
						</div>
					</div>
				</section>

				<Footer />
			</div>
		</>
	);
};

export default MedzorX;
