import "./_group.css";

const logo = "/__mockup/images/logo.png";
const orb = "/__mockup/images/orb.png";
const button = "/__mockup/images/button.png";
const corner = "/__mockup/images/corner.png";
const whiteCorner = "/__mockup/images/white-corner.png";

const UNIT = "1 0 1 1 0 1 0 1 0 1 1 0 0 1 0 0 1 0 1 1 0 1 0 0 1 1 0 1 0 1 0 0 1 0 1 1 0 0 1 0 1 1 0 1 1 0 1 0 1 0 1 1 ";
const BINARY = UNIT.repeat(60);

export function VariantB() {
  return (
    <div dir="rtl" style={{ width: "1280px", height: "800px", background: "#32C3DE", position: "relative", overflow: "hidden", display: "flex", fontFamily: "'Almarai', sans-serif" }}>

      {/* Binary background — left panel only */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "55%", bottom: 0, zIndex: 1, pointerEvents: "none", maskImage: "linear-gradient(to right, black 60%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, black 60%, transparent 100%)" }}>
        <pre style={{ fontFamily: "'Poppins', monospace", fontSize: "13px", color: "rgba(255,255,255,0.15)", fontWeight: 700, letterSpacing: "5px", lineHeight: "1.35", whiteSpace: "pre-wrap", wordBreak: "break-all", padding: "10px 14px", margin: 0 }}>{BINARY}</pre>
      </div>

      {/* Teal corners (top) */}
      <img src={corner} alt="" style={{ position: "absolute", top: 0, left: 0, width: "130px", zIndex: 10, pointerEvents: "none" }} />
      <img src={corner} alt="" style={{ position: "absolute", top: 0, right: 0, width: "130px", transform: "scaleX(-1)", zIndex: 10, pointerEvents: "none" }} />
      {/* White corners (bottom) */}
      <img src={whiteCorner} alt="" style={{ position: "absolute", bottom: 0, left: 0, width: "160px", transform: "scaleX(-1)", zIndex: 10, pointerEvents: "none" }} />
      <img src={whiteCorner} alt="" style={{ position: "absolute", bottom: 0, right: 0, width: "160px", zIndex: 10, pointerEvents: "none" }} />

      {/* BMI label bottom center */}
      <div style={{ position: "absolute", bottom: "28px", left: "50%", transform: "translateX(-50%)", fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "1.6rem", color: "#296184", letterSpacing: "0.16em", zIndex: 11, whiteSpace: "nowrap" }}>BMI</div>

      {/* Left column — full teal with orb */}
      <div style={{ width: "52%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 3, gap: "20px", paddingTop: "40px", paddingBottom: "60px" }}>
        {/* Logo top */}
        <img src={logo} alt="توازنها صح" style={{ width: "200px", objectFit: "contain", filter: "drop-shadow(0 2px 8px rgba(41,97,132,0.15))" }} />

        {/* Large orb */}
        <div style={{ position: "relative" }}>
          <img src={orb} alt="" style={{ width: "310px", objectFit: "contain", filter: "drop-shadow(0 12px 40px rgba(41,97,132,0.3))" }} />
          <div style={{ position: "absolute", bottom: "18%", left: "50%", transform: "translateX(-50%)", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#296184", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>BMI</div>
        </div>
      </div>

      {/* Right column — white card */}
      <div style={{
        flex: 1,
        background: "white",
        borderRadius: "48px 0 0 48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "36px",
        position: "relative",
        zIndex: 3,
        padding: "56px 64px",
        boxShadow: "-16px 0 60px rgba(41,97,132,0.12)",
      }}>
        {/* Title */}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "'Almarai', sans-serif", fontSize: "4.5rem", fontWeight: 800, color: "#296184", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
            <div>ابدأ</div>
            <div>رحلتك</div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "60px", height: "4px", borderRadius: "2px", background: "#32C3DE", opacity: 0.6 }} />

        {/* Tagline */}
        <p style={{ fontFamily: "'Almarai', sans-serif", fontSize: "1.1rem", color: "#296184", opacity: 0.7, textAlign: "center", margin: 0, lineHeight: 1.7 }}>
          احسب مؤشر كتلة جسمك<br />وابدأ رحلتك الصحية
        </p>

        {/* Button */}
        <div style={{ position: "relative", width: "300px", height: "66px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
          <img src={button} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "fill", filter: "drop-shadow(0 4px 16px rgba(50,195,222,0.35))" }} />
          <span style={{ position: "relative", zIndex: 2, fontFamily: "'Almarai', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#296184" }}>ابدأ</span>
        </div>
      </div>
    </div>
  );
}
