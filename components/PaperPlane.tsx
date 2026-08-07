const INK = "#111820";
const BLUE = "#0057b8";
const BLUE_LIGHT = "#2b7ede";
const YELLOW = "#ffd700";

export default function PaperPlane() {
  return (
    // Three nested layers so drift, bob and sway can run on coprime
    // periods — the combined path only repeats after several minutes.
    <span className="plane-drift">
      <span className="plane-bob">
        <svg className="plane-sway" viewBox="0 0 240 200" role="presentation" focusable="false">
          <defs>
            {/* Fades both ends of the trail so streaming dashes never pop in or out. */}
            <linearGradient id="trail-fade" gradientUnits="userSpaceOnUse" x1="8" y1="190" x2="58" y2="156">
              <stop offset="0" stopColor={INK} stopOpacity="0" />
              <stop offset="0.35" stopColor={INK} stopOpacity="0.7" />
              <stop offset="0.75" stopColor={INK} stopOpacity="0.7" />
              <stop offset="1" stopColor={INK} stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            className="plane-trail"
            d="M8 190c26 0 44-14 50-34"
            fill="none"
            stroke="url(#trail-fade)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="13 15"
          />

          <g transform="translate(2 6) scale(0.86)">
            {/* Folded facets, drawn back to front. */}
            <path d="M184 24 12 74l66 22Z" fill={BLUE_LIGHT} />
            <path d="M12 74l46 74 20-52Z" fill={YELLOW} />
            <path d="M184 24 78 96l40 86Z" fill={BLUE} />

            {/* Silhouette and the two fold creases. */}
            <g
              fill="none"
              stroke={INK}
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M184 24 12 74l46 74 20-52 40 86Z" />
              <path d="M184 24 78 96 12 74" />
            </g>
          </g>

          <g stroke={INK} strokeWidth="5" strokeLinejoin="round">
            <path
              className="plane-twinkle"
              d="M198 58c2.4 17.2 9.4 24.2 26.6 26.6-17.2 2.4-24.2 9.4-26.6 26.6-2.4-17.2-9.4-24.2-26.6-26.6 17.2-2.4 24.2-9.4 26.6-26.6Z"
              fill={YELLOW}
            />
            <circle className="plane-twinkle" cx="215" cy="30" r="9.5" fill={YELLOW} />
            <circle className="plane-twinkle" cx="176" cy="152" r="7.5" fill={YELLOW} />
          </g>
        </svg>
      </span>
    </span>
  );
}
