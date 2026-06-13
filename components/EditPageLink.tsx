"use client";
import { Box, Link, Separator } from "@radix-ui/themes";
import { usePathname } from "next/navigation";

const DATA_FOLDER_PATH = "https://github.com/zhcndoc/radix/blob/main/data";

export function EditPageLink() {
	const pathname = usePathname();
	const editUrl = `${DATA_FOLDER_PATH}${pathname}.mdx`;

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
