import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useLang } from "../context/LangContext";

const ease = [0.23, 1, 0.32, 1] as const;

export function PrivacyStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const { t } = useLang();
  const { points } = t.privacy;

  return (
    <section
      ref={ref}
      data-bg="#eceef0"
      style={{
        borderTop: "0.5px solid rgba(46,60,70,0.08)",
        borderBottom: "0.5px solid rgba(46,60,70,0.08)",
        padding: "48px 28px",
        boxSizing: "border-box",
        fontFamily: "'Raleway', sans-serif",
        background: "transparent",
      }}
    >
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "28px 40px",
          }}
        >
          {points.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.52, ease, delay: i * 0.07 }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <span
                  style={{
                    fontSize: "14px",
                    color: "rgba(46,60,70,0.22)",
                    marginTop: "1px",
                    flexShrink: 0,
                  }}
                >
                  {p.icon}
                </span>
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#2e3c46",
                      margin: "0 0 5px 0",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {p.label}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: 1.55,
                      color: "rgba(46,60,70,0.4)",
                      margin: 0,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
