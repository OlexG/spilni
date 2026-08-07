const INK = "#111820";
const BLUE = "#0057b8";
const BLUE_LIGHT = "#2b7ede";
const YELLOW = "#ffd700";

export default function PaperPlane() {
  return (
    <svg viewBox="0 0 240 200" role="presentation" focusable="false">
      <g
        fill="none"
        stroke={INK}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      >
        <path d="M8 190c26 0 44-14 50-34" strokeDasharray="13 15" />
      </g>

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
          d="M198 58c2.4 17.2 9.4 24.2 26.6 26.6-17.2 2.4-24.2 9.4-26.6 26.6-2.4-17.2-9.4-24.2-26.6-26.6 17.2-2.4 24.2-9.4 26.6-26.6Z"
          fill={YELLOW}
        />
        <circle cx="215" cy="30" r="9.5" fill={YELLOW} />
        <circle cx="176" cy="152" r="7.5" fill={YELLOW} />
      </g>
    </svg>
  );
}
