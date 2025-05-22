import * as React from "react";
import { useRouter } from "next/router";
import { Box, Link, Separator } from "@radix-ui/themes";

const DATA_FOLDER_PATH = "https://github.com/zhcndoc/radix/blob/main/data";

export function EditPageLink() {
	const router = useRouter();
	const routerSlug = router.query.slug;
	let filePath = `${DATA_FOLDER_PATH}/${router.pathname.replace("/", "")}`;
	if (Array.isArray(routerSlug)) {
		filePath = filePath.replace("[...slug]", routerSlug.join("/"));
	} else {
		filePath = filePath.replace("[slug]", routerSlug ?? "");
	}
	const editUrl = `${filePath}.mdx`;

	return (
		<Box>
			<Separator size="2" my="8" />
			<Link
				href={editUrl}
				title="在 GitHub 上编辑此页面"
				rel="noopener noreferrer"
				target="_blank"
				color="gray"
				size="2"
			>
				在 GitHub 上编辑此页面
			</Link>
		</Box>
	);
}
