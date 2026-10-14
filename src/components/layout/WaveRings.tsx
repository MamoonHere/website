const ANIMATION_DELAYS = [0, -6, -12, -18];

export default function WaveRings() {
  return (
    <>
      {ANIMATION_DELAYS.map((delay, i) => (
        <span
          key={i}
          aria-hidden
          className="hidden lg:block"
          style={{
            position: "absolute",
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            top: "39%",
            left: "19%",
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
