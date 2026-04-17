import { useRef, useEffect, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useLang } from "../context/LangContext";

const EASE = [0.16, 1, 0.3, 1] as const;
// Hero bg — must match data-bg so the opaque line backgrounds blend in
const HERO_BG = "#eceef0";

// ─── FitLine ──────────────────────────────────────────────────────────────────
// Outer motion.div:  handles scroll-driven y (MotionValue)  +  layout (flex:1)
// Inner motion.div:  handles load animation (opacity, y)
// Span (hidden):     measures natural scrollWidth at 100px → scale to container
// ─────────────────────────────────────────────────────────────────────────────
interface FitLineProps {
  text: string;
  triggered: boolean;
  delay: number;
  fontWeight: number;
  fontStyle?: "normal" | "italic";
  textTransform?: "uppercase" | "none";
  color: string;
  scrollY: any;       // MotionValue<number>
  zIndex: number;
  bg?: string;
}

function FitLine({
  text,
  triggered,
  delay,
  fontWeight,
  fontStyle = "normal",
  textTransform = "none",
  color,
  scrollY,
  zIndex,
  bg = HERO_BG,
}: FitLineProps) {
  const outerRef  = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLSpanElement>(null);
  const [fontSize, setFontSize] = useState("100px");

  useEffect(() => {
    const run = () => {
      const outer = outerRef.current;
      const el    = measureRef.current;
      if (!outer || !el) return;

      el.style.fontSize = "100px";
      const w = outer.offsetWidth;
      const nw = el.scrollWidth;
      if (!w || !nw) return;

      setFontSize(`${(w / nw) * 100 * 0.997}px`);
    };

    // defer one frame so flex layout is settled
    const raf = requestAnimationFrame(run);
    document.fonts?.ready.then(run);
    const ro = new ResizeObserver(run);
    if (outerRef.current) ro.observe(outerRef.current);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [text]);

  const textStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Raleway', sans-serif",
    fontWeight,
    fontStyle,
    textTransform,
    letterSpacing: "-0.045em",
    lineHeight: 1,
    whiteSpace: "nowrap",
    color,
    userSelect: "none",
    fontSize,
  };

  return (
    // Outer: layout + scroll-driven y + z-index masking
    <motion.div
      ref={outerRef}
      style={{
        flex: 1,
        minHeight: 0,
        position: "relative",
        background: bg,   // transparent or opaque — masking layer
        zIndex,
        y: scrollY,
        // keep the line's bg from leaking beyond the container
        overflow: "visible",
      }}
    >
      {/* Hidden measure node — lives outside animation to avoid layout thrash */}
      <span
        ref={measureRef}
        aria-hidden
        style={{
          ...textStyle,
          visibility: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
      >
        {text}
      </span>

      {/* Load reveal: fade + rise */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={triggered ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0, ease: EASE, delay }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        }}
      >
        <span style={textStyle}>{text}</span>
      </motion.div>
    </motion.div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export function Hero() {
  const sectionRef   = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const slotHRef     = useRef(0);

  const triggered = useInView(sectionRef, { once: true });

  // Measure each line slot height (container / 3)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => { slotHRef.current = el.offsetHeight / 3; };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // RAF-based scroll progress — avoids Motion's useScroll container warning
  const scrollProgress = useMotionValue(0);

  useEffect(() => {
    let raf: number;
    const tick = () => {
      const el = sectionRef.current;
      if (el) {
        const rect   = el.getBoundingClientRect();
        const height = el.offsetHeight;
        // 0 when top of section hits top of viewport, 1 when bottom reaches top
        const p = Math.max(0, Math.min(1, -rect.top / height));
        scrollProgress.set(p);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [scrollProgress]);

  const y1 = useTransform(scrollProgress, [0, 1], ["0vh", "-7vh"]);
  const y2 = useTransform(scrollProgress, [0, 1], ["0vh", "-20vh"]);
  const y3 = useTransform(scrollProgress, [0, 1], ["0vh", "-36vh"]);

  const { t } = useLang();
  const h = t.hero;

  return (
    <section
      ref={sectionRef}
      data-bg={HERO_BG}
      style={{
        height: "100svh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        background: "transparent",
        fontFamily: "'Raleway', sans-serif",
      }}
    >
      {/* Hairline below nav */}
      <div
        style={{
          position: "absolute",
          top: 56,
          left: 28,
          right: 28,
          height: "0.5px",
          background: "rgba(46,60,70,0.08)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />

      {/* ── Overline ─────────────────────────────────────────────────────── */}
      <div style={{ flexShrink: 0, padding: "76px 28px 12px" }}>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={triggered ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE, delay: 0.04 }}
          style={{
            margin: 0,
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(46,60,70,0.26)",
          }}
        >
          {h.overline}
        </motion.p>
      </div>

      {/* ── Three lines ───────────────────────────────────────────────────────
          Flex column — each FitLine gets equal height (flex:1).
          On scroll:
            • Each line moves up at a different rate → accordion collapse
            • Higher z-index lines have opaque HERO_BG background
              → they visually mask the line(s) below as those slide up
          Visual depth (z-index high = visually closest / on top):
            LOOK          z:3  — anchor, barely moves
            from another  z:2  — slides ~90 % of its slot height
            angle.        z:1  — slides ~176 % of its slot height (fastest)
      ──────────────────────────────────────────────────────────────────────── */}
      <div
        ref={containerRef}
        style={{
          flex: 1,
          minHeight: 0,
          display: "flex",
          flexDirection: "column",
          gap: "clamp(12px, 3.5vh, 40px)",
          padding: "0 28px",
          // clip lines that travel above/below the container
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* LOOK — Black 900, uppercase */}
        <FitLine
          text={h.word1}
          triggered={triggered}
          delay={0.08}
          fontWeight={900}
          textTransform="uppercase"
          color="#26211d"
          scrollY={y1}
          zIndex={2}
          bg="transparent"
        />

        {/* from another — Light 300, italic, ghosted */}
        <FitLine
          text={h.word2}
          triggered={triggered}
          delay={0.30}
          fontWeight={300}
          fontStyle="italic"
          color="rgba(46,60,70,0.22)"
          scrollY={y2}
          zIndex={3}
          bg="transparent"
        />

        {/* angle. — ExtraBold 800, italic, full warm */}
        <FitLine
          text={h.word3}
          triggered={triggered}
          delay={0.54}
          fontWeight={800}
          fontStyle="italic"
          color="#26211d"
          scrollY={y3}
          zIndex={1}
          bg="transparent"
        />
      </div>

      {/* ── Sub-copy + Explore link ──────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={triggered ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: EASE, delay: 0.9 }}
        style={{
          flexShrink: 0,
          position: "relative",
          zIndex: 5,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 16,
          padding: "14px 28px 36px",
          background: "transparent",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "clamp(13px, 1.4vw, 15px)",
            fontWeight: 400,
            lineHeight: 1.72,
            color: "rgba(46,60,70,0.38)",
            maxWidth: 320,
          }}
        >
          {h.sub}
        </p>

        <a
          href="#showcase"
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: "rgba(46,60,70,0.28)",
            textDecoration: "none",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            borderBottom: "0.5px solid rgba(46,60,70,0.1)",
            paddingBottom: 3,
            transition: "color 0.22s ease, border-color 0.22s ease, gap 0.3s ease",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.color = "#2e3c46";
            el.style.borderColor = "rgba(46,60,70,0.32)";
            el.style.gap = "18px";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.color = "rgba(46,60,70,0.28)";
            el.style.borderColor = "rgba(46,60,70,0.1)";
            el.style.gap = "10px";
          }}
        >
          {h.scrollBtn} <span aria-hidden>↓</span>
        </a>
      </motion.div>

      {/* Scroll pulse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={triggered ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 1.5 }}
        style={{ position: "absolute", bottom: 40, right: 28, zIndex: 5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "0.5px",
            height: 36,
            background:
              "linear-gradient(to bottom, rgba(46,60,70,0) 0%, rgba(46,60,70,0.12) 100%)",
          }}
        />
      </motion.div>
    </section>
  );
}