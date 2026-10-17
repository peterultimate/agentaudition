import { demoCards } from '@/lib/demo/runtime';
import { runPresentationDemo } from '@/lib/demo/actions';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Presentation demos - AgentAudition',
  description:
    'Run the audition replay and hire gate simulations from the UI during a presentation.',
};

export default function DemosPage() {
  const demos = demoCards();

  return (
    <section className="wrap section">
      <div className="stack stack-32">
        <div className="stack stack-16" style={{ maxWidth: '48rem' }}>
          <span className="eyebrow">Presentation demos</span>
          <h1 className="h2">Run the two proof points without leaving the app.</h1>
          <p className="lead">
            These cards are seeded with the last known-good outputs, and each one can rerun the
            underlying simulation live from this UI.
          </p>
        </div>

        <div className="grid grid-2">
          {demos.map((demo) => (
            <article key={demo.id} id={demo.id} className="slab stack stack-24">
              <div className="stack stack-12">
                <span className="eyebrow">{demo.id === 'shadow' ? 'Demo 1' : 'Demo 2'}</span>
                <h2 className="h3">{demo.title}</h2>
                <p className="body">{demo.line}</p>
                <p className="tiny mono">{demo.command}</p>
              </div>

              <form action={runPresentationDemo} className="row">
                <input type="hidden" name="demo" value={demo.id} />
                <button className="btn btn-primary btn-sm" type="submit">
                  Run this simulation
                </button>
              </form>

              {demo.latest !== null ? (
                <div className="stack stack-12">
                  <p
                    className={demo.latest.status === 'ok' ? 'notice notice-ok' : 'notice notice-warn'}
                  >
                    Latest UI run {demo.latest.status === 'ok' ? 'passed' : 'failed'} at{' '}
                    {new Date(demo.latest.ranAt).toLocaleString('en-MY', {
                      dateStyle: 'medium',
                      timeStyle: 'short',
                    })}
                    .
                  </p>
                  <pre className="pre">{demo.latest.output}</pre>
                </div>
              ) : (
                <div className="stack stack-12">
                  <p className="notice notice-ok">Seeded snapshot ready for the deck.</p>
                  <pre className="pre">{demo.seededOutput}</pre>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
