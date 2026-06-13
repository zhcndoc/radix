"use client";
import { Link } from "@radix-ui/themes";
import { Header, HeaderProps } from "./Header";
import { usePathname } from "next/navigation";

export const PrimitivesHeader = (props: HeaderProps) => {
	const pathname = usePathname();
	return (
		<Header gitHubLink="https://github.com/radix-ui/primitives" {...props}>
			<Link
				size="2"
				color="gray"
				href="/primitives/docs"
				highContrast={pathname?.includes("/primitives/docs")}
			>
				文档
			</Link>
			<Link
				size="2"
				color="gray"
				href="/primitives/case-studies"
				highContrast={pathname?.includes("/primitives/case-studies")}
			>
				案例研究
			</Link>
		</Header>
	);
};
