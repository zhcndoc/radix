import { Link } from "@radix-ui/themes";
import { Header, HeaderProps } from "./Header";
import { useRouter } from "next/router";

export const PrimitivesHeader = (props: HeaderProps) => {
	const router = useRouter();

	return (
		<Header gitHubLink="https://github.com/radix-ui/primitives" {...props}>
			<Link
				size="2"
				color="gray"
				href="/primitives/docs"
				highContrast={router.pathname.includes("/primitives/docs")}
			>
				文档
			</Link>
			<Link
				size="2"
				color="gray"
				href="/primitives/case-studies"
				highContrast={router.pathname.includes("/primitives/case-studies")}
			>
				案例研究
			</Link>
		</Header>
	);
};
