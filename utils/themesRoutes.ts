export const themesRoutes = [
	{
		label: "概览 Overview",
		pages: [
			{
				title: "开始使用 Getting started",
				slug: "themes/docs/overview/getting-started",
			},
			{ title: "样式 Styling", slug: "themes/docs/overview/styling" },
			{ title: "布局 Layout", slug: "themes/docs/overview/layout" },
			{ title: "发布版本 Releases", slug: "themes/docs/overview/releases" },
			{ title: "资源 Resources", slug: "themes/docs/overview/resources" },
		],
	},
	{
		label: "主题 Theme",
		pages: [
			{ title: "概览 Overview", slug: "themes/docs/theme/overview" },
			{ title: "颜色 Color", slug: "themes/docs/theme/color" },
			{ title: "深色模式 Dark mode", slug: "themes/docs/theme/dark-mode" },
			{ title: "排版 Typography", slug: "themes/docs/theme/typography" },
			{ title: "间距 Spacing", slug: "themes/docs/theme/spacing" },
			{ title: "断点 Breakpoints", slug: "themes/docs/theme/breakpoints" },
			{ title: "圆角 Radius", slug: "themes/docs/theme/radius" },
			{ title: "阴影 Shadows", slug: "themes/docs/theme/shadows" },
			{ title: "光标 Cursors", slug: "themes/docs/theme/cursors" },
		],
	},

	{
		label: "布局 Layout",
		pages: [
			{ title: "盒子 Box", slug: "themes/docs/components/box" },
			{ title: "弹性 Flex", slug: "themes/docs/components/flex" },
			{ title: "网格 Grid", slug: "themes/docs/components/grid" },
			{ title: "容器 Container", slug: "themes/docs/components/container" },
			{ title: "段落 Section", slug: "themes/docs/components/section" },
		],
	},
	{
		label: "排版",
		pages: [
			{ title: "文本 Text", slug: "themes/docs/components/text" },
			{ title: "标题 Heading", slug: "themes/docs/components/heading" },
			{ title: "引用块 Blockquote", slug: "themes/docs/components/blockquote" },
			{ title: "代码 Code", slug: "themes/docs/components/code" },
			{ title: "斜体 Em", slug: "themes/docs/components/em" },
			{ title: "快捷键 Kbd", slug: "themes/docs/components/kbd" },
			{ title: "链接 Link", slug: "themes/docs/components/link" },
			{ title: "引用 Quote", slug: "themes/docs/components/quote" },
			{ title: "加粗 Strong", slug: "themes/docs/components/strong" },
		],
	},

	{
		label: "组件",
		pages: [
			{ title: "警报对话框 Alert Dialog", slug: "themes/docs/components/alert-dialog" },
			{ title: "纵横比 Aspect Ratio", slug: "themes/docs/components/aspect-ratio" },
			{ title: "头像 Avatar", slug: "themes/docs/components/avatar" },
			{ title: "徽章 Badge", slug: "themes/docs/components/badge" },
			{ title: "按钮 Button", slug: "themes/docs/components/button" },
			{ title: "提示框 Callout", slug: "themes/docs/components/callout" },
			{ title: "卡片Card", slug: "themes/docs/components/card" },
			{ title: "复选框 Checkbox", slug: "themes/docs/components/checkbox" },
			{
				title: "复选框组合 Checkbox Group",
				slug: "themes/docs/components/checkbox-group",
			},
			{
				title: "复选框卡片 Checkbox Cards",
				slug: "themes/docs/components/checkbox-cards",
			},
			{ title: "上下文菜单 Context Menu", slug: "themes/docs/components/context-menu" },
			{ title: "数据列表 Data List", slug: "themes/docs/components/data-list" },
			{ title: "对话框 Dialog", slug: "themes/docs/components/dialog" },
			{ title: "下拉菜单 Dropdown Menu", slug: "themes/docs/components/dropdown-menu" },
			{ title: "悬停卡片 Hover Card", slug: "themes/docs/components/hover-card" },
			{ title: "图标按钮 Icon Button", slug: "themes/docs/components/icon-button" },
			{ title: "插入 Inset", slug: "themes/docs/components/inset" },
			{ title: "弹出框 Popover", slug: "themes/docs/components/popover" },
			{ title: "进度条 Progress", slug: "themes/docs/components/progress" },
			{ title: "单选框 Radio", slug: "themes/docs/components/radio" },
			{ title: "单选框组合 Radio Group", slug: "themes/docs/components/radio-group" },
			{ title: "单选框卡片 Radio Cards", slug: "themes/docs/components/radio-cards" },
			{ title: "滚动区域 Scroll Area", slug: "themes/docs/components/scroll-area" },
			{
				title: "分段控制 Segmented Control",
				slug: "themes/docs/components/segmented-control",
			},
			{ title: "选择 Select", slug: "themes/docs/components/select" },
			{ title: "分隔线 Separator", slug: "themes/docs/components/separator" },
			{ title: "骨架 Skeleton", slug: "themes/docs/components/skeleton" },
			{ title: "滚动条 Slider", slug: "themes/docs/components/slider" },
			{ title: "加载指示器 Spinner", slug: "themes/docs/components/spinner" },
			{ title: "开关 Switch", slug: "themes/docs/components/switch" },
			{ title: "表格 Table", slug: "themes/docs/components/table" },
			{ title: "标签 Tabs", slug: "themes/docs/components/tabs" },
			{ title: "标签导航 Tab Nav", slug: "themes/docs/components/tab-nav" },
			{ title: "文本区域 Text Area", slug: "themes/docs/components/text-area" },
			{ title: "文本字段 Text Field", slug: "themes/docs/components/text-field" },
			{ title: "工具提示 Tooltip", slug: "themes/docs/components/tooltip" },
		],
	},

	{
		label: "通用工具 Utilities",
		pages: [
			{
				title: "无障碍图标 Accessible Icon",
				slug: "themes/docs/components/accessible-icon",
			},
			{ title: "传送门 Portal", slug: "themes/docs/components/portal" },
			{ title: "重置 Reset", slug: "themes/docs/components/reset" },
			{ title: "插槽 Slot", slug: "themes/docs/components/slot" },
			{ title: "主题 Theme", slug: "themes/docs/components/theme" },
			{
				title: "视觉隐藏 Visually Hidden",
				slug: "themes/docs/components/visually-hidden",
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

export const allThemesRoutes = themesRoutes.reduce<PageProps[]>((acc, curr) => {
	return [...acc, ...curr.pages];
}, []);
