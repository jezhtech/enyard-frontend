import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Shield,
	AlertTriangle,
	FileText,
	Users,
	Calendar,
	Play,
	Code,
	Terminal,
	Zap,
	Plane,
	Activity,
	CheckCircle,
} from "lucide-react";
import { SEO } from "@/components/Seo";
import { PAGE_PATHS } from "@/seo/routeMeta";

const XSafety = () => {
	const [typedText, setTypedText] = useState("");

	const fullText = `// XSafety Aviation Safety Management System
import { XSafety } from '@enyard/xsafety';

const safetySystem = new XSafety({
  modules: [
    'incident-monitoring',
    'hazard-analysis',
    'safety-auditing',
    'corrective-actions'
  ],
  ai: {
    riskAssessment: true,
    predictiveAnalytics: true,
    complianceMonitoring: true
  },
  integrations: ['FAA', 'ICAO', 'EASA']
});

await safetySystem.initialize();
console.log('✈️ Aviation Safety System Online');`;

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
			icon: AlertTriangle,
			title: "Incident Monitoring",
			description:
				"Real-time tracking and analysis of safety incidents with AI-powered pattern recognition",
			features: [
				"Automated incident reporting",
				"Risk assessment algorithms",
				"Trend analysis",
				"Alert systems",
			],
		},
		{
			icon: FileText,
			title: "Hazard Analysis",
			description:
				"Comprehensive hazard identification and risk assessment using advanced analytics",
			features: [
				"Hazard identification",
				"Risk matrix",
				"Mitigation strategies",
				"Continuous monitoring",
			],
		},
		{
			icon: Shield,
			title: "Safety Auditing",
			description:
				"AI-enabled auditing processes that ensure compliance with aviation safety standards",
			features: [
				"Automated compliance checks",
				"Audit trail management",
				"Regulatory updates",
				"Performance metrics",
			],
		},
		{
			icon: CheckCircle,
			title: "Corrective Actions",
			description:
				"Intelligent corrective action management with tracking and verification systems",
			features: [
				"Action tracking",
				"Verification processes",
				"Effectiveness monitoring",
				"Continuous improvement",
			],
		},
	];

	const stats = [
		{ label: "Airlines Protected", value: "50+" },
		{ label: "Safety Incidents", value: "0" },
		{ label: "Compliance Rate", value: "100%" },
		{ label: "Risk Reduction", value: "85%" },
	];

	const plans = [
		{
			name: "Regional",
			price: "$299",
			period: "/month",
			features: [
				"Up to 100 aircraft",
				"Basic safety modules",
				"Standard reporting",
				"Email support",
				"Mobile app",
			],
			popular: false,
		},
		{
			name: "National",
			price: "$599",
			period: "/month",
			features: [
				"Up to 500 aircraft",
				"All safety modules",
				"Advanced AI analytics",
				"24/7 support",
				"Custom integrations",
				"API access",
			],
			popular: true,
		},
		{
			name: "International",
			price: "Custom",
			period: "",
			features: [
				"Unlimited aircraft",
				"Full AI suite",
				"Multi-region compliance",
				"Dedicated support",
				"Custom development",
			],
			popular: false,
		},
	];

	return (
		<>
			<SEO path={PAGE_PATHS.XSAFETY} />
			<div className="min-h-screen bg-background">
				<Navigation />

				{/* Hero Section */}
				<section className="relative pt-32 pb-20 overflow-hidden">
					<div className="absolute inset-0 mesh-background opacity-30" />
					<div className="floating-orb w-96 h-96 bg-primary/10 -top-48 -right-48" />
					<div className="floating-orb w-64 h-64 bg-purple-500/10 top-1/2 -left-32" />

					<div className="max-w-7xl mx-auto px-6 relative z-10">
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<div className="space-y-8">
								<div className="space-y-4">
									<Badge variant="outline" className="glass">
										<Shield className="w-4 h-4 mr-2" />
										AI-Powered Aviation Safety
									</Badge>
									<h1 className="text-5xl md:text-6xl font-bold">
										X<span className="text-gradient">Safety</span>
										<br />
										<span className="text-2xl md:text-3xl text-muted-foreground font-normal">
											Aviation Safety Management Suite
										</span>
									</h1>
									<p className="text-xl text-muted-foreground max-w-lg">
										Advanced safety management system for airlines with
										AI-enabled features. Monitor incidents, hazards, conduct
										comprehensive auditing, and implement corrective actions
										with intelligent systems that ensure aviation safety
										compliance.
									</p>
								</div>

								<div className="flex flex-wrap gap-4">
									<Button size="lg" className="group">
										<Play className="w-4 h-4 mr-2" />
										Start Free Trial
										<Zap className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
									</Button>
									<Button variant="outline" size="lg">
										<Code className="w-4 h-4 mr-2" />
										View Documentation
									</Button>
								</div>

								{/* Stats */}
								<div className="grid grid-cols-2 gap-4 pt-8">
									{stats.map((stat, index) => (
										<div key={index} className="text-center">
											<div className="text-2xl font-bold text-primary">
												{stat.value}
											</div>
											<div className="text-sm text-muted-foreground">
												{stat.label}
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="relative">
								<div className="glass rounded-2xl p-6 border">
									<Terminal className="w-8 h-8 text-primary mb-4" />
									<pre className="text-sm text-muted-foreground font-mono overflow-hidden">
										<code>{typedText}</code>
									</pre>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Modules Section */}
				<section className="py-20">
					<div className="max-w-7xl mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-4">
								Complete Safety{" "}
								<span className="text-gradient">Management</span>
							</h2>
							<p className="text-xl text-muted-foreground">
								Comprehensive modules designed for aviation safety excellence
							</p>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							{modules.map((module, index) => {
								const IconComponent = module.icon;
								return (
									<Card key={index} className="glass border-0 hover-lift">
										<CardHeader className="text-center">
											<div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
												<IconComponent className="w-8 h-8 text-primary" />
											</div>
											<CardTitle className="text-xl">{module.title}</CardTitle>
											<p className="text-base text-muted-foreground">
												{module.description}
											</p>
										</CardHeader>
										<CardContent>
											<ul className="space-y-2">
												{module.features.map((feature, featureIndex) => (
													<li
														key={featureIndex}
														className="flex items-center space-x-2 text-sm">
														<CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
														<span>{feature}</span>
													</li>
												))}
											</ul>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>
				</section>

				{/* Pricing Section */}
				<section className="py-20">
					<div className="max-w-7xl mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-4">
								Safety <span className="text-gradient">Pricing</span>
							</h2>
							<p className="text-xl text-muted-foreground">
								Choose the plan that fits your airline's safety requirements
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
										<ul className="space-y-3">
											{plan.features.map((feature, index) => (
												<li key={index} className="flex items-center space-x-2">
													<CheckCircle className="w-4 h-4 text-green-500" />
													<span className="text-sm">{feature}</span>
												</li>
											))}
										</ul>
										<Button className="w-full mt-6">Get Started</Button>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				<Footer />
			</div>
		</>
	);
};

export default XSafety;
