import { useEffect, useRef } from "react";
import type { JSX } from "react";

import LensImage57  from "./lensesimages/LensImage57";
import LensImage61  from "./lensesimages/LensImage61";
import LensImage65  from "./lensesimages/LensImage65";
import LensImage69  from "./lensesimages/LensImage69";
import LensImage73  from "./lensesimages/LensImage73";
import LensImage77  from "./lensesimages/LensImage77";
import LensImage81  from "./lensesimages/LensImage81";
import LensImage85  from "./lensesimages/LensImage85";
import LensImage89  from "./lensesimages/LensImage89";
import LensImage93  from "./lensesimages/LensImage93";
import LensImage150 from "./lensesimages/LensImage150";
import LensImage154 from "./lensesimages/LensImage154";
import LensImage158 from "./lensesimages/LensImage158";
import LensImage162 from "./lensesimages/LensImage162";
import LensImage166 from "./lensesimages/LensImage166";
import LensImage170 from "./lensesimages/LensImage170";
import LensImage174 from "./lensesimages/LensImage174";
import LensImage178 from "./lensesimages/LensImage178";
import LensImage182 from "./lensesimages/LensImage182";
import LensImage186 from "./lensesimages/LensImage186";
import LensImage342 from "./lensesimages/LensImage342";
import LensImage346 from "./lensesimages/LensImage346";
import LensImage350 from "./lensesimages/LensImage350";
import LensImage354 from "./lensesimages/LensImage354";
import LensImage358 from "./lensesimages/LensImage358";
import LensImage362 from "./lensesimages/LensImage362";
import LensImage366 from "./lensesimages/LensImage366";
import LensImage370 from "./lensesimages/LensImage370";
import LensImage374 from "./lensesimages/LensImage374";
import LensImage378 from "./lensesimages/LensImage378";
import LensImage400 from "./lensesimages/LensImage400";
import LensImage401 from "./lensesimages/LensImage401";
import LensImage402 from "./lensesimages/LensImage402";
import LensImage403 from "./lensesimages/LensImage403";
import LensImage404 from "./lensesimages/LensImage404";
import LensImage405 from "./lensesimages/LensImage405";
import LensImage406 from "./lensesimages/LensImage406";
import LensImage407 from "./lensesimages/LensImage407";
import LensImage408 from "./lensesimages/LensImage408";
import LensImage409 from "./lensesimages/LensImage409";
import LensImage410 from "./lensesimages/LensImage410";
import LensImage411 from "./lensesimages/LensImage411";
import LensImage412 from "./lensesimages/LensImage412";
import LensImage413 from "./lensesimages/LensImage413";
import LensImage414 from "./lensesimages/LensImage414";
import LensImage415 from "./lensesimages/LensImage415";
import LensImage416 from "./lensesimages/LensImage416";
import LensImage417 from "./lensesimages/LensImage417";
import LensImage418 from "./lensesimages/LensImage418";
import LensImage419 from "./lensesimages/LensImage419";
import LensImage420 from "./lensesimages/LensImage420";
import LensImage421 from "./lensesimages/LensImage421";
import LensImage422 from "./lensesimages/LensImage422";
import LensImage423 from "./lensesimages/LensImage423";
import LensImage424 from "./lensesimages/LensImage424";
import LensImage425 from "./lensesimages/LensImage425";
import LensImage426 from "./lensesimages/LensImage426";
import LensImage427 from "./lensesimages/LensImage427";
import LensImage428 from "./lensesimages/LensImage428";
import LensImage429 from "./lensesimages/LensImage429";

type LensFC = () => JSX.Element;

// ── Unsplash URL helper (verified IDs from search results) ────────────────────
const U = (id: string) =>
  `https://images.unsplash.com/${id}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=300`;

// ── 60 lenses ─────────────────────────────────────────────────────────────────
const BASE_LENSES: { Lens: LensFC; label: string; src: string }[] = [
  { Lens: LensImage57,  label: "Buddhist",         src: U("photo-1688935455227-85136cc9b24e") },
  { Lens: LensImage61,  label: "Islamic",           src: U("photo-1761862062324-e0b9dc024433") },
  { Lens: LensImage65,  label: "Jewish",            src: U("photo-1585776245991-cf89dd7fc73a") },
  { Lens: LensImage69,  label: "Christian",         src: U("photo-1529070538774-1843cb3265df") },
  { Lens: LensImage73,  label: "Orthodox",          src: U("photo-1504470695779-75300268aa0e") },
  { Lens: LensImage77,  label: "Hindu",             src: U("photo-1545816250-e09c102dd44a") },
  { Lens: LensImage81,  label: "Indigenous",        src: U("photo-1504966981333-1ac8809be1ca") },
  { Lens: LensImage85,  label: "Zen",               src: U("photo-1528360983277-13d401cdc186") },
  { Lens: LensImage89,  label: "Historical",        src: U("photo-1461360228754-6e81c478b882") },
  { Lens: LensImage93,  label: "Academic",          src: U("photo-1454165804606-c3d57bc86b40") },
  { Lens: LensImage150, label: "Scientific",        src: U("photo-1507413245164-6160d8298b31") },
  { Lens: LensImage154, label: "Millennial",        src: U("photo-1529156069898-49953e39b3ac") },
  { Lens: LensImage158, label: "Liberal",           src: U("photo-1541701494587-cb58502866ab") },
  { Lens: LensImage162, label: "Conservative",      src: U("photo-1464692805480-a69dfaafdb0d") },
  { Lens: LensImage166, label: "Feminist",          src: U("photo-1573164713988-8665fc963095") },
  { Lens: LensImage170, label: "Ecological",        src: U("photo-1441974231531-c6227db76b6e") },
  { Lens: LensImage174, label: "Capitalist",        src: U("photo-1611974789855-9c2a0a7236a3") },
  { Lens: LensImage178, label: "Philosophical",     src: U("photo-1481627834876-b7833e8f5570") },
  { Lens: LensImage182, label: "Artistic",          src: U("photo-1513364776144-60967b0f800f") },
  { Lens: LensImage186, label: "Sufi",              src: U("photo-1564507592333-c60657eea523") },
  { Lens: LensImage342, label: "Spiritual",         src: U("photo-1510034141778-a4d065653d92") },
  { Lens: LensImage346, label: "Anarchist",         src: U("photo-1561489401-fc2876ced162") },
  { Lens: LensImage350, label: "Humanist",          src: U("photo-1469571486292-0ba58a3f068b") },
  { Lens: LensImage354, label: "Mystic",            src: U("photo-1518531933037-91b2f5f229cc") },
  { Lens: LensImage358, label: "Rural",             src: U("photo-1500382017468-9049fed747ef") },
  { Lens: LensImage362, label: "Urban",             src: U("photo-1477959858617-67f85cf4f1df") },
  { Lens: LensImage366, label: "Romantic",          src: U("photo-1474552226712-ac0f0961a954") },
  { Lens: LensImage370, label: "Classical",         src: U("photo-1555685812-4b943f1cb0eb") },
  { Lens: LensImage374, label: "Vegan",             src: U("photo-1512621776951-a57141f2eefd") },
  { Lens: LensImage378, label: "Technocrat",        src: U("photo-1518770660439-4636190af475") },
  { Lens: LensImage400, label: "Shamanist",         src: U("photo-1667725130079-2ea9cc38b38d") },
  { Lens: LensImage401, label: "Folk / Artisan",    src: U("photo-1762628437902-315a5efb810c") },
  { Lens: LensImage402, label: "Pacifist",          src: U("photo-1497864149936-d3163f0c0f4b") },
  { Lens: LensImage403, label: "Boomer",            src: U("photo-1544005313-94ddf0286df2") },
  { Lens: LensImage404, label: "Elder",             src: U("photo-1601288496920-b6154fe3626a") },
  { Lens: LensImage405, label: "Environmentalist",  src: U("photo-1758599669008-fb6f8eda6f53") },
  { Lens: LensImage406, label: "Rationalist",       src: U("photo-1616659034852-24d523d8069e") },
  { Lens: LensImage407, label: "Atheist",           src: U("photo-1503676260728-1c00da094a0b") },
  { Lens: LensImage408, label: "Gen Z",             src: U("photo-1742021115854-678678ae3f60") },
  { Lens: LensImage409, label: "Genetic",           src: U("photo-1532187863486-abf9dbad1b69") },
  { Lens: LensImage410, label: "Marxist",           src: U("photo-1756009531448-4c3800b2aaae") },
  { Lens: LensImage411, label: "Libertarian",       src: U("photo-1768924467539-aaffb9e4df47") },
  { Lens: LensImage412, label: "Stoic",             src: U("photo-1739323147107-bc748671f498") },
  { Lens: LensImage413, label: "Existentialist",    src: U("photo-1582150950901-f5cceee3939c") },
  { Lens: LensImage414, label: "Nationalist",       src: U("photo-1597605645729-70ff7e72e75d") },
  { Lens: LensImage415, label: "Confucian",         src: U("photo-1761229660821-79f7feec77fb") },
  { Lens: LensImage416, label: "Sikh",              src: U("photo-1770069592445-57314b5ea0ab") },
  { Lens: LensImage417, label: "Transhumanist",     src: U("photo-1673255745677-e36f618550d1") },
  { Lens: LensImage418, label: "Postmodern",        src: U("photo-1728462989029-97cc21571d4c") },
  { Lens: LensImage419, label: "African Spiritual", src: U("photo-1770036245373-db22acac9b44") },
  { Lens: LensImage420, label: "Psychoanalytic",    src: U("photo-1772208392372-fc6b62e37a2b") },
  { Lens: LensImage421, label: "Gen X",             src: U("photo-1767177403477-737546bb9b4c") },
  { Lens: LensImage422, label: "Baby Boomer",       src: U("photo-1582140140495-f4fc5ba4aa21") },
  { Lens: LensImage423, label: "Minimalist",        src: U("photo-1681684563211-7fb10143157a") },
  { Lens: LensImage424, label: "Cultural",          src: U("photo-1524661135-423995f22d0b") },
  { Lens: LensImage425, label: "Military",          src: U("photo-1588450248442-1c8357368dba") },
  { Lens: LensImage426, label: "Jain",              src: U("photo-1712817616366-00edffdb0e9d") },
  { Lens: LensImage427, label: "Socialist",         src: U("photo-1591765590167-9f63bf689e1d") },
  { Lens: LensImage428, label: "Archivist",         src: U("photo-1523995462485-3d171b5c8fa9") },
  { Lens: LensImage429, label: "Entrepreneur",      src: U("photo-1584907797008-ac1b19b3ce52") },
];

// ── Deterministic pseudo-random ───────────────────────────────────────────────
function h(seed: number, salt: number): number {
  const x = Math.sin(seed * 127.1 + salt * 311.7) * 43758.5453123;
  return x - Math.floor(x);
}

function shuffle<T>(arr: T[], seedBase: number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(h(seedBase + i, 99) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── 10 cols × 12 rows = 120 slots ─────────────────────────────────────────────
const COLS  = 10;
const ROWS  = 12;
const TOTAL = COLS * ROWS;

interface Item {
  Lens:  LensFC;
  label: string;
  src:   string;
  x:     number;
  y:     number;
  speed: number;
}

function buildItems(): Item[] {
  const deck0 = shuffle(BASE_LENSES, 0);
  const deck1 = shuffle(BASE_LENSES, 777);
  const combined: typeof BASE_LENSES = [];
  for (let i = 0; i < 60; i++) combined.push(deck0[i], deck1[i]);

  return combined.slice(0, TOTAL).map(({ Lens, label, src }, idx) => {
    const col   = idx % COLS;
    const row   = Math.floor(idx / COLS);
    const seed  = idx * 17 + 3;
    const cellW = 100 / COLS;
    const cellH = 100 / ROWS;
    const jx    = (h(seed, 0) - 0.5) * 4.0;
    const jy    = (h(seed, 1) - 0.5) * 4.0;
    return {
      Lens, label, src,
      x:     col * cellW + jx,
      y:     row * cellH + jy,
      speed: 0.25 + h(seed, 2) * 1.2,
    };
  });
}

const ITEMS: Item[] = buildItems();

const CLIP_ID   = "pokaysia-see-clip";
const MAG_SIZE  = 192;  // px
const MAG_SCALE = 2.5;

// ── Component ─────────────────────────────────────────────────────────────────
export function SeeMaskEffect({ word = "SEE" }: { word?: string }) {
  const wrapperRef  = useRef<HTMLDivElement>(null);
  const textRef     = useRef<SVGTextElement>(null);
  const lensRefs    = useRef<(HTMLDivElement | null)[]>([]);
  const visibleRef  = useRef(false);
  const rafRef      = useRef<number>(0);

  // Magnifier — pure DOM refs, zero React re-renders
  const mouseRef    = useRef({ x: 0, y: 0, over: false });
  const magRef      = useRef<HTMLDivElement>(null);
  const magInnerRef = useRef<HTMLDivElement>(null);
  const magLabelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const text    = textRef.current;
    if (!wrapper || !text) return;

    // Responsive SVG text
    const resizeObs = new ResizeObserver(([entry]) => {
      const { width: w, height: ht } = entry.contentRect;
      text.setAttribute("y",          String(ht * 0.92));
      text.setAttribute("font-size",  String(ht * 0.87));
      text.setAttribute("textLength", String(w));
    });
    resizeObs.observe(wrapper);

    // Intersection
    const intersectObs = new IntersectionObserver(
      ([e]) => { visibleRef.current = e.isIntersecting; },
      { threshold: 0 }
    );
    intersectObs.observe(wrapper);

    // Mouse
    const onMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      mouseRef.current = {
        x:    e.clientX - rect.left,
        y:    e.clientY - rect.top,
        over: true,
      };
      // Nearest-lens label
      if (magLabelRef.current) {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        const W  = rect.width;
        const H  = rect.height;
        let bestD = Infinity, bestLabel = "";
        for (const item of ITEMS) {
          const lx = (item.x / 100) * W + 35;
          const ly = (item.y / 100) * H + 35;
          const d  = (lx - mx) ** 2 + (ly - my) ** 2;
          if (d < bestD) { bestD = d; bestLabel = item.label; }
        }
        magLabelRef.current.textContent = bestLabel;
      }
    };
    const onLeave = () => { mouseRef.current.over = false; };

    wrapper.addEventListener("mousemove",  onMove,  { passive: true });
    wrapper.addEventListener("mouseleave", onLeave, { passive: true });

    // RAF
    const tick = () => {
      const rect = wrapper.getBoundingClientRect();

      if (visibleRef.current) {
        const span = rect.height + window.innerHeight;
        const mid  = -rect.top / span - 0.5;
        lensRefs.current.forEach((el, i) => {
          if (!el) return;
          el.style.transform = `translateY(${-mid * ITEMS[i].speed * rect.height * 0.28}px)`;
        });
      }

      const mag      = magRef.current;
      const magInner = magInnerRef.current;
      if (mag && magInner) {
        const { x: mx, y: my, over } = mouseRef.current;
        mag.style.opacity = over ? "1" : "0";
        if (over) {
          const vx = rect.left + mx;
          const vy = rect.top  + my;
          mag.style.transform = `translate3d(${vx - MAG_SIZE / 2}px,${vy - MAG_SIZE / 2}px,0)`;
          magInner.style.width  = `${rect.width}px`;
          magInner.style.height = `${rect.height}px`;
          magInner.style.left   = `${MAG_SIZE / 2 - mx * MAG_SCALE}px`;
          magInner.style.top    = `${MAG_SIZE / 2 - my * MAG_SCALE}px`;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      resizeObs.disconnect();
      intersectObs.disconnect();
      cancelAnimationFrame(rafRef.current);
      wrapper.removeEventListener("mousemove",  onMove);
      wrapper.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      {/* ── Glass magnifier — position:fixed, outside any clip context ────── */}
      <div
        ref={magRef}
        aria-hidden="true"
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          width:         MAG_SIZE,
          height:        MAG_SIZE,
          borderRadius:  "50%",
          overflow:      "hidden",
          pointerEvents: "none",
          zIndex:        9998,
          opacity:       0,
          willChange:    "transform, opacity",
          transition: "opacity 0.22s cubic-bezier(0.23,1,0.32,1)",
        }}
      >
        {/* Magnified lens grid */}
        <div
          ref={magInnerRef}
          style={{
            position:        "absolute",
            transform:       `scale(${MAG_SCALE})`,
            transformOrigin: "0 0",
            background:      "transparent",
            willChange:      "left, top",
          }}
        >
          {ITEMS.map(({ src, label, x, y }, i) => (
            <div
              key={i}
              style={{
                position:     "absolute",
                left:         `${x}%`,
                top:          `${y}%`,
                width:        70,
                height:       70,
                borderRadius: "50%",
                overflow:     "hidden",
              }}
            >
              <img
                src={src}
                alt={label}
                loading="lazy"
                style={{
                  position:      "absolute",
                  inset:         0,
                  width:         "100%",
                  height:        "100%",
                  objectFit:     "cover",
                  pointerEvents: "none",
                }}
              />
            </div>
          ))}
        </div>

        {/* Inner edge ring */}
        <div
          style={{
            position:      "absolute",
            inset:         0,
            borderRadius:  "50%",
            boxShadow: [
              "inset 0 0 0 1px rgba(255,255,255,0.6)",
              "inset 0 2px 14px rgba(255,255,255,0.14)",
              "inset 0 -2px 8px rgba(0,0,0,0.10)",
            ].join(", "),
            pointerEvents: "none",
            zIndex:        3,
          }}
        />

        {/* Label */}
        <div
          style={{
            position:       "absolute",
            bottom:         14,
            left:           0,
            right:          0,
            display:        "flex",
            justifyContent: "center",
            pointerEvents:  "none",
            zIndex:         4,
          }}
        >
          <span
            ref={magLabelRef}
            style={{
              background:          "rgba(38,33,29,0.72)",
              color:               "#eceef0",
              fontFamily:          "'Raleway', sans-serif",
              fontSize:            9,
              fontWeight:          700,
              letterSpacing:       "0.1em",
              textTransform:       "uppercase",
              padding:             "2px 8px",
              borderRadius:        4,
              backdropFilter:      "blur(4px)",
              WebkitBackdropFilter:"blur(4px)",
              whiteSpace:          "nowrap",
            }}
          />
        </div>
      </div>

      {/* ── Main wrapper ──────────────────────────────────────────────────── */}
      <div
        ref={wrapperRef}
        style={{ position: "relative", width: "100%", aspectRatio: "1000 / 780" }}
      >
        {/* Zero-size SVG — clipPath only */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
        >
          <defs>
            <clipPath id={CLIP_ID}>
              <text
                ref={textRef}
                x="0" y="0"
                fontSize="100"
                textLength="1000"
                lengthAdjust="spacingAndGlyphs"
                fontFamily="'Raleway', sans-serif"
                fontWeight="800"
                letterSpacing="-0.01em"
              >
                {word}
              </text>
            </clipPath>
          </defs>
        </svg>

        <style>{`
          #see-lenses * { box-shadow: none !important; }
          .see-lens-cell { position: absolute; }
          .see-lens-cell .see-lens-lbl {
            position: absolute;
            bottom: calc(100% + 5px);
            left: 50%;
            transform: translateX(-50%);
            background: rgba(38,33,29,0.85);
            color: #eceef0;
            font-family: 'Raleway', sans-serif;
            font-size: 8.5px;
            font-weight: 600;
            letter-spacing: 0.07em;
            text-transform: uppercase;
            white-space: nowrap;
            padding: 2px 6px;
            border-radius: 3px;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.16s ease;
            z-index: 10;
          }
          .see-lens-cell:hover .see-lens-lbl { opacity: 1; }
          .see-lens-cell:hover { z-index: 5; }
        `}</style>

        {/* Clipped collage */}
        <div
          style={{
            position:   "absolute",
            inset:      0,
            background: "#ffffff",
            clipPath:   `url(#${CLIP_ID})`,
            overflow:   "hidden",
          }}
        >
          <div id="see-lenses" style={{ position: "absolute", inset: 0 }}>
            {ITEMS.map(({ Lens, label, x, y }, i) => (
              <div
                key={i}
                className="see-lens-cell"
                style={{ left: `${x}%`, top: `${y}%`, width: 70, height: 70 }}
              >
                <div
                  ref={(el) => { lensRefs.current[i] = el; }}
                  style={{ width: 70, height: 70, willChange: "transform" }}
                >
                  <Lens />
                </div>
                <span className="see-lens-lbl">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}