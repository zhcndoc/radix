import * as React from "react";
import { getMDXComponent } from "mdx-bundler/client";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { MDXProvider } from "@components/MDXComponents";
import { getAllFrontmatter, getMdxBySlug } from "@utils/mdx";
import { QuickNav } from "@components/QuickNav";

import type { Frontmatter } from "types/frontmatter";
import { ThemesMDXComponents } from "@components/ThemesMDXComponents";
import { GetStaticPropsContext } from "next";

type Doc = {
	frontmatter: Frontmatter;
	code: string;
};

export default function ThemesDoc({ frontmatter, code }: Doc) {
	const Component = React.useMemo(() => getMDXComponent(code), [code]);

	return (
		<>
			<div data-algolia-lvl0 style={{ display: "none" }}>
				Guides
			</div>

			<TitleAndMetaTags
				title={`${frontmatter.metaTitle} – Radix Themes – Radix UI 中文文档`}
				description={frontmatter.metaDescription}
				image="themes.png"
			/>

			<MDXProvider frontmatter={frontmatter}>
				<Component components={ThemesMDXComponents as any} />
			</MDXProvider>

			<QuickNav key={frontmatter.slug} />
		</>
	);
}

export async function getStaticPaths() {
	const frontmatters = getAllFrontmatter("themes/docs/theme");

	return {
		paths: frontmatters.map((frontmatter) => ({
			params: { slug: frontmatter.slug.replace("themes/docs/theme/", "") },
		})),
		fallback: false,
	};
}

export async function getStaticProps(
	context: GetStaticPropsContext<{ slug: string }>,
) {
	const { frontmatter, code } = await getMdxBySlug(
		"themes/docs/theme/",
		context.params!.slug,
	);
	return { props: { frontmatter, code } };
}
