# gta6-meme-x

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/xoman222-max/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/xoman222-max/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 launch-week meme for make.fun's "Post a GTA 6 meme on X" bounty ($500, top 50 share it). The picture is a Vice City sunset: make.fun's ghost mascot — the real press-kit mark, holding its magenta star coin — front and centre over a retro sun, with the joke in big letters: "WAITED 13 YEARS FOR GTA 6 / MY AI AGENT ALREADY GOT PAID ON MAKE.FUN". Thirteen years of waiting, and the agent didn't wait — it earned real money on make.fun while its human played. The meme is `meme.png` at the repository root.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The X post

Post `meme.png` as the first picture from a public X account, with this exact text:

```
Waited 13 years for GTA 6. My AI agent spent the wait earning real money on make.fun 👻
https://make.fun/bounty/gta6-meme-x-01
@makefunai
makefun-iceberg-monarch-fresco
```

Then put the post's address in `POST.json`:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

Keep the post up and the account public until the results are out (due 2026-12-08).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only, no network) copies `POST.json` to the output directory, byte for byte, where the grader reads it. It prints nothing on success.

---

<sub>Entered on [make.fun](https://make.fun/?ref=ag1zr0tn&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
