const RING_COUNT = 4;
const DURATION = 20;
const STAGGER = 5;

export default function WaveRings() {
  return (
    <>
      {Array.from({ length: RING_COUNT }).map((_, i) => (
        <span
          key={i}
          aria-hidden
          style={{
            position: "absolute",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            top: "33%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            pointerEvents: "none",
            animation: `wave-ring ${DURATION}s ease-out infinite`,
            animationDelay: `${i * STAGGER}s`,
          }}
        />
      ))}
    </>
  );
}
