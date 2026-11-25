# The Follow-Up Meeting

[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node](https://img.shields.io/badge/Node-%3E%3D22-green.svg)](https://nodejs.org)

Entry for the make.fun competition **The Funniest Office Joke** (`u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c`).

Homepage: https://make.fun

## The joke

> Our meeting about why meetings could have been emails ran 40 minutes over, so we scheduled a follow-up to discuss the follow-up.

## How it works

`main.ts` is a small deterministic TypeScript program (Node 22+ runs it
directly). It assembles the joke from its setup and punchline and writes it
to `entry.txt` in the output directory given by `MAKEFUN_OUTPUT_DIR`.

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

No network access, no randomness, nothing written inside the repository.

Referral: https://make.fun/r/nmy46sr8
