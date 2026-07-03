# AI Salon 周报 (gh-pages)

This branch hosts the **AI Salon 周报** page for **jingyang-rico/ai-salon**,
published via GitHub Pages at https://jingyang-rico.github.io/ai-salon/.

- `index.html` — static page, renders `report-data.js`. No external dependencies.
- `report-data.js` — report content, one entry per weekly issue.

## How it is updated

A scheduled Claude agent runs every **Friday 14:30 Beijing time** and:

1. Reads `lastReportDate` from `report-data.js` (the `date` of `issues[0]`,
   the most recently published issue).
2. Gets the real current Beijing date via `date` (Beijing = UTC+8) — never
   assume the trigger time. The coverage window for the new issue is
   `[lastReportDate, today]`.
3. Researches AI tool updates and industry news that happened inside that
   window (see "Research playbook" below).
4. Builds a new issue object following the schema below and **prepends** it
   to `issues` (newest first).
5. Updates `updatedAt` and `lastReportDate` to today, then commits and
   pushes to `gh-pages` only.

If research turns up nothing meaningful for the week (a genuinely quiet
week), still publish a short issue — a one-line `intro` noting it was a
quiet week is fine. Only skip the run entirely if `today` equals
`lastReportDate` (i.e. the job somehow ran twice on the same day).

`main` is never touched by this automation. Never create a PR — commit
directly to `gh-pages`.

## Research playbook

Sources to check every run (skip ones with nothing new in the window):

- **Claude Code**: https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md
- **Codex CLI**: https://developers.openai.com/codex/changelog
- **OpenClaw**: check its GitHub releases/changelog
- General web search for major model/product releases from Anthropic,
  OpenAI, Google, Meta, Microsoft, xAI etc. within the coverage window
  (queries like `"<model/product name>" release <month> <year>`, `AI model
  release this week`, `new AI coding tool <month> <year>`)
- GitHub Trending (https://github.com/trending) for notable AI/agent repos
  gaining traction that week

Pick **one headline** — the single most notable release/story of the week
(new flagship model, major tool capability, etc.). If nothing rises above
routine version bumps, it's fine to omit `headline`/`industryNews.headline`
for that issue.

## Schema (`report-data.js`)

```js
window.AI_SALON = {
  updatedAt: "YYYY-MM-DD",       // date of the last run
  lastReportDate: "YYYY-MM-DD",  // bookmark = issues[0].date
  issues: [
    {
      date: "YYYY-MM-DD",                        // required, publish date
      coverage: { from: "YYYY-MM-DD", to: "YYYY-MM-DD" }, // required
      headline: "string",                        // optional, one-line pick of the week
      intro: "string",                           // required, 1-3 sentence summary
      note: "string",                            // optional, callout (e.g. an announcement)
      toolVersions: {                             // optional
        asOf: "M/D",
        rows: [{ tool, version, update }]         // update = the upgrade command
      },
      toolUpdates: [                              // optional
        { tool, versionRange, items: [{ feature, detail }] }
      ],
      industryNews: {                              // optional
        headline: { title, summary, points: [] },  // optional
        others: [{ product, org, date, desc }],     // optional
        trending: [{ name, url, desc }],             // optional
        trends: []                                   // optional, one-liners
      },
      recommendations: [{ name, desc }],           // optional
      closingNotes: {                               // optional, editorial/narrative note
        intro: "string (\\n\\n separates paragraphs)",
        table: { headers: [], rows: [[]] },         // optional
        outro: "string"
      },
      references: [{ title, url }]                  // recommended, cite sources
    }
  ]
};
```

Every field marked optional may be omitted entirely (not just left empty) —
`index.html` skips rendering any section whose data is missing. Keep entries
in Chinese; technical terms, product names, and code identifiers stay in
their original form (matching how the source Confluence doc — the AI Dev
双周会 report this format is modeled on — writes them).

The source Confluence doc this format is modeled on also had "AI 项目进展"
and "开放讨论" sections (project updates / open floor discussion at a live
meeting). This automated report has no such sections — don't mention them
being "skipped" or "略" in `intro`; just summarize what's actually in this
issue.

`node --check report-data.js` should pass (it must stay valid JS) before
committing.

## Slack notification

After pushing, post a short summary to the **#ai-salon** Slack channel via
the Slack MCP tools: look up the channel by name (`ai-salon`), then post a
message containing the week's headline (if any), 2-4 bullet highlights, and
a link to the page (deep-link to the new issue's anchor, e.g.
`https://jingyang-rico.github.io/ai-salon/#issue-YYYY-MM-DD`). If Slack
posting fails for any reason, don't fail the whole run — the gh-pages
commit/push is the primary deliverable; note the Slack failure in the final
report text instead.
