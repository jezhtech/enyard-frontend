export interface RouteMeta {
	path: string;
	title: string;
	description?: string;
	canonical?: string;
	ogImage?: string;
	robots?: string;
	keywords?: string[];
	schema?: Record<string, any>;
}

export enum PAGE_PATHS {
	DOMAIN = "https://enyard.in",
	HOME = "/",
	ABOUT = "/about",
	CONTACT = "/contact",
	CAREER = "/career",
	BLOG = "/blog",
	DOCUMENTATION = "/documentation",
	DOWNLOADS = "/downloads",

	// Auth
	VerifyEmail = "/auth/verify-email",
	REGISTER = "/auth/register",
	LOGIN = "/auth/login",
	PHONE = "/auth/verify-phone",
	OTP_VERIFICATION = "/auth/otp-verification",

	// Products
	TIMEX = "/products/timex",
	COREX = "/products/corex",
	FLEETX = "/products/fleetx",
	PENQUINX = "/products/penquinx",
	XSAFETY = "/products/xsafety",
	MEDZORX = "/products/medzorx",
	DOCX = "/products/docx",
	WORKX365 = "/products/workx365",
	GITX = "/products/gitx",
}

export const SEO_CONFIG: RouteMeta[] = [
	// Auth Pages
	{
		path: PAGE_PATHS.VerifyEmail,
		title: "Email Verification | ENYARD ",
	},
	{
		path: PAGE_PATHS.PHONE,
		title: "Register | ENYARD ",
	},
	{
		path: PAGE_PATHS.OTP_VERIFICATION,
		title: "OTP Verifications | ENYARD ",
	},
	// ───────────────────────────────
	// HOME PAGE
	// ───────────────────────────────
	{
		path: PAGE_PATHS.HOME,
		title: "ENYARD – AI Software Development Platform | Build Smarter, Faster",
		description:
			"Build intelligent, enterprise-grade software 60% faster with ENYARD’s AI-powered development suite. Automate, optimize, and scale innovation across industries.",
		canonical: "https://enyard.in/",
		schema: {
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "Organization",
					name: "ENYARD",
					url: "https://enyard.in",
					logo: "https://enyard.in/logo.png",
					description:
						"Global holding company operating across multiple industries including IT, transportation, tourism, IoT, EduTech, and social media platforms.",
					sameAs: [
						"https://www.linkedin.com/company/enyardcorp",
						"https://www.instagram.com/enyardcorp/",
					],
					contactPoint: {
						"@type": "ContactPoint",
						telephone: "+91-91505-37718",
						contactType: "customer service",
						email: "info@enyard.in",
					},
					foundingDate: "2015",
					numberOfEmployees: "500+",
					subOrganization: [
						{
							"@type": "Organization",
							name: "Lagoon Technologies LLC",
							description: "IT & Software Development company in USA",
						},
						{
							"@type": "Organization",
							name: "Lagoon Technologies Private Limited",
							description: "IT & Software Development company in India",
						},
						{
							"@type": "Organization",
							name: "UAE Chauffeur",
							description: "Luxury Transportation services in UAE",
						},
						{
							"@type": "Organization",
							name: "First Class Fleet",
							description: "Premium Fleet Management services",
						},
						{
							"@type": "Organization",
							name: "First Lagoon Technology",
							description: "Technology Solutions provider",
						},
						{
							"@type": "Organization",
							name: "Goyaka Tours & Travels",
							description: "Travel & Tourism services in India",
						},
					],
					brand: [
						"Boobazhop",
						"Booba Taxi",
						"JezX",
						"NexorX",
						"Azra Martin",
						"Enyard Media",
						"Ricspace",
					],
				},
				{
					"@type": "WebSite",
					name: "ENYARD",
					url: "https://enyard.in",
					potentialAction: {
						"@type": "SearchAction",
						target: "https://enyard.in/search?q={query}",
						"query-input": "required name=query",
					},
				},
			],
		},
	},

	// ───────────────────────────────
	// ABOUT PAGE
	// ───────────────────────────────
	{
		path: PAGE_PATHS.ABOUT,
		title: "About ENYARD | Global AI & Innovation Holding Company",
		description:
			"Learn about ENYARD — a global innovation leader operating across IT, IoT, EduTech, and AI sectors. Discover our mission to redefine technology worldwide.",
		canonical: "https://enyard.in/about",
		schema: {
			"@context": "https://schema.org",
			"@type": "AboutPage",
			name: "About ENYARD",
			url: "https://enyard.in/about",
			mainEntity: {
				"@type": "Organization",
				name: "ENYARD",
				description:
					"Global holding company driving innovation across IT, AI, EduTech, IoT, and Tourism sectors.",
			},
		},
	},

	// ───────────────────────────────
	// CONTACT PAGE
	// ───────────────────────────────
	{
		path: PAGE_PATHS.CONTACT,
		title: "Contact ENYARD | Partner With Our AI Experts",
		description:
			"Get in touch with ENYARD’s AI and software specialists. Let’s build intelligent solutions that drive your digital transformation and business growth.",
		canonical: "https://enyard.in/contact",
		schema: {
			"@context": "https://schema.org",
			"@type": "ContactPage",
			url: "https://enyard.in/contact",
			mainEntity: {
				"@type": "ContactPoint",
				telephone: "+91-91505-37718",
				contactType: "customer service",
				email: "info@enyard.in",
			},
		},
	},
	// ───────────────────────────────
	// Career PAGE
	// ───────────────────────────────
	{
		path: PAGE_PATHS.CAREER,
		title: "Career @ ENYARD ",
		description:
			"Join with our ENYARD’s AI and software specialists. Let’s build intelligent solutions that drive your digital transformation and business growth.",
		canonical: "https://enyard.in/career",
		schema: {
			"@context": "https://schema.org",
			"@type": "careerPage",
			url: "https://enyard.in/career",
			mainEntity: {
				"@type": "ContactPoint",
				telephone: "+91-91505-37718",
				contactType: "customer service",
				email: "info@enyard.in",
			},
		},
	},
	// ───────────────────────────────
	// Blog PAGE
	// ───────────────────────────────
	{
		path: PAGE_PATHS.BLOG,
		title: "Blogs | ENYARD ",
		description:
			"Insights, tutorials, and thought leadership on AI, software development, and the future of technology innovation.",
		canonical: "https://enyard.in/blogs",
		schema: {
			"@context": "https://schema.org",
			"@type": "BlogPage",
			url: "https://enyard.in/blogs",
			mainEntity: {
				"@type": "ContactPoint",
				telephone: "+91-91505-37718",
				contactType: "customer service",
				email: "info@enyard.in",
			},
		},
	},
	// ───────────────────────────────
	// Documentation PAGE
	// ───────────────────────────────
	{
		path: PAGE_PATHS.DOCUMENTATION,
		title: "Documentations | ENYARD ",
		description:
			"Comprehensive guides, API references, and tutorials to help you integrate and maximize the potential of ENYARD solutions.",
		canonical: "https://enyard.in/documentation",
		schema: {
			"@context": "https://schema.org",
			"@type": "Document Page",
			url: "https://enyard.in/documentation",
			mainEntity: {
				"@type": "ContactPoint",
				telephone: "+91-91505-37718",
				contactType: "customer service",
				email: "info@enyard.in",
			},
		},
	},
	// ───────────────────────────────
	// Download PAGE
	// ───────────────────────────────
	{
		path: PAGE_PATHS.DOWNLOADS,
		title: "Downloads | ENYARD ",
		description:
			"Access all ENYARD applications, documentation, resources, and tools. Everything you need to get started and succeed with our solutions.",
		canonical: "https://enyard.in/downloads",
		schema: {
			"@context": "https://schema.org",
			"@type": "Download Page",
			url: "https://enyard.in/downloads",
			mainEntity: {
				"@type": "ContactPoint",
				telephone: "+91-91505-37718",
				contactType: "customer service",
				email: "info@enyard.in",
			},
		},
	},
	// ───────────────────────────────
	// Register PAGE
	// ───────────────────────────────
	{
		path: PAGE_PATHS.REGISTER,
		title: "Register | ENYARD ",
		description:
			"Create your ENYARD account to access our AI-powered software solutions and resources. Join us today!",
		canonical: "https://enyard.in/auth/register",
		schema: {
			"@context": "https://schema.org",
			"@type": "register Page",
			url: "https://enyard.in/register",
			mainEntity: {
				"@type": "ContactPoint",
				telephone: "+91-91505-37718",
				contactType: "customer service",
				email: "info@enyard.in",
			},
		},
	},
	// ───────────────────────────────
	// Login  PAGE
	// ───────────────────────────────
	{
		path: PAGE_PATHS.LOGIN,
		title: "Login | ENYARD ",
		description:
			"Access your ENYARD account to utilize our AI-powered software solutions and resources. Welcome back!",
		canonical: "https://enyard.in/login",
		schema: {
			"@context": "https://schema.org",
			"@type": "login Page",
			url: "https://enyard.in/login",
			mainEntity: {
				"@type": "ContactPoint",
				telephone: "+91-91505-37718",
				contactType: "customer service",
				email: "info@enyard.in",
			},
		},
	},

	// ───────────────────────────────
	// PRODUCT: TIMEX
	// ───────────────────────────────
	{
		path: PAGE_PATHS.TIMEX,
		title: "TimeX | AI-Powered Smart Attendance System by ENYARD",
		description:
			"Track attendance with AI precision. TimeX integrates biometric and camera analytics for seamless workforce monitoring and real-time insights.",
		canonical: "https://enyard.in/products/timex",
		schema: {
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			name: "TimeX",
			applicationCategory: "Productivity Application",
			operatingSystem: "Web",
			offers: {
				"@type": "Offer",
				priceCurrency: "INR",
				price: "Contact us",
			},
			publisher: {
				"@type": "Organization",
				name: "ENYARD",
			},
		},
	},

	// ───────────────────────────────
	// PRODUCT: COREX
	// ───────────────────────────────
	{
		path: PAGE_PATHS.COREX,
		title: "CoreX | Next-Gen ERP Software for Business Automation",
		description:
			"CoreX empowers businesses with a unified ERP platform to manage finance, operations, HR, and analytics — powered by ENYARD’s AI-driven intelligence.",
		canonical: "https://enyard.in/products/corex",
		schema: {
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			name: "CoreX ERP",
			applicationCategory: "Business Application",
			operatingSystem: "Web",
			offers: {
				"@type": "Offer",
				priceCurrency: "INR",
				price: "Contact us",
			},
			publisher: {
				"@type": "Organization",
				name: "ENYARD",
			},
		},
	},

	// ───────────────────────────────
	// PRODUCT: FLEETX
	// ───────────────────────────────
	{
		path: PAGE_PATHS.FLEETX,
		title: "FleetX | AI Fleet Management & Vehicle Tracking System",
		description:
			"FleetX delivers intelligent fleet management with AI route optimization, real-time GPS tracking, and cost-efficient automation for transport businesses.",
		canonical: "https://enyard.in/products/fleetx",
		schema: {
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			name: "FleetX",
			applicationCategory: "Fleet Management",
			operatingSystem: "Web",
			description:
				"AI-integrated fleet tracking and vehicle management software for enterprise logistics.",
			publisher: {
				"@type": "Organization",
				name: "ENYARD",
			},
		},
	},

	// ───────────────────────────────
	// PRODUCT: PENQUINX
	// ───────────────────────────────
	{
		path: PAGE_PATHS.PENQUINX,
		title: "PenguinX | Cybersecurity Learning Platform by ENYARD",
		description:
			"Learn cybersecurity hands-on with PenguinX. Master real-world tools, exploit labs, and AI-assisted training to become a certified security expert.",
		canonical: "https://enyard.in/products/penquinx",
		schema: {
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			name: "PenguinX",
			applicationCategory: "Educational Application",
			operatingSystem: "Web",
			description:
				"AI-driven cybersecurity learning hub offering labs, tools, and simulation environments for ethical hacking and defense training.",
			publisher: {
				"@type": "Organization",
				name: "ENYARD",
			},
		},
	},
	// ───────────────────────────────
	// PRODUCT: XSAFETY
	// ───────────────────────────────
	{
		path: PAGE_PATHS.XSAFETY,
		title: "XSafety | Aviation Safety Management Suite",
		description:
			"Advanced safety management system for airlines with AI-enabled features. Monitor incidents, hazards, conduct comprehensive auditing, and implement corrective actions with intelligent systems that ensure aviation safety compliance.",
		canonical: "https://enyard.in/products/xsafety",
		schema: {
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			name: "XSafety",
			applicationCategory: "Educational Application",
			operatingSystem: "Web",
			description:
				"AI-driven cybersecurity learning hub offering labs, tools, and simulation environments for ethical hacking and defense training.",
			publisher: {
				"@type": "Organization",
				name: "ENYARD",
			},
		},
	},
	// ───────────────────────────────
	// PRODUCT: MEDZORX
	// ───────────────────────────────
	{
		path: PAGE_PATHS.MEDZORX,
		title: "MedzorX | Hospital Management Suite",
		description:
			"Advanced hospital management system with AI analytics, complete patient journey tracking, integrated pharmacy management, and comprehensive healthcare automation.",
		canonical: "https://enyard.in/products/medzorx",
		schema: {
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			name: "XSafety",
			applicationCategory: "Educational Application",
			operatingSystem: "Web",
			description:
				"AI-driven cybersecurity learning hub offering labs, tools, and simulation environments for ethical hacking and defense training.",
			publisher: {
				"@type": "Organization",
				name: "ENYARD",
			},
		},
	},
	// ───────────────────────────────
	// PRODUCT: DOCX
	// ───────────────────────────────
	{
		path: PAGE_PATHS.DOCX,
		title: "DocX | Intelligent Document Control",
		description:
			"Experience a revolutionary approach to document management. DocX combines granular Role-Based Access with an intuitive system to organize, secure, and automate the entire document lifecycle for every team.",
		canonical: "https://enyard.in/products/docX",
		schema: {
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			name: "XSafety",
			applicationCategory: "Educational Application",
			operatingSystem: "Web",
			description:
				"AI-driven cybersecurity learning hub offering labs, tools, and simulation environments for ethical hacking and defense training.",
			publisher: {
				"@type": "Organization",
				name: "ENYARD",
			},
		},
	},
	// ───────────────────────────────
	// PRODUCT:workx365
	// ───────────────────────────────
	{
		path: PAGE_PATHS.WORKX365,
		title: "Work X 365 | Intelligent Document Control",
		description:
			"Experience a revolutionary approach to document management. DocX combines granular Role-Based Access with an intuitive system to organize, secure, and automate the entire document lifecycle for every team.",
		canonical: "https://enyard.in/products/docX",
		schema: {
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			name: "Work X 365",
			applicationCategory: "Educational Application",
			operatingSystem: "Web",
			description:
				"AI-driven cybersecurity learning hub offering labs, tools, and simulation environments for ethical hacking and defense training.",
			publisher: {
				"@type": "Organization",
				name: "ENYARD",
			},
		},
	},
	// ───────────────────────────────
	// PRODUCT:GITX
	// ───────────────────────────────
	{
		path: PAGE_PATHS.GITX,
		title: "Git X | Intelligent Document Control",
		description:
			"Experience a revolutionary approach to document management. DocX combines granular Role-Based Access with an intuitive system to organize, secure, and automate the entire document lifecycle for every team.",
		canonical: "https://enyard.in/products/docX",
		schema: {
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			name: "Git X",
			applicationCategory: "Educational Application",
			operatingSystem: "Web",
			description:
				"AI-driven cybersecurity learning hub offering labs, tools, and simulation environments for ethical hacking and defense training.",
			publisher: {
				"@type": "Organization",
				name: "ENYARD",
			},
		},
	},
];
