import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLang } from "../context/LangContext";
import { SeeMaskEffect } from "./SeeMaskEffect";

const ease = [0.23, 1, 0.32, 1] as const;

// ── Ptr cursor helpers (replaces browser's default pointer finger) ────────────
const ptrOn  = () =>
  window.dispatchEvent(
    new CustomEvent("cursor:active", { detail: { key: "ptr" } })
  );
const ptrOff = () =>
  window.dispatchEvent(new CustomEvent("cursor:inactive"));

const cursorExpand   = () => window.dispatchEvent(new CustomEvent("cursor:active", { detail: { key: "expand" } }));
const cursorCollapse = () => window.dispatchEvent(new CustomEvent("cursor:inactive"));

// ── Mini plan card ────────────────────────────────────────────────────────────
function MiniPlan({
  plan,
  highlight,
}: {
  plan: { id: string; name: string; priceMonthly: string; periodMonthly: string; tag: string; features: readonly string[]; cta: string };
  highlight: boolean;
}) {
  return (
    <div
      style={{
        flex:          "1 1 180px",
        minWidth:      0,
        padding:       "20px 18px 18px",
        borderRadius:  "8px",
        border:        highlight
          ? "1px solid rgba(236,238,240,0.18)"
          : "0.5px solid rgba(236,238,240,0.07)",
        background:    highlight
          ? "rgba(236,238,240,0.06)"
          : "rgba(236,238,240,0.02)",
        boxSizing:     "border-box",
        position:      "relative",
      }}
    >
      {plan.tag && (
        <span
          style={{
            position:      "absolute",
            top:           "-9px",
            left:          "16px",
            background:    "rgba(236,238,240,0.15)",
            color:         "rgba(236,238,240,0.6)",
            fontSize:      "8px",
            fontWeight:    700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            padding:       "2px 10px",
            borderRadius:  "20px",
            fontFamily:    "'Raleway', sans-serif",
          }}
        >
          {plan.tag}
        </span>
      )}

      <div style={{ display: "flex", alignItems: "baseline", gap: "5px", marginBottom: "12px" }}>
        <span
          style={{
            fontSize:      "clamp(22px, 3vw, 30px)",
            fontWeight:    800,
            letterSpacing: "-0.03em",
            color:         "rgba(236,238,240,0.88)",
            fontFamily:    "'Raleway', sans-serif",
            lineHeight:    1,
          }}
        >
          {plan.priceMonthly === "0" ? "Free" : plan.priceMonthly}
        </span>
        {plan.priceMonthly !== "0" && (
          <span
            style={{
              fontSize:   "11px",
              fontWeight: 400,
              color:      "rgba(236,238,240,0.28)",
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            {plan.periodMonthly}
          </span>
        )}
      </div>

      <ul
        style={{
          listStyle:     "none",
          padding:       0,
          margin:        "0 0 16px",
          display:       "flex",
          flexDirection: "column",
          gap:           "6px",
        }}
      >
        {plan.features.map((f) => (
          <li
            key={f}
            style={{
              fontSize:   "11px",
              fontWeight: 400,
              color:      "rgba(236,238,240,0.38)",
              fontFamily: "'Raleway', sans-serif",
              display:    "flex",
              gap:        "6px",
              alignItems: "center",
            }}
          >
            <span style={{ color: "rgba(236,238,240,0.18)", fontSize: "9px", flexShrink: 0 }}>◈</span>
            {f}
          </li>
        ))}
      </ul>

      <button
        style={{
          width:         "100%",
          padding:       "9px 12px",
          borderRadius:  "4px",
          border:        highlight ? "none" : "0.5px solid rgba(236,238,240,0.1)",
          background:    highlight ? "rgba(236,238,240,0.9)" : "transparent",
          color:         highlight ? "#0d1117" : "rgba(236,238,240,0.35)",
          fontSize:      "11px",
          fontWeight:    700,
          letterSpacing: "0.06em",
          fontFamily:    "'Raleway', sans-serif",
          cursor:        "none",
          transition:    "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          ptrOn();
          const el = e.currentTarget as HTMLButtonElement;
          if (highlight) { el.style.background = "#fff"; }
          else { el.style.background = "rgba(236,238,240,0.07)"; el.style.color = "rgba(236,238,240,0.6)"; }
        }}
        onMouseLeave={(e) => {
          ptrOff();
          const el = e.currentTarget as HTMLButtonElement;
          if (highlight) { el.style.background = "rgba(236,238,240,0.9)"; }
          else { el.style.background = "transparent"; el.style.color = "rgba(236,238,240,0.35)"; }
        }}
      >
        {plan.cta}
      </button>
    </div>
  );
}

// ── SiteFooter ────────────────────────────────────────────────────────────────
export function SiteFooter() {
  const { t } = useLang();
  const f  = t.footer;
  const pr = t.pricing;
  const [open, setOpen] = useState(false);

  const PAD = "clamp(16px, 3vw, 48px)";

  return (
    <footer
      data-bg="#090c10"
      style={{
        background: "transparent",
        fontFamily: "'Raleway', sans-serif",
        overflow:   "hidden",
        paddingTop: "clamp(60px, 9vw, 110px)",
      }}
    >
      {/* ── Giant SEE — lens collage masked to letter shapes ────────────── */}
      <SeeMaskEffect word={f.seeWord} />

      {/* ── Giant DIFFERENTLY — letters spread across full width ──────── */}
      <div
        style={{
          display:        "flex",
          justifyContent: "space-between",
          alignItems:     "baseline",
          padding:        `0 ${PAD}`,
          lineHeight:     0.83,
          marginTop:      "-0.06em",
          userSelect:     "none",
        }}
      >
        {f.differentlyLetters.map((ch, i) => (
          <span
            key={i}
            style={{
              fontSize:   "clamp(28px, 11vw, 170px)",
              fontWeight: 800,
              color:      "#ffffff",
              fontFamily: "'Raleway', sans-serif",
              lineHeight: 0.83,
            }}
          >
            {ch}
          </span>
        ))}
      </div>

      {/* ── Paywall toggle ────────────────────────────────────────────── */}
      <div
        style={{
          padding:   `clamp(32px, 5vw, 56px) ${PAD} 0`,
          boxSizing: "border-box",
        }}
      >
        {/* Hairline divider */}
        <div
          style={{
            height:       "0.5px",
            background:   "rgba(236,238,240,0.06)",
            marginBottom: "clamp(20px, 3vw, 32px)",
          }}
        />

        {/* Toggle button */}
        <button
          onClick={() => setOpen((v) => !v)}
          style={{
            display:        "flex",
            alignItems:     "center",
            gap:            "14px",
            background:     "none",
            border:         "none",
            cursor:         "none",
            padding:        0,
            fontFamily:     "'Raleway', sans-serif",
          }}
          onMouseEnter={ptrOn}
          onMouseLeave={ptrOff}
        >
          <span
            style={{
              fontSize:      "11px",
              fontWeight:    400,
              color:         "rgba(236,238,240,0.28)",
              letterSpacing: "0.06em",
            }}
          >
            {pr.storeNote}
          </span>
          <span
            style={{
              fontSize:      "10px",
              fontWeight:    600,
              color:         "rgba(236,238,240,0.18)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              display:       "flex",
              alignItems:    "center",
              gap:           "6px",
            }}
          >
            {pr.label}
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.35, ease }}
              style={{ display: "inline-block", lineHeight: 1 }}
            >
              ↓
            </motion.span>
          </span>
        </button>

        {/* Expandable plan cards */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="plans"
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: "clamp(20px, 3vw, 28px)" }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.55, ease }}
              style={{ overflow: "hidden" }}
            >
              <div
                style={{
                  display:     "flex",
                  flexWrap:    "wrap",
                  gap:         "12px",
                  paddingBottom: "4px",
                }}
              >
                {pr.plans.map((plan) => (
                  <MiniPlan
                    key={plan.id}
                    plan={plan}
                    highlight={plan.id === "pro"}
                  />
                ))}
              </div>
              <p
                style={{
                  fontSize:      "10px",
                  color:         "rgba(236,238,240,0.14)",
                  margin:        "14px 0 0",
                  letterSpacing: "0.04em",
                  fontWeight:    400,
                }}
              >
                ◈ {pr.annual}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Bottom nav ────────────────────────────────────────────────── */}
      <div
        style={{
          padding:        `clamp(28px, 4vw, 44px) ${PAD} clamp(24px, 3vw, 36px)`,
          boxSizing:      "border-box",
          display:        "flex",
          flexWrap:       "wrap",
          gap:            "12px",
          justifyContent: "space-between",
          alignItems:     "center",
        }}
      >
        <span
          style={{
            fontSize:      "11px",
            fontWeight:    800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color:         "rgba(236,238,240,0.14)",
          }}
        >
          {t.nav.brand}
        </span>

        <nav style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {[
            { label: f.telegram, href: "#" },
            { label: f.privacy,  href: "#" },
            { label: f.contact,  href: "#" },
          ].map((l) => (
            <FooterLink key={l.label} label={l.label} href={l.href} />
          ))}
        </nav>

        <span
          style={{
            fontSize:      "10px",
            color:         "rgba(236,238,240,0.08)",
            fontWeight:    400,
            letterSpacing: "0.06em",
          }}
        >
          © 2026
        </span>
      </div>
    </footer>
  );
}

// ── FooterLink ────────────────────────────────────────────────────────────────
function FooterLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      style={{
        fontSize:        "10px",
        fontWeight:      600,
        letterSpacing:   "0.1em",
        textTransform:   "uppercase",
        textDecoration:  "none",
        fontFamily:      "'Raleway', sans-serif",
        color:           hovered ? "rgba(236,238,240,0.80)" : "rgba(236,238,240,0.22)",
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