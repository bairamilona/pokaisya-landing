// Perspective: Psychoanalytic / Freudian
export default function LensImage420() {
  return (
    <div style={{ width: 70, height: 70, borderRadius: "50%", overflow: "hidden", position: "relative", flexShrink: 0 }}>
      <img alt="Psychoanalytic" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", pointerEvents: "none" }}
        src="https://images.unsplash.com/photo-1772208392372-fc6b62e37a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200" />
    </div>
  );
}
