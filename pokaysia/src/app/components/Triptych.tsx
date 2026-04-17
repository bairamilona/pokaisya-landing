import { useRef, useEffect, useState, forwardRef, useCallback } from "react";
import { motion, useInView } from "motion/react";
import { useLang } from "../context/LangContext";

// ── Assets ────────────────────────────────────────────────────────────────────
import imgPriest from "figma:asset/299493191703b329c09d1db8ebd1829a43337604.png";
import imgPrism  from "figma:asset/13db5fd9a37ee7a45e1d20d9bdf97fa0b0bf10e4.png";
import imgAction from "figma:asset/175ccfcddff77938c3a7951e8b2f0f650141d338.png";

const EASE = [0.23, 1, 0.32, 1] as const;

// ── Scramble cursor ───────────────────────────────────────────────────────────
const SC = "│┤╣║╗┐└┴├─┼╚╔╠═╬▄▌▐▀#$%×÷≠≈∞░▒!?@*";

const ASCII: Record<string, string> = {
  priest: "  ✝  \n ╭●╮ \n─╯ ╰─\n║   ║\n═════",
  prism:  " /\\_/\\ \n(=^.^=)\n (   ) \n (mmm) \n  ~~~  ",
  action: "  /\\  \n /  \\ \n/ ~~ \\\n/----\\\n|| ||",
};

function useScramble(target: string, running: boolean) {
  const [text, setText] = useState("");
  const rafRef    = useRef(0);
  const frameRef  = useRef(0);
  const threshRef = useRef<number[]>([]);
  const TOTAL     = 32;

  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    if (!running) { setText(""); return; }

    threshRef.current = target.split("").map(() => Math.random() * TOTAL);
    frameRef.current  = 0;

    const tick = () => {
      const f   = frameRef.current++;
      const out = target.split("").map((ch, i) => {
        if (ch === "\n" || ch === " ") return ch;
        if (f >= threshRef.current[i]) return ch;
        return SC[Math.floor(Math.random() * SC.length)];
      }).join("");
      setText(out);
      if (f <= TOTAL + 4) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [running, target]);

  return text || (running ? target : "");
}

const AsciiCursor = forwardRef<HTMLDivElement, { hoveredCard: string | null }>(
  ({ hoveredCard }, ref) => {
    const target    = hoveredCard ? (ASCII[hoveredCard] ?? "") : "";
    const scrambled = useScramble(target, !!hoveredCard);

    return (
      <div
        ref={ref}
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          pointerEvents: "none",
          zIndex:        9999,
          willChange:    "transform",
          opacity:       hoveredCard ? 1 : 0,
          transition:    "opacity 0.18s ease",
        }}
      >
        <div
          style={{
            background:    "transparent",
            borderRadius:  10,
            padding:       "11px 16px",
            fontFamily:    "monospace",
            fontSize:      13,
            lineHeight:    1.55,
            color:         "white",
            mixBlendMode:  "difference",
            whiteSpace:    "pre",
            letterSpacing: "0.04em",
          }}
        >
          {scrambled}
        </div>
      </div>
    );
  }
);

// ── Float config ──────────────────────────────────────────────────────────────
const FLOAT: Record<string, { amp: number; period: number; phase: number }> = {
  priest: { amp: 5, period:  9.2, phase: 0   },
  prism:  { amp: 6, period: 11.4, phase: 2.3 },
  action: { amp: 4, period:  8.1, phase: 4.1 },
};

// ── AnimatedCard ──────────────────────────────────────────────────────────────
// trigger  = section-level boolean — all cards animate from a shared signal
// delay    = stagger offset (seconds)
function AnimatedCard({
  children, cardKey, parallaxDir, delay, sectionVisible, onHover, trigger,
}: {
  children:       React.ReactNode;
  cardKey:        string;
  parallaxDir:    1 | -1;
  delay:          number;
  sectionVisible: boolean;
  onHover:        (key: string | null) => void;
  trigger:        boolean;
}) {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const floatRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cfg = FLOAT[cardKey];
    let raf = 0, alive = true;

    const tick = (ms: number) => {
      if (!alive) return;
      raf = requestAnimationFrame(tick);

      if (parallaxRef.current) {
        const rect     = parallaxRef.current.getBoundingClientRect();
        const vh       = window.innerHeight;
        const progress = 1 - rect.bottom / (vh + rect.height);
        const py       = (progress * 22 * parallaxDir).toFixed(2);
        parallaxRef.current.style.transform = `translateY(${py}px)`;
      }
      if (sectionVisible && floatRef.current && cfg) {
        const fy = Math.sin((ms / 1000 / cfg.period) * Math.PI * 2 + cfg.phase) * cfg.amp;
        floatRef.current.style.transform = `translateY(${fy.toFixed(3)}px)`;
      }
    };

    raf = requestAnimationFrame(tick);
    return () => { alive = false; cancelAnimationFrame(raf); };
  }, [sectionVisible, cardKey, parallaxDir]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={trigger ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
      transition={{ duration: 1.0, ease: EASE, delay }}
      style={{ willChange: "transform, opacity" }}
      onMouseEnter={() => onHover(cardKey)}
      onMouseLeave={() => onHover(null)}
    >
      <div ref={parallaxRef} style={{ willChange: "transform" }}>
        <div ref={floatRef} style={{ willChange: "transform" }}>
          {children}
        </div>
      </div>
    </motion.div>
  );
}

// ── Card shadow tokens ────────────────────────────────────────────────────────
const SH  = "0 4px 16px rgba(46,60,70,0.06), 0 16px 48px rgba(46,60,70,0.13), 0 32px 72px rgba(46,60,70,0.07)";
const SHH = "0 8px 24px rgba(46,60,70,0.10), 0 24px 64px rgba(46,60,70,0.19)";

// ── Cyberpunk cityscape SVG overlay ───────────────────────────────────────────
function CyberpunkCity() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 370 617"
      preserveAspectRatio="xMidYMax meet"
      style={{
        position:      "absolute",
        inset:         0,
        width:         "100%",
        height:        "100%",
        pointerEvents: "none",
        zIndex:        2,
      }}
    >
      <defs>
        {/* Silhouette fade — solid at base, fades to transparent at skyline edge */}
        <linearGradient id="city-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(18,14,12,0)"   />
          <stop offset="40%"  stopColor="rgba(18,14,12,0.55)" />
          <stop offset="100%" stopColor="rgba(18,14,12,0.92)" />
        </linearGradient>
        {/* Neon glow — horizontal cyan strip */}
        <filter id="neon-glow" x="-20%" y="-200%" width="140%" height="500%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="neon-glow-soft" x="-40%" y="-400%" width="180%" height="900%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── Background silhouette (far layer, lighter) ── */}
      <path
        d="
          M 0 617 L 0 520
          H 18 V 498 H 12 V 476 H 18 V 460
          H 35 V 490 H 50 V 445
          H 65 V 415 H 68 V 398 L 70 385 L 72 398 H 75 V 415
          H 90 V 455 H 105 V 420
          H 120 V 390 H 125 V 370 L 127 352 L 130 342 L 133 352 L 135 370 H 140 V 390
          H 155 V 430 H 170 V 395
          H 185 V 370 H 190 V 350 L 192 332 L 195 318 L 198 332 L 200 350 H 205 V 370
          H 215 V 400 H 230 V 365
          H 240 V 345 H 243 V 328 L 245 312 L 247 328 H 250 V 345
          H 265 V 385 H 275 V 355
          H 288 V 330 H 292 V 312 L 294 298 L 296 285 L 298 298 L 300 312 H 304 V 330
          H 315 V 365 H 328 V 390
          H 345 V 430 H 360 V 465
          H 370 V 617 Z
        "
        fill="rgba(18,14,12,0.38)"
      />

      {/* ── Foreground silhouette (main, dark) ── */}
      <path
        d="
          M 0 617 L 0 530
          H 22 V 505 H 16 V 482
          H 22 V 468 H 40 V 500
          H 58 V 458 H 72 V 428
          H 78 V 408 H 80 V 390 L 82 372 L 84 358 L 86 372 L 88 390
          H 90 V 408 H 95 V 428
          H 108 V 468 H 122 V 435
          H 136 V 400 H 140 V 378
          H 142 V 360 L 144 342 L 146 328 L 148 342 L 150 360
          H 152 V 378 H 158 V 400
          H 170 V 442 H 184 V 408
          H 196 V 376 H 200 V 352
          H 202 V 334 L 204 312 L 207 295 L 210 278 L 213 295 L 216 312 L 218 334
          H 220 V 352 H 224 V 376
          H 238 V 412 H 250 V 378
          H 260 V 350 H 264 V 330
          H 266 V 312 L 268 295 L 270 282 L 272 295 L 274 312
          H 276 V 330 H 280 V 350
          H 292 V 388 H 304 V 358
          H 315 V 330 H 318 V 312 L 320 294 L 322 278 L 324 294 L 326 312
          H 328 V 330 H 334 V 358
          H 348 V 400 H 358 V 445
          H 370 V 617 Z
        "
        fill="url(#city-fade)"
      />

      {/* ── Window grid — far buildings ── */}
      {[
        [28,  472, 8, 5], [28,  484, 8, 5],
        [52,  432, 8, 5], [52,  444, 8, 5],
        [165, 405, 8, 5], [165, 417, 8, 5],
        [258, 396, 8, 5], [258, 408, 8, 5],
        [338, 440, 8, 5], [338, 452, 8, 5],
      ].map(([x, y, w, h], i) => (
        <rect key={`w-${i}`} x={x} y={y} width={w} height={h}
          fill="rgba(180,230,255,0.18)" rx="1" />
      ))}

      {/* ── Neon scan line — horizontal glow across mid-skyline ── */}
      <line
        x1="0" y1="390" x2="370" y2="380"
        stroke="rgba(0,210,255,0.18)" strokeWidth="1.5"
        filter="url(#neon-glow-soft)"
      />

      {/* ── Neon accent lines on tallest spires ── */}
      {/* Central tower neon strip */}
      <line x1="207" y1="295" x2="207" y2="360"
        stroke="rgba(0,210,255,0.55)" strokeWidth="0.75"
        filter="url(#neon-glow)" />
      <line x1="270" y1="282" x2="270" y2="358"
        stroke="rgba(0,210,255,0.45)" strokeWidth="0.75"
        filter="url(#neon-glow)" />
      <line x1="322" y1="278" x2="322" y2="345"
        stroke="rgba(0,210,255,0.40)" strokeWidth="0.75"
        filter="url(#neon-glow)" />

      {/* ── Antenna beacon dots ── */}
      <circle cx="207" cy="276" r="2.5" fill="rgba(0,210,255,0.9)" filter="url(#neon-glow)" />
      <circle cx="270" cy="280" r="2"   fill="rgba(0,210,255,0.75)" filter="url(#neon-glow)" />
      <circle cx="322" cy="275" r="2"   fill="rgba(255,80,180,0.80)" filter="url(#neon-glow)" />

      {/* ── Ground level neon horizon strip ── */}
      <rect x="0" y="610" width="370" height="1.5"
        fill="rgba(0,210,255,0.22)" filter="url(#neon-glow-soft)" />
    </svg>
  );
}

// ── PhotoCard ─────────────────────────────────────────────────────────────────
function PhotoCard({
  src, label, objectPosition = "center center", cityscape = false,
}: {
  src: string; label: string; objectPosition?: string; cityscape?: boolean;
}) {
  return (
    <div
      style={{
        width:        "100%",
        aspectRatio:  "369.615 / 616.585",
        borderRadius: 26.881,
        overflow:     "hidden",
        position:     "relative",
        cursor:       "none",
        boxShadow:    SH,
        transition:   "box-shadow 0.4s ease",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = SHH; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = SH; }}
    >
      <img
        src={src}
        alt={label}
        loading="lazy"
        decoding="async"
        style={{
          position:       "absolute",
          inset:          0,
          width:          "100%",
          height:         "100%",
          objectFit:      "cover",
          objectPosition,
          display:        "block",
          filter:         "saturate(0.28) brightness(0.92) contrast(1.10)",
        }}
      />
      <div
        style={{
          position:      "absolute",
          inset:         0,
          background:    "linear-gradient(to top, rgba(46,60,70,0.55) 0%, rgba(46,60,70,0) 50%)",
          pointerEvents: "none",
        }}
      />
      {cityscape && <CyberpunkCity />}
      <span
        style={{
          position:      "absolute",
          bottom:        24,
          left:          24,
          fontSize:      10,
          fontWeight:    600,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color:         "rgba(240,238,236,0.60)",
          fontFamily:    "'Raleway', sans-serif",
          lineHeight:    1,
          zIndex:        3,
        }}
      >
        {label}
      </span>
    </div>
  );
}

// ── Quote block ───────────────────────────────────────────────────────────────
function QuoteBlock({ text, delay, trigger }: { text: string; delay: number; trigger: boolean }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={trigger ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: EASE, delay }}
      style={{
        fontSize:      "clamp(13px, 1.4vw, 18px)",
        fontWeight:    300,
        fontStyle:     "italic",
        lineHeight:    1.55,
        color:         "rgba(46,60,70,0.48)",
        letterSpacing: "-0.015em",
        margin:        0,
        whiteSpace:    "pre-line",
      }}
    >
      {text}
    </motion.p>
  );
}

// ── Triptych ──────────────────────────────────────────────────────────────────
//
//  Sequential fly-in order (single grid trigger, staggered delays):
//    0.00s — Priest   (top-left)
//    0.18s — Quote 1  (below Priest)
//    0.34s — Prism    (right col, enters mid-scroll)
//    0.50s — Quote 2
//    0.68s — Action   (bottom-left)
//
export function Triptych() {
  const sectionRef  = useRef<HTMLElement>(null);
  const gridRef     = useRef<HTMLDivElement>(null);
  const cursorRef   = useRef<HTMLDivElement>(null);
  const labelRef    = useRef<HTMLDivElement>(null);

  const labelInView = useInView(labelRef, { once: true, margin: "-40px 0px" });
  // Single trigger for the whole chess grid → sequential stagger
  const gridInView  = useInView(gridRef,  { once: true, margin: "-80px 0px" });

  const [sectionVisible, setSectionVisible] = useState(false);
  const [hoveredCard,    setHoveredCard]    = useState<string | null>(null);

  // Mouse tracking for ASCII cursor
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform =
        `translate(${e.clientX + 20}px, ${e.clientY + 14}px)`;
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Float animation active only when section is visible
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => setSectionVisible(e.isIntersecting),
      { threshold: 0.04 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  const { t }   = useLang();
  const tr      = t.triptych;
  const onHover = useCallback((key: string | null) => setHoveredCard(key), []);

  // Right column offset — pushes Prism down to visually interleave with Priest
  const PRISM_OFFSET = "clamp(180px, 36vw, 400px)";
  // Horizontal gap between columns
  const GAP     = "clamp(80px, 18vw, 300px)";
  // Vertical rhythm inside left column
  const ROW_GAP = "clamp(56px, 9vw, 100px)";

  return (
    <>
      <AsciiCursor ref={cursorRef} hoveredCard={hoveredCard} />

      <section
        ref={sectionRef}
        data-bg="#e0e7ef"
        style={{
          position:   "relative",
          boxSizing:  "border-box",
          borderTop:  "0.5px solid rgba(46,60,70,0.07)",
          background: "transparent",
          fontFamily: "'Raleway', sans-serif",
          paddingTop: "clamp(48px, 7vw, 80px)",
          overflow:   "visible",
          cursor:     "none",
        }}
      >
        {/* ── Overline label ─────────────────────────────────────────── */}
        <div
          ref={labelRef}
          style={{ padding: `0 clamp(20px, 5vw, 60px)`, marginBottom: "clamp(32px, 5vw, 52px)" }}
        >
        </div>

        {/* ── Chess grid ─────────────────────────────────────────────── */}
        <div
          ref={gridRef}
          style={{
            margin:              "0 auto",
            padding:             `0 clamp(20px, 5vw, 60px)`,
            boxSizing:           "border-box",
            maxWidth:            1100,
            display:             "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap:           GAP,
            alignItems:          "start",
          }}
        >
          {/* ── LEFT column: Priest → Quote1 → Quote2 → Action ─────── */}
          <div
            style={{
              display:       "flex",
              flexDirection: "column",
              gap:           ROW_GAP,
            }}
          >
            {/* Card 1 — Priest / Reflection · delay 0s */}
            <AnimatedCard
              cardKey="priest" parallaxDir={1} delay={0}
              sectionVisible={sectionVisible} onHover={onHover}
              trigger={gridInView}
            >
              <PhotoCard
                src={imgPriest}
                label={tr.p1}
                objectPosition="center top"
              />
            </AnimatedCard>

            {/* Quote 1 · delay 0.18s */}
            <QuoteBlock text={tr.quote}  delay={0.18} trigger={gridInView} />

            {/* Quote 2 · delay 0.50s */}
            <QuoteBlock text={tr.quote2} delay={0.50} trigger={gridInView} />

            {/* Card 3 — Action · delay 0.68s */}
            <AnimatedCard
              cardKey="action" parallaxDir={-1} delay={0.68}
              sectionVisible={sectionVisible} onHover={onHover}
              trigger={gridInView}
            >
              <PhotoCard
                src={imgAction}
                label={tr.p3}
                objectPosition="68% center"
              />
            </AnimatedCard>
          </div>

          {/* ── RIGHT column: spacer + Prism · delay 0.34s ──────────── */}
          <div
            style={{
              paddingTop:    PRISM_OFFSET,
              display:       "flex",
              flexDirection: "column",
            }}
          >
            <AnimatedCard
              cardKey="prism" parallaxDir={-1} delay={0.34}
              sectionVisible={sectionVisible} onHover={onHover}
              trigger={gridInView}
            >
              <PhotoCard
                src={imgPrism}
                label={tr.p2}
                objectPosition="center center"
              />
            </AnimatedCard>
          </div>
        </div>

        <div style={{ height: "clamp(60px, 9vw, 96px)" }} />
      </section>
    </>
  );
}