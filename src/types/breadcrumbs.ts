export const generateBreadCrumbs = (pathArray : path[]) => {
  const domain = "https://enyard.in";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": pathArray.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${domain}${item.path}`,
    })),
  };
};

export interface path { 
    name: String,
    path:String
}