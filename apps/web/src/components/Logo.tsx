/**
 * AgentAudition mark.
 *
 * A shield with a head and two legs: the outline is the audition booth, the
 * figure inside it is the agent standing in it. The bars that used to carry
 * this meaning are now the legs. Every agent is measured on the same footing
 * before it is hired, which is the whole product.
 *
 * The mark is drawn wider than it is tall (84 x 67), so `size` is the height
 * and the width follows. Sizing it as a square would letterbox the mark inside
 * its own box and leave a gap where the wordmark's baseline sits.
 */
const RATIO = 84 / 67;

export function Logo({ size = 24 }: { readonly size?: number }) {
  return (
    <svg
      width={size * RATIO}
      height={size}
      viewBox="0 0 84 67"
      fill="none"
      aria-hidden="true"
      style={{ flex: '0 0 auto' }}
    >
      <path
        d="M42.0002 11.7246C44.4377 11.7246 46.4105 13.6997 46.4105 16.1367C46.4105 17.7493 45.5469 19.1603 44.2546 19.93V25.4941H57.8906C62.8454 25.4941 66.8881 29.5352 66.8881 34.4899V46.4194C66.8881 51.3742 62.8454 55.4147 57.8906 55.4147H26.108C21.1533 55.4147 17.1122 51.3747 17.1122 46.4194V34.4899C17.1122 29.5346 21.1533 25.4941 26.108 25.4941H39.7441V19.9294C38.4518 19.1596 37.5882 17.7486 37.5882 16.1367C37.5882 13.6997 39.5626 11.7245 42.0001 11.7245L42.0002 11.7246ZM46.8125 35.7888V45.0604C46.8125 45.8754 47.4774 46.5405 48.2925 46.5405H54.6523C55.4689 46.5405 56.1338 45.8755 56.1338 45.0604V35.7888C56.1338 34.9734 55.4689 34.3078 54.6523 34.3078H48.2925C47.4775 34.3078 46.8125 34.9734 46.8125 35.7888ZM37.1878 35.7888C37.1878 34.9734 36.5213 34.3078 35.7063 34.3078H29.3466C28.5315 34.3078 27.865 34.9734 27.865 35.7888V45.0604C27.865 45.8754 28.5315 46.5405 29.3466 46.5405H35.7063C36.5213 46.5405 37.1878 45.8755 37.1878 45.0604V35.7888ZM51.8049 0H32.1939C27.5036 0 23.4844 2.4753 21.374 6.66301L1.53615 46.0292C-0.696366 50.4597 -0.488276 55.3381 2.11345 59.5606C4.71525 63.7863 8.97692 66.1659 13.9379 66.1659H70.0609C75.0219 66.1659 79.2836 63.7863 81.8853 59.5606C84.4887 55.3381 84.6968 50.4597 82.4626 46.0292L62.6249 6.66301C60.5143 2.4753 56.4952 0 51.8049 0Z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="url(#aa-mark)"
      />
      <defs>
        <linearGradient
          id="aa-mark"
          x1="42.0002"
          y1="66.1659"
          x2="42.0002"
          y2="-0.000680175"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5E2FF7" />
          <stop offset="0.36" stopColor="#D05CC8" />
          <stop offset="0.68" stopColor="#F49E84" />
          <stop offset="1" stopColor="#F9C359" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Wordmark({ size = 24 }: { readonly size?: number }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--ink)' }}>
      <Logo size={size} />
      <span style={{ fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.04em' }}>AgentAudition</span>
    </span>
  );
}
