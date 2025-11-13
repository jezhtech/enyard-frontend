export const BASE_URL = "https://enyard.in";

const ROUTES = {
	HOME: "/",
	ABOUT: "/about",
	CONTACT: "/contact",

	CAREER: "/career",
	BLOG: "/blogs",
	DOCUMENTATION: "/documentation",
	DOWNLOADS: "/downloads",
	REGISTER: "/register",
	LOGIN: "/login",

	// Products
	TIMEX: "/products/timex",
	COREX: "/products/corex",
	FLEETX: "/products/fleetx",
	PENQUINX: "/products/penquinx",
	XSAFETY: "/products/xsafety",
	MEDZORX: "/products/medzorx",
	DOCX: "/products/docx",
	WORKX365: "/products/workx365",
	GITX: "/products/gitx",
};

export const SITEMAP_ROUTES = [
	// ─────────────────────────────
	// Primary Pages
	// ─────────────────────────────
	{ path: ROUTES.HOME, canonical: BASE_URL + ROUTES.HOME, priority: 1.0 },
	{ path: ROUTES.ABOUT, canonical: BASE_URL + ROUTES.ABOUT, priority: 0.9 },
	{ path: ROUTES.CONTACT, canonical: BASE_URL + ROUTES.CONTACT, priority: 0.9 },

	// ─────────────────────────────
	// Corporate / Content Pages
	// ─────────────────────────────
	{ path: ROUTES.CAREER, canonical: BASE_URL + ROUTES.CAREER, priority: 0.9 },
	{ path: ROUTES.BLOG, canonical: BASE_URL + ROUTES.BLOG, priority: 0.7 },
	{
		path: ROUTES.DOCUMENTATION,
		canonical: BASE_URL + ROUTES.DOCUMENTATION,
		priority: 0.7,
	},
	{
		path: ROUTES.DOWNLOADS,
		canonical: BASE_URL + ROUTES.DOWNLOADS,
		priority: 0.7,
	},
	{
		path: ROUTES.REGISTER,
		canonical: BASE_URL + ROUTES.REGISTER,
		priority: 0.7,
	},
	{ path: ROUTES.LOGIN, canonical: BASE_URL + ROUTES.LOGIN, priority: 0.7 },

	// ─────────────────────────────
	// Product Suite
	// ─────────────────────────────
	{ path: ROUTES.TIMEX, canonical: BASE_URL + ROUTES.TIMEX, priority: 0.8 },
	{ path: ROUTES.COREX, canonical: BASE_URL + ROUTES.COREX, priority: 0.8 },
	{ path: ROUTES.FLEETX, canonical: BASE_URL + ROUTES.FLEETX, priority: 0.8 },
	{
		path: ROUTES.PENQUINX,
		canonical: BASE_URL + ROUTES.PENQUINX,
		priority: 0.8,
	},
	{ path: ROUTES.XSAFETY, canonical: BASE_URL + ROUTES.XSAFETY, priority: 0.8 },
	{ path: ROUTES.MEDZORX, canonical: BASE_URL + ROUTES.MEDZORX, priority: 0.8 },
	{ path: ROUTES.DOCX, canonical: BASE_URL + ROUTES.DOCX, priority: 0.8 },
	{
		path: ROUTES.WORKX365,
		canonical: BASE_URL + ROUTES.WORKX365,
		priority: 0.8,
	},
	{ path: ROUTES.GITX, canonical: BASE_URL + ROUTES.GITX, priority: 0.8 },
];
