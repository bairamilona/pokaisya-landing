import { useEffect, useState } from "react";
import { useLang, type Lang } from "../context/LangContext";
import Vector from "../../imports/Vector";

export function Nav() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleLang = () => setLang(lang === "en" ? "ru" : "en");

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 28px",
        background: scrolled ? "rgba(236,238,240,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.8)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.8)" : "none",
        borderBottom: scrolled
          ? "0.5px solid rgba(46,60,70,0.08)"
          : "0.5px solid transparent",
        transition:
          "background 0.45s ease, border-color 0.45s ease, backdrop-filter 0.45s ease",
        boxSizing: "border-box",
      }}
    >
      {/* Brand: logo + wordmark */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* Vector logo – the 7-dot prism mark */}
        <div
          style={{
            width: "22px",
            height: "13px",
            flexShrink: 0,
            position: "relative",
          }}
        >
          <Vector />
        </div>

        <span
          style={{
            fontSize: "13px",
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#2e3c46",
            fontFamily: "'Raleway', sans-serif",
            lineHeight: 1,
          }}
        >
          {t.nav.brand}
        </span>
      </div>

      {/* Right side: lang toggle + CTA */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* Language toggle */}
        <button
          onClick={toggleLang}
          aria-label="Toggle language"
          style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(46,60,70,0.38)",
            background: "transparent",
            border: "0.5px solid rgba(46,60,70,0.14)",
            borderRadius: "40px",
            padding: "5px 11px",
            fontFamily: "'Raleway', sans-serif",
            transition: "color 0.2s ease, border-color 0.2s ease, background 0.2s ease",
            lineHeight: 1,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.color = "#2e3c46";
            el.style.borderColor = "rgba(46,60,70,0.3)";
            el.style.background = "rgba(46,60,70,0.04)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.color = "rgba(46,60,70,0.38)";
            el.style.borderColor = "rgba(46,60,70,0.14)";
            el.style.background = "transparent";
          }}
        >
          {lang === "en" ? "RU" : "EN"}
        </button>

        {/* CTA */}
        <a
          href="#cta"
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#2e3c46",
            textDecoration: "none",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "7px 18px",
            border: "0.5px solid rgba(46,60,70,0.2)",
            borderRadius: "40px",
            fontFamily: "'Raleway', sans-serif",
            transition: "background 0.2s ease, border-color 0.2s ease, color 0.2s ease",
            lineHeight: 1,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "#2e3c46";
            el.style.color = "#eceef0";
            el.style.borderColor = "#2e3c46";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = "transparent";
            el.style.color = "#2e3c46";
            el.style.borderColor = "rgba(46,60,70,0.2)";
          }}
        >
          {t.nav.cta}
        </a>
      </div>
    </nav>
  );
}