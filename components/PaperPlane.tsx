const INK = "#111820";
const BLUE = "#0057b8";
const BLUE_LIGHT = "#2b7ede";
const YELLOW = "#ffd700";

// A four-point star centred on the origin at radius 26.6, so callers can drop
// one anywhere by scaling r/26.6 — the stroke thins with it, which is what
// makes the small ones read as further away rather than as shrunken copies.
const SPARKLE =
  "M0-26.6c2.4 17.2 9.4 24.2 26.6 26.6-17.2 2.4-24.2 9.4-26.6 26.6-2.4-17.2-9.4-24.2-26.6-26.6 17.2-2.4 24.2-9.4 26.6-26.6Z";

/** The folded dart, drawn in its own 172×158 space so it can be placed at any scale. */
function Plane({ strokeWidth = 7 }: { strokeWidth?: number }) {
  return (
    <>
      {/* Folded facets, drawn back to front. */}
      <path d="M184 24 12 74l66 22Z" fill={BLUE_LIGHT} />
      <path d="M12 74l46 74 20-52Z" fill={YELLOW} />
      <path d="M184 24 78 96l40 86Z" fill={BLUE} />

      {/* Silhouette and the two fold creases. */}
      <g
        fill="none"
        stroke={INK}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M184 24 12 74l46 74 20-52 40 86Z" />
        <path d="M184 24 78 96 12 74" />
      </g>
    </>
  );
}

function Sparkle({ x, y, r, delay }: { x: number; y: number; r: number; delay: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${r / 26.6})`}>
      <path className="plane-twinkle" style={{ animationDelay: delay }} d={SPARKLE} fill={YELLOW} />
    </g>
  );
}

export default function PaperPlane() {
  return (
    // Three nested layers so drift, bob and sway can run on coprime
    // periods — the combined path only repeats after several minutes.
    <span className="plane-drift">
      <span className="plane-bob">
        <svg className="plane-sway" viewBox="0 0 256 210" role="presentation" focusable="false">
          <defs>
            {/* Fades both ends of the trail so streaming dashes never pop in or out. */}
            <linearGradient id="trail-fade" gradientUnits="userSpaceOnUse" x1="4" y1="200" x2="60" y2="164">
              <stop offset="0" stopColor={INK} stopOpacity="0" />
              <stop offset="0.35" stopColor={INK} stopOpacity="0.7" />
              <stop offset="0.75" stopColor={INK} stopOpacity="0.7" />
              <stop offset="1" stopColor={INK} stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            className="plane-trail"
            d="M4 200c26 2 48-12 56-36"
            fill="none"
            stroke="url(#trail-fade)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="13 15"
          />

          {/* A second dart further out, banked differently so it reads as another
              plane rather than a copy. It orbits on its own period. */}
          <g className="plane-far" opacity="0.85">
            <g transform="translate(4 -2) scale(0.3) rotate(-7 98 103)">
              <Plane strokeWidth={6} />
            </g>
          </g>

          <g transform="translate(14 18) scale(0.84)">
            <Plane />
          </g>

          <g stroke={INK} strokeWidth="5" strokeLinejoin="round">
            <Sparkle x={208} y={72} r={26} delay="0s" />
            <Sparkle x={140} y={16} r={12} delay="-2.4s" />
            <Sparkle x={182} y={142} r={9} delay="-1.1s" />
            <circle className="plane-twinkle" style={{ animationDelay: "-3.1s" }} cx={232} cy={26} r={8.5} strokeWidth="4.6" fill={YELLOW} />
            <circle className="plane-twinkle" style={{ animationDelay: "-1.7s" }} cx={226} cy={132} r={7} strokeWidth="4" fill={YELLOW} />
            <circle className="plane-twinkle" style={{ animationDelay: "-3.8s" }} cx={148} cy={188} r={6.5} strokeWidth="3.8" fill={YELLOW} />
          </g>
        </svg>
      </span>
    </span>
  );
}
