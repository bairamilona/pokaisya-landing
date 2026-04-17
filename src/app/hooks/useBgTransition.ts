import { useEffect, useRef } from "react";

// ── helpers ───────────────────────────────────────────────────────────────────
function hexToRgb(hex: string) {
  const h    = hex.trim().replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n    = parseInt(full, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function rgbToHex({ r, g, b }: { r: number; g: number; b: number }) {
  const to = (v: number) => Math.round(v).toString(16).padStart(2, "0");
  return "#" + to(r) + to(g) + to(b);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lerpColor(
  c1: { r: number; g: number; b: number },
  c2: { r: number; g: number; b: number },
  t: number
) {
  return {
    r: lerp(c1.r, c2.r, t),
    g: lerp(c1.g, c2.g, t),
    b: lerp(c1.b, c2.b, t),
  };
}

// ─────────────────────────────────────────────────────────────────────────────
//  useBgTransition
//
//  Scroll-position driven — reads section offsets on every RAF frame so the
//  background color tracks scroll position continuously, with no discrete
//  IntersectionObserver events that could cause jumps.
//
//  Algorithm:
//    1. "sensor" = scrollY + vh * 0.45  (slightly above viewport center)
//    2. Find the two sections that bracket the sensor
//    3. Blend between their colors based on how far through the first section
//       the sensor is (the last 30 % of each section is the transition zone)
//    4. Keep a soft lerp (SMOOTH) for a cinematic trailing feel
// ─────────────────────────────────────────────────────────────────────────────
export function useBgTransition(bgRef: React.RefObject<HTMLDivElement | null>) {
  const currentColor = useRef(hexToRgb("#eceef0"));
  const rafId        = useRef<number>(0);

  useEffect(() => {
    const SMOOTH       = 0.08;   // lerp factor per frame  (~0.7 s to settle)
    const BLEND_START  = 0.65;   // fraction through a section where next color begins
    const SENSOR_RATIO = 0.45;   // fraction of viewport height used as the sensor line

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-bg]")
    );
    if (!sections.length) return;

    const colors = sections.map((s) => hexToRgb(s.dataset.bg!));
    currentColor.current = { ...colors[0] };

    const applyBg = () => {
      if (bgRef.current) {
        bgRef.current.style.background = rgbToHex(currentColor.current);
      }
    };

    const getTarget = () => {
      const sensorY = window.scrollY + window.innerHeight * SENSOR_RATIO;

      // Find which section the sensor is inside
      for (let i = 0; i < sections.length; i++) {
        const el     = sections[i];
        const rect   = el.getBoundingClientRect();
        const top    = rect.top + window.scrollY;
        const height = rect.height;
        const bottom = top + height;

        const isLast  = i === sections.length - 1;
        const inSection = sensorY >= top && (sensorY < bottom || isLast);

        if (inSection) {
          if (isLast) return { ...colors[i] };

          // Blend zone: last (1 - BLEND_START) fraction of this section
          const blendFrom = top + height * BLEND_START;

          if (sensorY <= blendFrom) {
            // Solidly inside section i
            return { ...colors[i] };
          } else {
            // Transitioning toward section i+1
            const t = (sensorY - blendFrom) / (height * (1 - BLEND_START));
            return lerpColor(colors[i], colors[i + 1], Math.min(1, t));
          }
        }
      }

      // Fallback: below all sections → last color
      return { ...colors[colors.length - 1] };
    };

    const tick = () => {
      const target = getTarget();
      currentColor.current = lerpColor(currentColor.current, target, SMOOTH);
      applyBg();
      rafId.current = requestAnimationFrame(tick);
    };

    applyBg();
    rafId.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId.current);
    };
  }, [bgRef]);
}