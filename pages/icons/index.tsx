import { IconsHeader } from "@components/IconsHeader";
import { MobileMenu, MobileMenuProvider } from "@components/MobileMenu";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { IconsHero } from "@components/icons/IconsHero";
import { IconsPanel } from "@components/icons/IconsPanel";
import { iconsRoutes } from "@utils/iconsRoutes";
import { Box, Container, ScrollArea } from "@radix-ui/themes";
import { Menu } from "@components/icons/Menu";
import { DocsNav } from "@components/DocsNav";
import { ColorsHeader } from "@components/ColorsHeader";

export default function Home() {
	return (
		<MobileMenuProvider>
			<MobileMenu>
				<ColorsHeader />
				<ScrollArea>
					<Box pt="4" px="3" pb="9">
						<DocsNav
							routes={[
								{
									pages: [
										{
											title: "Homepage",
											slug: "icons",
										},
										{
											title: "Blog",
											slug: "blog",
										},
									],
								},
								...iconsRoutes,
							]}
						/>
					</Box>
				</ScrollArea>
			</MobileMenu>

			<TitleAndMetaTags
				title="Radix 图标 – Radix UI 中文文档"
				description="由 WorkOS 团队设计的一组清晰的 15×15 图标。"
				image="icons.png"
			/>

			<IconsHeader ghost />

			<IconsHero />
			<Menu />
			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }} pb="9">
				<IconsPanel />
			</Container>
		</MobileMenuProvider>
	);
}
