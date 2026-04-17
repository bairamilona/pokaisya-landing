import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { useLang } from "../context/LangContext";

const ease = [0.23, 1, 0.32, 1] as const;

const cursorExpand   = () => window.dispatchEvent(new CustomEvent("cursor:active", { detail: { key: "expand" } }));
const cursorCollapse = () => window.dispatchEvent(new Event("cursor:inactive"));

export function CtaBottom() {
  const ref     = useRef(null);
  const inView  = useInView(ref, { once: true, margin: "-60px 0px" });
  const { t, lang }  = useLang();
  const c       = t.cta;
  const pr      = t.pricing;
  const [yearly, setYearly] = useState(false);

  const row = (
    plan: typeof pr.plans[number],
    i: number,
    isHighlight: boolean,
  ) => {
    const price  = yearly ? (plan as any).priceYearly  : (plan as any).priceMonthly;
    const period = yearly ? (plan as any).periodYearly : (plan as any).periodMonthly;
    const isFree = price === "0";

    return (
      <motion.div
        key={plan.id}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.55, ease, delay: 0.3 + i * 0.08 }}
        style={{
          display:             "grid",
          gridTemplateColumns: "1fr auto auto",
          alignItems:          "baseline",
          gap:                 "clamp(16px, 3vw, 48px)",
          padding:             "clamp(16px, 2.2vw, 24px) 0",
          borderBottom:        "0.5px solid rgba(236,238,240,0.08)",
          position:            "relative",
        }}
      >
        {/* Plan name + tag + features */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
            <span
              style={{
                fontSize:      "clamp(14px, 1.5vw, 17px)",
                fontWeight:    isHighlight ? 700 : 400,
                color:         isHighlight ? "#eceef0" : "rgba(236,238,240,0.62)",
                fontFamily:    "'Raleway', sans-serif",
                letterSpacing: isHighlight ? "-0.01em" : "0",
              }}
            >
              {plan.name}
            </span>
            {plan.tag && (
              <span
                style={{
                  fontSize:      "9px",
                  fontWeight:    500,
                  color:         "rgba(236,238,240,0.38)",
                  fontFamily:    "'Raleway', sans-serif",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontStyle:     "italic",
                }}
              >
                — {plan.tag}
              </span>
            )}
          </div>
          <span
            style={{
              display:       "block",
              marginTop:     "4px",
              fontSize:      "11px",
              fontWeight:    300,
              color:         "rgba(236,238,240,0.38)",
              fontFamily:    "'Raleway', sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            {plan.features.join(" · ")}
          </span>
        </div>

        {/* Price */}
        <div style={{ textAlign: "right", whiteSpace: "nowrap" }}>
          <span
            style={{
              fontSize:      isHighlight ? "clamp(20px, 2.4vw, 28px)" : "clamp(15px, 1.7vw, 20px)",
              fontWeight:    800,
              letterSpacing: "-0.04em",
              color:         isHighlight ? "#eceef0" : "rgba(236,238,240,0.50)",
              fontFamily:    "'Raleway', sans-serif",
              lineHeight:    1,
            }}
          >
            {isFree ? (lang === "ru" ? "Бесплатно" : "Free") : (lang === "ru" ? `${price} ₽` : `$${price}`)}
          </span>
          {!isFree && (
            <span
              style={{
                fontSize:   "10px",
                fontWeight: 300,
                color:      "rgba(236,238,240,0.32)",
                fontFamily: "'Raleway', sans-serif",
                marginLeft: "4px",
              }}
            >
              {period}
            </span>
          )}
        </div>

        {/* CTA link */}
        <CtaLink isHighlight={isHighlight} label={`${plan.cta} ↗`} />
      </motion.div>
    );
  };

  return (
    <section
      id="cta"
      data-bg="#2e3c46"
      style={{
        padding:    "clamp(72px, 10vw, 120px) clamp(24px, 5vw, 72px) clamp(64px, 8vw, 96px)",
        boxSizing:  "border-box",
        fontFamily: "'Raleway', sans-serif",
        background: "transparent",
      }}
    >
      <div ref={ref} style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Overline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease }}
          style={{
            fontSize:      "10px",
            fontWeight:    600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color:         "rgba(236,238,240,0.32)",
            margin:        "0 0 clamp(28px, 4vw, 48px) 0",
          }}
        >
          {c.label}
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.72, ease, delay: 0.07 }}
          style={{
            fontSize:      "clamp(36px, 6.5vw, 68px)",
            fontWeight:    800,
            letterSpacing: "-0.04em",
            lineHeight:    0.91,
            color:         "#eceef0",
            margin:        "0 0 clamp(12px, 2vw, 20px) 0",
          }}
        >
          {c.h1}<br />{c.h2}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
          style={{
            fontSize:   "14px",
            fontWeight: 300,
            lineHeight: 1.6,
            color:      "rgba(236,238,240,0.52)",
            margin:     "0 0 clamp(28px, 4vw, 44px)",
            maxWidth:   "380px",
          }}
        >
          {c.sub}
        </motion.p>

        {/* Monthly / Yearly toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
          style={{
            display:       "flex",
            alignItems:    "center",
            gap:           "6px",
            marginBottom:  "clamp(20px, 3vw, 32px)",
          }}
        >
          <ToggleBtn active={!yearly} onClick={() => setYearly(false)}>
            {lang === "ru" ? "Ежемесячно" : "Monthly"}
          </ToggleBtn>
          <ToggleBtn active={yearly} onClick={() => setYearly(true)}>
            {lang === "ru" ? "Ежегодно" : "Yearly"}
            <span
              style={{
                marginLeft:      "6px",
                fontSize:        "9px",
                fontWeight:      600,
                letterSpacing:   "0.06em",
                color:           yearly ? "rgba(120,200,120,0.9)" : "rgba(236,238,240,0.35)",
                background:      yearly ? "rgba(120,200,120,0.12)" : "rgba(236,238,240,0.06)",
                padding:         "2px 6px",
                borderRadius:    "20px",
                transition:      "color 0.25s ease, background 0.25s ease",
              }}
            >
              -17%
            </span>
          </ToggleBtn>
        </motion.div>

        {/* Table header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, ease, delay: 0.26 }}
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr auto auto",
            gap:                 "clamp(16px, 3vw, 48px)",
            paddingBottom:       "10px",
            borderBottom:        "0.5px solid rgba(236,238,240,0.14)",
          }}
        >
          {[lang === "ru" ? "Тариф" : "Plan", lang === "ru" ? "Цена" : "Price", ""].map((h, i) => (
            <span
              key={i}
              style={{
                fontSize:      "9px",
                fontWeight:    600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color:         "rgba(236,238,240,0.28)",
                fontFamily:    "'Raleway', sans-serif",
                textAlign:     i === 1 ? "right" : "left",
              }}
            >
              {h}
            </span>
          ))}
        </motion.div>

        {/* Plan rows */}
        {pr.plans.map((plan, i) =>
          row(plan as typeof pr.plans[number], i, plan.id === "pro")
        )}

        {/* Footer row: store links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease, delay: 0.6 }}
          style={{
            marginTop:      "clamp(20px, 3vw, 32px)",
            display:        "flex",
            flexWrap:       "wrap",
            justifyContent: "space-between",
            alignItems:     "center",
            gap:            "12px",
          }}
        >
          <span
            style={{
              fontSize:      "11px",
              color:         "rgba(236,238,240,0.30)",
              fontWeight:    300,
              letterSpacing: "0.04em",
            }}
          >
            ◈ {pr.annual}
          </span>

          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <span
              style={{
                fontSize:      "10px",
                color:         "rgba(236,238,240,0.28)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight:    500,
              }}
            >
              {c.storePre}
            </span>
            {(["App Store", "Google Play"] as const).map((s) => (
              <StoreLink key={s} label={s} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// ── Monthly/Yearly toggle button ──────────────────────────────────────────────
function ToggleBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display:        "flex",
        alignItems:     "center",
        padding:        "6px 14px",
        borderRadius:   "40px",
        border:         active ? "0.5px solid rgba(236,238,240,0.20)" : "0.5px solid transparent",
        background:     active ? "rgba(236,238,240,0.07)" : "transparent",
        color:          active ? "rgba(236,238,240,0.85)" : "rgba(236,238,240,0.32)",
        fontFamily:     "'Raleway', sans-serif",
        fontSize:       "11px",
        fontWeight:     active ? 600 : 400,
        letterSpacing:  "0.06em",
        cursor:         "none",
        transition:     "all 0.25s cubic-bezier(0.23,1,0.32,1)",
        whiteSpace:     "nowrap",
      }}
      onMouseEnter={cursorExpand}
      onMouseLeave={cursorCollapse}
    >
      {children}
    </button>
  );
}

// ── CTA link ──────────────────────────────────────────────────────────────────
function CtaLink({ isHighlight, label }: { isHighlight: boolean; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      style={{
        fontSize:       "10px",
        fontWeight:     600,
        letterSpacing:  "0.12em",
        textTransform:  "uppercase",
        textDecoration: "none",
        color: hovered
          ? "rgba(236,238,240,0.95)"
          : isHighlight ? "rgba(236,238,240,0.75)" : "rgba(236,238,240,0.32)",
        fontFamily:      "'Raleway', sans-serif",
        whiteSpace:      "nowrap",
        paddingBottom:   "1px",
        borderBottom:    isHighlight
          ? "0.5px solid rgba(236,238,240,0.35)"
          : "0.5px solid rgba(236,238,240,0.12)",
        display:         "inline-block",
        transform:       hovered ? "scale(1.07)" : "scale(1)",
        transformOrigin: "right center",
        transition:      "color 0.22s ease, transform 0.28s cubic-bezier(0.23,1,0.32,1)",
      }}
      onMouseEnter={() => { setHovered(true);  cursorExpand();   }}
      onMouseLeave={() => { setHovered(false); cursorCollapse(); }}
    >
      {label}
    </a>
  );
}

// ── Store link ────────────────────────────────────────────────────────────────
function StoreLink({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      style={{
        fontSize:        "10px",
        fontWeight:      600,
        letterSpacing:   "0.1em",
        textTransform:   "uppercase",
        textDecoration:  "none",
        color:           hovered ? "rgba(236,238,240,0.80)" : "rgba(236,238,240,0.38)",
        fontFamily:      "'Raleway', sans-serif",
        borderBottom:    "0.5px solid rgba(236,238,240,0.14)",
        paddingBottom:   "1px",
        display:         "inline-block",
        transform:       hovered ? "scale(1.07)" : "scale(1)",
        transformOrigin: "center center",
        transition:      "color 0.22s ease, transform 0.28s cubic-bezier(0.23,1,0.32,1)",
        cursor:          "none",
      }}
      onMouseEnter={() => { setHovered(true);  cursorExpand();   }}
      onMouseLeave={() => { setHovered(false); cursorCollapse(); }}
    >
      {label} ↗
    </a>
  );
}