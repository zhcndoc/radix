import * as React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { MDXProvider, components } from "@components/MDXComponents";
import { QuickNav } from "@components/QuickNav";
import { getAllFrontmatter, getMdxBySlug } from "@utils/mdx";
import { getPackageData, formatBytes } from "@utils/bundlephobia";
import type { Frontmatter } from "types/frontmatter";
import { GetStaticPropsContext } from "next";

type Doc = {
	frontmatter: Frontmatter;
	code: string;
};

export default function ComponentsDoc({ frontmatter, code }: Doc) {
	const Component = React.useMemo(() => getMDXComponent(code), [code]);

	return (
		<>
			<div data-algolia-lvl0 style={{ display: "none" }}>
				Components
			</div>

			<TitleAndMetaTags
				title={`${frontmatter.metaTitle} – Radix Primitives – Radix UI 中文文档`}
				description={frontmatter.metaDescription}
				image="primitives.png"
			/>

			<MDXProvider frontmatter={frontmatter}>
				<Component components={components as any} />
			</MDXProvider>

			<QuickNav key={frontmatter.slug} />
		</>
	);
}

export async function getStaticPaths() {
	const frontmatters = getAllFrontmatter("primitives/docs/components");

	return {
		paths: frontmatters.map((frontmatter) => ({
			params: {
				slug: frontmatter.slug.replace("primitives/docs/components/", ""),
			},
		})),
		fallback: false,
	};
}

export async function getStaticProps(
	context: GetStaticPropsContext<{ slug: string }>,
) {
	const componentName = context.params!.slug;
	const { frontmatter, code } = await getMdxBySlug(
		"primitives/docs/components/",
		componentName,
	);

	const packageData = frontmatter.name
		? await getPackageData(frontmatter.name, "latest").catch(() => null)
		: null;

	const extendedFrontmatter = {
		...frontmatter,
		version: packageData?.version ?? null,
		gzip:
			typeof packageData?.gzip === "number"
				? formatBytes(packageData.gzip)
				: null,
	};
	return { props: { frontmatter: extendedFrontmatter, code } };
}
