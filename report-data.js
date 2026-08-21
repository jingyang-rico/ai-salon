// Auto-generated weekly report data for jingyang-rico/ai-salon.
// Updated every Friday by a scheduled Claude agent. Do not edit by hand —
// see README.md in this branch for the schema and how entries are produced.
//
// lastReportDate: the `date` of issues[0] (the most recently published issue).
// The weekly job uses it as the start of the next coverage window.
window.AI_SALON = {
  "updatedAt": "2026-08-21",
  "lastReportDate": "2026-08-21",
  "issues": [
    {
      "date": "2026-08-21",
      "coverage": { "from": "2026-08-14", "to": "2026-08-21" },
      "headline": "Z.ai GLM-5.3 上线即用自身能力揪出 Cursor 真实漏洞，CyberGym 反超 Mythos 5 与 GPT-5.6 Sol",
      "intro": "本期聚焦工具更新与业界新闻（覆盖区间 8/14 → 8/21）。头条：Z.ai 8/14 发布的 GLM-5.3 上线不久即被安全研究员用于发现 Cursor 代码编辑器中一个真实存在的严重漏洞，该模型在 CyberGym 漏洞发现基准上得分 84.5%，反超 Mythos 5（83.8%）与 GPT-5.6 Sol（83.6%），ExploitBench 更是从上代 24.4% 翻倍至 54.4%——安全能力再次成为本周模型竞赛的核心叙事。",
      "note": "⚠️ Claude Desktop app v1.34493.0（8/20）修复 Touch ID 登录崩溃问题的同时，暂时下线了 Touch ID passkey 登录功能——依赖该方式登录 macOS 客户端的用户请留意改用密码或浏览器登录。",
      "toolVersions": {
        "asOf": "8/21",
        "rows": [
          { "tool": "Claude Code (Anthropic)", "version": "v2.1.238", "update": "claude update" },
          { "tool": "Codex (OpenAI)", "version": "v0.149.0", "update": "npm update -g @openai/codex" },
          { "tool": "OpenClaw", "version": "2026.6.34（扩展稳定分支，本周未变）", "update": "openclaw update" }
        ]
      },
      "toolUpdates": [
        {
          "tool": "Claude Code",
          "versionRange": "v2.1.233 → v2.1.238",
          "items": [
            { "feature": "v2.1.233（8/14）", "detail": "新增 GitLab merge request 支持（--worktree 与 agents 视图）、opt-in 的 forward_user_identity apps gateway 设置、Linux 上 Bash 的 opt-in memory cgroup 支持；修复云端 session 在环境关闭时被误判为丢失、Notification hooks 未在权限弹窗时触发等问题" },
            { "feature": "v2.1.234（8/17）", "detail": "新增 CLAUDE_CODE_PROJECT_DIR_NAME 环境变量、footer/statusline 显示 GitLab MR 徽标；账号邮箱现仅用于身份识别；安全加固文件访问以防 NTLM 凭据泄露；修复大量 Remote Control 与队列消息相关问题" },
            { "feature": "v2.1.235（8/18）", "detail": "新增可选 spellcheck 设置（复用系统拼写检查）；修复权限弹窗中 Shift+Tab 误触发关闭、多行 prompt 高亮字符错位等问题；改进长时间云端 session 的内存/CPU 占用" },
            { "feature": "v2.1.236（8/19）", "detail": "新增 ANTHROPIC_DEFAULT_MODEL 环境变量、跨 session SendMessage 的 notify_when_idle 通知；修复全屏渲染器永久性失败、/model 选择器高度溢出终端等问题" },
            { "feature": "v2.1.237（8/20）", "detail": "新增内置 \"Concise\" 输出风格（弱化过程说明、聚焦结果）；修复 LLM gateway 与自定义 base URL session 下的 prompt caching 失效问题" },
            { "feature": "v2.1.238（8/20）", "detail": "新增 keybindingFlavor 设置（readline 风格 Ctrl+W 行为）、插件市场 headersHelper 用于生成 HTTP 请求头、claude self-hosted-runner 的优雅关闭参数；修复长 session 内存增长、自定义输出风格中途漂移回默认值等问题" }
          ]
        },
        {
          "tool": "Codex CLI",
          "versionRange": "v0.147.0 → v0.149.0",
          "items": [
            { "feature": "v0.149.0（8/20，转正式版）", "detail": "新增交互式 codex agents 面板，支持搜索、启动、打开、重命名、停止任务等 session 管理操作；此前 0.148.0-alpha 系列的多轮迭代（8/10-8/19）已在此版本中转正" }
          ]
        },
        {
          "tool": "OpenClaw",
          "versionRange": "扩展稳定分支本周无新版本（仍为 2026.6.34）；beta 分支新发 2026.8.1-beta.2（8/15）",
          "items": [
            { "feature": "2026.8.1-beta.2（8/15，beta 分支）", "detail": "新增 secret egress host binding（将共享密钥绑定到具体 HTTPS 目标主机，CLI/Gateway RPC/Control UI 均生效）、GPT-5.6 Ultra（Sol/Terra/Luna）模型与运行时原子切换支持；新增 openclaw backup sqlite 命令族用于全局/单 agent 数据库快照的创建、校验与恢复；新增 macOS app profiles 支持多实例状态隔离；插件安装新增来源可信度提示，非受信来源需显式 --force 确认" }
          ]
        }
      ],
      "industryNews": {
        "headline": {
          "title": "🔥 GLM-5.3 上线即发现 Cursor 真实漏洞，CyberGym 反超 Mythos 5 与 GPT-5.6 Sol（8/14）— 本期重点",
          "summary": "Z.ai 8/14 发布 GLM-5.3，主打长时程编码与网络安全能力；发布不久，安全研究员 Joshua Saxe 即用其在 Cursor 代码编辑器中发现一个此前未知的严重漏洞并已私下披露，Cursor 团队正与 Z.ai 协作修复。Z.ai 表示该模型基座与 GLM-5.2 完全相同，全部提升均来自大规模安全场景强化学习后训练。",
          "points": [
            "跑分表现 — CyberGym（漏洞发现基准）得分 84.5%，反超 Mythos 5（83.8%）与 GPT-5.6 Sol（83.6%）；ExploitBench（利用链推理与执行）从上代 24.4% 翻倍至 54.4%。",
            "定价与可用性 — Coding Plan 月付 $18/$80/$168（Lite/Pro/Max 档），年付约合每月 $12.6/$56/$117.6；API 价格暂维持 GLM-5.2 水平（$1.4/$4.4 每百万 token），通用 API 尚在分阶段灰度中。",
            "产品设计变化 — 新增 low/high/max 三档思考强度（默认 max），不再支持完全关闭思考模式；模型权重计划在发布两周后、经安全加固评估后开源。",
            "呼应上期趋势 — 继上周 OpenAI GPT-5.6-Cyber 用分级访问管控攻防能力之后，本周 GLM-5.3 展示了同一类安全定向能力在开放竞争格局下扩散得有多快，也让\"模型能自动挖真实漏洞\"从实验室成果变成了可复现的公开事件。"
          ]
        },
        "others": [
          { "product": "Qwen3.8-27B", "org": "阿里巴巴 Qwen", "date": "8/14", "desc": "开源权重（Apache 2.0）的稠密原生多模态模型，原生 262K 上下文可扩展至 100 万 token，可在消费级硬件甚至笔记本（配合量化）本地运行，编码与长时程 agent 任务能力对齐参数量为其十倍的 Qwen3.7-plus；发布两天内即登上 Hugging Face 最受欢迎模型榜前五" },
          { "product": "OpenAI Astra 安全评估持续升级", "org": "OpenAI", "date": "8/18", "desc": "继 8/7 首次披露 Astra 内部版本网络安全能力\"无法排除\"触及 Preparedness Framework \"Critical\"门槛后，8/18 Axios 报道称 OpenAI 已围绕该风险开展更大范围的安全体系调整（强化沙盒、监控与训练/评测阶段的访问控制），对外发布时间仍未确定" },
          { "product": "Claude 服务约 36 分钟中断", "org": "Anthropic", "date": "8/16", "desc": "身份认证故障扩散至 claude.ai、Claude Console、Claude API、Claude Code、Claude Cowork 五大产品线，是 8 月以来 8 天内第 10 次相关事故；本周 Claude Code 订阅者的 50% 周用量临时提升已延长至 8/19" }
        ],
        "trending": [
          { "name": "mattpocock/skills", "url": "https://github.com/mattpocock/skills", "desc": "Matt Pocock 个人 .agents 目录下沉淀的 Claude Code 等 agent 技能集合（\"Skills for Real Engineers\"），本周新增 2000+ star，持续位居 GitHub Trending 前列" },
          { "name": "volcengine/OpenViking", "url": "https://github.com/volcengine/OpenViking", "desc": "字节跳动火山引擎开源的\"自我演化型\" Context Database，统一 AI agent 的记忆、知识 RAG 与技能管理，本周新增约 950 star" }
        ],
        "trends": [
          "\"安全能力\"正取代传统跑分成为模型发布的头条叙事 — 本周 GLM-5.3 用真实发现的 Cursor 漏洞证明网络安全能力已可被公开复现，叠加 OpenAI Astra 因触及 Critical 门槛而延迟发布，\"模型有多会挖洞/写利用链\"正成为和推理能力同等重要的对外卖点。",
          "开源权重模型持续挤压\"本地可跑\"的能力上限 — Qwen3.8-27B 用十分之一参数量对齐更大 MoE 模型表现，且可在笔记本本地运行，延续了本月开源阵营贴身追赶闭源前沿的趋势。",
          "Anthropic 基础设施稳定性持续承压 — 8 天内第 10 次相关事故，与产品用户规模、用量提升等增长叙事同步发生，可靠性正成为除模型能力外又一个值得关注的维度。",
          "AI 编码工具进入近乎每日迭代节奏 — 本周 Claude Code（6 个版本）、Codex（转正式版）、OpenClaw（beta 分支）均有多次更新，工具链竞争的比拼维度已从\"有没有\"转向\"更新有多快、多稳\"。"
        ]
      },
      "recommendations": [
        { "name": "升级 Claude Code 到 v2.1.238", "desc": "获取 ANTHROPIC_DEFAULT_MODEL 环境变量、跨 session 空闲通知（notify_when_idle）、内置 Concise 输出风格等新能力，执行 claude update 即可" },
        { "name": "使用 Codex CLI 的团队可尝鲜 codex agents 面板", "desc": "v0.149.0 转正式版新增交互式任务管理面板，适合同时管理多个后台任务的场景" },
        { "name": "macOS 上依赖 Touch ID 登录 Claude Desktop 的用户请留意", "desc": "v1.34493.0 修复登录崩溃的同时暂时下线了 Touch ID passkey 登录，近期请改用密码或浏览器方式登录" }
      ],
      "references": [
        { "title": "VentureBeat：GLM-5.3 is here with advanced cyber capabilities — and reportedly already found a 'serious vulnerability' in Cursor", "url": "https://venturebeat.com/technology/glm-5-3-is-here-with-advanced-cyber-capabilities-and-reportedly-already-found-a-serious-vulnerability-in-cursor" },
        { "title": "SiliconANGLE：Z.ai debuts GLM-5.3 with long-horizon coding, cybersecurity upgrades", "url": "https://siliconangle.com/2026/08/14/z-ai-debuts-glm-5-3-long-horizon-coding-cybersecurity-upgrades/" },
        { "title": "MarkTechPost：Z.ai Ships GLM-5.3 Without Retraining the Base Model", "url": "https://www.marktechpost.com/2026/08/14/z-ai-ships-glm-5-3-without-retraining-the-base-model-better-at-complex-coding-and-long-horizon-tasks/" },
        { "title": "VentureBeat：GLM-5.3 hits the API at $1.4/$4.4 per million tokens", "url": "https://venturebeat.com/technology/glm-5-3-hits-the-api-at-1-4-4-4-per-million-tokens" },
        { "title": "Alibaba Cloud Community：Alibaba Unveils Qwen3.8-27B and Releases Weights of Qwen3.8 Flagship Model", "url": "https://www.alibabacloud.com/blog/alibaba-unveils-qwen3-8-27b-and-releases-weights-of-qwen3-8-flagship-model_603463" },
        { "title": "Axios：OpenAI Astra may have hit critical cyber threshold, prompting safety overhaul", "url": "https://www.axios.com/2026/08/18/openai-pause-astra-preparedness-framework" },
        { "title": "OpenAI：Responding to the next frontier of critical cyber capabilities", "url": "https://openai.com/index/responding-next-frontier-critical-cyber-capabilities/" },
        { "title": "explainx.ai：Claude Outage Aug 16 2026 — What Broke, How Long, Fix", "url": "https://explainx.ai/blog/claude-outage-authentication-august-16-2026" },
        { "title": "Claude Code Changelog", "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md" },
        { "title": "Claude Code Releases", "url": "https://github.com/anthropics/claude-code/releases" },
        { "title": "Codex Changelog", "url": "https://developers.openai.com/codex/changelog" },
        { "title": "openai/codex Releases", "url": "https://github.com/openai/codex/releases" },
        { "title": "OpenClaw Releases", "url": "https://github.com/openclaw/openclaw/releases" },
        { "title": "Claude Desktop app release notes", "url": "https://support.claude.com/en/articles/12138966-release-notes" },
        { "title": "GitHub Trending", "url": "https://github.com/trending" }
      ]
    },
    {
      "date": "2026-08-14",
      "coverage": { "from": "2026-08-07", "to": "2026-08-14" },
      "headline": "Google Gemini App 月活突破 10 亿，Pichai 称是史上增速最快产品",
      "intro": "本期聚焦工具更新与业界新闻（覆盖区间 8/7 → 8/14）。头条：Google Gemini App 8/11 宣布月活跃用户（MAU）突破 10 亿——距 Q2 财报披露的 9.5 亿仅隔不到一个月，是 Google 史上增速最快的产品，也追近 6 月已率先破 10 亿的 ChatGPT。",
      "note": "⚠️ Claude Code v2.1.232（8/13）再次修复 PowerShell 权限绕过、Git Bash 符号链接漏洞、嵌套仓库信任问题等安全缺陷——是连续第三周出现权限/沙盒绕过修复，安全敏感环境建议保持紧跟最新版本。",
      "toolVersions": {
        "asOf": "8/14",
        "rows": [
          { "tool": "Claude Code (Anthropic)", "version": "v2.1.232", "update": "claude update" },
          { "tool": "Codex (OpenAI)", "version": "v0.147.0", "update": "npm update -g @openai/codex" },
          { "tool": "OpenClaw", "version": "2026.6.34", "update": "openclaw update" }
        ]
      },
      "toolUpdates": [
        {
          "tool": "Claude Code",
          "versionRange": "v2.1.224 → v2.1.232",
          "items": [
            { "feature": "v2.1.225（8/8）", "detail": "新增 gateway spend-limit 支出上限支持、claude agents 新增工作区信任提示；修复无头 session 中长期 OAuth token 被替换导致的瞬时 401 错误" },
            { "feature": "v2.1.227（8/10）", "detail": "恢复此前失效的按订阅档位评估 feature flag 的逻辑、修复 claude-code-action 下 Bash 命令失败的问题；斜杠命令菜单新增加粗匹配字符提示" },
            { "feature": "v2.1.228（8/11）", "detail": "修复交互式 session 重绘失败、Windows 上 Git/Git Bash 探测失败、跨 session 消息初始化问题；同时修复 Remote Control 恢复问题与影响项目 memory 文件夹的 session 清理缺陷" },
            { "feature": "v2.1.229（8/12）", "detail": "新增 Remote Control session 恢复文档、服务端下发的 hooks、长时间 thinking 期间的 SSE keepalive；plugin marketplace 新增命令来源、改进 ListAgents 输出；修复一批崩溃问题" },
            { "feature": "v2.1.231 / v2.1.232（8/13）", "detail": "v2.1.231 修复预注册 OAuth client 的 MCP server 因 redirect URI 不匹配导致的登录失败；v2.1.232 默认开启 subagent forking（完整继承对话上下文）、新增基于 SendMessage 的跨 session @ 提及消息、plugin marketplace 支持 GitLab，同时修复 PowerShell 权限绕过、Git Bash 符号链接漏洞、嵌套仓库信任问题等安全缺陷，并改进全屏流式响应速度与 MCP 连接超时处理" }
          ]
        },
        {
          "tool": "Codex CLI",
          "versionRange": "v0.147.0（稳定版本周未变，0.148.0-alpha.6 → alpha.15 持续迭代中）",
          "items": [
            { "feature": "0.148.0-alpha 系列（8/10-8/14）", "detail": "GitHub 上已发布到 rust-v0.148.0-alpha.15，尚未附带正式 changelog 说明；npm 稳定 tag 仍固定在 v0.147.0，具体新特性待转正式版后再确认" }
          ]
        },
        {
          "tool": "OpenClaw",
          "versionRange": "beta 分支本周无新版本（仍为 2026.7.2-beta.7）；扩展稳定分支新发 2026.6.34（8/8）",
          "items": [
            { "feature": "2026.6.34（8/8，扩展稳定分支）", "detail": "安全加固：browser 路由沙盒化、可信 DNS 目标、自定义 browser origin 与 loopback provider 端点收紧；可靠性提升：session 写入保留、provider fallback、stream 进度处理与 stdio 失败可恢复；Discord gateway 处理增强（待处理 channel 任务可恢复、幂等确认、突发流量限流）；诊断安全（命令/状态面板仅限所有者操作、账号 URL 不再泄露凭据）；本地运行时改进（SQLite checkpoint、workspace 读取、gateway 进程信号、插件 HTTP 响应与依赖处理），共合并 25 个 PR" }
          ]
        }
      ],
      "industryNews": {
        "headline": {
          "title": "🔥 Google Gemini App 月活突破 10 亿，Pichai 称是史上增速最快产品（8/11）— 本期重点",
          "summary": "Google CEO Sundar Pichai 8/11 在 X 上宣布 Gemini App 月活跃用户正式突破 10 亿——距 Q2 财报披露的 9.5 亿仅隔不到一个月，是 Google 史上增速最快的产品，也是第 14 款突破 10 亿用户量级的 Google 产品，追近 6 月已率先破 10 亿的 ChatGPT。",
          "points": [
            "使用行为数据首次披露 — 63% 的用户通过语音与 Gemini 交互；五分之一的 Gemini Live 会话涉及摄像头或屏幕共享而非纯语音；App 每天生成超过 1.5 亿张图片。",
            "增速对比 ChatGPT — ChatGPT 已于 6 月率先突破 10 亿 MAU，Gemini 这次追赶把两家头部助手 App 的用户规模差距进一步收窄。",
            "同步透露下一步动作 — Google 同期宣布 Gemini Notebooks 支持完整复制（含全部素材与 artifact）另存为个人副本；新一代 Gemini 3.5 Flash 定位强化编程与自主 agent 任务能力。",
            "呼应上期 Pichai 对 Gemini 4 的预告 — 结合上期财报电话会透露的\"已进入预训练\"，本周的用户规模里程碑进一步凸显 Google 在保持分发优势的同时，仍需要 Gemini 4 才能在前沿模型竞赛中站稳脚跟。"
          ]
        },
        "others": [
          { "product": "Grok 4.6", "org": "SpaceXAI（原 xAI，已并入 SpaceX）", "date": "8/12", "desc": "距 Grok 4.5 发布仅 5 周；Artificial Analysis 智能指数 61 分，追平 GPT-5.6 Sol、距 Claude Fable 5（62 分）仅一步之差；DeepSWE（54→65.9）与 APEX-Agents（47.1→57.5）较 4.5 大幅提升；定价维持 $2/$6 per Mtok 不变（200K 长上下文档位翻倍至 $4/$12），已接入 Cursor、Grok Build、API、OpenRouter、Vercel、Cloudflare" },
          { "product": "DeepSeek-V4-Pro-0813 正式版 + API 大幅调价", "org": "DeepSeek", "date": "8/13", "desc": "1.6T 参数 MoE（约 490 亿激活参数）、100 万 token 上下文、最高 38.4 万 token 输出，主打 agent 能力（Terminal-Bench 2.1 87.9、DeepSWE 62.7）；同时宣布 8/17 起对 V4-Pro / V4-Flash 引入峰谷分时定价，部分档位较现价上涨最高约 1100%（如 V4-Flash 输出价从平价 $0.28/M 涨至峰时 $1.32/M），官方解释为算力紧张下\"更合理分配资源\"" },
          { "product": "GPT-5.6-Cyber + Daybreak 项目扩容为 Blue/Red 双层级", "org": "OpenAI", "date": "8/10", "desc": "首款专为攻防安全场景训练的模型，内部\"高级网络安全任务完成率\"评测达 95.0%（GPT-5.6 Sol 仅 1.5%）；已用其在 Chrome V8 引擎中发现两个此前未知漏洞（Google 已修复为 CVE-2026-15903）；仅通过需身份核验与用途审批的 Daybreak Red 层级开放，9/1 起 Blue/Red 两层级均强制启用硬件安全密钥" },
          { "product": "Claude Desktop app v1.28929.0", "org": "Anthropic", "date": "8/11", "desc": "macOS 新增标准全屏快捷键与「进入/退出全屏」菜单项；修复 macOS 内置终端控制其他 App 时误报 -1743 错误而非弹出 Automation 权限提示、部分 Linux 系统（尤其打包/容器化安装）启动缺失托盘图标且每次系统主题切换都复现的问题、macOS 登录反复提示\"Failed to login, it may have been cancelled\"（现改为在系统登录弹窗不可用时自动打开默认浏览器完成登录）" }
        ],
        "trending": [
          { "name": "PrimeIntellect-ai/prime-agent", "url": "https://github.com/PrimeIntellect-ai/prime-agent", "desc": "Prime Intellect 8/5 开源的\"自我改进型\"RLM（Recursive Language Model）coding agent，把 context 当变量、subagent 当函数调用，运行在持久化 IPython kernel 里；配合 Opus 5 在 ARC-AGI-3 上跑到 95.5%、超过官方给出的人类专家基线；本周新增 1.2 万+ star（现 1.56 万+），登上 GitHub Trending 周榜第一" }
        ],
        "trends": [
          "头部 AI 助手 App 的用户规模竞赛进入十亿俱乐部次轮较量 — Gemini App 用不到一个月从 9.5 亿冲到 10 亿，追近 6 月已破 10 亿的 ChatGPT，分发规模正成为和跑分同等重要的竞争维度。",
          "\"前沿平价\"继续扩容至第三家 — 继 Alibaba Qwen3.8-Max、Claude Opus 5 之后，本周 SpaceXAI Grok 4.6 智能指数追平 GPT-5.6 Sol、逼近 Claude Fable 5，价格维持不变，说明贴身追赶头部模型的厂商已经不止一家。",
          "中国大模型厂商开始为算力紧张\"涨价\"而非\"降价\" — 与本月早些时候 Qwen3.8-Max 打价格战的叙事相反，DeepSeek 这次因需求超出算力而对 V4 系列引入峰谷分时定价、部分档位涨幅超 10 倍，是今年少见的\"提价\"信号。",
          "安全定向模型与分级访问成为新产品形态 — OpenAI GPT-5.6-Cyber 用 Daybreak Blue/Red 双层级 + 强制硬件密钥的方式管控攻防能力模型的访问，呼应了近期多家厂商在\"能力越强、访问越严\"上的共同思路。"
        ]
      },
      "recommendations": [
        { "name": "留意 Claude Code v2.1.232 的安全修复", "desc": "本周再次修复 PowerShell 权限绕过、Git Bash 符号链接漏洞等问题，延迟升级的用户建议尽快执行 claude update" },
        { "name": "评估 Grok 4.6 作为长任务 agent 的备选", "desc": "定价不变、智能指数追平 GPT-5.6 Sol，在 Cursor / Grok Build / API 均已可用，适合作为多模型对比的场景之一" },
        { "name": "使用 DeepSeek V4 系列的团队提前规划分时调用", "desc": "8/17 起峰谷分时定价生效、部分价位涨幅显著，批量任务可考虑迁移到北京时间 09:00-12:00 / 14:00-18:00 峰时之外的谷时段执行以控制成本" }
      ],
      "references": [
        { "title": "Google 官方博客：Gemini app 突破 10 亿月活用户", "url": "https://blog.google/innovation-and-ai/products/gemini-app/one-billion-monthly-users/" },
        { "title": "TechCrunch：Google's Gemini app surges to one billion users", "url": "https://techcrunch.com/2026/08/11/googles-gemini-app-surges-to-one-billion-users/" },
        { "title": "9to5Google：Gemini app hits 1 billion monthly users, Google teases what's next", "url": "https://9to5google.com/2026/08/11/gemini-app-1-billion/" },
        { "title": "Forbes：Gemini Becomes Google's Fastest-Growing Product Ever After Hitting 1 Billion Monthly Users", "url": "https://www.forbes.com/sites/antoniopequenoiv/2026/08/11/gemini-becomes-googles-fastest-growing-product-ever-after-hitting-1-billion-monthly-users/" },
        { "title": "VentureBeat：SpaceXAI debuts Grok 4.6, overtaking Kimi K3's performance and matching GPT-5.6 Sol", "url": "https://venturebeat.com/technology/spacexai-debuts-grok-4-6-overtaking-kimi-k3s-performance-and-matching-gpt-5-6-sol-for-worlds-third-best-on-artificial-analysis" },
        { "title": "Unite.AI：SpaceXAI Launches Grok 4.6 for Long-Running Agents", "url": "https://www.unite.ai/spacexai-launches-grok-4-6-for-long-running-agents/" },
        { "title": "InfoWorld：DeepSeek raises some V4 prices by more than 10x as AI demand strains capacity", "url": "https://www.infoworld.com/article/4209439/deepseek-raises-some-v4-prices-by-more-than-10x-as-ai-demand-strains-capacity.html" },
        { "title": "Unite.AI：DeepSeek Ships V4 Pro as Its Flagship Model Leaves Preview", "url": "https://www.unite.ai/deepseek-ships-v4-pro-as-its-flagship-model-leaves-preview/" },
        { "title": "datanorth.ai：OpenAI launches GPT-5.6-Cyber via Daybreak Red", "url": "https://datanorth.ai/news/openai-launches-gpt-5-6-cyber" },
        { "title": "MarkTechPost：Prime Intellect Releases Prime Agent", "url": "https://www.marktechpost.com/2026/08/06/prime-intellect-releases-prime-agent/" },
        { "title": "Claude Code Changelog", "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md" },
        { "title": "Claude Code Releases", "url": "https://github.com/anthropics/claude-code/releases" },
        { "title": "Codex Changelog", "url": "https://developers.openai.com/codex/changelog" },
        { "title": "openai/codex Releases", "url": "https://github.com/openai/codex/releases" },
        { "title": "OpenClaw Releases", "url": "https://github.com/openclaw/openclaw/releases" },
        { "title": "Claude Desktop app release notes", "url": "https://support.claude.com/en/articles/12138966-release-notes" },
        { "title": "PrimeIntellect-ai/prime-agent（GitHub Trending）", "url": "https://github.com/PrimeIntellect-ai/prime-agent" }
      ]
    },
    {
      "date": "2026-08-07",
      "coverage": { "from": "2026-07-31", "to": "2026-08-07" },
      "headline": "Alibaba 发布 Qwen3.8-Max，2.4 万亿参数视觉跑分仅次于 Fable 5，价格约为 Opus 5 的三分之一",
      "intro": "本期聚焦工具更新与业界新闻（覆盖区间 7/31 → 8/7）。头条：Alibaba 8/3 发布 Qwen3.8-Max——2.4 万亿参数 MoE 模型（950 亿激活参数），Arena.AI 视觉榜全球排名第二（仅次于 Fable 5），价格约为 Claude Opus 5 的四分之一到三分之一，开放权重计划下周随更小尺寸的 Qwen3.8-27B 一并放出。",
      "note": "⚠️ Claude Code v2.1.221/222/223 三个版本连续修复了多个权限/沙盒绕过漏洞（zsh 正则条件绕过 Bash 权限检查、tab/不可见 Unicode 填充绕过权限提示、workflow 脚本用动态 import() 逃逸沙盒、worktree 隔离 session/subagent 对主 checkout 执行破坏性 git 操作等），安全敏感环境建议尽快升级到 v2.1.224。",
      "toolVersions": {
        "asOf": "8/7",
        "rows": [
          { "tool": "Claude Code (Anthropic)", "version": "v2.1.224", "update": "claude update" },
          { "tool": "Codex (OpenAI)", "version": "v0.147.0", "update": "npm update -g @openai/codex" },
          { "tool": "OpenClaw", "version": "2026.7.2-beta.7", "update": "openclaw update" }
        ]
      },
      "toolUpdates": [
        {
          "tool": "Claude Code",
          "versionRange": "v2.1.220 → v2.1.224",
          "items": [
            { "feature": "v2.1.221（8/4）", "detail": "新增 Focus view 快捷键 Ctrl+Alt+F（隐藏工具活动，只看逐轮摘要）、sandbox 凭据文件新增 mask 模式（Linux/WSL）、claude-api skill 新增 prompt-audit 子命令；修复 zsh 正则条件 [[ ]] 绕过 Bash 权限检查、PowerShell 带引号路径权限检查漏洞；background session 现在会自动 commit/push 并开草稿 PR" },
            { "feature": "v2.1.222（8/4）", "detail": "修复 worktree 隔离 session/subagent 对主 checkout 执行破坏性 git 操作的问题、修复后台任务中 PreToolUse hook 可被绕过限制工具的问题，以及 /usage-credits、/usage 计费展示等一批修复" },
            { "feature": "v2.1.223（8/6）", "detail": "marketplace 管理新增 owner 通配符（\"owner/*\"）、新增 /teleport 提示继续本地 session；修复 Bash 权限绕过（构造命令隐藏检查）、权限提示可被 tab/不可见 Unicode 填充绕过、workflow 脚本用动态 import() 逃逸沙盒等多个安全漏洞；/review 现为 /code-review 的别名，支持指定 effort" },
            { "feature": "v2.1.224（8/7）", "detail": "Team/Enterprise 新增 claude self-hosted-runner 自托管环境；插件源支持从带 SHA-256 校验的 HTTPS zip 安装；新增跨 session 消息能力 SendMessage 与 agent 发现工具 ListAgents（macOS/Linux）；移除 200-subagent-per-session 派生上限（并发/深度限制仍保留）；sandbox 凭据脱敏新增 JWT 感知脱敏与 AWS SigV4 重签名" }
          ]
        },
        {
          "tool": "Codex CLI",
          "versionRange": "v0.146.0 → v0.147.0",
          "items": [
            { "feature": "v0.146.1（8/5）", "detail": "为具备网络安全能力的模型加固自动 review 默认策略，并改进终端界面权限说明文案" },
            { "feature": "v0.147.0（8/7）", "detail": "支持跨 local/personal/workspace/remote 目录安装与管理 Agent Plugins；新增可手动排序的持久化会话分区与长对话增量浏览；新增 --approve-for-me 自动批准 CLI flag；支持导入 Cursor 管理的 skill 并与已导入的 Claude / Cursor 会话保持同步（不产生重复）；支持 MCP 2026-07-28 协议（分页发现、多轮请求、非阻塞式 server 启动）；Amazon Bedrock 新增带缓存的 web search 与远程会话压缩；修复回放历史中密钥/bearer token 未脱敏、焦点恢复及 MCP 初始化时终端输入丢失等问题；移除已废弃的 codex exec --full-auto flag" }
          ]
        },
        {
          "tool": "OpenClaw",
          "versionRange": "2026.7.2-beta.5 → 2026.7.2-beta.7（另有稳定分支 2026.7.1-1/-2 补丁）",
          "items": [
            { "feature": "2026.7.2-beta.6（8/1）/ beta.7（8/2）", "detail": "延续上期的数据安全与消息可靠性主线：crash-recoverable SQLite 快照、跨重启的可靠频道投递、会话 Rewind/分支、带 dashboard 的交互式 MCP Apps，以及跨平台结构化 Questions & Approvals" },
            { "feature": "稳定分支 2026.7.1-1 / 2026.7.1-2（8/4）", "detail": "补丁版本：修复 Codex 进度回复导致 app-server turn 提前终止、Memory Core 启动时 legacy-index 与缓存冲突导致 Gateway 反复重启、WSL 只读文件系统权限报错、旧版本迁移残留导致启动失败、npm 官方插件更新因过期 lock 元数据卡住等问题" }
          ]
        }
      ],
      "industryNews": {
        "headline": {
          "title": "🔥 Alibaba 发布 Qwen3.8-Max：2.4 万亿参数、视觉跑分仅次于 Fable 5，价格约为 Opus 5 的三分之一（8/3）— 本期重点",
          "summary": "Alibaba 8/3 发布其迄今最大模型 Qwen3.8-Max——2.4 万亿参数 MoE（950 亿激活参数），支持文本/图像/视频输入及百万级 token 上下文，通过 QwenCloud 提供 API；开放权重计划于下周（8/10 当周）连同更小尺寸的 Qwen3.8-27B 一并放出，是阿里巴巴首次在这一参数量级开源模型。",
          "points": [
            "定价优势明显 — $2/$6 per Mtok（输入/输出），另有 $0.25/Mtok 的隐式缓存价，合计成本不到 Claude Opus 5（标准档合计约 $30）的三分之一，也明显低于 GPT-5.6 Sol 标准档的 $35。",
            "Arena.AI 排名喜忧参半 — 视觉榜以 1305 分排名全球第二，仅次于 Fable 5 的 1318 分，是当前视觉能力最强的中国模型；文本榜则排第五，落后于 Fable 5 及三个 Claude Opus 变体。",
            "基准测试互有胜负 — OSWorld-Verified 上以 86.1 分反超 Fable 5 的 85.0，但 SWE-bench Pro（67.7 对 80.0）与 HLE（43.6 对 53.3）仍明显落后；且目前所有分数均为阿里巴巴自测，Frontier-Bench 等第三方复核尚未跟进。",
            "同期 OpenAI 用数学证明预告下一代模型 — 8/1 OpenAI 公开内部版本 Astra 解出的 10 道数学 / 理论计算机科学开放难题（含首个非 sofic 群的显式构造），随附零 \"sorry\" 的 Lean 4 形式化证明，生成全部证明按 Sol API 价格估算约耗资 $2000。"
          ]
        },
        "others": [
          { "product": "Claude Desktop app v1.25927.0", "org": "Anthropic", "date": "8/4", "desc": "输入框麦克风按钮旁新增切换听写/语音模式的箭头；修复 ⌘K/Ctrl+K 搜索遗漏工具输出与已归档 session 的结果、macOS 系统语言为德/西/法/印地/印尼/意/日/韩时 passkey 与 Touch ID 弹窗崩溃、自动或菜单触发的更新重启会打断进行中的 Claude Code 或 Cowork 任务等问题；启动失败时不再留下空白不可用窗口，改为弹错误对话框并记录日志" }
        ],
        "trending": [
          { "name": "esengine/DeepSeek-Reasonix", "url": "https://github.com/esengine/DeepSeek-Reasonix", "desc": "DeepSeek 原生的终端 coding agent，围绕 prefix-cache 稳定性设计、可长时间挂起会话；单一静态 Go 二进制，提供 CLI/TUI、桌面 App、VS Code 插件多种形态，现已 32.6k+ star / 2.1k+ fork" }
        ],
        "trends": [
          "中国大模型跑分持续逼近前沿，价格战从美国厂商内部蔓延到中美之间 — 继上上期 Kimi K3 开源权重放出后，Qwen3.8-Max 视觉能力已逼近全球第一梯队，价格却只有 Opus 5 的三分之一，呼应本月早些时候 Opus 5 反超自家旗舰 Fable 5 的\"次旗舰更划算\"趋势。",
          "coding agent 终端工具继续按模型厂商生态分化 — DeepSeek-Reasonix 主打围绕 DeepSeek 模型的 prefix-cache 长会话稳定性，是继 Kimi K3 相关工具之后又一个绑定特定模型厂商的终端 agent。"
        ]
      },
      "recommendations": [
        { "name": "升级 Claude Code 到 v2.1.224", "desc": "修复此前三个版本积累的多个权限/沙盒绕过漏洞，同时获得 SendMessage/ListAgents 跨 session 消息能力与移除的 200-subagent 上限" },
        { "name": "升级 Codex CLI 到 v0.147.0", "desc": "体验跨目录 Agent Plugins 安装、持久化会话分区、--approve-for-me 自动批准，以及从 Cursor/Claude 会话导入并同步 skill" },
        { "name": "关注 Qwen3.8-Max 开放权重（预计 8/10 当周）", "desc": "需要低成本、可自托管的高视觉能力选项时值得先看开源权重与配套的 Qwen3.8-27B 小尺寸 checkpoint" }
      ],
      "references": [
        { "title": "Bloomberg：Alibaba drops another China AI model with breakthrough performance", "url": "https://www.bloomberg.com/news/articles/2026-08-03/alibaba-drops-another-china-ai-model-with-breakthrough-performance" },
        { "title": "MarkTechPost：Alibaba Qwen Releases Qwen3.8-Max", "url": "https://www.marktechpost.com/2026/08/03/alibaba-qwen-releases-qwen3-8-max/" },
        { "title": "Forbes：Alibaba's Qwen3.8-Max Prices Frontier AI At $2 Per Million Tokens", "url": "https://www.forbes.com/sites/jonmarkman/2026/08/05/alibabas-qwen38-max-prices-frontier-ai-at-2-per-million-tokens/" },
        { "title": "TheNextWeb：Alibaba unveils Qwen3.8-Max, its most capable model, closing on Moonshot in size", "url": "https://thenextweb.com/news/alibaba-qwen38-max-most-capable-model" },
        { "title": "TechTimes：OpenAI's Astra Solves Ten Decade-Old Math Problems With Machine-Checkable Lean Proofs", "url": "https://www.techtimes.com/articles/322710/20260802/openais-astra-solves-ten-decade-old-math-problems-machine-checkable-lean-proofs.htm" },
        { "title": "Forbes：OpenAI's Astra Solved Decades-Old Math Problems For $2,000", "url": "https://www.forbes.com/sites/jonmarkman/2026/08/03/openais-astra-solved-10-decades-old-math-problems-for-just-2000/" },
        { "title": "Claude Code Changelog", "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md" },
        { "title": "Claude Code Releases", "url": "https://github.com/anthropics/claude-code/releases" },
        { "title": "Codex Changelog", "url": "https://developers.openai.com/codex/changelog" },
        { "title": "openai/codex Release v0.147.0", "url": "https://github.com/openai/codex/releases/tag/rust-v0.147.0" },
        { "title": "OpenClaw Releases", "url": "https://github.com/openclaw/openclaw/releases" },
        { "title": "Claude Desktop app release notes", "url": "https://support.claude.com/en/articles/12138966-release-notes" },
        { "title": "esengine/DeepSeek-Reasonix（GitHub Trending）", "url": "https://github.com/esengine/DeepSeek-Reasonix" }
      ]
    },
    {
      "date": "2026-07-31",
      "coverage": { "from": "2026-07-24", "to": "2026-07-31" },
      "headline": "Claude Opus 5 发布，1M 上下文、半价打平 Opus 4.8 却反超 Fable 5",
      "intro": "本期聚焦工具更新与业界新闻（覆盖区间 7/24 → 7/31）。头条：Anthropic 在不到两个月内发布的第四款模型——继 6 月 Mythos 5 / Fable 5 / Sonnet 5 之后，7/24 上线 Claude Opus 5，1M 上下文、定价与 Opus 4.8 持平，但在 12 项共同基准中 7 项反超自家旗舰 Fable 5。",
      "note": "Claude Code v2.1.219 起 subagent 嵌套深度默认从 1 层放宽到 3 层（CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH=1 可关闭）——是对上上期\"默认不再派生下一层\"限制的部分松绑，重度 /workflow 用户可以重新评估要不要调整这个环境变量。",
      "toolVersions": {
        "asOf": "7/31",
        "rows": [
          { "tool": "Claude Code (Anthropic)", "version": "v2.1.220", "update": "claude update" },
          { "tool": "Codex (OpenAI)", "version": "v0.146.0", "update": "npm update -g @openai/codex" },
          { "tool": "OpenClaw", "version": "2026.7.2-beta.5", "update": "openclaw update" }
        ]
      },
      "toolUpdates": [
        {
          "tool": "Claude Code",
          "versionRange": "v2.1.218 → v2.1.220",
          "items": [
            { "feature": "Claude Opus 5 成为默认 Opus 模型（v2.1.219，7/24）", "detail": "1M 上下文，standard 模式 $5/$25 per Mtok（与 Opus 4.8 持平），fast mode $10/$50、速度约 2.5 倍；claude-api skill 同步默认迁移到 Opus 5，并提供从 Opus 4.8 的迁移指引" },
            { "feature": "subagent 嵌套深度默认放宽到 3 层（v2.1.219）", "detail": "此前默认不再派生下一层（深度 1），现在默认可嵌套到 3 层；CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH=1 可关闭嵌套" },
            { "feature": "新增 sandbox.network.strictAllowlist 设置（v2.1.219）", "detail": "沙盒命令的非白名单 host 直接拒绝而不再弹权限确认" },
            { "feature": "新增 DirectoryAdded hook（v2.1.219）", "detail": "/add-dir 或 SDK 的 register_repo_root control request 注册新工作目录后触发" },
            { "feature": "stream-json 新增嵌套 subagent 转发（v2.1.219）", "detail": "配合 --forward-subagent-text，深度 2+ 的 subagent 产出也会按其上级 Agent tool_use id 归类展示" },
            { "feature": "v2.1.220（7/24）", "detail": "仅为 bug fixes and reliability improvements，无新增功能说明" }
          ]
        },
        {
          "tool": "Codex CLI",
          "versionRange": "v0.145.0 → v0.146.0",
          "items": [
            { "feature": "命名会话 + 置顶线程 + 侧对话（v0.146.0，7/29）", "detail": "/new /clear 可为会话命名，可置顶重要线程，支持在不关闭当前对话的情况下切换侧对话" },
            { "feature": "Agent Plugins + 工作区插件发布（v0.146.0）", "detail": "新增 plugin manifest 支持、workspace 插件发布，以及新的插件 marketplace（含 Amazon Bedrock、Claude Code）" },
            { "feature": "Thread forking 支持分页历史（v0.146.0）", "detail": "可从指定 turn fork 出临时分支（不出现在线程列表中）；app-server 客户端可查看环境、列出子线程" }
          ]
        },
        {
          "tool": "OpenClaw",
          "versionRange": "2026.7.2-beta.3 → 2026.7.2-beta.5",
          "items": [
            { "feature": "会话 Rewind + 分支（beta.4/beta.5）", "detail": "可从任意历史消息 fork 出会话分支，并在不同 transcript 分支间切换" },
            { "feature": "交互式 MCP Apps（beta.5）", "detail": "可托管带绑定 tool / resource 的 ticketed MCP 应用" },
            { "feature": "Questions & Approvals 结构化问答（beta.5）", "detail": "agent 可在 web 与移动端发起带选项卡片的结构化提问和审批请求" },
            { "feature": "会议与实时通话集成（beta.5）", "detail": "接入 Teams / Zoom / Google Meet 转录采集，新增 OpenAI、Gemini 的视频通话支持" },
            { "feature": "状态安全与恢复（beta.5）", "detail": "quarantine store 抵御主数据库损坏、crash-recoverable SQLite 快照，以及跨 gateway 重启的可靠投递（覆盖 Telegram / Signal / Slack / QQBot / Twitch 等渠道）" },
            { "feature": "Wear OS 伴侣 App + 支持 Claude Opus 5（beta.5）", "detail": "手机代理的智能手表支持，可选择 agent、控制音频播放" }
          ]
        }
      ],
      "industryNews": {
        "headline": {
          "title": "🔥 Claude Opus 5 发布：1M 上下文、半价打平 Opus 4.8 却反超 Fable 5（7/24）— 本期重点",
          "summary": "Anthropic 不到两个月内发布的第四款模型——继 6 月 Mythos 5 / Fable 5 / Sonnet 5 之后，7/24 上线 Claude Opus 5：1M 上下文，定价与 Opus 4.8 持平（standard $5/$25 per Mtok），fast mode $10/$50、速度约 2.5 倍，新增 low/medium/high 三档 effort 可调。",
          "points": [
            "跑分反超自家旗舰 — 在 12 项共同基准中 7 项反超 Fable 5，其中 Frontier-Bench v0.1（真实多文件工程任务）以 43.3% 对 Fable 5 的 33.7% 拉开 9.6 个百分点；ARC-AGI-3 上拿到 30.2%，是第二名的三倍。",
            "价格不变、性能却提升 — 与 Opus 4.8 同价（$5/$25），却是 Fable 5 输入价的一半，呼应本月早些时候 Gemini 3.6 Flash 的降本打法，\"次旗舰更划算\"正成为新常态。",
            "全平台默认切换 — Claude Code v2.1.219 起默认 Opus 模型即为 Opus 5，claude-api skill 同步默认迁移；Claude Max 默认模型；Claude Desktop app（v1.24012.9，7/24）新增五档 effort 选择器，Opus 5 上 Extended thinking 常开。",
            "业界反应 — Cognition（Devin 团队）CEO Scott Wu 在 FrontierCode 1.1 上确认 Opus 5\"以旗舰一半成本逼近 Fable 级性能\"，尤其在调试与根因分析上表现突出。"
          ]
        },
        "others": [
          { "product": "Kimi K3 开放权重正式放出", "org": "Moonshot AI", "date": "7/26", "desc": "2.8 万亿参数完整权重（MXFP4 量化约 594GB、96 个分片）在 Hugging Face 免费开放下载，比原定的 7/27 提前一天；相较上期报道的\"模型发布\"，这周才是真正可自托管的权重落地（至少需 8×H100 80GB 起步的多卡硬件），Together AI / Modal 同步提供 day-0 云端托管" },
          { "product": "Claude Desktop app v1.24012.9", "org": "Anthropic", "date": "7/24", "desc": "新增 Opus 5 五档 effort 选择器（Extended thinking 常开）；新增 mcpPersistentAlwaysAllowEnabled 管理员配置项，可关闭 MCP 工具\"永久允许\"的持久化授权；修复 Windows 上插件 hook 静默失效的问题" }
        ],
        "trending": [
          { "name": "ogulcancelik/herdr", "url": "https://github.com/ogulcancelik/herdr", "desc": "Rust 编写的终端 agent multiplexer，可在同一终端里并行监控/操作 Claude Code、Codex、Devin 等多个 coding agent，7 月内从数千星涨到 19k+" }
        ],
        "trends": [
          "\"次旗舰更划算\"从个例变成模式 — 继上期 Gemini 3.6 Flash 降本增效后，本周 Opus 5 价格不变却反超自家旗舰 Fable 5，价格战正在往\"次旗舰即最优选\"方向收敛。",
          "Agent 多开/编排类终端工具持续吸金 — herdr 延续了 orca、gstack 等\"agent 舰队\"工具今年以来的热度，说明重心正从\"调好一个 agent\"转向\"同时管理一批 agent\"。"
        ]
      },
      "recommendations": [
        { "name": "评估切换到 Claude Opus 5", "desc": "与 Opus 4.8 同价但多项基准反超 Fable 5，重度使用 Opus 档位的场景值得先跑一轮内部基准对比" },
        { "name": "升级 Claude Code 到 v2.1.220", "desc": "获取 Opus 5 默认模型、放宽到 3 层的 subagent 嵌套深度，以及 sandbox.network.strictAllowlist 等新设置" },
        { "name": "升级 Codex CLI 到 v0.146.0", "desc": "体验命名会话、置顶线程、Agent Plugins，以及支持分页历史的 thread forking" }
      ],
      "references": [
        { "title": "Anthropic 官方博客：Introducing Claude Opus 5", "url": "https://www.anthropic.com/news/claude-opus-5" },
        { "title": "TechCrunch：Anthropic launches Opus 5", "url": "https://techcrunch.com/2026/07/24/anthropic-launches-opus-5/" },
        { "title": "Decrypt：Claude Opus 5 Outscores Fable 5 on Most Benchmarks—At Half the Price", "url": "https://decrypt.co/374305/claude-opus-5-outscores-fable-5-most-benchmarks-half-price" },
        { "title": "TechTimes：Kimi K3 open weights arrive, self-hosting cuts data risk", "url": "https://www.techtimes.com/articles/321551/20260725/kimi-k3-open-weights-arrive-sunday-self-hosting-cuts-china-data-risk-api-never-can.htm" },
        { "title": "Quartz：Moonshot AI releases Kimi K3 open-weight model for download", "url": "https://qz.com/moonshot-ai-kimi-k3-open-weights-download-072726" },
        { "title": "Claude Code Changelog", "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md" },
        { "title": "Codex Changelog", "url": "https://developers.openai.com/codex/changelog" },
        { "title": "openai/codex Release v0.146.0", "url": "https://github.com/openai/codex/releases/tag/rust-v0.146.0" },
        { "title": "OpenClaw Releases", "url": "https://github.com/openclaw/openclaw/releases" },
        { "title": "Claude Desktop app release notes", "url": "https://support.claude.com/en/articles/12138966-release-notes" },
        { "title": "ogulcancelik/herdr（GitHub Trending）", "url": "https://github.com/ogulcancelik/herdr" }
      ]
    },
    {
      "date": "2026-07-24",
      "coverage": { "from": "2026-07-17", "to": "2026-07-24" },
      "headline": "Gemini 3.6 Flash 发布，Pichai 松口 Gemini 4 已进入预训练",
      "intro": "本期聚焦工具更新与业界新闻（覆盖区间 7/17 → 7/24）。头条：Google 于 7/21 发布 Gemini 3.6 Flash / 3.5 Flash-Lite / 3.5 Flash Cyber 三款新模型（唯独没有 3.5 Pro），随后 Pichai 在 7/23 财报电话会上回应\"3.5 Pro 跳票\"的质疑，松口 Gemini 4 已进入预训练、未来目标是接近月度的发布节奏。",
      "note": "⚠️ Claude Code v2.1.217 起新增 subagent 并发上限：单条消息默认最多同时跑 20 个 subagent（CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS 可调），且 subagent 默认不再派生下一层 subagent（需设 CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH 才能加深）——是上期 200 次/session 上限之后的又一次收紧，重度使用 /workflow 大规模 fan-out 的同学升级后注意排查是否被截断。",
      "toolVersions": {
        "asOf": "7/24",
        "rows": [
          { "tool": "Claude Code (Anthropic)", "version": "v2.1.218", "update": "claude update" },
          { "tool": "Codex (OpenAI)", "version": "v0.145.0", "update": "npm update -g @openai/codex" },
          { "tool": "OpenClaw", "version": "2026.7.2-beta.3", "update": "openclaw update" }
        ]
      },
      "toolUpdates": [
        {
          "tool": "Claude Code",
          "versionRange": "v2.1.212 → v2.1.218",
          "items": [
            { "feature": "EndConversation 工具（v2.1.214）", "detail": "Claude 现在可以主动结束高度辱骂或越狱尝试类的对话，行为对齐 claude.ai 网页端自 2025 年起的做法" },
            { "feature": "/verify、/code-review 不再自动触发（v2.1.215）", "detail": "此前 Claude 会在它认为合适的时机自行运行这两个 skill，现在必须显式调用 /verify 或 /code-review 才会执行" },
            { "feature": "sandbox.filesystem.disabled 新设置（v2.1.216）", "detail": "可在保留网络出站控制的同时跳过文件系统隔离；同版本修复了 worktree 隔离下 subagent 通过 git -C / --git-dir / GIT_DIR 绕开隔离改动共享 checkout 的问题" },
            { "feature": "subagent 并发上限默认 20 + 默认禁止嵌套派生（v2.1.217）", "detail": "CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS 可调整并发上限，CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH 可放开嵌套深度；同版本新增 emoji shortcode 自动补全（如 :heart: → ❤️）" },
            { "feature": "/code-review 转为后台 subagent 运行（v2.1.218）", "detail": "review 过程不再占用当前对话上下文；同版本修复了 /context 在 compaction 后汇报过期 token 用量、Bedrock application-inference-profile ARN 计费等一批问题" }
          ]
        },
        {
          "tool": "Codex CLI",
          "versionRange": "v0.144.6 → v0.145.0",
          "items": [
            { "feature": "修正 GPT-5.6 三档模型的上下文窗口指令（v0.144.6，7/18）", "detail": "此前内置指令未对齐 272,000 token 的真实工作上下文，导致 Sol / Terra / Luna 实际可用上下文被低估" },
            { "feature": "分页 thread history + multi-agent V2 转正（v0.145.0，7/21）", "detail": "新增支持搜索、恢复、持久化命名、sub-agent、memories 的分页会话历史（experimental）；/import 扩展为可迁移 Cursor / Claude Code 的设置、MCP servers、插件、会话、命令与项目级 memory；新增 Amazon Bedrock 登录 / 自定义 endpoint，Bedrock 默认模型改为 GPT-5.6 Sol；新增音频输入输出与 realtime V3 流式对话；multi-agent V2（可配置 sub-agent 模型、推理档位、并发数、角色）转为正式可用" }
          ]
        },
        {
          "tool": "OpenClaw",
          "versionRange": "2026.7.2-beta.1 → 2026.7.2-beta.3",
          "items": [
            { "feature": "外部 Gateway 托管模式 + ClickClack 引导式接入（beta.2，7/17）", "detail": "OPENCLAW_SUPERVISOR_MODE=external 支持外部监管 Gateway；新增 ClickClack 渠道引导式配置向导与 skill workshop 审批自动化；内置 Codex CLI 版本升至 0.144.4；修复 Telegram 持久化与 Signal 响应性问题" },
            { "feature": "远程 coding session + 移动端原生自动化（beta.3，7/18）", "detail": "Control UI 会话可跑在云端 worker 上；Codex / Claude catalog session 可在其所属主机的终端里直接打开，OpenCode / Pi 会话可在终端里续接；Automations 补齐移动端能力，Android 新增前台语音唤醒；新增 Linux deb / AppImage 打包" }
          ]
        }
      ],
      "industryNews": {
        "headline": {
          "title": "🔥 Gemini 3.6 Flash 发布，Pichai 松口 Gemini 4 已进入预训练（7/21-7/23）— 本期重点",
          "summary": "一句话：Google 7/21 发布 Gemini 3.6 Flash / 3.5 Flash-Lite / 3.5 Flash Cyber 三款新模型但仍无 3.5 Pro；两天后的 Q2 财报电话会上，Pichai 正面回应跳票质疑，透露 Gemini 4 已进入预训练、目标是接近月度的发布节奏。",
          "points": [
            "三连发（7/21）— Gemini 3.6 Flash 是主力\"workhorse\"模型，官方称比 3.5 Flash 少产出 17% 的输出 token、多步任务所需推理步数与工具调用更少；3.5 Flash-Lite 主打高吞吐低延迟（agentic search、文档处理、subagent fan-out）；3.5 Flash Cyber 专精漏洞挖掘与修复，仅限政府与受信合作伙伴小范围试点。",
            "定价与实测收益 — 3.6 Flash 输出价降至 $1.50 / $7.50 per M（较 3.5 Flash 的 $9 输出价降 16.7%）；Artificial Analysis 测得配合 token 产出减少后平均任务成本降 18%，DeepSWE 编程基准上 token 节省最高可达 65%。",
            "财报电话会交锋（7/23）— 投资人就 3.5 Pro 跳票与 Google 在 AI 竞赛中的位置发问，Pichai 回应\"大家会满意\"的 Gemini 4，称其为\"非常有野心的项目\"，透露已进入预训练、未来目标是把发布节奏拉近到接近月度，并表示需要更大的 Gemini 4 才能在下一个前沿档位保持竞争力。"
          ]
        },
        "others": [
          { "product": "OpenAI Codex Micro", "org": "OpenAI × Work Louder", "date": "7/15", "desc": "OpenAI 首款自研硬件——$230 机械小键盘，13 键含 6 个可显示 agent 状态的 RGB Agent Key（白/蓝/绿/琥珀/红对应闲置/思考/完成/需要输入/报错），配转轮调 reasoning effort、摇杆映射常用工作流（debug、refactor 等），蓝牙 / USB-C 双连接，仅支持 Windows / macOS，发布即缺货" },
          { "product": "前沿模型发布审查框架", "org": "白宫 + OpenAI / Anthropic / Google", "date": "7/20", "desc": "三方与白宫商定的自愿框架接近敲定：新旗舰模型公开发布前，联邦机构有最多 30 天窗口评估其国家安全影响；评估用的基准细节保密，Meta 未加入此次协议" },
          { "product": "Project Perception", "org": "Microsoft", "date": "7/20", "desc": "微软筹备中的 AI 网络安全平台，联合 Microsoft / OpenAI / Anthropic 的模型查找并修复软件漏洞，定位为比 Anthropic Mythos-class 安全方案更低成本的替代品" }
        ],
        "trending": [
          { "name": "ComposioHQ/awesome-claude-skills", "url": "https://github.com/ComposioHQ/awesome-claude-skills", "desc": "Claude skill 精选合集，一周新增 636+ star（现 69.6k+），覆盖各类 AI workflow 定制场景" },
          { "name": "diegosouzapw/OmniRoute", "url": "https://github.com/diegosouzapw/OmniRoute", "desc": "免费 AI 网关，支持 290+ provider / 500+ 模型，带自动 fallback 与 token 压缩，一周新增 1900+ star（现 27.6k+）" }
        ],
        "trends": [
          "云厂商继续打\"更便宜的主力模型\"牌 — Gemini 3.6 Flash 输出价降 17%、平均任务成本降 18%，呼应本月早些时候 Sonnet 5 / GPT-5.6 Terra 的降本打法，\"够用就好\"档位正成为价格战主战场。",
          "前沿模型公开发布继续要过政府关卡，且正从个案走向制度化 — 白宫与三家实验室商定的 30 天审查框架接近敲定，此前 Fable 5 / Mythos 5、GPT-5.6 Sol 的出口管制插曲看起来会变成常态流程而非例外。",
          "AI 硬件外设成为新赛道 — OpenAI 用 Codex Micro 探索\"实体控制面板 + agent 状态可视化\"，coding agent 的交互界面开始从纯终端 / IDE 向物理设备延伸。"
        ]
      },
      "recommendations": [
        { "name": "评估 Gemini 3.5 Flash-Lite / 3.6 Flash", "desc": "高吞吐、低延迟场景（agentic search、文档处理、subagent fan-out）可以先对比一下这两档新模型的性价比" },
        { "name": "检查 Claude Code subagent 并发设置", "desc": "v2.1.217 起默认上限 20、且不再默认嵌套派生，重度 /workflow 用户按需调整 CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS / CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH" },
        { "name": "升级 Codex CLI 到 v0.145.0", "desc": "体验分页 thread history、音频输入输出，以及转正式的 multi-agent V2" }
      ],
      "references": [
        { "title": "TechCrunch：Google 发布三款 Gemini 新模型，唯独没有 3.5 Pro", "url": "https://techcrunch.com/2026/07/21/google-releases-three-new-gemini-models-but-no-3-5-pro/" },
        { "title": "9to5Google：Gemini 3.6 Flash 发布", "url": "https://9to5google.com/2026/07/21/gemini-3-6-flash-launch/" },
        { "title": "Google 官方博客：Gemini 3.6 Flash / 3.5 Flash-Lite / 3.5 Flash Cyber", "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/" },
        { "title": "TechTimes：Gemini 3.6 Flash 降本增效", "url": "https://www.techtimes.com/articles/321268/20260722/gemini-36-flash-cuts-token-costs-scores-higher-every-benchmark.htm" },
        { "title": "Search Engine Journal：Pichai 称 Google 需要 Gemini 4 才能保持前沿竞争力", "url": "https://www.searchenginejournal.com/pichai-says-google-needs-gemini-4-to-compete-at-the-frontier/583214/" },
        { "title": "InfoWorld：Gemini 3.5 Pro 跳票，但 Gemini 4 会很强", "url": "https://www.infoworld.com/article/4200818/google-ceo-distracts-from-gemini-3-5-pro-delay-with-talk-of-gemini-4-and-monthly-releases.html" },
        { "title": "Engadget：OpenAI 发布实体 agent 控制键盘", "url": "https://www.engadget.com/2215952/openai-launches-a-physical-keypad-for-controlling-agents/" },
        { "title": "gHacks：OpenAI Codex Micro，$230 机械键盘", "url": "https://www.ghacks.net/2026/07/18/openai-launches-codex-micro-a-230-mechanical-keypad-for-ai-coding/" },
        { "title": "buildfastwithai：AI News Today（7/20，白宫框架 / Project Perception）", "url": "https://www.buildfastwithai.com/blogs/ai-news-today-july-20-2026-16-biggest-stories" },
        { "title": "Claude Code Changelog", "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md" },
        { "title": "Codex Changelog", "url": "https://developers.openai.com/codex/changelog" },
        { "title": "OpenClaw Releases", "url": "https://github.com/openclaw/openclaw/releases" },
        { "title": "ComposioHQ/awesome-claude-skills（GitHub Trending）", "url": "https://github.com/ComposioHQ/awesome-claude-skills" }
      ]
    },
    {
      "date": "2026-07-17",
      "coverage": { "from": "2026-07-10", "to": "2026-07-17" },
      "headline": "Kimi K3 — 2.8 万亿参数开源模型",
      "intro": "本期聚焦工具更新与业界新闻（覆盖区间 7/10 → 7/17）。头条：Moonshot AI 发布 Kimi K3（7/16）——2.8 万亿参数的开源 MoE 模型，号称全球最大开放权重模型，多项基准逼近甚至优于 Fable 5 / GPT-5.6 Sol，被媒体称为一场\"中国式冲击\"。",
      "note": "⚠️ Claude Code v2.1.212 起，单个 session 默认限制 WebSearch 调用最多 200 次、subagent 派生最多 200 个（超过则自动转后台执行）；重度使用 /workflow 大规模 fan-out 或长任务调研的同学升级后如果发现调用被截断，先去确认是不是撞上了这个新默认上限。",
      "toolVersions": {
        "asOf": "7/17",
        "rows": [
          { "tool": "Claude Code (Anthropic)", "version": "v2.1.212", "update": "claude update" },
          { "tool": "Codex (OpenAI)", "version": "v0.144.5", "update": "npm update -g @openai/codex" },
          { "tool": "OpenClaw", "version": "2026.7.2-beta.1", "update": "openclaw update" }
        ]
      },
      "toolUpdates": [
        {
          "tool": "Claude Code",
          "versionRange": "v2.1.206 → v2.1.212",
          "items": [
            { "feature": "Auto mode 无需 opt-in 直接可用（v2.1.207）", "detail": "在 Bedrock / Vertex AI / Foundry 上原生开放，不用再单独申请" },
            { "feature": "屏幕阅读器模式 + vimInsertModeRemaps（v2.1.208）", "detail": "新增纯文本渲染的无障碍模式；vim 模式下可配置 jj 之类的插入态重映射序列" },
            { "feature": "会话内实时耗时计数 + 路径权限规则启动警告（v2.1.210）", "detail": "折叠工具摘要行新增实时计时；Write/NotebookEdit/Glob 权限规则写法有歧义时会在启动时警告" },
            { "feature": "--forward-subagent-text（v2.1.211）", "detail": "stream-json 输出可携带 subagent 产出的文本内容，便于下游解析" },
            { "feature": "/fork 支持后台会话 + 新增默认用量上限（v2.1.212）", "detail": "/fork 可把当前对话复制进新的后台会话继续跑；同时新增单 session 默认 200 次 WebSearch / 200 个 subagent 派生上限，超时（>2 分钟）的 MCP 调用自动转后台" },
            { "feature": "/resume 选择器包含已删除会话（v2.1.212）", "detail": "误删的历史会话现在也能在 /resume 里找回并恢复" }
          ]
        },
        {
          "tool": "Codex CLI",
          "versionRange": "v0.144.1 → v0.144.5",
          "items": [
            { "feature": "危险命令检测加强（v0.144.5，7/16）", "detail": "识别更多变体的强制 rm 形式，拒绝执行时给出更清晰的原因说明" },
            { "feature": "Rollout token 预算", "detail": "可为 agent thread 配置 token 用量预算，接近上限提醒，用尽后自动终止当前 turn" },
            { "feature": "本地 / 远程主机间 thread handoff", "detail": "可将一个 thread 转移到已连接远程主机上的匹配项目继续运行，Codex 可协助完成整个转移过程" },
            { "feature": "/usage 用量重置额度 + /plugins 分区浏览", "detail": "/usage 可查看并兑换已获得的用量重置额度；/plugins 按 OpenAI 精选 / 工作区 / 与我共享分区展示，命中场景时还会主动推荐插件" }
          ]
        },
        {
          "tool": "OpenClaw",
          "versionRange": "2026.7.1-beta.3 → 2026.7.2-beta.1",
          "items": [
            { "feature": "2026.7.1 转正式版（7/13）", "detail": "带来 live Tasks 面板、更顺畅的首装到首次对话流程、iOS/Android/macOS 官方 app 大版本更新；接入 GPT-5.6、腾讯混元 Hy3、Meta Muse Spark 1.1；Gateway 崩溃后不再无限重启" },
            { "feature": "2026.7.2-beta.1（7/15）", "detail": "新增远程 coding session（云端 worker 执行 + 终端会话可续接）；Android 语音唤醒等原生自动化 / mobile node 能力；Telegram 稳定性与 Signal 重连修复；新增 deb / AppImage 的 Linux 打包" }
          ]
        }
      ],
      "industryNews": {
        "headline": {
          "title": "🔥 Kimi K3 — 2.8 万亿参数开源模型（7/16）— 本期重点",
          "summary": "一句话：Moonshot AI 发布 Kimi K3，2.8 万亿参数的开源 MoE 模型，号称全球最大开放权重模型，多项基准逼近甚至优于 Fable 5 / GPT-5.6 Sol，前端编程盲测中被开发者评为优于两者。",
          "points": [
            "架构 — 稀疏 MoE，896 个专家里每次仅激活 16 个（Stable LatentMoE），叠加 Kimi Delta Attention 与 Attention Residuals 两项新架构改动；原生支持视觉输入，1M token 上下文。",
            "定价 — 缓存命中输入 $0.30/M、未命中输入 $3/M、输出 $15/M，满 1,048,576 token 上下文均按此价，比同级闭源模型便宜不少。",
            "开放程度 — 已上线 Kimi Code / Kimi App 可直接使用；权重定于 7/27 公开发布，届时将成为全球最大的开放权重模型。",
            "表现 — Arena 盲测中前端编程一项被开发者评为优于 Fable 5 与 GPT-5.6 Sol；Moonshot 自己也承认部分任务上仍落后这两个模型，但差距很小。"
          ]
        },
        "others": [
          { "product": "Gemini 3.5 Pro", "org": "Google DeepMind", "date": "7/17", "desc": "为一次架构重做推迟发布；据传带来 200 万 token 上下文和 Deep Think 推理层，但官方尚未正式确认参数与定价，目前信息以第三方爆料为主" },
          { "product": "Inkling", "org": "Thinking Machines Lab", "date": "7/15", "desc": "Mira Murati 创立的 Thinking Machines 首个自研模型，走开放权重路线，975B 总参数 / 41B 激活参数，支持图文音三模态输入，Artificial Analysis 智能指数以 41 分登顶美国开放权重模型榜首" },
          { "product": "Fable 5 免费期三度延长至 7/19", "org": "Anthropic", "date": "7/12", "desc": "五周内第三次延长 Pro/Max/Team/高级 Enterprise 用户的 Fable 5 免费用量（周用量上限内 50%），直接应对 GPT-5.6 Sol 的价格压力；同期 Cursor 模型列表短暂出现代号 'Honeycomb' 的未标注模型，规格与 Fable 5 接近但会把敏感请求转发给 Opus 4.8，被猜测是 Opus 5 早期版本，Anthropic 未予置评" }
        ],
        "trending": [
          { "name": "mattpocock/skills", "url": "https://github.com/mattpocock/skills", "desc": "作者把自己日常真实工程场景用的 .claude 目录公开成仓库，2.7 万+ star；重点是 /tdd、/diagnosing-bugs、/improve-codebase-architecture 等强调工程规范而非一次性写代码的 skill，可作为 native plugin 整体安装" },
          { "name": "openinterpreter/openinterpreter", "url": "https://github.com/openinterpreter/openinterpreter", "desc": "用 Rust 重写的开放模型 coding agent，主打适配 Kimi K3 等开放权重模型，一周新增 660+ star" }
        ],
        "trends": [
          "开放权重模型逼近前沿 — Kimi K3（中国）与 Inkling（美国，Thinking Machines）同一周先后发布，开放权重赛道正从\"追赶\"转向\"贴身竞争\"，且不再是中国实验室独有的打法。",
          "旗舰模型发布前的信息控制越来越谨慎 — Gemini 3.5 Pro 具体参数仍以爆料为主，Anthropic 对疑似 Opus 5 的 'Honeycomb' 不予置评，头部厂商都在收紧发布前的口径。",
          "Anthropic 用免费试用应对价格战 — Fable 5 免费期五周内三次延长，直接对冲 GPT-5.6 Sol 的定价压力。"
        ]
      },
      "recommendations": [
        { "name": "升级 Claude Code 到 v2.1.212", "desc": "留意新增的 WebSearch / subagent 派生默认上限（各 200 次每 session），重度 workflow 用户按需去 /config 调整" },
        { "name": "试试 mattpocock/skills", "desc": "参考真实工程场景下的 Claude Code skill 写法，比自己从零摸索更快上手 /tdd、/diagnosing-bugs 这类规范型 skill" },
        { "name": "关注 Kimi K3 公开权重（7/27）", "desc": "对成本敏感、需要前端 / 编程能力的场景可以先关注，权重开放后可自行部署或对比评测" }
      ],
      "references": [
        { "title": "Moonshot AI 发布 Kimi K3（MarkTechPost）", "url": "https://www.marktechpost.com/2026/07/16/moonshot-ai-releases-kimi-k3-a-2-8-trillion-parameter-open-moe-model-with-kimi-delta-attention-and-1m-context/" },
        { "title": "TechCrunch：Kimi K3 逼近 Opus 4.8", "url": "https://techcrunch.com/2026/07/16/moonshots-upcoming-kimi-3-is-expected-to-close-the-gap-with-anthropics-opus-4-8/" },
        { "title": "SiliconANGLE：Kimi K3 全球最大开放权重模型", "url": "https://siliconangle.com/2026/07/16/chinas-moonshot-throws-gauntlet-kimi-k3-worlds-largest-open-weights-model/" },
        { "title": "TechTimes：Gemini 3.5 Pro 架构重做", "url": "https://www.techtimes.com/articles/320308/20260713/gemini-35-pro-targets-july-17-after-full-rebuild-every-spec-remains-unconfirmed.htm" },
        { "title": "TechCrunch：Thinking Machines 发布 Inkling", "url": "https://techcrunch.com/2026/07/15/thinking-machines-amps-up-its-bet-against-one-size-fits-all-ai-with-its-first-open-model-inkling/" },
        { "title": "BleepingComputer：Fable 5 免费期延至 7/19", "url": "https://www.bleepingcomputer.com/news/artificial-intelligence/claude-fable-5-stays-free-for-paid-users-until-july-19-as-anthropic-buys-more-time/" },
        { "title": "TechTimes：疑似 Opus 5 / 'Honeycomb' 泄露", "url": "https://www.techtimes.com/articles/320265/20260712/fable-5-free-through-july-19-anthropic-blinks-again-opus-5-leak-surfaces-cursor.htm" },
        { "title": "Claude Code Changelog", "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md" },
        { "title": "Codex Changelog", "url": "https://developers.openai.com/codex/changelog" },
        { "title": "Codex CLI v0.144.5 Release", "url": "https://github.com/openai/codex/releases/tag/rust-v0.144.5" },
        { "title": "OpenClaw Releases", "url": "https://github.com/openclaw/openclaw/releases" },
        { "title": "mattpocock/skills（GitHub Trending）", "url": "https://github.com/mattpocock/skills" }
      ]
    },
    {
      "date": "2026-07-10",
      "coverage": { "from": "2026-07-03", "to": "2026-07-10" },
      "headline": "GPT-5.6 GA + ChatGPT Work",
      "intro": "本期聚焦工具更新与业界新闻（覆盖区间 7/3 → 7/10）。头条：GPT-5.6 三档模型（Sol/Terra/Luna）7/9 结束政府关卡限制正式 GA，OpenAI 同步把独立 Codex 桌面应用并入全新 ChatGPT 桌面应用，并推出主打\"甩给它整段工作\"的 ChatGPT Work agent。",
      "note": "⚠️ Claude Code v2.1.200 起，默认权限模式从 \"default\" 改成了 \"Manual\"（CLI / VS Code / JetBrains 统一切换）。升级后如果习惯了旧的自动放行行为，记得去 /config 或 settings.json 里确认一下当前权限模式，避免被突然多出来的确认打断。",
      "toolVersions": {
        "asOf": "7/9",
        "rows": [
          { "tool": "Claude Code (Anthropic)", "version": "v2.1.206", "update": "claude update" },
          { "tool": "Codex (OpenAI)", "version": "v0.144.1", "update": "npm update -g @openai/codex" },
          { "tool": "OpenClaw", "version": "2026.7.1-beta.3", "update": "openclaw update" }
        ]
      },
      "toolUpdates": [
        {
          "tool": "Claude Code",
          "versionRange": "v2.1.199 → v2.1.206",
          "items": [
            { "feature": "默认权限模式改为 Manual（v2.1.200）", "detail": "CLI、--help、VS Code、JetBrains 统一切换；--permission-mode manual 与旧的 default 写法仍兼容" },
            { "feature": "AskUserQuestion 不再默认自动继续（v2.1.200）", "detail": "需要在 /config 里主动开启空闲超时，才会自动跳过未回答的问题" },
            { "feature": "Dynamic workflow size 设置（v2.1.202）", "detail": "/config 里可调 workflow 生成的 agent 规模档位（小/中/大），仅为建议档位、非强制上限" },
            { "feature": "/doctor 升级为完整体检工具，新增别名 /checkup（v2.1.205）", "detail": "可直接诊断并修复常见安装 / 配置问题" },
            { "feature": "auto mode 新增规则：禁止篡改 session transcript 文件（v2.1.205）", "detail": "防止后台任务的对话记录被意外或恶意改写" },
            { "feature": "/doctor 新检查项：建议裁剪 checked-in CLAUDE.md（v2.1.206）", "detail": "标出 Claude 本就能从代码库里推导出的内容，建议精简" },
            { "feature": "/commit-push-pr 自动放行 remote.pushDefault（v2.1.206）", "detail": "配置了推送默认 remote（或仓库只有一个 remote）时，push 无需再手动确认" }
          ]
        },
        {
          "tool": "Codex CLI",
          "versionRange": "v0.142.5 → v0.144.1",
          "items": [
            { "feature": "内置 GPT-5.6 三档模型（Sol / Terra / Luna）", "detail": "/model 直接切换；1.5M 上下文（GPT-5.5 为 1M）；新增 max（拉长推理链）与 ultra（内部拆分并行 subagent）两档推理模式" },
            { "feature": "Amazon Bedrock 接入 GPT-5.6 三档模型", "detail": "同步支持 max reasoning effort" },
            { "feature": "新增 codex remote-control pair", "detail": "为运行中的 daemon 生成手动配对码，方便远程控制配对" },
            { "feature": "multi-agent delegation 可配置三档", "detail": "禁用 / 仅显式请求 / 主动委派，thread 和 turn 级别均可单独设置" },
            { "feature": "修复 Linux TUI 渲染问题", "detail": "Ctrl+Z 挂起后用 fg 恢复时，终端渲染不再错乱" }
          ]
        }
      ],
      "industryNews": {
        "headline": {
          "title": "🔥 GPT-5.6 GA + ChatGPT Work（7/9）— 本期重点",
          "summary": "一句话：OpenAI 用 GPT-5.6（Sol / Terra / Luna 三档）结束为期 13 天的政府关卡限制、正式公开发布，同步把独立 Codex 桌面应用并入全新 ChatGPT 桌面应用，并推出主打\"交给它整段工作\"的 ChatGPT Work agent。",
          "points": [
            "三档模型 GA — Sol（旗舰，$5 / $30 per M）、Terra（性价比主力，$2.5 / $15，性能对标 GPT-5.5 但价格减半）、Luna（最快最便宜，$1 / $6）；全部 1.5M 上下文，新增 max（拉长推理链）与 ultra（内部拆分并行 subagent）两档推理模式。",
            "出关背景 — Sol 在内部网络攻击测试中拿下 96.7%，触及 Preparedness Framework 的\"高风险\"门槛，白宫网络安全 / 科技政策办公室曾要求先限定\"受信合作伙伴\"名单试跑，13 天后于 7/9 解除限制、正式公开（呼应上期 Fable 5 / Mythos 5 的出口管制插曲，前沿模型公开发布和政府审批绑定看起来正在变成常态）。",
            "Codex 桌面应用并入 ChatGPT — 独立 Codex 桌面 app 升级为全新 ChatGPT 桌面应用（Chat / Work / Codex 三种模式共存同一个壳），可设 Codex 为默认视图、用 Codex 图标；已有 Codex 任务 / 项目原样保留。Codex CLI（终端）不受影响，照常独立运作。",
            "ChatGPT Work — 新 agent 模式，接入你连接的各类 app / 工作流，把一个目标拆解成步骤、独立跑数小时，直接产出成品（表格、幻灯片、文档、可交互网页）而非聊天记录；Free 到付费全线可见入口，用量按 plan 分档限速。"
          ]
        },
        "others": [
          { "product": "Claude Cowork 扩展到 web / mobile", "org": "Anthropic", "date": "7/7", "desc": "此前只有桌面版，现在 web 和移动端也能用（Max 用户先行，未来几周扩展到其他 plan）；配合上线延长 Cowork 双倍用量额度至 8/5，媒体解读为直接对标同周发布的 ChatGPT Work" },
          { "product": "Claude Desktop app v1.19367.0", "org": "Anthropic", "date": "7/7", "desc": "Linux 支持通过 apt 自动更新；命令面板（⌘K / Ctrl+K）可直接归档 / 删除当前 chat、project、task 或 coding session；修复 Linux 图形加速引发的反复崩溃；远程 / SSH session 新增 Files 面板" }
        ],
        "trending": [
          { "name": "OpenClaw", "url": "https://github.com/openclaw/openclaw/releases", "desc": "7/9 发布 2026.7.1-beta.3：接入 GPT-5.6 全系列模型；新增 openclaw attach（把外部 harness 挂载到已有 Gateway session）；Telegram 内可 /login 发起 Codex 配对、实时 steer 运行中的 Codex；新增 on-exit 定时任务类型（监听某条命令退出后唤醒 agent）" },
          { "name": "DietrichGebert/ponytail", "url": "https://github.com/DietrichGebert/ponytail", "desc": "一周内涨约 8000+ star（现 76k），给 AI agent 装上\"最懒资深工程师\"人格的 skill / plugin，主打 YAGNI、少写代码，号称比基线代码量少 80-94%、成本低 42-75%" },
          { "name": "firecrawl/firecrawl", "url": "https://github.com/firecrawl/firecrawl", "desc": "147k stars，一周再涨 5100+，抓取网页并结构化成 agent 可用数据的老牌工具持续登顶 trending" }
        ],
        "trends": [
          "桌面 agent 产品把\"甩给它做一整段工作\"做成正式产品线 — ChatGPT Work 与 Claude Cowork web/mobile 几乎同周官宣，两家都在把 coding agent 的能力往通用办公场景泛化。",
          "前沿模型公开发布继续要过政府关卡 — GPT-5.6 Sol 因触及网络攻击\"高风险\"门槛被限定\"受信合作伙伴\"试跑 13 天，是本月第二次出现类似插曲（上期是 Fable 5 / Mythos 5），模型能力与监管审批绑定看起来要常态化了。",
          "Agent 人格 / 行为风格类 skill 走红 — ponytail 主打\"让 agent 少写代码\"的极简人格，说明除了功能类插件，\"调教 agent 行为习惯\"本身也开始形成一个小生态。"
        ]
      },
      "recommendations": [
        { "name": "Codex /model 按场景切档", "desc": "日常用 Terra，难题临时切 Sol 并开 max/ultra 推理模式，兼顾成本和上限" },
        { "name": "Claude Code /checkup", "desc": "原 /doctor 升级版，一键体检 + 自动修复常见安装 / 配置问题" },
        { "name": "升级后检查权限模式", "desc": "Claude Code 默认权限模式已变成 Manual，确认 /config 或 settings.json 里的设置还符合预期" }
      ],
      "references": [
        { "title": "GPT-5.6 官宣", "url": "https://openai.com/index/gpt-5-6/" },
        { "title": "Engadget：GPT-5.6 rollout", "url": "https://www.engadget.com/2210308/openai-rolls-out-gpt5-6-july-9/" },
        { "title": "TechTimes：GPT-5.6 政府关卡出关", "url": "https://www.techtimes.com/articles/319979/20260709/gpt-56-goes-public-after-12-day-white-house-gate-tests-voluntary-ai-framework.htm" },
        { "title": "The New Stack：Codex 并入 ChatGPT app，对标 Claude Cowork", "url": "https://thenewstack.io/openai-codex-work-atlas/" },
        { "title": "Developers Digest：ChatGPT Work 与 Codex 桌面应用", "url": "https://www.developersdigest.tech/blog/chatgpt-work-codex-desktop-app" },
        { "title": "TechCrunch：Claude Cowork 扩展 web/mobile", "url": "https://techcrunch.com/2026/07/07/the-coding-agent-wars-are-spilling-into-the-rest-of-the-office-claude-cowork/" },
        { "title": "Claude Code Changelog", "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md" },
        { "title": "Codex Changelog", "url": "https://developers.openai.com/codex/changelog" },
        { "title": "OpenClaw Releases", "url": "https://github.com/openclaw/openclaw/releases" },
        { "title": "ponytail（GitHub Trending）", "url": "https://github.com/DietrichGebert/ponytail" }
      ]
    },
    {
      "date": "2026-07-03",
      "coverage": { "from": "2026-06-12", "to": "2026-07-03" },
      "headline": "Claude Sonnet 5",
      "intro": "本期聚焦工具更新与业界新闻（覆盖区间 6/12 → 7/3）。头条：Claude Sonnet 5（6/30 发布，成为 Free / Pro 默认模型，agentic 能力大幅提升、报价显著低于 Opus 4.8）。",
      "note": "⚠️ 本期最大看点其实是一场三周的插曲：6/12 商务部一纸令下，Anthropic 被迫在全球范围下线 Fable 5 / Mythos 5（起因是 Amazon 研究者用 Fable 5 生成了漏洞利用代码）；6/30 在 Anthropic 重训安全分类器、拦截率提升到 99%+ 后，出口管制被撤销，两个模型恢复上线（详见下方\"新产品速览\"）。",
      "toolVersions": {
        "asOf": "7/2",
        "rows": [
          { "tool": "Claude Code (Anthropic)", "version": "v2.1.199", "update": "claude update" },
          { "tool": "Codex (OpenAI)", "version": "v0.142.5", "update": "npm update -g @openai/codex" },
          { "tool": "OpenClaw", "version": "2026.6.11", "update": "openclaw update" }
        ]
      },
      "toolUpdates": [
        {
          "tool": "Claude Code",
          "versionRange": "v2.1.175 → v2.1.199",
          "items": [
            { "feature": "Claude Sonnet 5 成为默认模型（v2.1.197）", "detail": "1M-token 上下文窗口；详见下方\"新产品速览\"头条" },
            { "feature": "Claude in Chrome 正式 GA（v2.1.198）", "detail": "浏览器 agent 从预览转为正式可用；同版本 subagent 默认转后台运行、新增 /dataviz skill" },
            { "feature": "Background agent 自动提交 + 开 draft PR（v2.1.198）", "detail": "代码完成后台 agent 可直接 commit / push / 开 PR，无需手动触发" },
            { "feature": "破坏性命令默认拦截（v2.1.183）", "detail": "auto mode 下 git commit --amend（非本 agent 提交）、terraform/pulumi/cdk destroy 等默认阻止，除非用户明确要求" },
            { "feature": "Sandbox 凭据隔离（v2.1.187）", "detail": "新增 sandbox.credentials 设置，可阻止 agent 在沙箱内读取凭据文件" },
            { "feature": "claude mcp login/logout（v2.1.186）", "detail": "MCP 服务端账号可直接在 CLI 里登录/登出，无需再手动改配置" },
            { "feature": "Retry watchdog 默认值提升（v2.1.199）", "detail": "CLAUDE_CODE_RETRY_WATCHDOG 默认重试次数上调到 300，长跑任务遇限流更抗造" }
          ]
        },
        {
          "tool": "Codex CLI",
          "versionRange": "v0.139.0 → v0.142.5",
          "items": [
            { "feature": "Rollout token 预算可配置", "detail": "可为 agent thread 设置 token 预算，超支自动中止 turn 并提示剩余额度" },
            { "feature": "Indexed web search 模式", "detail": "开放实时检索，但只允许访问服务端预先核准的 URL，兼顾联网能力与安全" },
            { "feature": "/plugins 分区浏览", "detail": "远程插件按 OpenAI Curated / Workspace / Shared with me 分区，turn 内可直接推荐并安装相关插件" },
            { "feature": "定时提醒 + 查询当前时间", "detail": "支持接收 UTC 定时提醒、直接查询当前时间（含客户端 app-server 时钟）" },
            { "feature": "DigitalOcean Droplet Workspace 插件", "detail": "可一键在 DigitalOcean 上开 Droplet、配 SSH，作为 Codex 的远程工作区" }
          ]
        }
      ],
      "industryNews": {
        "headline": {
          "title": "🔥 Claude Sonnet 5（6/30 发布）— 本期重点",
          "summary": "一句话：Anthropic 把 Sonnet 系列升级为\"迄今最 agentic 的 Sonnet\"，性能逼近 Opus 4.8，价格却大幅更低，直接成为 Free / Pro 默认模型。",
          "points": [
            "Agentic 能力大跃进 — 早期用户反馈：以往 Sonnet 系列做到一半就停的复杂任务，Sonnet 5 能够独立跑完；推理、工具调用、代码、知识工作全面优于 Sonnet 4.6。",
            "安全性同步提升 — 安全评估显示 Sonnet 5 在 agentic 场景下不良行为发生率低于 Sonnet 4.6，总体更安全可用。",
            "定价 — 早鸟价 $2 / $10 per M（input / output，至 8/31），随后转为标准价 $3 / $15 per M；覆盖 Free、Pro、Max、Team、Enterprise 全线。",
            "定位 — 成为 Free / Pro 用户默认模型，为 Opus 4.8 提供更便宜的 agentic 替代路径，呼应\"跑更多 agent、而不是更贵的模型\"这条降本趋势。"
          ]
        },
        "others": [
          { "product": "Fable 5 / Mythos 5 出口管制撤销", "org": "Anthropic", "date": "6/30", "desc": "商务部 6/12 一度要求 Anthropic 全球下线两款模型（起因 Amazon 研究者用 Fable 5 生成漏洞利用代码）；Anthropic 重训安全分类器（拦截率提至 99%+）后，出口管制于 6/30 撤销，模型恢复上线" },
          { "product": "Grok Imagine Video 1.5", "org": "xAI", "date": "6/17", "desc": "image-to-video 模型，登顶 Image-to-Video Arena；原生同步音频，定价 $4.20/分钟（约为 Sora 2 的 1/7）" },
          { "product": "Gemini 3.5 Pro 跳票", "org": "Google", "date": "6/30", "desc": "I/O 上承诺 6 月 GA，但 6/30 如期落空，官方未正式确认、仅表示仍在企业早期测试阶段，预计顺延至 7 月" }
        ],
        "trending": [
          { "name": "OpenClaw", "url": "https://github.com/openclaw/openclaw/releases", "desc": "6/30 发布稳定版 2026.6.11，聚焦可靠性修复；7/2 beta 版接入 GPT-5.6、新增 openclaw attach 外部 harness 挂载能力" },
          { "name": "anthropics/claude-plugins-official", "url": "https://github.com/anthropics/claude-plugins-official", "desc": "Anthropic 官方 Claude Code 插件目录仓库，登上 GitHub Trending" },
          { "name": "stablyai/orca / garrytan/gstack", "url": "https://github.com/trending", "desc": "\"跑一个 agent 舰队\"成为新话题：orca 面向桌面/移动同时管理多个并行 coding agent，gstack 是一套 23 个角色分工的 Claude Code 预设工具集" }
        ],
        "trends": [
          "Sonnet 级模型对齐旗舰能力、大幅降价 — Claude Sonnet 5 逼近 Opus 4.8 的表现却明显更便宜，\"用更便宜的模型跑更多 agent\"成为主流打法。",
          "前沿模型的出口管制从理论风险变成真实运营中断 — Fable 5/Mythos 5 被下线三周才恢复，模型能力和地缘政治合规已深度绑定。",
          "agent 编排从单 agent 转向\"agent 舰队\"管理 — orca、gstack 等工具兴起，重心从写好一个 agent 转向同时调度、监控一批 agent。"
        ]
      },
      "recommendations": [
        { "name": "Claude Sonnet 5 做长跑任务的默认驱动", "desc": "agentic 能力接近 Opus 4.8 但价格更低，适合作为长时间自主任务的默认模型" },
        { "name": "Codex rollout token 预算", "desc": "给长跑 agent thread 配置 token 预算上限，避免失控跑飞消耗" },
        { "name": "Claude Code sandbox.credentials", "desc": "给 agent 沙箱加一道口子，阻止误读凭据文件" }
      ],
      "references": [
        { "title": "Claude Sonnet 5 发布", "url": "https://www.anthropic.com/news/claude-sonnet-5" },
        { "title": "TechCrunch：Sonnet 5 更便宜的 agent 方案", "url": "https://techcrunch.com/2026/06/30/anthropic-launches-claude-sonnet-5-as-a-cheaper-way-to-run-agents/" },
        { "title": "CNBC：Fable 5 / Mythos 5 出口管制撤销", "url": "https://www.cnbc.com/2026/06/30/anthropic-says-trump-admin-has-lifted-export-controls-on-claude-fable-5-and-mythos-5.html" },
        { "title": "Claude Code Changelog", "url": "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md" },
        { "title": "Codex Changelog", "url": "https://developers.openai.com/codex/changelog" },
        { "title": "OpenClaw Releases", "url": "https://github.com/openclaw/openclaw/releases" },
        { "title": "xAI：Grok Imagine Video 1.5", "url": "https://x.ai/news/grok-imagine-video-1-5" },
        { "title": "Gemini 3.5 Pro 跳票报道", "url": "https://cryptobriefing.com/google-delays-gemini-35-pro-launch-to-july-2026/" }
      ]
    },
    {
      "date": "2026-06-12",
      "coverage": { "from": "2026-05-29", "to": "2026-06-12" },
      "headline": "Claude Fable 5",
      "intro": "本期聚焦工具更新与业界新闻 / 新工具（覆盖区间 5/29 → 6/12）。头条：Claude Fable 5（6/9 发布，Anthropic 首个公开的 Mythos-class 旗舰）。",
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
