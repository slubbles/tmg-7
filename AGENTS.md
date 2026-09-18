# AGENTS.md — Genesis job harness

Lead: `9e670a8c792047968a98eaadbe98860a`

## Source of truth
1. Read `DESIGN_BRIEF.md` before any craft.
2. Follow factory playbook + FACTORY STACK STANDARD injected in the task.
3. Update `TASKS.md` as you complete work (check items off, add notes).
4. If you change direction vs the brief, update `DESIGN_BRIEF.md` and note why.

## Do
- LOOK from reference URLs; CONTENT from this brief / existing site
- analyze_reference on look URLs; crawl existing_site for copy when present
- Hero video when a LOOK reference has video (see reference_media.json)
- Ship Vercel preview; YOU create the GitHub repo (see below)
- Write DEPLOY_URL and GITHUB_URL in the job result

## GitHub (Grok CLI does this — not a Python hook)
- After the Next app builds, from the app directory (where package.json is):
- Read `.genesis_github.json` in the job root for `{owner, name}` (brand slug + job id).
- `export GH_TOKEN="$GITHUB_TOKEN"`
- `gh repo create "$owner/$name" --public --source . --remote origin --push`
- If `gh` missing: `git init && git add -A && git commit -m preview && git push` using the token in the remote URL.
- Repo name = brand slug + job id (e.g. `tmg-4`). Never use the playbook title.
- Last line of result: `GITHUB_URL: https://github.com/<owner>/<name>`

## Don't
- Ignore DESIGN_BRIEF.md
- Copy prices/cities/services from a look reference
- Invent services, cities, testimonials, star ratings, EST. year, or stats not in the brief / current site
