// Perspective: Baby Boomer
export default function LensImage422() {
  return (
    <div style={{ width: 70, height: 70, borderRadius: "50%", overflow: "hidden", position: "relative", flexShrink: 0 }}>
      <img alt="Baby Boomer" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }}
        src="https://images.unsplash.com/photo-1582140140495-f4fc5ba4aa21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200" />
    </div>
  );
}
