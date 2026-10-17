/**
 * AgentAudition mark: four bars on a baseline, reading as a bar chart.
 * Every agent is measured on the same footing before it is hired, which is
 * the whole product - the bars are that measurement.
 */
export function Logo({ size = 26 }: { readonly size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="2" y="12" width="5" height="12" rx="1.5" fill="currentColor" />
      <rect x="9.5" y="6" width="5" height="18" rx="1.5" fill="currentColor" />
      <rect x="17" y="15" width="5" height="9" rx="1.5" fill="currentColor" />
      <rect x="24.5" y="2" width="5" height="22" rx="1.5" fill="currentColor" />
      <rect x="2" y="26.5" width="27.5" height="3.5" rx="1.75" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ size = 26 }: { readonly size?: number }) {
  return (
    <span
      style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem', color: 'var(--ink)' }}
    >
      <Logo size={size} />
      <span style={{ fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.04em' }}>AgentAudition</span>
    </span>
  );
}
