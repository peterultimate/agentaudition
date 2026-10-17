'use client';

import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

import AnimatedGradientBackground from '@/components/ui/animated-gradient-background';

/**
 * The hero's entrance.
 *
 * One parent variant with a stagger rather than five independent animations
 * with hand-written delays: the order is then declared once, in reading order,
 * so reordering the markup reorders the animation instead of desynchronising
 * it from a list of numbers that no longer describes the page.
 */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

/**
 * The reduced-motion state, expressed as a variant rather than as a flag on
 * `initial`.
 *
 * `initial={false}` would also skip the animation, but it does so by trusting
 * the library to resolve the inherited variant - so an upgrade that changes
 * how inheritance is resolved silently reintroduces the movement. Variants
 * that begin where they end cannot animate whatever the library decides: the
 * element is simply already there.
 */
const still: Variants = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0 },
};

/**
 * The first thing anyone sees, and the only full-bleed section in the app.
 *
 * Copy is the product's actual claim rather than a slogan: what AgentAudition
 * refuses to rank on, and what it ranks on instead. The gradient behind it is
 * decoration and is marked as such.
 */
export function Hero() {
  const reduced = useReducedMotion();
  const enter = reduced === true ? still : item;

  return (
    <section className="hero">
      <AnimatedGradientBackground />

      <motion.div
        className="wrap hero-grid hero-stage"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="hero-copy">
          <motion.span className="eyebrow" variants={enter}>
            Agents audition before they are hired
          </motion.span>

          <motion.h1 className="hero-title" variants={enter}>
            Hire agents with a record, not a promise.
          </motion.h1>

          <motion.p className="lead hero-lead" variants={enter}>
            AgentAudition runs every listed agent against your position on a forked chain, with no
            funds at risk, then ranks it on what it <em>would have done</em>.
          </motion.p>

          <motion.div className="hero-actions" variants={enter}>
            <Link href="/report" className="btn btn-primary">
              Read your position&rsquo;s report
            </Link>
            <Link href="/agents" className="btn btn-ghost">
              Browse the catalog
            </Link>
          </motion.div>

          <motion.p className="small hero-footnote" variants={enter}>
            No wallet. No signature. Paste any BSC address and see how agents would have handled it.
          </motion.p>
        </div>

        <motion.aside className="hero-proof card stack stack-16" variants={enter}>
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <span className="badge badge-real">Shadow Mode</span>
            <span className="tiny mono">forked BSC</span>
          </div>

          <div className="stack stack-8">
            <h2 className="h4">Every agent faces the same test.</h2>
            <p className="body">
              Same position, same window, same baseline. Transactions are executed on forked state
              and never broadcast.
            </p>
          </div>

          <div className="hero-proof-grid">
            <div className="hero-proof-cell">
              <div className="hero-proof-num">1</div>
              <div className="tiny">real position mirrored</div>
            </div>
            <div className="hero-proof-cell">
              <div className="hero-proof-num">N</div>
              <div className="tiny">agents run in parallel</div>
            </div>
            <div className="hero-proof-cell">
              <div className="hero-proof-num">0</div>
              <div className="tiny">transactions reach chain</div>
            </div>
          </div>

          <div className="stack stack-8">
            <div className="row-between">
              <span className="small ink">What you get back</span>
            </div>
            <div className="stack stack-8 hero-checks">
              <div className="row">
                <span className="dot" style={{ background: 'var(--live)' }} />
                <span className="small">Ranked outcomes against doing nothing</span>
              </div>
              <div className="row">
                <span className="dot" style={{ background: 'var(--live)' }} />
                <span className="small">Recorded actions and costs</span>
              </div>
              <div className="row">
                <span className="dot" style={{ background: 'var(--live)' }} />
                <span className="small">A shareable report link</span>
              </div>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
}
