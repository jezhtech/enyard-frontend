import { Helmet } from "react-helmet-async";
import { getMeta } from "@/seo/getMetaData";

interface Props {
	path: string;
}

export const SeoMeta = ({ path }: Props) => {
	const meta = getMeta(path);

	if (!meta) return null;

	return (
		<Helmet prioritizeSeoTags>
			<title>{meta.title}</title>
			{meta.description && (
				<meta name="description" content={meta.description} />
			)}
			{meta.canonical && <link rel="canonical" href={meta.canonical} />}

			{meta.keywords && (
				<meta name="keywords" content={meta.keywords.join(", ")} />
			)}
			{meta.schema && (
				<script type="application/ld+json">
					{JSON.stringify(meta.schema)}
				</script>
			)}
		</Helmet>
	);
};
