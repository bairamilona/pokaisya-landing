// Perspective: Taoist / Zen
export default function LensImage85() {
  return (
    <div style={{ width: 70, height: 70, borderRadius: "50%", overflow: "hidden", position: "relative", flexShrink: 0 }}>
      <img alt="Zen" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }}
        src="https://images.unsplash.com/photo-1766585464526-3c66169a0eee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200" />
    </div>
  );
}
