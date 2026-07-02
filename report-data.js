// Auto-generated weekly report data for jingyang-rico/ai-salon.
// Updated every Friday by a scheduled Claude agent. Do not edit by hand —
// see README.md in this branch for the schema and how entries are produced.
//
// lastReportDate: the `date` of issues[0] (the most recently published issue).
// The weekly job uses it as the start of the next coverage window.
window.AI_SALON = {
  "updatedAt": "2026-06-12",
  "lastReportDate": "2026-06-12",
  "issues": [
    {
      "date": "2026-06-12",
      "coverage": { "from": "2026-05-29", "to": "2026-06-12" },
      "headline": "Claude Fable 5",
      "intro": "本期聚焦工具更新与业界新闻 / 新工具（覆盖区间 5/29 → 6/12）；\"AI 项目进展\"与\"开放讨论\"本期从略。头条：Claude Fable 5（6/9 发布，Anthropic 首个公开的 Mythos-class 旗舰）。",
      "note": "📈 预告：双周会接下来会从\"分享新闻进展\"逐步升级玩法——转向长程任务 / 主动式 agent 等更复杂的实战用法，详见文末「写在最后」。",
      "toolVersions": {
        "asOf": "6/11",
        "rows": [
          { "tool": "Claude Code (Anthropic)", "version": "v2.1.175", "update": "claude update" },
          { "tool": "Codex (OpenAI)", "version": "v0.139.0", "update": "npm update -g @openai/codex" },
          { "tool": "OpenClaw", "version": "以 openclaw update 为准", "update": "openclaw update" }
        ]
      },
      "toolUpdates": [
        {
          "tool": "Claude Code",
          "versionRange": "v2.1.153 → v2.1.175",
          "items": [
            { "feature": "接入 Claude Fable 5（v2.1.170）", "detail": "新一代 Mythos-class 旗舰直接进 /model；详见下方\"新产品速览\"头条" },
            { "feature": "递归 sub-agents（v2.1.172）", "detail": "subagent 可再派生 subagent，最多 5 层；配套 plugin 搜索栏、读取 AWS region 配置" },
            { "feature": "Fallback model 配置（v2.1.166）", "detail": "主模型不可用 / 被限流时，按优先级自动重试备用模型，长跑任务更稳" },
            { "feature": "Post-session 生命周期 hooks（v2.1.169）", "detail": "self-hosted runner 在 session 结束后触发 hook；新增 safe mode flag" },
            { "feature": "Model allowlist 强制（v2.1.175）", "detail": "managed setting 可对默认模型选择强制 allowlist，团队侧治理更可控" },
            { "feature": "Model picker / 用量归因（v2.1.174）", "detail": "model picker 体验改进；VSCode 内显示 usage attribution" },
            { "feature": "并行工具执行增强（v2.1.161）", "detail": "parallel tool execution 增强；metric 可按 resource attribute 打标签" }
          ]
        },
        {
          "tool": "Codex CLI",
          "versionRange": "v0.134.0 → v0.139.0",
          "items": [
            { "feature": "Code mode 直连 web search", "detail": "code mode 可直接（含嵌套 JS 工具调用）发起独立 web search，返回纯文本结果" },
            { "feature": "Schema 保真（oneOf / allOf）", "detail": "tool / connector input schema 保留 oneOf、allOf；大 schema 压缩时保留更多浅层结构，兼容更复杂的 MCP 工具" },
            { "feature": "/app 交接到 Codex Desktop（v0.138）", "detail": "把当前 CLI thread 一键交接到 macOS / Windows 的 Codex Desktop；本地图片附件 / 生成图暴露保存路径，便于后续引用" },
            { "feature": "Plugin marketplace 缓存优先", "detail": "plugin 列表先返回缓存目录、再后台刷新，响应更快" },
            { "feature": "codex doctor 增强", "detail": "本地报告补充 editor / pager 环境信息（JSON 输出对原始值脱敏）" }
          ]
        }
      ],
      "industryNews": {
        "headline": {
          "title": "🔥 Claude Fable 5 / Mythos 5（6/9 发布）— 本期重点",
          "summary": "一句话：Anthropic 把原本只给受信合作伙伴的 Mythos 能力做成公开旗舰 Fable 5，定位在 Opus 4.8 之上一档，模型 ID claude-fable-5。",
          "points": [
            "能力创纪录 — SWE-bench Verified 95.0%、SWE-bench Pro 80.3%（GPT-5.5 为 58.6%）、GDPval-AA 1932 Elo、FrontierCode #1；几乎所有公开 benchmark SOTA。",
            "分级 + 按域安全回退 — Fable 5 是 safeguards-on 公开版；触及网络安全 / 生物 / 化学 / 模型蒸馏的请求自动回退到 Opus 4.8。Mythos 5 是 safeguards-lifted 受限版，仅向受信基础设施与安全研究者有限开放。",
            "定价 — $10 / $50 per M（input / output），约为 Opus 4.8 的 2×；付费 Claude 订阅用户 6/9–6/22 免费试用。",
            "Claude Code 已接入 — v2.1.170 起 /model 可直接选 Fable 5。",
            "背景 — TechCrunch 指出，这是在 Anthropic 公开警告\"AI 正变得过于危险\"几天后发布的。"
          ]
        },
        "others": [
          { "product": "MAI-Code-1-Flash", "org": "Microsoft", "date": "6/2", "desc": "Build 大会发布的首个自研代码生成模型，从自然语言描述直接产出应用 / 网站代码，意在降低对 OpenAI 的依赖与开发者成本" },
          { "product": "/app + Codex Desktop 互通", "org": "OpenAI", "date": "6/8", "desc": "CLI thread 一键交接桌面端，CLI ↔ Desktop ↔ Web 入口打通" }
        ],
        "trending": [
          { "name": "OpenClaw", "url": "https://github.com/trending", "desc": "已破 210k+ stars，GitHub 史上增长最快的开源 assistant：浏览网页 / 填表 / 跑 shell / 写并执行代码，还能自写新 skill 扩展自身能力" },
          { "name": "OpenCode", "url": "https://opencode.ai/changelog", "desc": "破 172k stars，成为最受欢迎的开源 coding agent 之一" },
          { "name": "可视化 agent 编排（Langflow / Dify / n8n）", "url": "", "desc": "拖拽式 pipeline 让领域专家也能搭 agent，成为新趋势" }
        ],
        "trends": [
          "模型分级 + 按域安全回退成为产品机制 — Fable 5 把\"危险域请求回退 Opus 4.8\"做进了产品形态，而非只压在模型权重里。",
          "agent harness 向\"自我编排 + 容错\"演进 — Claude 递归 subagent（5 层）、fallback model 容错重试，多 agent 协作越来越像分布式系统。",
          "CLI / IDE / Desktop / Web 入口互通 — Codex /app 交接桌面端是代表，agent 跨端接续同一会话。"
        ]
      },
      "recommendations": [
        { "name": "Claude Code 递归 subagent", "desc": "复杂任务让 subagent 再拆 subagent（最多 5 层），适合大规模重构 / 调研" },
        { "name": "Codex code mode + web search", "desc": "code mode 里直接联网查资料，省去手动贴文档" },
        { "name": "Claude fallback model", "desc": "配置主 / 备模型，长跑任务遇限流或不可用自动切换" }
      ],
      "closingNotes": {
        "intro": "过去几期双周会以分享工具更新 + 业界新闻为主（也就是本期上面这些内容）。接下来我们想往前走一步：从\"看业界做了什么\"逐步升级到\"我们自己怎么把这些更复杂的用法用起来\"——重心从新闻进展慢慢转向实战玩法。\n\nAI Coding 的工作方式正在从①对话式 coding 往②长程任务、③主动式 agent 演进，三者不是替代而是递进、互为地基。",
        "table": {
          "headers": ["工作方式", "一句话", "关键前置能力"],
          "rows": [
            ["① 对话式 Coding（现状）", "程序员每步发提示词，人在环\"驾驶\"", "提示词 + 上下文工程"],
            ["② 长程任务", "定义一次目标，AI 小时级自主推进，人只验收结果", "知识库（AI 自主获取上下文）+ 自动化验证（AI 自证产出）"],
            ["③ 主动式 Agent", "事件 / 定时器触发，agent 主动干活，人只看报告", "触发机制 + 长程任务能力 + 结果可信可追溯"]
          ]
        },
        "outro": "三个关键词——知识库（CLAUDE.md / skill / MCP，把隐性知识沉淀成 AI 能检索的形态）、长程任务（/goal / dynamic workflow + 自动化测试闭环）、主动式 agent（OpenClaw oncall、CI 里的 review / 打包 agent、scheduled routine）——会是后续几期的主题。欢迎大家带着自己的实践来分享。"
      },
      "references": [
        { "title": "Claude Fable 5 & Mythos 5 发布", "url": "https://www.anthropic.com/news/claude-fable-5-mythos-5" },
        { "title": "TechCrunch 报道", "url": "https://techcrunch.com/2026/06/09/anthropic-released-claude-fable-5-its-most-powerful-model-publicly-days-after-warning-ai-is-getting-too-dangerous/" },
        { "title": "Claude Code Changelog", "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md" },
        { "title": "Codex Changelog", "url": "https://developers.openai.com/codex/changelog" },
        { "title": "Microsoft MAI-Code-1-Flash（CNBC）", "url": "https://www.cnbc.com/2026/06/02/microsoft-unveils-new-ai-models-lessen-reliance-on-openai-lower-costs.html" }
      ]
    }
  ]
};
