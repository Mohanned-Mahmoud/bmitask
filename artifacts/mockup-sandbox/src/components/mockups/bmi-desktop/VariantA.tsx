import "./_group.css";

const logo = "/__mockup/images/logo.png";
const orb = "/__mockup/images/orb.png";
const button = "/__mockup/images/button.png";
const corner = "/__mockup/images/corner.png";

const UNIT = "1 0 1 1 0 1 0 1 0 1 1 0 0 1 0 0 1 0 1 1 0 1 0 0 1 1 0 1 0 1 0 0 1 0 1 1 0 0 1 0 1 1 0 1 1 0 1 0 1 0 1 1 ";
const BINARY = UNIT.repeat(60);

export function VariantA() {
  return (
    <div dir="rtl" style={{ width: "1280px", height: "800px", background: "#32C3DE", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Almarai', sans-serif" }}>

      {/* Binary background — full screen */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", maskImage: "radial-gradient(ellipse 90% 80% at 50% 40%, black 40%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 40%, black 40%, transparent 100%)" }}>
        <pre style={{ fontFamily: "'Poppins', monospace", fontSize: "13px", color: "rgba(255,255,255,0.13)", fontWeight: 700, letterSpacing: "5px", lineHeight: "1.35", whiteSpace: "pre-wrap", wordBreak: "break-all", padding: "10px 14px", margin: 0 }}>{BINARY}</pre>
      </div>

      {/* Corners */}
      <img src={corner} alt="" style={{ position: "absolute", top: 0, left: 0, width: "130px", zIndex: 10, pointerEvents: "none" }} />
      <img src={corner} alt="" style={{ position: "absolute", top: 0, right: 0, width: "130px", transform: "scaleX(-1)", zIndex: 10, pointerEvents: "none" }} />
      <img src={corner} alt="" style={{ position: "absolute", bottom: 0, left: 0, width: "130px", transform: "scaleY(-1)", zIndex: 10, pointerEvents: "none" }} />
      <img src={corner} alt="" style={{ position: "absolute", bottom: 0, right: 0, width: "130px", transform: "scale(-1,-1)", zIndex: 10, pointerEvents: "none" }} />

      {/* Central frosted card */}
      <div style={{
        position: "relative",
        zIndex: 5,
        display: "flex",
        alignItems: "center",
        gap: "64px",
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1.5px solid rgba(255,255,255,0.35)",
        borderRadius: "40px",
        padding: "56px 72px",
        boxShadow: "0 24px 80px rgba(41,97,132,0.22), 0 2px 0 rgba(255,255,255,0.4) inset",
        maxWidth: "960px",
        width: "100%",
      }}>

        {/* Left: Orb */}
        <div style={{ flexShrink: 0, position: "relative" }}>
          <img src={orb} alt="" style={{ width: "260px", objectFit: "contain", display: "block", filter: "drop-shadow(0 8px 32px rgba(41,97,132,0.28))" }} />
          <div style={{ position: "absolute", bottom: "18%", left: "50%", transform: "translateX(-50%)", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "#296184", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>BMI</div>
        </div>

        {/* Right: Logo + Title + Button */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "32px" }}>
          <img src={logo} alt="توازنها صح" style={{ width: "220px", objectFit: "contain" }} />

          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Almarai', sans-serif", fontSize: "4.2rem", fontWeight: 800, color: "white", lineHeight: 1.1, textShadow: "0 2px 16px rgba(41,97,132,0.25)", letterSpacing: "-0.01em" }}>
              <div>ابدأ</div>
              <div>رحلتك</div>
            </div>
          </div>

          <div style={{ position: "relative", width: "300px", height: "66px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <img src={button} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "fill", filter: "drop-shadow(0 4px 12px rgba(41,97,132,0.2))" }} />
            <span style={{ position: "relative", zIndex: 2, fontFamily: "'Almarai', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#296184" }}>ابدأ</span>
          </div>
        </div>
      </div>
    </div>
  );
}
