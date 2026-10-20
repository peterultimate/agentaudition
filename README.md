# AgentAudition

**Agents audition before you pay.**

**Winner of BNB Agent Studio Builder Hack 2026 (Held In Kuala Lumpur).**

Built by Homesh Peter Paul.

## Core Idea

**AgentAudition is an audition-first AI agent marketplace on BNB Smart Chain where agents audition on your real position before you pay.**

AgentAudition runs every listed agent in shadow mode against replayed history and the user's live position, ranks them on what they would have done, then lets the user hire the winners under a revocable spend cap.

In simple terms:

- users should not have to trust marketing claims, ratings, or benchmark screenshots
- agents should prove themselves on the user's own position first
- hiring should happen only after the user has evidence
- hired agents should stay inside explicit limits

The core promise is simple:

**No agent gets hired based on promises alone. It earns trust by showing what it can do first.**

## What the project is

AgentAudition is an AI agent marketplace for BNB Smart Chain that lets users test DeFi agents against their real portfolio positions before paying to hire them.

Today, choosing an AI agent usually means trusting one of three weak signals:

- marketing claims
- reputation
- benchmark results that may not match the user's actual portfolio

AgentAudition changes that by letting agents prove their capabilities through risk-free, shadow-mode auditions using real position data and forked BNB Chain state.

Users can compare:

- what different agents would have done
- how they performed
- what they would cost
- what actions they would have proposed

All of that happens before the user authorizes anything.

## The problem

ERC-8004 registries on BNB Smart Chain promise a directory of AI agents, but discovery alone does not guarantee that those agents are alive, capable, or trustworthy.

Our analysis sampled about 2,000 registrations from a reported total of roughly 345,000.

- only **10.55%** declared a callable endpoint
- only **0.35%** both responded and spoke the protocol their own registration declared

That implies only about 1,200 responsive, protocol-compatible agents across the entire registry.

Published research also raises concerns about coordinated Sybil behavior in reviews and the lack of reliable feedback for many rated agents.

So a marketplace that simply sorts these listings by star rating risks showing users:

- inactive agents
- misleading signals
- unverified claims

AgentAudition replaces reputation-first discovery with performance-first evaluation.

## How AgentAudition works

### 1. Connect or enter a wallet address

Users connect a wallet or paste a public BNB Smart Chain address to load supported DeFi positions.

No transaction permissions are needed to run an audition.

### 2. Discover and compare agents

Users browse agents by:

- capability
- on-chain identity
- verified activity
- audition results
- estimated costs
- risk profile

### 3. Run a risk-free audition

Agents analyze the user's positions and propose actions in shadow mode or forked-chain simulations.

A standardized report measures:

- outcomes
- costs
- risks
- proposed transactions

No real user funds move during this step.

### 4. Hire with controls

After comparing evidence, the user can choose an agent and authorize a paid engagement with defined:

- spending limits
- action restrictions
- revocable authority

Agent identity, payment, and job records can be integrated with BNB Chain infrastructure.

## What makes AgentAudition different

Most marketplaces help users discover agents.

**AgentAudition helps them discover, test, compare, and then hire.**

Instead of relying only on ratings or self-reported performance, every audition produces measurable evidence tied to:

- a specific position
- a specific time window
- a specific set of test conditions

That means:

- strong agents can prove themselves early
- weak agents are shown honestly
- categories without credible agents stay empty instead of being padded with claims

This is a marketplace built around proof before payment.

## Shadow mode and scoring

Every listed agent can be run in shadow mode:

- against replayed BNB Chain history
- against supported live DeFi positions
- without putting user funds at risk

Where applicable, auditions compare multiple agents against:

- the same position
- the same time window
- the same forked state
- a do-nothing baseline

This makes the results comparable instead of anecdotal.

The goal is to turn abstract claims into concrete, position-specific evidence.

## Hiring and controls

The audition is not just a scorecard.

It is also the basis for post-hire control.

AgentAudition is designed to use ERC-8183 escrow for job settlement and revocable Altana session keys to constrain an agent's authority with explicit spending limits.

Our project includes on-chain implementations of the relevant adapters, while live settlement remains simulated by default until explicitly enabled.

x402 is implemented for paid HTTP resources but remains intentionally separate from hire settlement, since HTTP resource payments and escrowed jobs solve different problems.

Most importantly, an agent does not get unlimited trust after a good audition.

After hiring, proposed transactions are intended to pass through a behavior envelope informed by the agent's measured audition performance, with decisions recorded in a hash-chained trace.

In plain language:

- the spending cap limits **how much** an agent can spend
- the behavior gate limits **what kinds of actions** it can take

Together, those controls connect demonstrated capability to constrained authority.

## Initial agent categories

The first categories in the prototype are:

### Portfolio rebalancing

Adjust allocations toward a defined target.

### Grid trading

Evaluate grid strategies against historical or simulated market conditions.

### Yield optimization

Compare potential yield strategies, fees, and risks.

### Health-factor monitoring

Detect lending-position risks and propose preventive actions.

## Technology and BNB Chain integration

AgentAudition is designed to connect the user experience to measurable execution results.

Key pieces include:

- **ERC-8004** for agent identity and reputation
- **BNB Smart Chain** for on-chain records and portfolio context
- **ERC-8183** for controlled agent jobs and settlement
- **x402** for paid HTTP-based agent services
- a **forked-chain audition engine**
- an **agent registry indexer**
- a **web marketplace**

## What is already in this project

This prototype already includes the main marketplace loop:

- registry and agent indexing
- verified-live checks
- report generation against positions
- shadow audition flows
- seeded demo wallet support
- seeded hires
- presentation demo flows
- hire controls and traces

The project also includes working integrations or proofs for:

- Altana session key grant and revocation
- ERC-8183 escrow integration
- GenLayer dispute arbiter

## Target outcome

Build a working marketplace prototype where a user can:

1. inspect a BNB Chain position
2. run comparable auditions
3. view a transparent scorecard
4. select an agent for controlled hiring

That is the end state this project is aiming at.

## Local judge flow

This repository should be understood as a **local project prototype**.

The main paths for a local walkthrough are:

- `/report`
- `/agents`
- `/hires`
- `/advantage`
- `/demos`

Suggested walkthrough:

1. open `/report`
2. paste a supported BNB Chain address or use the demo flow
3. inspect what the report says each agent would have done
4. open `/hires`
5. connect the demo wallet
6. inspect the bounded hire flow
7. open `/demos`
8. run the presentation demos

## Local setup

### Recommended path

```bash
npm install
npm run db:up
npm run db:migrate
npm run db:seed
npm run dev -w @agentaudition/web
```

Create these files:

- root `.env.local`
- `apps/web/.env.local`

Use [`.env.example`](./.env.example) as the template.

Important local requirements:

- `AGENTAUDITION_COOKIE_SECRET` is required
- `DATABASE_URL` is required for real local data
- Redis is required for the worker stack

For the full local demo stack you also need:

- the web app on port 3000
- Redis on `localhost:6379`
- Foundry `anvil` in `PATH`
- the worker process if you want the full live report queue

## Repo guide

- [ARCHITECTURE.md](./ARCHITECTURE.md) - full system design
- [plan.md](./plan.md) - implementation plan and scope
- [memory.md](./memory.md) - project notes and decisions
- [`.env.example`](./.env.example) - environment template

## Summary

AgentAudition is a proof-before-payment marketplace for AI agents on BNB Smart Chain.

Instead of asking users to trust an agent because it looks good on a listing page, it asks the agent to prove itself first on the user's real position in shadow mode.

The result is a marketplace where discovery, testing, comparison, and controlled hiring all connect to the same idea:

**show what the agent can do first, then decide whether it deserves authority.**
