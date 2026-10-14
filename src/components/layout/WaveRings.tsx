const ANIMATION_DELAYS = [0, -6, -12, -18];

export default function WaveRings() {
  return (
    <>
      {ANIMATION_DELAYS.map((delay, i) => (
        <span
          key={i}
          aria-hidden
          style={{
            position: "absolute",
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            top: "32%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
            pointerEvents: "none",
            animation: "wave-ring 24s ease-out infinite",
            animationDelay: `${delay}s`,
          }}
        />
      ))}
    </>
  );
}
