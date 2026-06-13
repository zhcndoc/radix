"use client";
import { Link } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import { Header, HeaderProps } from "./Header";
import NextLink from "next/link";

export const ColorsHeader = (props: HeaderProps) => {
	const pathname = usePathname();
	return (
		<Header gitHubLink="https://github.com/radix-ui/colors" {...props}>
			<Link
				size="2"
				color="gray"
				highContrast={pathname?.includes("/colors/docs")}
				asChild
			>
				<NextLink href="/colors/docs/overview/installation">
					文档
				</NextLink>
			</Link>
			<Link
				size="2"
				color="gray"
				highContrast={pathname?.includes("/colors/custom")}
				asChild
			>
				<NextLink href="/colors/custom">自定义调色板</NextLink>
			</Link>
		</Header>
	);
};
