import "../styles/fonts.css";
import { useRef, useEffect } from "react";
import { LangProvider } from "./context/LangContext";
import { useBgTransition } from "./hooks/useBgTransition";
import { CustomCursor } from "./components/CustomCursor";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Triptych } from "./components/Triptych";
import { PrismFeed } from "./components/PrismFeed";
import { Testimonials } from "./components/Testimonials";
import { PrivacyStrip } from "./components/PrivacyStrip";
import { CtaBottom } from "./components/CtaBottom";
import { SiteFooter } from "./components/SiteFooter";

// ── Favicon: 7-dot prism logo as SVG data URL ──────────────────────────────────
function useFavicon() {
  useEffect(() => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <rect width="32" height="32" rx="7" fill="#26211d"/>
      <circle cx="5.2"  cy="11.2" r="2.1" fill="#eceef0"/>
      <circle cx="12.5" cy="11.2" r="2.1" fill="#eceef0"/>
      <circle cx="19.8" cy="11.2" r="2.1" fill="#eceef0"/>
      <circle cx="5.2"  cy="20.8" r="2.1" fill="#eceef0"/>
      <circle cx="12.5" cy="20.8" r="2.1" fill="#eceef0"/>
      <circle cx="19.8" cy="20.8" r="2.1" fill="#eceef0"/>
      <circle cx="27.1" cy="16.0" r="2.1" fill="#eceef0"/>
    </svg>`;
    const url = `data:image/svg+xml,${encodeURIComponent(svg)}`;
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = url;
    link.type = "image/svg+xml";
  }, []);
}

function AppInner() {
  useFavicon();
  const bgRef = useRef<HTMLDivElement>(null);
  useBgTransition(bgRef);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        fontFamily: "'Raleway', sans-serif",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        overflowX: "hidden",
        cursor: "none",
      }}
    >
      {/* Fixed lerp background layer — the cinematic scroll bg transition */}
      <div
        ref={bgRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          background: "#eceef0",
          zIndex: -1,
          // Subtle depth vignette layered on top of the lerped bg
          // (same technique as background-transition.html)
        }}
      >
        {/* Radial depth overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background: `
              radial-gradient(900px 500px at 50% 0%, rgba(255,255,255,0.18), transparent 60%),
              radial-gradient(700px 400px at 10% 100%, rgba(255,255,255,0.08), transparent 55%)
            `,
          }}
        />
      </div>

      <CustomCursor />
      <Nav />

      {/* All sections have data-bg and transparent backgrounds */}
      <Hero />

      <Triptych />

      <PrismFeed />

      <Testimonials />

      <PrivacyStrip />

      <CtaBottom />

      <SiteFooter />
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <AppInner />
    </LangProvider>
  );
}