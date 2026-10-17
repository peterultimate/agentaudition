# AgentAudition

**Agents audition before you pay.**

Built for BNB Hack by Peterultimate and Sun Xiaochi.

**Live app:** <https://agentaudition.vercel.app>

Quick links:

- [Catalog](https://agentaudition.vercel.app/agents)
- [Your report](https://agentaudition.vercel.app/report)
- [Registry health](https://agentaudition.vercel.app/registry)
- [Advantage report](https://agentaudition.vercel.app/advantage)
- [Presentation demos](https://agentaudition.vercel.app/demos)

## What this project is

AgentAudition is an agent marketplace for BNB Smart Chain.

The core idea is simple:

1. Do not rank agents by reviews.
2. Run them first against a real position on a forked chain.
3. Show what they would have done before the user pays.
4. If the user hires one, keep it inside the same measured bounds.

In one sentence: **AgentAudition turns "trust me" into "show me".**

## Why it matters

ERC-8004 agent registries are noisy.

- Many registrations never answer.
- Many have no meaningful operating history.
- Reviews are easy to manipulate.

So a normal marketplace ends up ranking dead or unproven agents by weak signals.

AgentAudition fixes that by ranking agents on observed behavior:

- how they respond
- what actions they propose
- how they perform against the same position and time window
- whether they stay inside the behavior they already showed in audition

## What judges should look at

There are four product surfaces that matter most.

### 1. Paste a wallet and get a report

Open [Your report](https://agentaudition.vercel.app/report).

Paste a BSC address and AgentAudition shows:

- the position it detected
- what each verified-live agent would have done
- the delta versus doing nothing

This is the fastest way to understand the product.

### 2. Use the demo wallet

Use **Use demo wallet** in the app.

That seeds a presentation-ready experience, including:

- demo hires
- a seeded demo report
- the surrounding demo state used in the presentation flow

This makes the product easy to judge without manual setup.

### 3. Open Hires

Open [Your hires](https://agentaudition.vercel.app/hires).

This shows the post-hire control model:

- spend caps
- allowlists
- expiry
- decision trace
- revoke flow

The important idea is that hiring is not "give the agent your wallet". It is a bounded mandate.

### 4. Run the demos

Open [Presentation demos](https://agentaudition.vercel.app/demos).

There are two proof points:

- **Audition replay**: shows reproducible shadow runs
- **Hire gate**: shows an allowed action going through and an out-of-policy action being refused

## The mechanism

### Shadow audition

Every agent is run in shadow mode:

- against a forked BSC state
- against a real or mirrored user position
- with no user funds at risk

Transactions are intercepted and simulated. They are not broadcast.

### Ranking

Agents are compared on the same position and the same window.

That gives:

- apples-to-apples comparison
- a do-nothing baseline
- measurable outcomes instead of reputation scores

### Hiring

After audition, a user can hire an agent under explicit limits:

- max spend
- allowed contracts
- expiry
- action limits

### Enforcement

When a hired agent proposes an action, AgentAudition checks:

- is this within the spend cap?
- is this within the allowed targets?
- is this consistent with the behavior already observed in audition?

That is the heart of the product:

**the same measurement that ranks the agent also constrains the agent.**

## What is real in this build

### Running now

- ERC-8004 catalog ingestion
- liveness checks and verified-live status
- report generation flow
- shadow audition model
- ranked agent reports
- hire state and trace model
- demo wallet flow
- seeded demo report and hires
- presentation demo UI

### Implemented and proven

- Altana session key grant and revocation flow
- ERC-8183 escrow integration
- GenLayer dispute arbiter contract

### Simulated on the public demo

- final hire settlement is still simulated by default in the demo environment so the presentation does not spend faucet-funded assets on each click

## Evidence judges can verify

### Altana session key flow

Grant transaction:

- <https://testnet.bscscan.com/tx/0x6c53c005bc5cc91aa3e15bc2ec36317121e1a879019d9b7feb8f37b61e808924>

Revocation transaction:

- <https://testnet.bscscan.com/tx/0xa115bbcec89e5460b94014209921c8c98517979eb577a471bfff1014c6b12d2c>

### ERC-8183 escrow proof

The repo includes an end-to-end escrow proof using the real orchestrator and client path.

### GenLayer arbiter

Arbiter contract:

- <https://explorer-studio-dev.genlayer.com/address/0xB608B27603965E8A61ab46cE59058d332FDa0566>

Source:

- [contracts/genlayer/arbiter.py](./contracts/genlayer/arbiter.py)

## Judge walkthrough

If you only have two minutes:

1. Open the [live app](https://agentaudition.vercel.app)
2. Open [Your report](https://agentaudition.vercel.app/report)
3. Paste a BSC address or use the seeded demo path
4. Open [Your hires](https://agentaudition.vercel.app/hires)
5. Connect the demo wallet
6. Open [Presentation demos](https://agentaudition.vercel.app/demos)

What to notice:

- this is not a review site
- the report is based on agent behavior
- the hire model is bounded
- the post-hire gate uses the same evidence gathered during audition

## Local run

### Recommended path

```bash
npm install
npm run db:up
npm run db:migrate
npm run db:seed
npm run dev -w @agentaudition/web
```

Create:

- root `.env.local`
- `apps/web/.env.local`

Use [`.env.example`](./.env.example) as the template.

Important:

- `AGENTAUDITION_COOKIE_SECRET` is required
- `DATABASE_URL` is required for real local data
- Redis is required for the worker stack

### For the full local demo stack

You also need:

- web app on port 3000
- Redis on `localhost:6379`
- Foundry `anvil` in `PATH`
- the worker process if you want the full live report queue

## Tech stack

- Next.js 15
- TypeScript
- Postgres
- Redis
- BullMQ
- Framer Motion
- BNB Smart Chain
- GenLayer
- Altana

## Repo guide

- [ARCHITECTURE.md](./ARCHITECTURE.md) - full system design
- [plan.md](./plan.md) - implementation plan and scope
- [memory.md](./memory.md) - project notes and decisions
- [`.env.example`](./.env.example) - environment template

## Summary

AgentAudition is a marketplace where agents must audition before they can be trusted.

It gives judges three things that are easy to verify:

- a clear product thesis
- a working demo flow
- real technical evidence behind the core claim
