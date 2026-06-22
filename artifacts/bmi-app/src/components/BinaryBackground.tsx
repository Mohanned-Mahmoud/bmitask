const ROW = "1 0 1 1 0 1 0 1 0 1 1 0 0 1 0 0 1 0 1 1 0 1 0 0 1 1 0 1 0 1 0 0 1 0 1 1 0 0 1 0 1 1 0 1 1 0 1 0 1 0 1 1\n";
const BINARY_TEXT = ROW.repeat(30);

export default function BinaryBackground() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "55%",
        pointerEvents: "none",
        zIndex: 1,
        overflow: "hidden",
        maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
      }}
    >
      <pre
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          fontFamily: "'Poppins', monospace",
          fontSize: "clamp(10px, 2.5vw, 14px)",
          color: "rgba(255,255,255,0.18)",
          fontWeight: 700,
          letterSpacing: "5px",
          lineHeight: "2.1",
          whiteSpace: "pre-wrap",
          wordBreak: "break-all",
          padding: "10px 14px",
          margin: 0,
          overflow: "hidden",
        }}
      >
        {BINARY_TEXT}
      </pre>
    </div>
  );
}
