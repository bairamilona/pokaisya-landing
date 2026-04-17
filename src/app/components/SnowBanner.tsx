import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useLang } from "../context/LangContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const ease = [0.23, 1, 0.32, 1] as const;

export function SnowBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const { t } = useLang();

  return (
    <section
      ref={ref}
      data-bg="#dce3eb"
      style={{
        position: "relative",
        height: "clamp(340px, 50vw, 560px)",
        overflow: "hidden",
        background: "transparent",
      }}
    >
      {/* Photo */}
      <motion.div
        initial={{ scale: 1.06, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.1, ease }}
        style={{ position: "absolute", inset: 0 }}
      >
        <ImageWithFallback
          alt="White car aerial view in snow"
          src="https://images.unsplash.com/photo-1548186750-96c6cf8d0e88?w=1400&q=80&auto=format&fit=crop"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: "saturate(0.65) brightness(0.95)",
          }}
        />
      </motion.div>

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(236,238,240,0.55) 0%, rgba(236,238,240,0) 32%, rgba(236,238,240,0) 60%, rgba(220,227,235,0.9) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease, delay: 0.3 }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "28px",
          right: "28px",
          maxWidth: "480px",
        }}
      >
        <p
          style={{
            fontSize: "clamp(20px, 3vw, 28px)",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1.45,
            color: "#2e3c46",
            letterSpacing: "-0.02em",
            margin: 0,
            fontFamily: "'Raleway', sans-serif",
            whiteSpace: "pre-line",
          }}
        >
          {t.snowBanner.quote}
        </p>
      </motion.div>
    </section>
  );
}
