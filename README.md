# Draftboard

A scouting-inspired NBA player card and comparison tool, built around real research into how NBA teams actually evaluate draft prospects.

## Summary

Draftboard presents NBA players as collectible trading cards, front and back, with the back surfacing the metrics and context that scouts actually care about rather than a generic stat block. Users can flip a card to see a player's bio, per-game and season splits, and (in progress) compare two players' shot charts side by side.

The project started as a design exercise and became a research-driven one. Before writing any code, I wanted to understand what "scouting" actually looks like in practice, so I pulled and read through scout interview transcripts (Brooklyn Nets front office and scouting staff) to identify what evaluators actually look at, what's hard for them to measure, and where their real pain points are. That research shaped both the data model and the card design.

## The design pivot

My original plan was a modern, Apple-style interface clean motion design built with Framer Motion, heavy on transitions and polish. That plan hit a wall on image resolution: the player photography I had access to didn't hold up at the scale and crispness that aesthetic needed, and roughly two days in, it was clear the direction wasn't going to work with the assets available.

I pivoted to a trading-card format instead. I actually had (headshots, team colors, bio fields). The card format also turned out to be a better match for the research: a physical trading card and a scout's mental model of a prospect (photo, vitals, stat line, one read on projection) aren't far apart.

## Research: how scouts actually evaluate players

Before building the card back, I reviewed scouting interview transcripts covering four roles a GM/domestic scouting lead, a player development lead, an international scout, and a draft-room lead. A few findings shaped the product directly:

**What scouts actually weigh.** Beyond box-score numbers, recurring themes were "82-game value vs. 16-game value" (long-term production vs. playoff-lens fit), positional size and being "over 6'8"," length and defensive versatility, shot selection and aggressiveness, "vision," and flashes of an "NBA move"  skills that look translatable to the next level. Several of these (like shooting touch or an "NBA move") are fundamentally things a stats API cannot capture; they only show up on film or in person. I tried to reflect the measurable half of this list on the card back (positional size via height/wingspan, shot data, per-game splits) and left the qualitative half as an open extension point rather than faking it with placeholder text.

**A recurring pain point: cross-context comparability.** Scouts described comparing players across NCAA, EuroLeague, and other international leagues as "one of the hardest things to do," currently solved in-house by one analytics specialist manually adjusting stats per league. That's a big part of why I ultimately scoped this project to NBA-only data rather than trying to blend in NCAA or international stats I couldn't normalize  in the time available.

**International players.** Scouts specifically flagged evaluating whether traits "translate" across leagues and cultures as a distinct, underserved evaluation problem. I considered building a filter to surface players by country of origin as a way to surface this dimension of scouting that the raw stats don't show noted below as a feature I'd like to add.

**WNBA.** I also considered including WNBA players for a broader dataset, but the available free APIs had meaningfully thinner season, combine, and shot data for the WNBA, so I scoped down to NBA-only to keep the data quality consistent across every player on the board.

**Admin burden.** Every scout interviewed mentioned report writing as one of the most time-consuming parts of the job — "typing reports is actually the longest part of the day." That's the direct inspiration for the scout notes/favoriting feature described below.

## Architecture

```
Next.js (frontend)  →  FastAPI (backend)  →  PostgreSQL (Supabase)
                                                    ↑
                              seed scripts (run locally, one-time/periodic)
                                    ↑              ↑
                              nba_api          ESPN API
                          (stats, bio,       (team colors,
                           shots, combine)      logos)
```

The backend never calls any external API at request time — all NBA and ESPN data is fetched once via local seed scripts and written into Postgres. The live app only ever reads from the database. This was a deliberate choice: `stats.nba.com` (which `nba_api` wraps) blocks requests from most cloud/datacenter IPs, including Vercel's and most PaaS hosts. Rather than run a proxy in production, I seed the database from my own machine and let the deployed app serve purely from Postgres — faster, simpler, and with nothing to keep alive in production.

### Frontend

- **Next.js** — chosen specifically to avoid the manual routing/config overhead of a plain React + router setup, and for straightforward Vercel deployment.
- **TypeScript** — end to end, including shared types for player, team, and stat shapes between components.
- **Tailwind CSS** — utility-first styling for the card layouts, metric grids, and comparison views.
- **react-nba-logos** (GitHub package) — team logo icons, keyed by team abbreviation.
- **ESPN's public teams API** — used for team primary/alternate hex colors and logo URLs, seeded into a `teams` table rather than called live (see Data pipeline below).


### Backend

- **FastAPI** — routers for `/players`, `/teams`, and `/shots`, each backed by a SQLAlchemy model and a Pydantic response schema.
- **Supabase (PostgreSQL)** — chosen as the data store specifically so the backend never needs to talk to `nba_api` live. Supabase gives free hosted Postgres without needing to manage a database server.
- **nba_api** — the source for player bio (born, height, weight, college, draft info, jersey), season-by-season and career stats (regular season and playoffs separately, which maps directly to the "82-game vs. 16-game value" distinction from the research), shot chart data (court coordinates + make/miss per attempt), and draft combine measurements (max vertical, wingspan, standing reach) where available.
- **ESPN's hidden API** — the source for team colors and logos, since neither `nba_api` nor the free tier of balldontlie expose team branding data.

### Data pipeline

Each data source has its own seed script, run locally and idempotent (safe to re-run):

- `seed_teams.py` — pulls all 30 teams from ESPN, upserts into `teams`.
- `seed_players.py` — pulls bio data per player from `nba_api`, upserts into `players`.
- `seed_season_stats.py` — pulls regular season + playoff season-by-season totals per player.
- `seed_shots.py` — pulls shot chart data (court x/y, make/miss, zone, distance) for a target season, with automatic fallback to the prior season if a player's data is empty (e.g. injury).
- `seed_combine.py` — pulls combine measurements per player where they exist (recent draft classes only — most veteran players predate the combine dataset or have no recorded testing).

The player set is currently a fixed, hardcoded list of ~10 players rather than the full league, to keep the initial build scoped — see Future features.

## Bugs and challenges

The biggest non-technical challenge was indecision on design direction I went back and forth on the Apple-style motion concept for about two days before committing to the trading-card pivot described above.

The biggest technical time sink was local Python environment setup — I lost a couple of days to symlink issues and getting the virtual environment (`uv`) configured correctly before the backend could run reliably.

## Design Inspo


## Features I didn't get to

I ran out of time to build several things the data already supports:

- **Shot chart visualization** — plotting each player's shot data (already seeded) onto a basketball court SVG, so two players' shooting profiles can be visually compared side by side.
- **A binder-style comparison view** — presenting two player cards side by side like pages in a trading card binder, rather than a plain grid.
- **Search** — a search bar to find players by name rather than browsing the fixed set.
- **International/country filtering** — surfacing players by country of origin, directly inspired by the scouting research on evaluating international prospects.
- **Scout notes** — directly inspired by scouts' own complaint that paperwork/report writing eats the most time in their day. The idea: a per-player notes field where a user can write scouting notes, favorite players, view their favorited list, and export their notes as PDF or JSON — essentially a lightweight version of the report-writing workflow the research surfaced as the single most repeated pain point across every scout interviewed.

## AI Tool Usage Disclosure
I used ChatGPT as a learning and debugging assistant during the development of my project. The core project concept, product direction, and feature decisions were my own. AI was used to help me understand technical concepts, troubleshoot issues, and improve my understanding of backend architecture.

### Summary of prompts/topics used:

**Backend architecture and FastAPI setup**

- Asked for explanations of how to structure a FastAPI backend project.
- Asked about organizing folders such as models, schemas, routers, services, and scripts.
- Asked for guidance on best practices for separating API integrations from application logic.
- Asked which endpoints in the pbpstats API matched a specific list of desired data points (bio, college/NBA stats, PPG/RPG/APG, combine numbers, scouting-style descriptors).
- Provided balldontlie's full OpenAPI spec and asked which endpoints to use given everything discussed.
- Debugged multiple run-time errors: wrong uv run invocation, ModuleNotFoundError for scripts, a TypeError from using the raw (non-normalized) nba_api dict shape.

**Database design and SQLAlchemy**

- Asked for explanations of the difference between SQLAlchemy models and Pydantic schemas.
- Asked how database relationships work using IDs and how related tables (players, stats, shots, reviews) should connect.
- Asked for guidance on designing database tables for NBA player data.

**Data ingestion and API integration**

- Asked how to structure external API calls from sources such as NBA APIs.
- Asked about creating import/seed scripts to fetch external data and store it in PostgreSQL.
- Asked about organizing different API integrations into separate service files.
- Asked for explanations of how to transform API responses into database objects.

**Debugging and environment setup**

- Used AI assistance to troubleshoot Python environment issues, virtual environments, package installation, and running FastAPI locally.
- Asked for help diagnosing dependency issues involving Python, SQLAlchemy, PostgreSQL, and package management.

**Learning backend concepts**

- Asked conceptual questions about backend workflows, including:
    - How frontend applications retrieve database IDs.
    - How APIs, services, databases, and frontend components communicate.
    - How database models translate external API data into stored records.

### Example prompt summaries:

- "Explain the difference between SQLAlchemy models and Pydantic schemas."
- "How should I structure a FastAPI backend that imports NBA data and stores it in PostgreSQL?"
- "How should I organize API service files when using multiple external APIs?"
- "How does a seed script fetch API data and save it to a database?"
- "Help me debug my FastAPI/PostgreSQL environment setup."

### AI contribution:

AI was used primarily as a technical tutor and debugging resource. It helped explain unfamiliar backend concepts, suggest common architectural patterns, and assist with troubleshooting. I made the final decisions regarding the project scope, application design, data sources, features, and implementation approach.