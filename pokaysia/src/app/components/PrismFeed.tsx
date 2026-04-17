import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { useLang } from "../context/LangContext";

const ease = [0.23, 1, 0.32, 1] as const;

type Item = {
  num: string;
  tag: string;
  title: string;
  body: string;
  accent: string;
};

// ── FeedItem ──────────────────────────────────────────────────────────────────
function FeedItem({
  item,
  index,
}: {
  item: Item;
  index: number;
}) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: "-60px 0px",
  });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.62, ease, delay: index * 0.04 }}
      onMouseEnter={() => {
        setHovered(true);
        window.dispatchEvent(
          new CustomEvent("cursor:active", { detail: { key: item.num } })
        );
      }}
      onMouseLeave={() => {
        setHovered(false);
        window.dispatchEvent(new Event("cursor:inactive"));
      }}
      style={{
        borderTop:           "0.5px solid rgba(46,60,70,0.08)",
        padding:             "34px 0",
        display:             "grid",
        gridTemplateColumns: "48px 1fr auto",
        gap:                 "0 20px",
        alignItems:          "start",
      }}
    >
      <span
        style={{
          fontSize:      "10px",
          fontWeight:    600,
          color:         hovered ? "rgba(46,60,70,0.50)" : "rgba(46,60,70,0.22)",
          letterSpacing: "0.08em",
          paddingTop:    "4px",
          fontFamily:    "'Raleway', sans-serif",
          transition:    "color 0.3s ease",
        }}
      >
        {item.num}
      </span>

      <div>
        <p
          style={{
            fontSize:      "10px",
            fontWeight:    600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color:         "rgba(46,60,70,0.3)",
            margin:        "0 0 10px 0",
            fontFamily:    "'Raleway', sans-serif",
          }}
        >
          {item.tag}
        </p>
        <h3
          style={{
            fontSize:      "clamp(20px, 3.2vw, 28px)",
            fontWeight:    800,
            letterSpacing: "-0.025em",
            lineHeight:    1.08,
            color:         "#2e3c46",
            margin:        "0 0 12px 0",
            fontFamily:    "'Raleway', sans-serif",
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            fontSize:   "15px",
            fontWeight: 400,
            lineHeight: 1.68,
            color:      "rgba(46,60,70,0.48)",
            margin:     0,
            maxWidth:   "400px",
            fontFamily: "'Raleway', sans-serif",
          }}
        >
          {item.body}
        </p>
      </div>

      <span
        style={{
          fontSize:      "10px",
          fontWeight:    600,
          color:         "rgba(46,60,70,0.2)",
          letterSpacing: "0.08em",
          paddingTop:    "4px",
          textAlign:     "right",
          fontFamily:    "'Raleway', sans-serif",
          whiteSpace:    "nowrap",
        }}
      >
        {item.accent}
      </span>
    </motion.div>
  );
}

// ── SectionLabel ──────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px 0px" });
  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease }}
      style={{
        fontSize:      "10px",
        fontWeight:    600,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color:         "rgba(46,60,70,0.3)",
        margin:        "0",
        padding:       "72px 0 0 0",
        fontFamily:    "'Raleway', sans-serif",
      }}
    >
      {children}
    </motion.p>
  );
}

// ── PrismFeed ─────────────────────────────────────────────────────────────────
export function PrismFeed() {
  const { t } = useLang();
  const pf    = t.prismFeed;

  const mechItems = pf.items.slice(0, 3) as Item[];
  const caseItems = pf.items.slice(3)   as Item[];

  return (
    <div
      id="prisms"
      data-bg="#eceef0"
      style={{
        borderTop:  "0.5px solid rgba(46,60,70,0.08)",
        background: "transparent",
      }}
    >
      <div
        style={{
          maxWidth:  "680px",
          margin:    "0 auto",
          padding:   "0 28px",
          boxSizing: "border-box",
        }}
      >
        <section>
          <SectionLabel>{pf.mechLabel}</SectionLabel>
          <div style={{ borderBottom: "0.5px solid rgba(46,60,70,0.08)" }}>
            {mechItems.map((item, i) => (
              <FeedItem key={item.num} item={item} index={i} />
            ))}
          </div>
        </section>

        <section style={{ paddingBottom: "80px" }}>
          <SectionLabel>{pf.useCaseLabel}</SectionLabel>
          <div style={{ borderBottom: "0.5px solid rgba(46,60,70,0.08)" }}>
            {caseItems.map((item, i) => (
              <FeedItem key={item.num} item={item} index={i} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}