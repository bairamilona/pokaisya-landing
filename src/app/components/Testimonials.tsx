import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { useLang } from "../context/LangContext";

const ease = [0.23, 1, 0.32, 1] as const;

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const { t } = useLang();
  const { quotes, label } = t.testimonials;

  const go = useCallback(
    (next: number) => {
      setDir(next > current ? 1 : -1);
      setCurrent(next);
    },
    [current]
  );

  useEffect(() => {
    setCurrent(0);
  }, [quotes]);

  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setCurrent((c) => (c + 1) % quotes.length);
    }, 5500);
    return () => clearInterval(id);
  }, [quotes]);

  const q = quotes[current] ?? quotes[0];

  return (
    <section
      data-bg="#e4e8ed"
      style={{
        borderTop: "0.5px solid rgba(46,60,70,0.08)",
        padding: "72px 28px",
        boxSizing: "border-box",
        fontFamily: "'Raleway', sans-serif",
        background: "transparent",
      }}
    >
      <div ref={ref} style={{ maxWidth: "680px", margin: "0 auto" }}>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          style={{
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(46,60,70,0.3)",
            margin: "0 0 48px 0",
          }}
        >
          {label}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease, delay: 0.1 }}
          style={{
            borderTop: "0.5px solid rgba(46,60,70,0.1)",
            paddingTop: "40px",
          }}
        >
          <div
            style={{
              minHeight: "150px",
              position: "relative",
              overflow: "hidden",
              marginBottom: "40px",
            }}
          >
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={`${q.id}-${current}`}
                custom={dir}
                initial={{ opacity: 0, x: dir * 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -28 }}
                transition={{ duration: 0.42, ease }}
              >
                <blockquote
                  style={{
                    fontSize: "clamp(18px, 2.6vw, 26px)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    lineHeight: 1.52,
                    color: "#2e3c46",
                    letterSpacing: "-0.01em",
                    margin: "0 0 24px 0",
                    maxWidth: "540px",
                  }}
                >
                  "{q.text}"
                </blockquote>
                <footer
                  style={{
                    fontSize: "10px",
                    fontWeight: 600,
                    color: "rgba(46,60,70,0.32)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {q.name} — {q.role}
                </footer>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {(
              [
                {
                  fn: () => go((current - 1 + quotes.length) % quotes.length),
                  label: "Prev",
                  char: "←",
                },
                {
                  fn: () => go((current + 1) % quotes.length),
                  label: "Next",
                  char: "→",
                },
              ] as const
            ).map(({ fn, label: btnLabel, char }) => (
              <button
                key={btnLabel}
                onClick={fn}
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  border: "0.5px solid rgba(46,60,70,0.18)",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  color: "rgba(46,60,70,0.38)",
                  fontFamily: "'Raleway', sans-serif",
                  transition: "border-color 0.2s ease, color 0.2s ease, background 0.2s ease",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.borderColor = "rgba(46,60,70,0.5)";
                  el.style.color = "#2e3c46";
                  el.style.background = "rgba(46,60,70,0.05)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.borderColor = "rgba(46,60,70,0.18)";
                  el.style.color = "rgba(46,60,70,0.38)";
                  el.style.background = "transparent";
                }}
                aria-label={btnLabel}
              >
                {char}
              </button>
            ))}

            <div style={{ display: "flex", gap: "5px", marginLeft: "6px" }}>
              {quotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  style={{
                    width: i === current ? "18px" : "5px",
                    height: "5px",
                    borderRadius: "4px",
                    border: "none",
                    background:
                      i === current
                        ? "rgba(46,60,70,0.55)"
                        : "rgba(46,60,70,0.15)",
                    padding: 0,
                    transition:
                      "width 0.35s cubic-bezier(0.23,1,0.32,1), background 0.3s ease",
                  }}
                  aria-label={`Quote ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}