// Perspective: Libertarian
export default function LensImage411() {
  return (
    <div style={{ width: 70, height: 70, borderRadius: "50%", overflow: "hidden", position: "relative", flexShrink: 0 }}>
      <img alt="Libertarian" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }}
        src="https://images.unsplash.com/photo-1768924467539-aaffb9e4df47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200" />
    </div>
  );
}
