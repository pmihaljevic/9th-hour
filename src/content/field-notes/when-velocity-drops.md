---
title: "When Velocity Drops and Nobody Knows Why"
description: "A common pattern in B2B teams: feature velocity stalls after 18 months. Here's how to diagnose the root cause and what usually fixes it."
publishedAt: 2026-03-03
tags: ["velocity", "team-dynamics", "diagnosis"]
draft: false
---

## The Situation

Your team shipped fast for a year. Features were landing weekly. The product was growing, users were happy, and the backlog felt manageable.

Then somewhere around month 18, things slowed down. A feature that should take a sprint now takes three. Bug fixes create new bugs. Deployments feel risky. The team is working just as hard — maybe harder — but the output has dropped.

The founder asks: "What happened?"

Nobody has a clear answer.

## The Root Cause

In most cases I've seen, it's not one thing. It's the accumulation of small decisions that made sense individually but compound into friction:

- **No architecture boundaries.** Early code was fast and loose — which was correct at the time. But now every change touches five files across three domains.
- **Testing gaps.** The team skipped tests early on because "we'll add them later." Later never came. Now every deployment is a coin flip.
- **Knowledge silos.** The senior dev who built the core system left six months ago. Nobody fully understands how the payment flow works.
- **Process debt.** There's no CI pipeline, or the one that exists takes 40 minutes and everyone ignores it.

The velocity didn't drop because the team got worse. It dropped because the codebase got harder.

## The Fix

There's no single fix. But there is a pattern that works:

**1. Diagnose honestly.** Spend a week reading code, talking to the team, and mapping the pain points. Write it down. Share it openly.

**2. Pick one high-impact problem.** Not five. One. The one that, if solved, would unblock the most work. Usually it's the deployment pipeline or the most-touched module.

**3. Fix it properly.** Not a band-aid. Carve out 2-3 weeks, write the tests, refactor the module, set up the CI. Make it boring and reliable.

**4. Repeat.** Each cycle builds confidence and momentum. By the third cycle, the team starts doing it themselves.

The hardest part isn't the technical work. It's convincing stakeholders to invest in fixing what's already "working." But the math is simple: if every feature takes 3x longer than it should, you're paying 3x for everything you build from now on.
