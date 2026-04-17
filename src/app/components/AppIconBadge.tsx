import imgImg23761 from "figma:asset/27f7e6e7eb0a7e720fa72e97c485591862e55f4e.png";

export function AppIconBadge({ size = 56 }: { size?: number }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${size * 0.22}px`,
        background: "linear-gradient(120deg, #fdfbfb 7.7%, #ebeded 92.3%)",
        boxShadow:
          "0 1px 2px rgba(0,0,0,0.05), inset 0 0.5px 1px rgba(0,0,0,0.05)",
        border: "0.5px solid rgba(241,245,249,0.9)",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          mixBlendMode: "screen",
          opacity: 0.2,
          overflow: "hidden",
        }}
      >
        <img
          alt=""
          src={imgImg23761}
          style={{
            position: "absolute",
            width: "108.81%",
            height: "187.11%",
            left: "-8.81%",
            top: "-57%",
            maxWidth: "none",
          }}
        />
      </div>

      {/* Prism icon */}
      <svg
        width={size * 0.45}
        height={size * 0.45}
        viewBox="0 0 40 40"
        fill="none"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Prism triangle */}
        <polygon
          points="20,6 34,30 6,30"
          fill="none"
          stroke="#37454f"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Refracted beam */}
        <line
          x1="20"
          y1="6"
          x2="20"
          y2="2"
          stroke="#37454f"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        <line
          x1="34"
          y1="30"
          x2="39"
          y2="28"
          stroke="#f97316"
          strokeWidth="1"
          strokeOpacity="0.7"
        />
        <line
          x1="34"
          y1="30"
          x2="39"
          y2="32"
          stroke="#3b82f6"
          strokeWidth="1"
          strokeOpacity="0.7"
        />
        <line
          x1="34"
          y1="30"
          x2="39"
          y2="34"
          stroke="#22c55e"
          strokeWidth="1"
          strokeOpacity="0.7"
        />
      </svg>
    </div>
  );
}
