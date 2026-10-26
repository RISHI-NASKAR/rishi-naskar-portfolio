/**
 * CosmosStatic — the composed still frame of the right-side planetary system.
 *
 * Shown while the WebGL scene loads, for no-WebGL visitors, and under reduced
 * motion: one large dark planet with a crimson rim, saturnic orbit ellipses,
 * a few smaller bodies at different apparent distances and a soft haze.
 */

export default function CosmosStatic() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 110"
      fill="none"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id="hn-body" cx="34%" cy="28%" r="82%">
          <stop offset="0%" stopColor="#43202a" />
          <stop offset="42%" stopColor="#221018" />
          <stop offset="78%" stopColor="#120b10" />
          <stop offset="100%" stopColor="#0a0a0d" />
        </radialGradient>
        <radialGradient id="hn-body-small" cx="38%" cy="32%" r="80%">
          <stop offset="0%" stopColor="#3a2027" />
          <stop offset="60%" stopColor="#171017" />
          <stop offset="100%" stopColor="#0b0a0d" />
        </radialGradient>
        <radialGradient id="hn-haze" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(101,13,25,0.36)" />
          <stop offset="58%" stopColor="rgba(101,13,25,0.12)" />
          <stop offset="100%" stopColor="rgba(8,8,8,0)" />
        </radialGradient>
        <filter id="hn-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="1.1" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Atmospheric haze behind the system. */}
      <circle cx="64" cy="52" r="44" fill="url(#hn-haze)" />

      {/* Orbit ellipses — behind the planet. */}
      <ellipse
        cx="64" cy="52" rx="34" ry="11.5"
        transform="rotate(-13 64 52)"
        stroke="rgba(211,38,64,0.4)" strokeWidth="0.45"
        strokeDasharray="52 16 30 60"
      />
      <ellipse
        cx="64" cy="52" rx="46" ry="16.5"
        transform="rotate(-13 64 52)"
        stroke="rgba(211,38,64,0.22)" strokeWidth="0.35"
        strokeDasharray="60 40 14 70"
      />
      <ellipse
        cx="64" cy="52" rx="55" ry="20.5"
        transform="rotate(-13 64 52)"
        stroke="rgba(140,126,132,0.2)" strokeWidth="0.25"
        strokeDasharray="70 60 10 80"
      />

      {/* The main planet. */}
      <circle cx="64" cy="52" r="21" fill="url(#hn-body)" />

      {/* Rim light on the planet's upper-left limb. */}
      <path
        d="M46 43 A21 21 0 0 1 60 31"
        stroke="rgba(255,80,98,0.85)" strokeWidth="1.1" filter="url(#hn-glow)"
        strokeLinecap="round"
      />
      <path
        d="M44.5 48 A21 21 0 0 1 46 43"
        stroke="rgba(211,38,64,0.5)" strokeWidth="0.7" filter="url(#hn-glow)"
        strokeLinecap="round"
      />

      {/* Secondary rim, right limb — cooler, weaker. */}
      <path
        d="M84 46 A21 21 0 0 1 78 66"
        stroke="rgba(200,190,200,0.32)" strokeWidth="0.6"
        strokeLinecap="round"
      />

      {/* Saturnic ring passing in front of the lower limb. */}
      <path
        d="M-6 62.5 A46 16.5 -13 0 0 60 68.4"
        stroke="rgba(211,38,64,0.5)" strokeWidth="0.55"
        transform="translate(14 -1.5)" fill="none"
      />

      {/* Travelling worlds on the orbits. */}
      <g filter="url(#hn-glow)">
        <circle cx="33" cy="47.5" r="3" fill="url(#hn-body-small)" />
        <circle cx="32.2" cy="46.4" r="0.6" fill="#ff3349" opacity="0.9" />
      </g>
      <circle cx="99" cy="41" r="2.1" fill="url(#hn-body-small)" />
      <circle cx="99.6" cy="39.9" r="0.45" fill="#ff5a6e" opacity="0.85" />
      <circle cx="86" cy="75" r="1.5" fill="#1d1218" />
      <circle cx="14" cy="26" r="1" fill="#241519" />

      {/* Luminous orbital points. */}
      <g filter="url(#hn-glow)">
        <circle cx="108" cy="36" r="0.9" fill="#ff8b95" opacity="0.85" />
        <circle cx="22" cy="62" r="0.7" fill="#ff8b95" opacity="0.6" />
      </g>
    </svg>
  );
}
