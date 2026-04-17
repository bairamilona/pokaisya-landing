// Perspective: Confucian
export default function LensImage415() {
  return (
    <div style={{ width: 70, height: 70, borderRadius: "50%", overflow: "hidden", position: "relative", flexShrink: 0 }}>
      <img alt="Confucian" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }}
        src="https://images.unsplash.com/photo-1761229660821-79f7feec77fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200" />
    </div>
  );
}
