/* Shared interface language and original bilingual course content. No translation service. */
(()=>{'use strict';
const I18N = {
  'zh-CN': {
    // === 顶部导航 ===
    'nav.home': '课程门户',
    'nav.ch1': '第 1 章 · 数据',
    'nav.ch2': '第 2 章 · 数据可视化流程',
    'nav.ch3': '第 3 章 · 色彩专题',
    'nav.ch4': '第 4 章 · 低维可视化',
    'nav.ch5': '第 5 章 · 时序可视化',
    'nav.back': '← 返回课程门户',
    'nav.lang.zh': '中',
    'nav.lang.en': 'EN',
    'nav.lang.label': '切换语言',
    'nav.toc': '章节目录',

    // === Tab 按钮 ===
    'tab.explain': '📖 讲解',
    'tab.code': '⌨️ 关键代码',
    'tab.demo': '▶️ 演示',

    // === 公共 ===
    'common.loading': '加载中…',
    'common.your-case': '你的原案例',
    'common.theory': '嵌入陈为教材理论',
    'common.key-code': '⭐ 关键代码',
    'common.full-lecture': '完整讲义阅读版 →',
    'common.supplementary': '本章补充演示 →',
    'common.prev': '← 上一章',
    'common.next': '下一章 →',
    'common.prev.aria': '上一章',
    'common.next.aria': '下一章',
    'common.enter': '进入章节 →',
    'common.live': '✅ 已上线',
    'common.maps-to': '对应你的文档：',

    // === 章节标题（lesson-01 数据）===
    'sec-01-1.title': '1.1 数据生成',
    'sec-01-1.subtitle': '基于新生数据（DeepSeek 合成）讲解异步加载与字段映射',
    'sec-01-2.title': '1.2 数据定义',
    'sec-01-2.subtitle': 'DIKW 金字塔 —— 数据 → 信息 → 知识 → 智慧',
    'sec-01-3.title': '1.3 数据属性',
    'sec-01-3.subtitle': 'Stevens 测量尺度 × Mackinlay 视觉通道排序',
    'sec-01-4.title': '1.4 数据变换',
    'sec-01-4.subtitle': 'D3 8 个函数式数组操作',
    'sec-01-5.title': '1.5 D3 数据选择器',
    'sec-01-5.subtitle': 'Selection 与 enter / update / exit 三态模型',

    // === 章节标题（lesson-02 流程）===
    'sec-02-1.title': '2.1 数据可视化流程',
    'sec-02-1.subtitle': '从「拿到一张表」到「画出一张图」的完整链路',
    'sec-02-2.title': '2.2 数据变换：原数据 → 数据表',
    'sec-02-2.subtitle': 'Card 模型 D→T 阶段：清洗、聚合、连接、派生',
    'sec-02-3.title': '2.3 视觉映射：数据表 → 视觉结构',
    'sec-02-3.subtitle': 'Mackinlay 通道排名 + 图元/通道 + 树布局实例',
    'sec-02-4.title': '2.4 视图渲染与用户交互',
    'sec-02-4.subtitle': '视觉结构 → 视图渲染 + 动画 + 事件反馈循环',

    // === 章节标题（lesson-03 色彩）===
    'sec-03-1.title': '3.1 颜色模型基础',
    'sec-03-1.subtitle': '为什么需要 4 种颜色空间？它们各自擅长什么？',
    'sec-03-2.title': '3.2 colormap 三类选择',
    'sec-03-2.subtitle': '顺序型 / 发散型 / 定性型。选错类型 = 误导读者',
    'sec-03-3.title': '3.3 CIE Lab 色域图',
    'sec-03-3.subtitle': '在感知均匀的颜色空间里，色域长什么样？',
    'sec-03-4.title': '3.4 色系搭配规则（5 大类）',
    'sec-03-4.subtitle': '单色 / 类比 / 互补 / 三等分 / 分裂互补',
    'sec-03-5.title': '3.5 科研经典配色',
    'sec-03-5.subtitle': 'Wong / Paul Tol / Okabe-Ito / Tableau — 顶标都在用什么',
    'sec-03-6.title': '3.6 对错案例对比',
    'sec-03-6.subtitle': '4 张图，4 错 1 对。点击你认为对的那张',
    'sec-03-7.title': '3.7 鲜艳 + 低饱和 哲学生成器',
    'sec-03-7.subtitle': '颜色数量 ≤ 7、鲜艳颜色 + 低饱和度 = 好看又耐看',
    'sec-03-8.title': '3.8 CVD 论文图测',
    'sec-03-8.subtitle': '你的图在色盲眼里还看得懂吗？',

    // === 章节标题（lesson-04 低维）===
    'sec-04-1.title': '4.1 数据转换',
    'sec-04-1.subtitle': '你的 Crime 数据是宽格式，可视化常需要长格式',
    'sec-04-2.title': '4.2 坐标轴变换',
    'sec-04-2.subtitle': '数据空间 → 坐标系空间 → 屏幕空间。三层职责分明',
    'sec-04-3.title': '4.3 曲线拟合',
    'sec-04-3.subtitle': '同 50 个点，用 10 种 line.curve 画风各异',
    'sec-04-4.title': '4.4 倾角感知（45° 黄金角）',
    'sec-04-4.subtitle': '人眼对斜率的估计不是线性的。45° 是视觉"中点"',
    'sec-04-5.title': '4.5 等值线（Marching Squares）',
    'sec-04-5.subtitle': '给定标量场 + 阈值，追踪"值 = 阈值"的曲线',

    // === 章节标题（lesson-05 时序）===
    'sec-05-1.title': '5.1 时间属性',
    'sec-05-1.subtitle': '时间有 5 个核心属性：有序/连续/周期/独立于空间/结构性',
    'sec-05-2.title': '5.2 标准时间可视化（折线图）',
    'sec-05-2.subtitle': 'x 轴 = 时间，y 轴 = 度量',
    'sec-05-3.title': '5.3 日历热图（van Wijk）',
    'sec-05-3.subtitle': '以"年=行 / 周=列"展示全年数据',
    'sec-05-4.title': '5.4 周期时间可视化（阿基米德螺旋）',
    'sec-05-4.subtitle': '将时间沿圆周排列，发现周期性',
    'sec-05-5.title': '5.5 Storyline 时间线（侏罗纪公园）',
    'sec-05-5.subtitle': '多角色叙事：每条线 = 一个角色 / 组织 / 进程',

    // === Portal 主页 ===
    'portal.title': '《可视化导论》',
    'footer.meta': '零依赖 · D3.js v7 · 部署于 WorkBuddy Sites',

    'footer.copyright': '© 2026 《可视化导论》课程 · 中国石油大学（华东）· 授课教师：<a href="https://cinger007.github.io" target="_blank" rel="noopener" class="teacher-link">李昕</a> · 主要参考教材：陈为《可视化导论》',

    'portal.cards.color-bold': '颜色是可视化基础',

    'portal.cards.source-prefix': '独立专题：',

    'portal.cta.enter3': '进入专题 →',

    'portal.cta.enter1': '进入章节 →',

    'portal.nav.about': 'ℹ️ 关于',

    'portal.nav.howto': '▶️ 使用方式',

    'portal.nav.chapters': '📚 章节',

    'portal.hero.meta': '中国石油大学（华东）· 授课教师：<a href="https://cinger007.github.io" target="_blank" rel="noopener" class="teacher-link">李昕</a> · 主要参考教材：陈为《可视化导论》',

    'portal.hero.subtitle': '从数据到图表：JavaScript + D3.js 实战课程',

    'portal.hero.tag': 'VISUALIZATION · INTRODUCTION',

    'portal.hero.h1': '《可视化导论》',

    'portal.tagline': '课程章节',
    'portal.intro': '点击任一卡片进入该章节，每章节含 3 个 tab：📖 讲解 / ⌨️ 关键代码 / ▶️ 演示。',
    'portal.section.usage': '使用方式',
    'portal.section.about': '关于本课程',
    'portal.usage.classroom.title': '课堂讲解',
    'portal.usage.classroom.desc': '打开任一章节后，左侧选小节，顶部切换 讲解 / 代码 / 演示 三个 tab，一边讲解、一边实时运行。',
    'portal.usage.student.title': '学生自学',
    'portal.usage.student.desc': '按章节顺序过完所有 ⭐ 关键点，每个关键点配有「为什么这么写」+「有什么坑」段落。',
    'portal.usage.teacher.title': '教师备课时',
    'portal.usage.teacher.desc': '每个章节有 1 套独立的 demo/ 子目录，可以单独跑、单独改、单独打包给学生。',
    'portal.usage.lan.title': '局域网使用',
    'portal.usage.lan.desc': '若公网不通，可在本机跑 python -m http.server 8080，学生连同一 WiFi 即可访问。',
    'portal.about.theory': '理论来源',
    'portal.about.theory.desc': '陈为《可视化导论》、Mackinlay 1986、Stevens 1946、Cleveland 1984、Bostock D3 官方文档、Card 1999 数据流模型。',
    'portal.about.principle': '设计原则',
    'portal.about.principle.desc': '案例为中心（不是理论为中心）。每个知识点都嵌入到用户的实践案例里，配 ⭐ 关键点解释 + 可运行演示。',
    'portal.about.stack': '技术栈',
    'portal.about.stack.desc': '零依赖：纯 HTML + CSS + ES modules + D3.js v7 (CDN)。本地一条命令 python -m http.server 启动，无需 npm。',
    'portal.about.data': '数据集',
    'portal.about.data.desc': '新生数据 CSV 与 Crime 数据等都已打包进 data/ 目录，浏览器 fetch 加载，离线可用。',

    // === 5 张卡片 ===
    'card-01.num': '第 1 章',
    'card-01.title': '数据',
    'card-01.desc': '从 DeepSeek 合成新生数据出发，展开数据生成、DIKW、Stevens 测量尺度、Mackinlay 视觉通道、D3 数据变换与 Data-Join 三态。',
    'card-01.tags': 'DIKW 金字塔 · Stevens 4 尺度 · 8 个 D3 变换函数 · Selection 三态',
    'card-02.num': '第 2 章',
    'card-02.title': '数据可视化流程',
    'card-02.desc': 'Card 数据流模型、新生数据 → 分类树 → 树形列表的完整链路，Reingold-Tilford 布局、DOM 事件机制。',
    'card-02.tags': 'Card 模型 · d3.rollup · Reingold-Tilford · 事件委托',
    'card-03.num': '第 3 章',
    'card-03.title': '色彩专题',
    'card-03.desc': '独立专题：颜色是可视化基础。颜色模型 + colormap + Lab 色域 + 5 大色系 + 经典科研配色 + 对错案例 + 鲜艳+低饱和哲学生成器 + CVD 论文图测。8 小节，配色一站式。',
    'card-03.tags': '4 颜色空间 + CVD · Wong / Paul Tol · 5 大色系规则 · 鲜艳+低饱和 · CVD 论文图测',
    'card-04.num': '第 4 章',
    'card-04.title': '低维数据可视化',
    'card-04.desc': 'Crime 数据坐标变换、10 种曲线拟合、Cleveland 45° 倾角、Marching Squares 等值线，共 5 小节。',
    'card-04.tags': '三层坐标变换 · 10 种曲线 · Cleveland 45° · Marching Squares',
    'card-05.num': '第 5 章',
    'card-05.title': '时序数据可视化',
    'card-05.desc': '5 个时间属性、法国人名时间序列、van Wijk 日历热图、阿基米德螺旋日历、Storyline 故事线（《侏罗纪公园》案例）。',
    'card-05.tags': '时间分解 · 日历 colormap · 极坐标变换 · Storygraph',
  },

  'en-US': {
    // === Top nav ===
    'nav.home': 'Course Portal',
    'nav.ch1': 'Ch 1 · Data',
    'nav.ch2': 'Ch 2 · Viz Workflow',
    'nav.ch3': 'Ch 3 · Color',
    'nav.ch4': 'Ch 4 · Low-Dim',
    'nav.ch5': 'Ch 5 · Time Series',
    'nav.back': '← Back to Portal',
    'nav.lang.zh': '中',
    'nav.lang.en': 'EN',
    'nav.lang.label': 'Switch language',
    'nav.toc': 'Table of Contents',

    // === Tabs ===
    'tab.explain': '📖 Explain',
    'tab.code': '⌨️ Key Code',
    'tab.demo': '▶️ Demo',

    // === Common ===
    'common.loading': 'Loading…',
    'common.your-case': 'Your Original Case',
    'common.theory': "Theory from Chen Wei's Textbook",
    'common.key-code': '⭐ Key Code',
    'common.full-lecture': 'Full lecture →',
    'common.supplementary': 'Chapter examples →',
    'common.prev': '← Previous',
    'common.next': 'Next →',
    'common.prev.aria': 'Previous chapter',
    'common.next.aria': 'Next chapter',
    'common.enter': 'Enter →',
    'common.live': '✅ Live',
    'common.maps-to': 'Maps to your doc:',

    // === Lesson 01: Data ===
    'sec-01-1.title': '1.1 Data Generation',
    'sec-01-1.subtitle': 'Async loading + field mapping using DeepSeek-generated student data',
    'sec-01-2.title': '1.2 Data Definition',
    'sec-01-2.subtitle': 'DIKW pyramid — Data → Information → Knowledge → Wisdom',
    'sec-01-3.title': '1.3 Data Attributes',
    'sec-01-3.subtitle': "Stevens' scales × Mackinlay's visual channel ranking",
    'sec-01-4.title': '1.4 Data Transformation',
    'sec-01-4.subtitle': '8 functional array operations in D3',
    'sec-01-5.title': '1.5 D3 Selectors',
    'sec-01-5.subtitle': 'Selection + enter / update / exit three-phase model',

    // === Lesson 02: Workflow ===
    'sec-02-1.title': '2.1 Visualization Workflow',
    'sec-02-1.subtitle': 'Full pipeline: raw table → final chart',
    'sec-02-2.title': '2.2 Data Transformation: Raw → Data Table',
    'sec-02-2.subtitle': 'Card model D→T stage: cleaning, aggregation, join, derive',
    'sec-02-3.title': '2.3 Visual Mapping: Data → Visual Structure',
    'sec-02-3.subtitle': "Mackinlay's channel ranking + marks/channels + tree layout example",
    'sec-02-4.title': '2.4 View Rendering & User Interaction',
    'sec-02-4.subtitle': 'Visual structure → view rendering + animation + interaction feedback loop',

    // === Lesson 03: Color ===
    'sec-03-1.title': '3.1 Color Model Basics',
    'sec-03-1.subtitle': 'Why 4 color spaces? What are their strengths?',
    'sec-03-2.title': '3.2 Colormap: 3 Types',
    'sec-03-2.subtitle': 'Sequential / Diverging / Categorical. Wrong type = misleading readers.',
    'sec-03-3.title': '3.3 CIE Lab Gamut',
    'sec-03-3.subtitle': 'What does the gamut look like in a perceptually uniform space?',
    'sec-03-4.title': '3.4 Color Harmony Rules (5 Types)',
    'sec-03-4.subtitle': 'Mono / Analogous / Complementary / Triadic / Split-Complementary',
    'sec-03-5.title': '3.5 Classic Research Palettes',
    'sec-03-5.subtitle': 'Wong / Paul Tol / Okabe-Ito / Tableau — what top journals use',
    'sec-03-6.title': '3.6 Right vs Wrong Comparison',
    'sec-03-6.subtitle': '4 charts, 3 wrong 1 right. Click the right one.',
    'sec-03-7.title': '3.7 Vivid + Low-Sat Palette Generator',
    'sec-03-7.subtitle': '≤7 colors, vivid hues + low saturation = pleasant + readable',
    'sec-03-8.title': '3.8 CVD Paper Figure Test',
    'sec-03-8.subtitle': 'Can color-blind readers still understand your chart?',

    // === Lesson 04: Low-Dim ===
    'sec-04-1.title': '4.1 Data Transformation',
    'sec-04-1.subtitle': 'Your Crime data is wide; visualization needs long format',
    'sec-04-2.title': '4.2 Axis Transformation',
    'sec-04-2.subtitle': 'Data → coord → screen. Three-layer separation',
    'sec-04-3.title': '4.3 Curve Fitting',
    'sec-04-3.subtitle': 'Same 50 points, 10 different line.curve styles',
    'sec-04-4.title': '4.4 Slope Perception (45° Sweet Spot)',
    'sec-04-4.subtitle': 'Human slope estimation is NOT linear. 45° is the visual "middle".',
    'sec-04-5.title': '4.5 Marching Squares (Contour Lines)',
    'sec-04-5.subtitle': 'Given a scalar field + threshold, trace the value=threshold curve',

    // === Lesson 05: Time Series ===
    'sec-05-1.title': '5.1 Time Attributes',
    'sec-05-1.subtitle': '5 core properties: ordered / continuous / periodic / space-independent / structured',
    'sec-05-2.title': '5.2 Standard Time Viz (Line Chart)',
    'sec-05-2.subtitle': 'x = time, y = measure',
    'sec-05-3.title': '5.3 Calendar Heatmap (van Wijk)',
    'sec-05-3.subtitle': 'Year=row, week=column — full-year periodic patterns',
    'sec-05-4.title': '5.4 Cyclic Time Viz (Archimedean Spiral)',
    'sec-05-4.subtitle': 'Arrange time along a circle — reveal periodic structure',
    'sec-05-5.title': '5.5 Storyline (Jurassic Park)',
    'sec-05-5.subtitle': 'Multi-character narrative: each line = character / org / process',

    // === Portal home ===
    'portal.title': 'Introduction to Visualization',
    'footer.meta': 'Zero dependencies · D3.js v7 · Deployed on WorkBuddy Sites',
    'footer.copyright': '© 2026 Introduction to Visualization Course · China University of Petroleum (Huadong) · Instructor: <a href="https://cinger007.github.io" target="_blank" rel="noopener" class="teacher-link">Li Xin</a> · Main reference: Chen Wei’s 《Introduction to Visualization》',
    'portal.cards.color-bold': 'Color is the foundation of visualization',
    'portal.cards.source-prefix': 'Standalone topic:',
    'portal.cta.enter3': 'Open Topic →',
    'portal.cta.enter1': 'Open Chapter →',
    'portal.nav.about': 'ℹ️ About',
    'portal.nav.howto': '▶️ How to Use',
    'portal.nav.chapters': '📚 Chapters',
    'portal.hero.meta': 'China University of Petroleum (Huadong) · Instructor: <a href="https://cinger007.github.io" target="_blank" rel="noopener" class="teacher-link">Li Xin</a> · Main reference: Chen Wei’s 《Introduction to Visualization》',
    'portal.hero.subtitle': 'From Data to Charts: A Hands-on JavaScript + D3.js Course',
    'portal.hero.h1': 'Introduction to Visualization',
    'portal.hero.tag': 'VISUALIZATION · INTRODUCTION',
    'portal.tagline': 'Course Chapters',
    'portal.intro': 'Click any card to enter a chapter. Each chapter has 3 tabs: 📖 Explain / ⌨️ Key Code / ▶️ Demo.',
    'portal.section.usage': 'How to Use',
    'portal.section.about': 'About This Course',
    'portal.usage.classroom.title': 'Classroom Teaching',
    'portal.usage.classroom.desc': 'Open any chapter, pick a section on the left, switch between Explain / Code / Demo tabs at the top. Lecture while the demo runs live.',
    'portal.usage.student.title': 'Student Self-Study',
    'portal.usage.student.desc': 'Go through all ⭐ Key Points in chapter order. Each has "why this way" + "what pitfalls" notes.',
    'portal.usage.teacher.title': 'Teacher Preparation',
    'portal.usage.teacher.desc': 'Each chapter has its own demo/ subfolder. Run, modify, and package demos separately for students.',
    'portal.usage.lan.title': 'LAN Mode',
    'portal.usage.lan.desc': 'If public web fails, run python -m http.server 8080 on your machine. Students on the same WiFi can access.',
    'portal.about.theory': 'Theory Sources',
    'portal.about.theory.desc': "Chen Wei's 《Introduction to Visualization》, Mackinlay 1986, Stevens 1946, Cleveland 1984, Bostock D3 docs, Card 1999 data flow model.",
    'portal.about.principle': 'Design Principle',
    'portal.about.principle.desc': 'Case-centered (not theory-centered). Each concept is grounded in their hands-on cases, with ⭐ Key Code explanations + runnable demos.',
    'portal.about.stack': 'Tech Stack',
    'portal.about.stack.desc': 'Zero dependencies: plain HTML + CSS + ES modules + D3.js v7 (CDN). One command python -m http.server. No npm needed.',
    'portal.about.data': 'Datasets',
    'portal.about.data.desc': 'Student CSV + Crime CSV etc. all packaged in data/. Loaded via fetch, works offline.',

    // === Supplementary index ===
    'common.back': '← Back to Course Portal',
    'supp.title': 'Supplementary Demo Collection',
    'supp.tagline': 'Imported from J:\\教学\\可视化导论新课件 (your teaching folder) — hands-on demos paired with course chapters',
    'supp.ch1': 'Chapter 1 · Data',
    'supp.ch2': 'Chapter 2 · Visualization Pipeline',
    'supp.ch3': 'Chapter 3 · Color Topics',
    'supp.ch4': 'Chapter 4 · Low-Dimensional Data',
    'supp.ch5': 'Chapter 5 · Time Series Data',
    'supp.hint1': 'Maps to doc-01: 1.1 Data Generation',
    'supp.hint2': 'Maps to doc-02: 4.4 Tree List',
    'supp.hint3': 'Maps to doc-03: 3.4 5 Color Schemes',
    'supp.hint4': 'Maps to doc-04: 4.1 Data Transformation / 4.3 Curve Fitting / 4.5 Contour Lines',
    'supp.hint5': 'Maps to doc-05: 5.3 Calendar Heatmap / 5.4 Archimedean Spiral',

    // === 5 cards ===
    'card-01.num': 'Chapter 1',
    'card-01.title': 'Data',
    'card-01.desc': "DeepSeek-generated student data → data generation, DIKW pyramid, Stevens' scales, Mackinlay's channels, D3 functional transforms, Data-Join.",
    'card-01.tags': 'DIKW · Stevens 4 scales · 8 D3 ops · Selection',
    'card-02.num': 'Chapter 2',
    'card-02.title': 'Visualization Workflow',
    'card-02.desc': "Card data flow model, student data → hierarchy → collapsible tree list. Reingold-Tilford layout, DOM event mechanics.",
    'card-02.tags': 'Card model · d3.rollup · Reingold-Tilford · delegation',
    'card-03.num': 'Chapter 3',
    'card-03.title': 'Color',
    'card-03.desc': 'Standalone topic: color is the foundation of visualization. Color models + colormap + Lab gamut + 5 harmonies + classic palettes + right/wrong cases + vivid+low-sat generator + CVD test. 8 sections, one-stop.',
    'card-03.tags': '4 spaces + CVD · Wong / Paul Tol · 5 harmonies · Vivid+Low-Sat · CVD test',
    'card-04.num': 'Chapter 4',
    'card-04.title': 'Low-Dim Visualization',
    'card-04.desc': 'Crime data axis transformation, 10 curve types, Cleveland 45° slope perception, Marching Squares contours. 5 sections.',
    'card-04.tags': '3-layer axis · 10 curves · Cleveland 45° · Marching Squares',
    'card-05.num': 'Chapter 5',
    'card-05.title': 'Time Series Visualization',
    'card-05.desc': '5 time attributes, French names time series, van Wijk calendar heatmap, Archimedean spiral, Storyline (Jurassic Park case).',
    'card-05.tags': 'Time props · Calendar colormap · Polar transform · Storygraph',
  },
};


const extra={"课程学习": "Course learning", "学习空间": "Learning space", "学习概览": "Overview", "基础导学": "Getting started", "课程目录": "Course contents", "完整案例": "Worked case study", "学习成果示例": "Example projects", "实践与检测": "Practice and assessment", "图表纠错实验室": "Chart correction lab", "可视化实验室": "Visualization lab", "设计与综合实践": "Design and practice", "知识自测与复习": "Assessment and review", "学习工具": "Learning tools", "术语手册": "Glossary", "学习笔记": "Study notes", "我的笔记": "My notes", "阅读进度": "Reading progress", "关于课程与使用帮助": "About and help", "可视化导论": "Introduction to Visualization", "可视化导论学习空间": "Visualization learning space", "从理解数据到解释图形，建立完整的可视化设计方法。": "Build a complete visualization design process, from understanding data to interpreting charts.", "开始学习": "Start learning", "继续学习": "Continue learning", "首次使用请从基础导学开始；阅读章节后可继续上次学习。": "Start with the introductory guide. After reading a section, resume your last session here.", "继续学习将返回上次阅读的小节；也可从下方路线选择阶段。": "Resume the last section, or choose a stage below.", "尚无章节阅读记录": "No sections visited yet", "尚未完成小节": "No sections completed yet", "从图形认识可视化": "Explore visualization through graphics", "层级与关系": "Hierarchies and relationships", "数值与映射": "Values and mappings", "时间与变化": "Time and change", "通过节点与连线理解层级结构。": "Understand hierarchy through nodes and links.", "用点的位置观察数值关系。": "Explore numerical relationships through point positions.", "从日历布局观察时间模式。": "Discover temporal patterns in a calendar layout.", "五章课程体系": "Five-chapter curriculum", "查看全部小节": "View all sections", "数据": "Data", "数据可视化流程": "Data visualization process", "色彩专题": "Color", "低维数据可视化": "Low-dimensional data visualization", "时序数据可视化": "Time-series data visualization", "认识数据、测量尺度与 D3 数据变换，建立可视化的基础。": "Build foundations in data, measurement scales, and D3 data transformations.", "把原始数据组织成结构，理解从数据到视图的完整链路。": "Structure raw data and understand the complete process from data to views.", "理解颜色空间与色图，让色彩准确地表达数据关系。": "Use color spaces and color maps to encode data relationships accurately.", "学习坐标变换、曲线与等值线，探索二维数据的表达。": "Explore coordinate transforms, curves, and contours for two-dimensional data.", "从时间属性到日历与故事线，发现变化、周期和事件。": "Explore changes, cycles, and events through calendars and storylines.", "识别四种测量尺度": "Identify four measurement scales", "解释 enter / update / exit": "Explain enter / update / exit", "完成一次 CSV 类型转换": "Convert CSV field types", "复述 Card 数据流模型": "Explain Card’s dataflow model", "把表格分组为层级数据": "Group tabular records into a hierarchy", "理解布局与交互的关系": "Understand layout and interaction", "区分定性 顺序 发散色图": "Distinguish categorical, sequential, and diverging color maps", "为数据选择合适的配色": "Choose colors appropriate to the data", "检查色觉差异下的可辨识性": "Check accessibility for color vision differences", "解释数据坐标到屏幕坐标的映射": "Explain data-to-screen coordinate mapping", "比较插值与拟合的用途": "Compare interpolation and fitting", "理解等值线的含义": "Interpret contours", "区分趋势与周期": "Distinguish trends from cycles", "选择日历或折线等时间编码": "Choose temporal encodings such as calendars and lines", "解释故事线中实体与事件的关系": "Explain entities and events in storylines", "学习目标": "Learning objectives", "学习成果": "Learning outcomes", "成果": "Outcome", "进入章节": "Open chapter", "结合案例与实践学习": "Learn through cases and practice", "学习章节后，通过操作、设计与解释检查理解。": "Check your understanding through interaction, design, and explanation.", "贯穿案例": "Course-wide case study", "完整案例学习": "Worked case study", "从14条记录出发，完成整理、绘图和解释。": "Clean, visualize, and interpret a dataset of 14 records.", "纠错实验": "Correction experiment", "修改基线、时间与配色，对照图形并解释依据。": "Adjust baselines, time, and colors; compare charts and explain your choices.", "独立应用": "Independent application", "综合设计与实践": "Design and practice", "使用数据完成图表设计，并检查结论边界。": "Design a chart from data and evaluate the limits of your conclusions.", "完整资源总览": "All learning resources", "展开课程与工具": "Expand courses and tools", "完整课程": "Complete course", "保留讲解、代码与原有演示": "Explanations, code, and demonstrations", "逐节学习支持": "Section learning support", "概念导读、任务与理解检查": "Concepts, tasks, and understanding checks", "贯穿式交互案例": "Interactive case study", "从问题定义到解释与迁移": "From problem definition to interpretation and transfer", "核心术语": "Core terms", "定义、示例与易混概念辨析": "Definitions, examples, and distinctions", "学习内容与功能总览": "Courses and learning tools", "课程、案例、实验与复习相互衔接，支持从入门到独立实践。": "Connect courses, cases, experiments, and review to progress toward independent practice.", "使用帮助": "Help", "全部章节": "All chapters", "待完成": "To read", "已完成": "Read", "已阅读": "Read", "小节检查通过": "Section checks passed", "检查通过": "Check passed", "需要复习": "Needs review", "阅读由本人标记；检查依据最新作答，均不等同于知识掌握认证。": "Reading is self-reported; checks reflect the latest answers. Neither certifies mastery.", "课程": "Course", "本节提纲": "Section outline", "本节目录": "On this section", "展开／收起": "Expand / collapse", "本节学习": "This section", "本节笔记": "Section notes", "本节学习笔记": "Notes for this section", "用自己的话解释本节概念，记录实验观察和疑问。": "Explain the concepts in your own words and record observations and questions.", "自动保存至当前浏览器": "Automatically saved in this browser", "标记本节已阅读": "Mark section as read", "已阅读 ✓ · 撤销": "Read ✓ · Undo", "整理笔记与备份记录 ↗": "Organize notes and back up ↗", "知识自测 ↗": "Knowledge check ↗", "知识自测": "Knowledge check", "本节理解检查": "Understanding check", "课后巩固与学习任务": "Review and learning tasks", "技术辨析": "Technical clarification", "学习归纳": "Key concepts", "知识联系": "Knowledge connections", "前置知识": "Prerequisites", "本节的作用": "Role of this section", "后续衔接": "What comes next", "关联案例与练习": "Related case and practice", "示例分析": "Example analysis", "操作任务": "Practice task", "相关术语": "Related terms", "依据任务开展演示": "Explore the demonstration", "阅读原课程讲解": "Read the course explanation", "展开一级：思路提示": "Level 1: Approach", "展开二级：计算步骤": "Level 2: Calculation steps", "展开三级：参考结果": "Level 3: Reference result", "先独立完成操作任务，确有需要时逐级展开提示；完成后核对观察和解释。": "Attempt the task independently. Reveal hints as needed, then check your observations and explanation.", "本章成果任务与自查": "Chapter task and self-check", "章末成果任务": "Chapter task", "同类练习": "Related practice", "复习路径": "Review path", "定位原课程相关知识段落": "Review the relevant course passage", "核对定义、条件与结论边界。": "Check definitions, conditions, and limits of conclusions.", "关键代码①": "Key code ①", "标出代码与关联图形": "Highlight code and related marks", "实践：图表纠错实验": "Practice: Chart correction lab", "返回课程": "Back to course", "返回课程目录": "Back to course contents", "上一节": "Previous section", "下一节": "Next section", "提交答案": "Submit answer", "检查答案": "Check answer", "查看解析": "View explanation", "参考结果": "Reference result", "参考答案": "Reference answer", "返回检查": "Return to check", "开始复习": "Start review", "尚未作答": "Not answered", "未检查": "Not checked", "讲解": "Explanation", "关键代码": "Key code", "演示": "Demo", "代码—图形对照": "Code–chart comparison", "关闭对照": "Close comparison", "搜索课程、术语与功能…": "Search courses, terms, and tools…", "全站搜索课程、术语与功能": "Search all courses, terms, and tools", "跳至主要内容": "Skip to main content", "展开导航": "Open navigation", "当前位置": "Current location", "当前章节": "Current chapter", "备份记录": "Back up records", "学习记录保存在当前浏览器": "Learning records are saved in this browser", "可视化导论 · 支持数据理解与分析": "Introduction to Visualization · Understanding and analyzing data", "观察 · 思考 · 动手": "Observe · Reflect · Practice", "我的学习记录": "My learning records", "导出备份": "Export backup", "恢复备份": "Restore backup", "导出笔记": "Export notes", "导出学习记录": "Export learning records", "搜索结果": "Search results", "搜索": "Search", "全部": "All", "数据生成": "Data generation", "数据定义": "Data definition", "数据属性": "Data attributes", "数据变换": "Data transformation", "D3 数据选择器": "D3 data selections", "数据分类树（d3.rollup 多层聚合）": "Data hierarchy (nested d3.rollup aggregation)", "树布局（Reingold-Tilford 算法）": "Tree layout (Reingold–Tilford algorithm)", "树形列表渲染（classed + 事件委托）": "Tree list rendering (classed and event delegation)", "颜色模型基础": "Color models", "colormap 三类选择": "Three types of color maps", "CIE Lab 色域图": "CIE Lab gamut", "色系搭配规则（5 大类）": "Five color harmony schemes", "科研经典配色": "Scientific color palettes", "对错案例对比": "Comparing effective and misleading designs", "鲜艳 + 低饱和 哲学生成器": "Vivid, low-saturation palette generator", "CVD 论文图测": "Color vision accessibility test", "数据转换": "Data conversion", "坐标轴变换": "Coordinate transforms", "曲线拟合": "Curve fitting", "倾角感知（45° 黄金角）": "Slope perception (45° banking)", "等值线（Marching Squares）": "Contours (Marching Squares)", "时间属性": "Temporal attributes", "标准时间可视化（折线图）": "Standard time visualization (line chart)", "日历热图（van Wijk）": "Calendar heatmap (van Wijk)", "周期时间可视化（阿基米德螺旋）": "Cyclic time visualization (Archimedean spiral)", "Storyline 时间线（侏罗纪公园）": "Storyline timeline (Jurassic Park)", "修改前": "Before", "当前方案": "Current design", "调整当前方案": "Adjust current design", "检验当前方案": "Check current design", "恢复初始参数": "Reset parameters", "查看原始记录与统计口径": "View records and definitions", "修正依据与结论限制": "Rationale and limitations", "修改控件后即时更新": "Updates when controls change", "保留问题设置，供对照观察": "Original settings for comparison", "原始方案固定；仅右侧当前方案随操作变化。": "The original stays fixed; controls update only the current design.", "发现图形中的误导，亲手修改参数，再用数据说明修正依据。修改前后的图形始终使用同一组记录。": "Identify misleading encodings, adjust the parameters, and justify your changes with data. Both charts use the same records.", "用于检验本题约定，非所有设计任务的唯一方案。": "Checks the task requirements; other design solutions may also be valid.", "记录保存在当前浏览器，可通过学习笔记页备份。": "Records are saved in this browser. Back them up from Study notes.", "恢复默认样例": "Restore sample", "从问题到图形": "From questions to charts", "设计说明": "Design rationale", "研究问题": "Research question", "数据与口径": "Data and definitions", "图形选择": "Chart selection", "交互与验证": "Interaction and validation", "可以解释的结果": "Supported conclusions", "结论限制": "Limitations", "基线": "Baseline", "时间": "Time", "配色": "Color", "返回实验": "Back to experiment", "按知识顺序学习，每节均提供概念导读、操作任务与理解检查。": "Follow the knowledge sequence. Each section includes concepts, tasks, and understanding checks.", "将CSV记录转换为可计算的数据，并说明汇总口径。": "Convert CSV records to typed data and explain aggregation rules.", "将分析问题组织为数据变换、视觉映射与视图交互。": "Organize an analysis into data transformations, visual mappings, and interactions.", "根据变量语义选择颜色编码，并增加非颜色线索。": "Choose colors based on variable meaning and add non-color cues.", "计算数据到坐标的映射，并判断尺度对视觉差异的影响。": "Map data to coordinates and evaluate how scales affect perceived differences.", "保留时间顺序与缺失状态，解释趋势并限定结论。": "Preserve temporal order and missing values, interpret trends, and qualify conclusions.", "查看学习成果示例 ↗": "View example projects ↗", "5章课程 · 27节导读 · 6步案例 · 44项术语": "5 chapters · 27 section guides · 6 case steps · 44 terms", "从导读开始，理解概念，再实现分析和操作演示": "Understand the concepts, then implement analyses and explore demonstrations.", "移动焦点 · 在目录中选择小节": "Move focus · Select a section in the contents", "未标记阅读": "Not marked as read", "尚未检查": "Not checked yet", "可选模式：同时查看原代码与演示。": "Optional: View source code and demo side by side.", "保存位置并返回课程": "Save position and return to course", "理解检查": "Understanding check", "未通过": "Needs review", "本章未完成任务": "Pending chapter tasks", "返回原检查": "Return to the original check", "查看参考结果": "View reference result", "展开提示": "Reveal hint", "开始任务": "Start task", "导出实验记录": "Export experiment record", "上一个实验": "Previous experiment", "下一个实验": "Next experiment", "当前方案尚未检验。": "Current design has not been checked.", "基线与比例": "Baselines and ratios", "时间顺序与缺失": "Time order and missing values", "数量与配色": "Quantity and color", "纵轴起点": "Vertical-axis baseline", "指标单位": "Measurement unit", "显示数量图例": "Show numerical legend", "大值使用深色": "Use darker colors for larger values", "时间排序": "Sort by time", "保留缺失日期": "Preserve missing dates", "缺失处断开连线": "Break lines at missing values", "重新开始": "Restart", "下一步": "Next step", "上一步": "Previous step", "同类练习：": "Related practice:", "复习路径：原文 → 演示 → 同类练习": "Review path: Explanation → Demo → Practice", "导出我的案例报告": "Export my case report", "调整数据与图形": "Adjust data and chart", "修改参数后，可在相邻图形中查看结果。": "Adjust parameters and observe the adjacent chart.", "数据类型": "Data type", "名义尺度": "Nominal scale", "顺序尺度": "Ordinal scale", "区间尺度": "Interval scale", "比率尺度": "Ratio scale"};
const dictionary=new Map(Object.entries({...extra,...window.COURSE_ENGLISH}));
for(const [key,value] of Object.entries(I18N['zh-CN']))if(I18N['en-US'][key]&&!dictionary.has(value))dictionary.set(value,I18N['en-US'][key]);
const phrases=[...dictionary].filter(([zh])=>zh.length>=8).sort((a,b)=>b[0].length-a[0].length);
const numberPattern=/\d+(?:\.\d+)?/g;
const numericTemplates=[...dictionary].flatMap(([zh,en])=>{
 const a=zh.match(numberPattern),b=en.match(numberPattern);
 if(!/[\u4e00-\u9fff]/.test(zh)||!a||!b||a.join('|')!==b.join('|')||zh.length<5)return [];
 const pieces=zh.split(/(\d+(?:\.\d+)?)/);
 const escaped=pieces.map((part,i)=>i%2?'(\\d+(?:\\.\\d+)?)':part.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('');
 try{return [{pattern:new RegExp('^'+escaped+'$'),en}]}catch{return []}
});
const translationCache=new Map();
function translate(s){if(translationCache.has(s))return translationCache.get(s);const result=translateValue(s);if(translationCache.size>6000)translationCache.clear();translationCache.set(s,result);return result}
let locale='zh-CN';try{locale=localStorage.getItem('wbl-locale')||locale}catch{}
const requested=new URL(location.href).searchParams.get('lang');if(requested==='en'||requested==='zh')locale=requested==='en'?'en-US':'zh-CN';if(!['zh-CN','en-US'].includes(locale))locale='zh-CN';
const textState=new WeakMap(),attributeState=new WeakMap();let titleState;
function translateValue(s){
 if(!/[\u4e00-\u9fff]/.test(s))return s;
 const direct=dictionary.get(s.trim());if(direct)return s.replace(s.trim(),direct);
 if(/\d/.test(s))for(const item of numericTemplates){const m=s.trim().match(item.pattern);if(m){let n=0;return s.replace(s.trim(),item.en.replace(numberPattern,()=>m[++n]))}}
 let result=translateBase(s);
 for(const prefix of ['本题回答不正确。','本题回答正确。','判断不正确。','判断正确。','回答不正确。','理解正确。','答案正确。','回答正确。','不正确。','正确。','核对常见误区：','本节理解检查：','阶段理解检查：','同类练习：'])if(result.includes(prefix))result=result.split(prefix).join(dictionary.get(prefix)||prefix);
 for(let pass=0;pass<2;pass++){
  const exact=dictionary.get(result.trim());if(exact)return result.replace(result.trim(),exact);
  for(const [zh,en] of phrases)if(result.includes(zh))result=result.split(zh).join(en);
 }
 for(const prefix of ['本题回答不正确。','本题回答正确。','判断不正确。','判断正确。','回答不正确。','理解正确。','答案正确。','回答正确。','不正确。','正确。','核对常见误区：','本节理解检查：','阶段理解检查：','同类练习：'])if(result.includes(prefix))result=result.split(prefix).join(dictionary.get(prefix)||prefix);
 return result;
}
function translateBase(s){
 const trim=s.trim();if(dictionary.has(trim))return s.replace(trim,dictionary.get(trim));
 const decorated=trim.match(/^([\d.]+\s+|[←↗▶️📖⌨️⭐✅]+\s*)(.*?)(\s*[↗→✓]*)$/u);if(decorated&&dictionary.has(decorated[2]))return s.replace(trim,decorated[1]+dictionary.get(decorated[2])+decorated[3]);
 const patterns=[
 [/^答案：(.*)$/,(_,text)=>'Answer: '+translate(text)],

 [/^在这份教学合成数据的一周内，(周[一二三四五六日])到馆人次最多（(\d+)），(周[一二三四五六日])最少（(\d+)）。周末日均为 ([\d.]+) 人次，工作日日均为 ([\d.]+) 人次。这里比较的是日均值，避免把2天与5天的总量直接比较。单周样例不能证明长期规律，也不能说明变化原因。$/,(_,high,h,low,l,we,wd)=>`In this synthetic week, ${translate(high)} has the most visits (${h}) and ${translate(low)} the fewest (${l}). Weekend daily mean: ${we}; weekday mean: ${wd}. Compare daily averages rather than 2-day and 5-day totals. One week establishes neither long-term patterns nor causes.`],
 [/^(周[一二三四五六日])：上午 (\d+) \+ 下午 (\d+) = 全天 (\d+) 人次。$/,(_,day,am,pm,n)=>`${translate(day)}: ${am} morning + ${pm} afternoon = ${n} daily visits.`],
 [/^(.*?)(未标记阅读|已阅读|需要复习)(尚未检查|检查通过|需要复习)$/,(_,title,read,check)=>`${translate(title)} · ${translate(read)} · ${translate(check)}`],

 [/^(\d+)\s*节$/,(_,n)=>`${n} sections`],
 [/^已读\s*(\d+)\/(\d+)\s*·\s*检查\s*(\d+)\/(\d+)$/,(_,a,b,c,d)=>`Read ${a}/${b} · Checks ${c}/${d}`],
 [/^已阅读\s*(\d+)\s*\/\s*(\d+)\s*个小节$/,(_,n,t)=>`Read ${n} / ${t} sections`],
 [/^第\s*(\d+)\s*章\s*[·：:]?\s*(.*)$/,(_,n,t)=>`Chapter ${n}${t?' · '+translate(t):''}`],
 [/^(\d+)\s*个小节$/,(_,n)=>`${n} sections`],
 [/^共\s*(\d+)\s*章\s*\/\s*(\d+)\s*个小节$/,(_,n,t)=>`${n} chapters / ${t} sections`],
 [/^第\s*(\d+)\s*章\s*·\s*(\d+)\s*个小节$/,(_,n,t)=>`Chapter ${n} · ${t} sections`],
 [/^查看(\d+)个小节( ↗)?$/,(_,n)=>`View ${n} sections`],
 [/^学习目标[：:]\s*(.*)$/,(_,t)=>'Learning objectives: '+t.split(/[；;]/).map(x=>translate(x.trim().replace(/。$/,''))).join('; ')],
 [/^成果[：:]\s*(.*)$/,(_,t)=>'Outcome: '+translate(t)],
 [/^课程\s*\/\s*(.*)$/,(_,t)=>'Course / '+translate(t)],
 [/^尚待完成[：:]\s*(.*)$/,(_,t)=>'Pending: '+translate(t)],
 [/^上次[：:]\s*(.*)$/,(_,t)=>'Last: '+translate(t)],
 [/^上次阅读[：:]\s*(.*)$/,(_,t)=>'Last read: '+translate(t)],
 [/^当前任务[：:]\s*(.*)$/,(_,t)=>'Current task: '+translate(t)],
 [/^本节理解检查[：:]\s*(.*)$/,(_,t)=>'Understanding check: '+translate(t)],
 [/^章末成果任务\s*·\s*第(\d+)章$/,(_,n)=>`Chapter ${n} task`],
 [/^同类练习[：:]\s*(.*)$/,(_,t)=>'Related practice: '+translate(t)],
 [/^复习路径[：:]\s*原文 → 演示 → 同类练习$/,()=> 'Review path: Explanation → Demo → Practice']
 ];for(const [pattern,format] of patterns)if(pattern.test(trim))return s.replace(trim,trim.replace(pattern,format));let result=s;for(const [zh,en] of phrases)if(result.includes(zh))result=result.split(zh).join(en);return result;
}
function native(){
 document.documentElement.lang=locale==='en-US'?'en':'zh-CN';
 document.querySelectorAll('[data-lang]').forEach(el=>{el.hidden=(el.dataset.lang==='en-US')!==(locale==='en-US')});
 document.querySelectorAll('[data-i18n]').forEach(el=>{if(el.classList.contains('demo-mount'))return;const key=el.dataset.i18n,value=I18N[locale]?.[key];if(value&&el.textContent!==value)el.textContent=value;});
 document.querySelectorAll('[data-i18n-href="lecture"]').forEach(el=>{const h=el.getAttribute('href');if(h)el.setAttribute('href',h.replace(/lecture(?:-en)?\.(md|html)(?=$|[?#])/,(_,ext)=>'lecture'+(locale==='en-US'?'-en':'')+'.'+ext))});
}
function sync(){
 observer.disconnect();
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;
 while(node=walker.nextNode()){
  if(node.parentElement.closest('script,style,pre,code,textarea,input,[contenteditable],.lang-switch,[data-lang],[data-i18n]:not(.demo-mount),.user-text'))continue;
  const now=node.nodeValue;let state=textState.get(node);
  if(!state||now!==state.zh&&now!==state.en){state={zh:now,en:translate(now)};textState.set(node,state)}
  const next=locale==='en-US'?state.en:state.zh;if(now!==next)node.nodeValue=next;
 }
 document.querySelectorAll('[placeholder],[aria-label],[title]').forEach(el=>{
  if(el.closest('.lang-switch'))return;
  let states=attributeState.get(el);if(!states){states={};attributeState.set(el,states)}
  for(const attr of ['placeholder','aria-label','title']){if(!el.hasAttribute(attr))continue;const now=el.getAttribute(attr);let state=states[attr];if(!state||now!==state.zh&&now!==state.en)state=states[attr]={zh:now,en:translate(now)};const next=locale==='en-US'?state.en:state.zh;if(now!==next)el.setAttribute(attr,next)}
 });
 document.querySelectorAll('.lang-switch button').forEach(btn=>{const on=btn.dataset.langBtn===locale;btn.classList.toggle('active',on);btn.setAttribute('aria-pressed',String(on))});
 if(!titleState||document.title!==titleState.zh&&document.title!==titleState.en)titleState={zh:document.title,en:translate(document.title.split(' · ')[0])+' · Visualization'};document.title=locale==='en-US'?titleState.en:titleState.zh;
 document.querySelectorAll('.visual-gallery-grid img').forEach(img=>{const src=img.getAttribute('src');if(!/hero-(hierarchy|distribution|time)(-en)?\.svg/.test(src))return;const next=src.replace(/(-en)?\.svg/,locale==='en-US'?'-en.svg':'.svg');if(src!==next)img.setAttribute('src',next)});
 observer.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['placeholder','aria-label','title']});
}
let queued=false;const observer=new MutationObserver(()=>{if(queued)return;queued=true;queueMicrotask(()=>{queued=false;sync()})});
function setLocale(next){locale=next==='en'||next==='en-US'?'en-US':'zh-CN';try{localStorage.setItem('wbl-locale',locale)}catch{}native();sync();document.dispatchEvent(new CustomEvent('wbl:localechange',{detail:{locale}}));try{const u=new URL(location.href);u.searchParams.set('lang',locale==='en-US'?'en':'zh');history.replaceState(null,'',u.href)}catch{}}
const group=document.createElement('div');group.className='lang-switch';group.setAttribute('role','group');group.setAttribute('aria-label','语言 / Language');group.innerHTML='<button type="button" data-lang-btn="zh-CN" lang="zh-CN">中文</button><button type="button" data-lang-btn="en-US" lang="en">EN</button>';
group.addEventListener('click',ev=>{const b=ev.target.closest('[data-lang-btn]');if(b)setLocale(b.dataset.langBtn)});
(document.querySelector('.topbar,.course-topbar')||document.body).append(group);
// Carry the selected language across file and HTTP pages without altering fragment routes.
document.addEventListener('click',ev=>{const a=ev.target.closest('a[href]');if(!a)return;const raw=a.getAttribute('href');if(!raw||raw.startsWith('#')||a.hasAttribute('download'))return;try{const u=new URL(a.href);if((u.protocol==='file:'||u.origin===location.origin)&&/\.html$|\/$/.test(u.pathname)){u.searchParams.set('lang',locale==='en-US'?'en':'zh');a.href=u.href}}catch{}},true);
window.__i18n={translate,setLocale,getLocale:()=>locale,t:key=>I18N[locale]?.[key]||key,apply:()=>{native();sync()}};
window.addEventListener('storage',ev=>{if(ev.key==='wbl-locale'&&['zh-CN','en-US'].includes(ev.newValue))setLocale(ev.newValue)});
native();sync();document.dispatchEvent(new CustomEvent('wbl:localechange',{detail:{locale}}));
})();
