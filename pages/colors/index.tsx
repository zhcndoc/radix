import * as React from "react";
import NextLink from "next/link";
import {
	Box,
	Text,
	Grid,
	Heading,
	Container,
	Section,
	Separator,
	Flex,
	ScrollArea,
	Button,
} from "@radix-ui/themes";
import { TitleAndMetaTags } from "@components/TitleAndMetaTags";
import { Footer } from "@components/Footer";
import { ColorsHeader } from "@components/ColorsHeader";
import { MobileMenuProvider } from "@components/MobileMenu";
import { ColorsMarketingButton } from "@components/ColorsMarketingButton";
import { SerifHeading } from "@components/SerifHeading";
import { ColorsMobileMenu } from "@components/ColorsMobileMenu";
import {
	DesktopIcon,
	EyeOpenIcon,
	Half2Icon,
	InputIcon,
	MoonIcon,
	TransparencyGridIcon,
} from "@radix-ui/react-icons";
import { Swatch } from "@components/Swatch";
import Head from "next/head";
import styles from "./index.module.css";
import { ColorUsageRange } from "@components/ColorUsageRange";
import { ColorStepLabel } from "@components/ColorStepLabel";

export default function ColorsHome() {
	return (
		<MobileMenuProvider>
			<ColorsMobileMenu />

			<Head>
				<style>
					{`
            :is(.dark, .dark-theme) :is(body, .radix-themes) {
              --color-background: #0b0b0b;
              --color-panel-solid: var(--gray-1);
            }
          `}
				</style>
			</Head>

			<Box
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					height: 480,
					opacity: 0.6,
					background:
						"linear-gradient(to bottom, var(--crimson-4), var(--amber-2), transparent)",
				}}
			/>

			<ColorsHeader ghost />

			<Box mx={{ initial: "5", xs: "6", sm: "7", md: "9" }} position="relative">
				<TitleAndMetaTags
					title="Radix 颜色 - Radix UI 中文文档"
					description="一个开源的颜色系统，用于设计美观、可访问的网站和应用程序。"
					image="colors.png"
				/>
				<Section size={{ initial: "2", md: "4" }}>
					<Container>
						<SerifHeading mb="3" style={{ maxWidth: 600, lineHeight: 1.2 }}>
							一个华丽且易于访问的用户界面颜色系统
						</SerifHeading>

						<Box style={{ maxWidth: 600 }}>
							<Text size="5" as="p" mb="6" color="gray">
								全面色彩系统，助力设计美观且无障碍的网站与应用程序。
							</Text>
						</Box>

						<Flex gap="4">
							<ColorsMarketingButton asChild size={{ initial: "3", xs: "4" }}>
								<NextLink href="/colors/docs/overview/installation">
									前往文档
									<svg
										width="14"
										height="14"
										viewBox="0 0 12 12"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentcolor"
										style={{ opacity: 1, marginRight: -3 }}
									>
										<path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z" />
									</svg>
								</NextLink>
							</ColorsMarketingButton>

							<Button
								highContrast
								variant="soft"
								color="gray"
								size={{ initial: "3", xs: "4" }}
								asChild
							>
								<NextLink href="/colors/custom">自定义调色板</NextLink>
							</Button>
						</Flex>
					</Container>
				</Section>
			</Box>

			<ScrollArea mb="-4">
				<Box mx={{ initial: "5", xs: "6", sm: "7", md: "9" }} mb="4">
					<Container style={{ whiteSpace: "nowrap", minWidth: 880 }}>
						<div className={styles.ColorsHomeGrid}>
							<Box />
							<ColorUsageRange gridColumn="2 / 4">背景</ColorUsageRange>
							<ColorUsageRange gridColumn="4 / 7">
								交互组件
							</ColorUsageRange>
							<ColorUsageRange gridColumn="7 / 10">
								边界和分隔符
							</ColorUsageRange>
							<ColorUsageRange gridColumn="10 / 12">
								纯色
							</ColorUsageRange>
							<ColorUsageRange gridColumn="12 / 14">
								无障碍文本
							</ColorUsageRange>

							<Box />
							<ColorStepLabel>1</ColorStepLabel>
							<ColorStepLabel>2</ColorStepLabel>
							<ColorStepLabel>3</ColorStepLabel>
							<ColorStepLabel>4</ColorStepLabel>
							<ColorStepLabel>5</ColorStepLabel>
							<ColorStepLabel>6</ColorStepLabel>
							<ColorStepLabel>7</ColorStepLabel>
							<ColorStepLabel>8</ColorStepLabel>
							<ColorStepLabel>9</ColorStepLabel>
							<ColorStepLabel>10</ColorStepLabel>
							<ColorStepLabel>11</ColorStepLabel>
							<ColorStepLabel>12</ColorStepLabel>

							{(
								[
									"gray",
									"mauve",
									"slate",
									"sage",
									"olive",
									"sand",
									"tomato",
									"red",
									"ruby",
									"crimson",
									"pink",
									"plum",
									"purple",
									"violet",
									"iris",
									"indigo",
									"blue",
									"cyan",
									"teal",
									"jade",
									"green",
									"grass",
									"bronze",
									"gold",
									"brown",
									"orange",
									"amber",
									"yellow",
									"lime",
									"mint",
									"sky",
								] as const
							).map((scale) => (
								<React.Fragment key={scale}>
									<Text color="gray" size="2">
										{scale.charAt(0).toUpperCase() + scale.slice(1)}
									</Text>
									{Array.from({ length: 12 }, (_, i) => i + 1).map((step) => (
										<Swatch
											key={step}
											scale={scale}
											step={step.toString() as "1"}
										/>
									))}
								</React.Fragment>
							))}
						</div>

						<Box height="32px" />

						<div className={styles.ColorsHomeGrid}>
							<Box />
							<ColorUsageRange gridColumn="2 / -1">
								阴影、高光和叠加
							</ColorUsageRange>

							<Box />
							{Array.from({ length: 12 }, (_, i) => i + 1).map((step) => (
								<ColorStepLabel key={step}>{step}</ColorStepLabel>
							))}

							{(["black", "white"] as const).map((scale) => (
								<React.Fragment key={scale}>
									<Text color="gray" size="2">
										{scale.charAt(0).toUpperCase() + scale.slice(1)}
									</Text>
									{Array.from({ length: 12 }, (_, i) => i + 1).map((step) => (
										<Swatch
											key={step}
											scale={scale}
											step={step.toString() as "1"}
										/>
									))}
								</React.Fragment>
							))}
						</div>
					</Container>
				</Box>
			</ScrollArea>

			<Box mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Section size={{ initial: "2", md: "4" }}>
					<Container>
						<Grid
							columns={{ sm: "3" }}
							gap={{ initial: "7", sm: "6", md: "9" }}
						>
							<Box style={{ maxWidth: 540 }}>
								<Flex mb="3">
									<EyeOpenIcon width="30" height="30" />
								</Flex>
								<Heading size="4" as="h3" mb="2">
									无障碍变得简单
								</Heading>
								<Text as="p" size="3">
									文本颜色确保能够通过与相应背景色的目标对比度测试。
								</Text>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Flex mb="3">
									<MoonIcon width="30" height="30" />
								</Flex>
								<Heading size="4" as="h3" mb="2">
									自动深色模式
								</Heading>
								<Text as="p" size="3">
									切换到黑暗主题只需对容器应用一个类。黑暗模式即刻可用™。
								</Text>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Flex mb="3">
									<TransparencyGridIcon width="30" height="30" />
								</Flex>
								<Heading size="4" as="h3" mb="2">
									透明变体
								</Heading>
								<Text as="p" size="3">
									每个色阶都有一个匹配的 alpha 颜色变体，这对于需要融入彩色背景的 UI 组件非常方便。
								</Text>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Flex mb="3">
									<Half2Icon width="30" height="30" />
								</Flex>
								<Heading size="4" as="h3" mb="2">
									APCA 文本对比度
								</Heading>
								<Text as="p" size="3">
									对比度目标基于现代 APCA 对比度算法，该算法能精准预测人眼对文本的感知效果。
								</Text>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Flex mb="3">
									<DesktopIcon width="30" height="30" />
								</Flex>
								<Heading size="4" as="h3" mb="2">
									P3 色域支持
								</Heading>
								<Text as="p" size="3">
									针对广色域色彩空间中的混合差异进行调整，并实现最明亮的黄色与红色表现。
								</Text>
							</Box>
							<Box style={{ maxWidth: 540 }}>
								<Flex mb="3">
									<InputIcon width="30" height="30" />
								</Flex>
								<Heading size="4" as="h3" mb="2">
									专为用户界面设计
								</Heading>
								<Text as="p" size="3">
									每一步的设计都针对特定使用场景，例如背景、悬停状态、边框、遮罩层或文本。
								</Text>
							</Box>
						</Grid>
					</Container>
				</Section>
			</Box>

			<Container mx={{ initial: "5", xs: "6", sm: "7", md: "9" }}>
				<Separator size="2" />
				<Section size={{ initial: "2", md: "4" }} pb="0">
					<Footer />
				</Section>
			</Container>
		</MobileMenuProvider>
	);
}
