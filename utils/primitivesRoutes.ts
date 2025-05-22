export const primitivesRoutes = [
	{
		label: "概览 Overview",
		pages: [
			{ title: "介绍 Introduction", slug: "primitives/docs/overview/introduction" },
			{
				title: "开始使用 Getting started",
				slug: "primitives/docs/overview/getting-started",
			},
			{
				title: "无障碍性 Accessibility",
				slug: "primitives/docs/overview/accessibility",
			},
			{ title: "版本发布 Releases", slug: "primitives/docs/overview/releases" },
		],
	},

	{
		label: "指南 Guides",
		pages: [
			{ title: "样式 Styling", slug: "primitives/docs/guides/styling" },
			{ title: "动画 Animation", slug: "primitives/docs/guides/animation" },
			{ title: "组合函数 Composition", slug: "primitives/docs/guides/composition" },
			{
				title: "服务器渲染 SSR",
				slug: "primitives/docs/guides/server-side-rendering",
			},
		],
	},

	{
		label: "组件 Components",
		pages: [
			{ title: "手风琴 Accordion", slug: "primitives/docs/components/accordion" },
			{
				title: "警告对话框 Alert Dialog",
				slug: "primitives/docs/components/alert-dialog",
			},
			{
				title: "长宽比 Aspect Ratio",
				slug: "primitives/docs/components/aspect-ratio",
			},
			{ title: "头像 Avatar", slug: "primitives/docs/components/avatar" },
			{ title: "复选框 Checkbox", slug: "primitives/docs/components/checkbox" },
			{ title: "可折叠组件 Collapsible", slug: "primitives/docs/components/collapsible" },
			{
				title: "上下文菜单 Context Menu",
				slug: "primitives/docs/components/context-menu",
			},
			{ title: "对话框 Dialog", slug: "primitives/docs/components/dialog" },
			{
				title: "下拉菜单 Dropdown Menu",
				slug: "primitives/docs/components/dropdown-menu",
			},
			{ title: "表单 Form", slug: "primitives/docs/components/form", preview: true },
			{ title: "悬停卡片 Hover Card", slug: "primitives/docs/components/hover-card" },
			{ title: "标签 Label", slug: "primitives/docs/components/label" },
			{ title: "菜单栏 Menubar", slug: "primitives/docs/components/menubar" },
			{
				title: "导航菜单 Navigation Menu",
				slug: "primitives/docs/components/navigation-menu",
			},
			{
				title: "一次性密码 OTP",
				slug: "primitives/docs/components/one-time-password-field",
				preview: true,
			},
			{
				title: "密码切换 Password Toggle",
				slug: "primitives/docs/components/password-toggle-field",
				preview: true,
			},
			{ title: "弹出框 Popover", slug: "primitives/docs/components/popover" },
			{ title: "进度条 Progress", slug: "primitives/docs/components/progress" },
			{ title: "单选框组合 Radio Group", slug: "primitives/docs/components/radio-group" },
			{ title: "滚动区域 Scroll Area", slug: "primitives/docs/components/scroll-area" },
			{ title: "选择 Select", slug: "primitives/docs/components/select" },
			{ title: "分隔符 Separator", slug: "primitives/docs/components/separator" },
			{ title: "滑块 Slider", slug: "primitives/docs/components/slider" },
			{ title: "开关 Switch", slug: "primitives/docs/components/switch" },
			{ title: "标签 Tabs", slug: "primitives/docs/components/tabs" },
			{ title: "提示 Toast", slug: "primitives/docs/components/toast" },
			{ title: "切换 Toggle", slug: "primitives/docs/components/toggle" },
			{
				title: "切换组 Toggle Group",
				slug: "primitives/docs/components/toggle-group",
			},
			{ title: "工具条 Toolbar", slug: "primitives/docs/components/toolbar" },
			{ title: "工具提示 Tooltip", slug: "primitives/docs/components/tooltip" },
		],
	},

	{
		label: "通用工具 Utilities",
		pages: [
			{
				title: "无障碍图标 Accessible Icon",
				slug: "primitives/docs/utilities/accessible-icon",
			},
			{
				title: "方向提供者 Direction Provider",
				slug: "primitives/docs/utilities/direction-provider",
			},
			{ title: "传送门 Portal", slug: "primitives/docs/utilities/portal" },
			{ title: "插槽 Slot", slug: "primitives/docs/utilities/slot" },
			{
				title: "视觉隐藏 Visually Hidden",
				slug: "primitives/docs/utilities/visually-hidden",
			},
		],
	},
];

export type PageProps = {
	title: string;
	slug: string;
	deprecated?: boolean;
	preview?: boolean;
};

export type RouteProps = {
	label: string;
	pages: PageProps[];
};

export const allPrimitivesRoutes = primitivesRoutes.reduce<
	{
		title: string;
		slug: string;
		deprecated?: boolean;
		preview?: boolean;
	}[]
>((acc, curr: RouteProps) => {
	return [...acc, ...curr.pages];
}, []);
