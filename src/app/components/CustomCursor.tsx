import { useEffect, useRef, useState } from "react";

// ── Scramble charset ──────────────────────────────────────────────────────────
const SC = "│┤╣║╗┐└┴├─┼╚╔╠═╬▄▌▐▀░▒#$%×÷≠≈∞!?@*";

// ── ASCII per item ────────────────────────────────────────────────────────────
const ASCII: Record<string, string> = {
  "01": "···\n│  \n│  \n···",
  "02": " △ \n╱ ╲\n─·─\n↙ ↘",
  "03": " ○ \n │ \n─┼─\n ▶ ",
  "04": " ◌ \n─3─\n ✓ ",
  "05": " ? \n╱ ╲\nA   B\n◇",
  "06": "~~~\n─?─\n~~~\n · ",
  "07": " N \n─◈─\n │ \n─◈─",
};

// ── CURSOR SIZES ─────────────────────────────────────────────────────────────
const ACTIVE_SIZE = 120; // px
const GRID_CELL   = 10;  // px

// ── SVG pixel-grid ────────────────────────────────────────────────────────────
function PixelGrid() {
  return (
    <svg
      aria-hidden
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    >
      <defs>
        <linearGradient id="rgb-cursor" gradientUnits="userSpaceOnUse"
          x1="0" y1="0" x2={ACTIVE_SIZE} y2={ACTIVE_SIZE}
        >
          <stop offset="0%"   stopColor="rgb(255,72,72)"  stopOpacity="0.5" />
          <stop offset="25%"  stopColor="rgb(255,210,60)" stopOpacity="0.5" />
          <stop offset="50%"  stopColor="rgb(48,220,120)" stopOpacity="0.5" />
          <stop offset="75%"  stopColor="rgb(50,130,255)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="rgb(195,60,255)" stopOpacity="0.5" />
        </linearGradient>
        <pattern id="px-grid" width={GRID_CELL} height={GRID_CELL} patternUnits="userSpaceOnUse">
          <path
            d={`M ${GRID_CELL} 0 L 0 0 0 ${GRID_CELL}`}
            fill="none" stroke="url(#rgb-cursor)" strokeWidth="0.2"
          />
        </pattern>
      </defs>
      <rect width={ACTIVE_SIZE} height={ACTIVE_SIZE} fill="url(#px-grid)" />
    </svg>
  );
}

// ── SVG arrow cursor ─────────────────────────────────────────────────────────
function ArrowCursorSVG() {
  return (
    <svg
      width="22"
      height="28"
      viewBox="0 0 22 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: "block", pointerEvents: "none" }}
    >
      <path
        d="M 3 3 L 3 22 L 7.5 17 L 11 24.5 L 14 23 L 10.5 15.5 L 17.5 15.5 Z"
        fill="rgba(0,0,0,0.35)"
        transform="translate(1.5, 1.5)"
      />
      <path
        d="M 3 3 L 3 22 L 7.5 17 L 11 24.5 L 14 23 L 10.5 15.5 L 17.5 15.5 Z"
        fill="white"
        stroke="#26211d"
        strokeWidth="1.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ── Text scramble hook ────────────────────────────────────────────────────────
function useScramble(target: string, running: boolean) {
  const [text, setText]         = useState("");
  const [settling, setSettling] = useState(false);
  const rafRef                  = useRef(0);
  const frameRef                = useRef(0);
  const thresh                  = useRef<number[]>([]);
  const TOTAL                   = 52;

  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    if (!running || !target) { setText(""); setSettling(false); return; }

    thresh.current   = target.split("").map(() => Math.random() * TOTAL);
    frameRef.current = 0;
    setSettling(true);

    const tick = () => {
      const f   = frameRef.current++;
      const out = target
        .split("")
        .map((ch, i) => {
          if (ch === "\n" || ch === " ") return ch;
          if (f >= thresh.current[i])    return ch;
          return SC[Math.floor(Math.random() * SC.length)];
        })
        .join("");
      setText(out);
      if (f <= TOTAL + 6) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setSettling(false);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [running, target]);

  return { display: running ? (text || target) : "", settling };
}

// ── Component ─────────────────────────────────────────────────────────────────
export function CustomCursor() {
  const circleRef = useRef<HTMLDivElement>(null);
  const textRef   = useRef<HTMLDivElement>(null);
  const ptrRef    = useRef<HTMLDivElement>(null);
  const pulseRef  = useRef<HTMLDivElement>(null);

  const [active, setActive]       = useState(false);
  const [visible, setVisible]     = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const pos = useRef({ x: -200, y: -200 });
  const cur = useRef({ x: -200, y: -200 });

  const asciiTarget                      = activeKey && activeKey !== "ptr" && activeKey !== "pulse"
    ? (ASCII[activeKey] ?? "") : "";
  const { display: scrambled, settling } = useScramble(asciiTarget, active && !!asciiTarget);

  const isPtrMode    = activeKey === "ptr";
  const isPulseMode  = activeKey === "pulse";
  const isExpandMode = activeKey === "expand";

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (isTouch) return;

    let raf: number;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onActive = (e: Event) => {
      const key = (e as CustomEvent<{ key: string }>).detail?.key ?? null;
      setActiveKey(key);
      setActive(true);
    };
    const onInactive = () => {
      setActive(false);
      setActiveKey(null);
    };

    window.addEventListener("mousemove",       onMove,     { passive: true });
    window.addEventListener("cursor:active",   onActive   as EventListener);
    window.addEventListener("cursor:inactive", onInactive as EventListener);

    // Pure lerp — gentle ease-out, zero overshoot
    const LERP = 0.18;

    const loop = () => {
      cur.current.x += (pos.current.x - cur.current.x) * LERP;
      cur.current.y += (pos.current.y - cur.current.y) * LERP;

      const tc = `translate3d(${cur.current.x}px,${cur.current.y}px,0) translate(-50%,-50%)`;
      const tp = `translate3d(${cur.current.x}px,${cur.current.y}px,0)`;

      if (circleRef.current) circleRef.current.style.transform = tc;
      if (textRef.current)   textRef.current.style.transform   = tc;
      if (ptrRef.current)    ptrRef.current.style.transform    = tp;
      if (pulseRef.current)  pulseRef.current.style.transform  = tc;

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove",       onMove);
      window.removeEventListener("cursor:active",   onActive   as EventListener);
      window.removeEventListener("cursor:inactive", onInactive as EventListener);
      cancelAnimationFrame(raf);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const circleSize     = (active && !isPulseMode && !isExpandMode) ? `${ACTIVE_SIZE}px` : isExpandMode ? "38px" : "6px";
  const sizeTransition = "width 0.42s cubic-bezier(0.23,1,0.32,1), height 0.42s cubic-bezier(0.23,1,0.32,1)";

  return (
    <>
      {/* ── Pulse cursor ring — plans/download buttons ────────────────────── */}
      {isPulseMode && (
        <div
          ref={pulseRef}
          aria-hidden="true"
          style={{
            position:      "fixed",
            top:           0,
            left:          0,
            zIndex:        10001,
            pointerEvents: "none",
            opacity:       visible ? 1 : 0,
            transition:    "opacity 0.2s ease",
          }}
        >
          <style>{`
            @keyframes cursor-pulse {
              0%   { transform: scale(1);    opacity: 0.55; }
              50%  { transform: scale(1.22); opacity: 0.22; }
              100% { transform: scale(1);    opacity: 0.55; }
            }
            .cursor-pulse-ring {
              width:         32px;
              height:        32px;
              border-radius: 50%;
              border:        1.5px solid rgba(236,238,240,0.7);
              position:      absolute;
              top:           50%;
              left:          50%;
              transform:     translate(-50%,-50%);
              animation:     cursor-pulse 1.1s cubic-bezier(0.4,0,0.6,1) infinite;
            }
            .cursor-pulse-dot {
              width:         6px;
              height:        6px;
              border-radius: 50%;
              background:    rgba(236,238,240,0.9);
              position:      absolute;
              top:           50%;
              left:          50%;
              transform:     translate(-50%,-50%);
            }
            .cursor-pulse-ring2 {
              width:         48px;
              height:        48px;
              border-radius: 50%;
              border:        0.5px solid rgba(236,238,240,0.25);
              position:      absolute;
              top:           50%;
              left:          50%;
              transform:     translate(-50%,-50%);
              animation:     cursor-pulse 1.1s cubic-bezier(0.4,0,0.6,1) infinite;
              animation-delay: 0.22s;
            }
          `}</style>
          <div className="cursor-pulse-ring2" />
          <div className="cursor-pulse-ring" />
          <div className="cursor-pulse-dot" />
        </div>
      )}

      {/* ── Layer 1: circle + pixel grid ──────────────────────────────────── */}
      <div
        ref={circleRef}
        aria-hidden="true"
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          zIndex:        9999,
          pointerEvents: "none",
          width:         circleSize,
          height:        circleSize,
          borderRadius:  "50%",
          overflow:      "hidden",
          background: (active && !isPulseMode && !isExpandMode)
            ? "rgba(38, 33, 29, 0.03)"
            : isExpandMode
            ? "transparent"
            : "#eceef0",
          mixBlendMode:   (active && !isPulseMode && !isExpandMode) ? "normal" : isExpandMode ? "normal" : "difference",
          backdropFilter: (active && !isPulseMode && !isExpandMode) ? "blur(1.5px)" : "none",
          border: (active && !isPulseMode && !isExpandMode)
            ? "0.5px solid rgba(38, 33, 29, 0.08)"
            : isExpandMode
            ? "1px solid rgba(236,238,240,0.65)"
            : "none",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          opacity:        (visible && !isPtrMode && !isPulseMode) ? 1 : 0,
          transition: [
            sizeTransition,
            "background 0.3s ease",
            "border 0.3s ease",
            "backdrop-filter 0.3s ease",
            "opacity 0.2s ease",
          ].join(", "),
        }}
      >
        {(active && !isPulseMode && !isExpandMode) && <PixelGrid />}
      </div>

      {/* ── Layer 2: ASCII scramble text ──────────────────────────────────── */}
      <div
        ref={textRef}
        aria-hidden="true"
        style={{
          position:       "fixed",
          top:            0,
          left:           0,
          zIndex:         10000,
          pointerEvents:  "none",
          width:          circleSize,
          height:         circleSize,
          borderRadius:   "50%",
          overflow:       "hidden",
          background:     "transparent",
          mixBlendMode:   (active && !isPulseMode && !isExpandMode) ? "difference" : "normal",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          opacity:        (visible && !isPtrMode && !isPulseMode) ? 1 : 0,
          transition: [sizeTransition, "opacity 0.2s ease"].join(", "),
        }}
      >
        {(active && !isPulseMode && !isExpandMode && asciiTarget) && (
          <pre
            style={{
              position:      "relative",
              zIndex:        1,
              margin:        0,
              fontSize:      "8.5px",
              lineHeight:    1.45,
              color:         "white",
              fontFamily:    "monospace",
              letterSpacing: "0.06em",
              textAlign:     "center",
              whiteSpace:    "pre",
              userSelect:    "none",
              pointerEvents: "none",
              filter:        settling ? "blur(0.8px)" : "none",
              transition:    "filter 0.3s ease",
            }}
          >
            {scrambled}
          </pre>
        )}
      </div>

      {/* ── Layer 3: SVG arrow cursor — only in ptr mode ──────────────────── */}
      <div
        ref={ptrRef}
        aria-hidden="true"
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          zIndex:        10001,
          pointerEvents: "none",
          opacity:       visible && isPtrMode ? 1 : 0,
          transition:    "opacity 0.15s ease",
          marginLeft:    "-2px",
          marginTop:     "-2px",
        }}
      >
      </div>
    </>
  );
}