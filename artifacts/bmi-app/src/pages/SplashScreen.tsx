import logoImg from "@assets/Untitled_design_(7)_1782090506322.png";
import splashOrbImg from "@assets/V.02_-_Tawazonha_Sah_-Arabic-_BMI_App_-_Mobile._Version.ai_(2)_1782088849100.png";
import buttonImg from "@assets/Untitled_design_(8)_1782090779913.png";
import corner1Img from "@assets/Untitled_design_(9)_1782090873234.png";
import BinaryBackground from "../components/BinaryBackground";
import { useIsMobile } from "../hooks/use-mobile";

interface Props {
  onStart: () => void;
}

const UNIT = "1 0 1 1 0 1 0 1 0 1 1 0 0 1 0 0 1 0 1 1 0 1 0 0 1 1 0 1 0 1 0 0 1 0 1 1 0 0 1 0 1 1 0 1 1 0 1 0 1 0 1 1 ";
const BINARY = UNIT.repeat(120);

export default function SplashScreen({ onStart }: Props) {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return (
      <div
        dir="rtl"
        className="fade-in"
        style={{
          position: "relative",
          width: "100vw",
          minHeight: "100dvh",
          background: "#32C3DE",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Binary background — radial fade */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", maskImage: "radial-gradient(ellipse 90% 80% at 50% 45%, black 30%, transparent 100%)", WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 45%, black 30%, transparent 100%)" }}>
          <pre style={{ fontFamily: "'Poppins', monospace", fontSize: "clamp(11px, 1vw, 14px)", color: "rgba(255,255,255,0.15)", fontWeight: 700, letterSpacing: "5px", lineHeight: "1.35", whiteSpace: "pre-wrap", wordBreak: "break-all", padding: "10px 14px", margin: 0 }}>{BINARY}</pre>
        </div>

        {/* Corners */}
        <img src={corner1Img} alt="" style={{ position: "fixed", top: 0, left: 0, width: "clamp(90px, 9vw, 130px)", zIndex: 10, pointerEvents: "none" }} />
        <img src={corner1Img} alt="" style={{ position: "fixed", top: 0, right: 0, width: "clamp(90px, 9vw, 130px)", transform: "scaleX(-1)", zIndex: 10, pointerEvents: "none" }} />
        <img src={corner1Img} alt="" style={{ position: "fixed", bottom: 0, left: 0, width: "clamp(90px, 9vw, 130px)", transform: "scaleY(-1)", zIndex: 10, pointerEvents: "none" }} />
        <img src={corner1Img} alt="" style={{ position: "fixed", bottom: 0, right: 0, width: "clamp(90px, 9vw, 130px)", transform: "scale(-1,-1)", zIndex: 10, pointerEvents: "none" }} />

        {/* Frosted glass card */}
        <div style={{
          position: "relative",
          zIndex: 5,
          display: "flex",
          alignItems: "center",
          gap: "clamp(32px, 5vw, 72px)",
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1.5px solid rgba(255,255,255,0.35)",
          borderRadius: "40px",
          padding: "clamp(36px, 5vh, 64px) clamp(40px, 6vw, 80px)",
          boxShadow: "0 24px 80px rgba(41,97,132,0.22), 0 2px 0 rgba(255,255,255,0.4) inset",
          maxWidth: "min(960px, 88vw)",
          width: "100%",
        }}>
          {/* Left: Orb */}
          <div style={{ flexShrink: 0, position: "relative" }}>
            <img
              src={splashOrbImg}
              alt=""
              style={{ width: "clamp(180px, 22vw, 280px)", objectFit: "contain", display: "block", filter: "drop-shadow(0 8px 32px rgba(41,97,132,0.28))" }}
            />
            <div style={{ position: "absolute", bottom: "18%", left: "50%", transform: "translateX(-50%)", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "clamp(1rem, 1.5vw, 1.5rem)", color: "#296184", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>BMI</div>
          </div>

          {/* Right: Logo + Title + Button */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "clamp(20px, 3vh, 36px)" }}>
            <img src={logoImg} alt="توازنها صح" style={{ width: "clamp(160px, 18vw, 240px)", objectFit: "contain" }} />

            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Almarai', sans-serif", fontSize: "clamp(2.8rem, 5vw, 4.8rem)", fontWeight: 800, color: "white", lineHeight: 1.1, textShadow: "0 2px 16px rgba(41,97,132,0.25)", letterSpacing: "-0.01em" }}>
                <div>ابدأ</div>
                <div>رحلتك</div>
              </div>
            </div>

            <button
              data-testid="button-start"
              onClick={onStart}
              className="scale-transition"
              style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer" }}
            >
              <div style={{ position: "relative", width: "clamp(220px, 22vw, 310px)", height: "clamp(54px, 7vh, 70px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={buttonImg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "fill", filter: "drop-shadow(0 4px 12px rgba(41,97,132,0.2))" }} />
                <span style={{ position: "relative", zIndex: 2, fontFamily: "'Almarai', sans-serif", fontWeight: 700, fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)", color: "#296184" }}>ابدأ</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      dir="rtl"
      className="fade-in"
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "100dvh",
        background: "#32C3DE",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        overflow: "hidden",
        paddingTop: "clamp(40px, 6vh, 80px)",
        paddingBottom: "clamp(32px, 5vh, 64px)",
        boxSizing: "border-box",
      }}
    >
      <BinaryBackground />
      <img src={corner1Img} alt="" style={{ position: "fixed", top: 0, left: 0, width: "clamp(90px, 22vw, 160px)", objectFit: "contain", opacity: 0.95, zIndex: 10, pointerEvents: "none" }} />
      <img src={corner1Img} alt="" style={{ position: "fixed", top: 0, right: 0, width: "clamp(90px, 22vw, 160px)", objectFit: "contain", transform: "scaleX(-1)", opacity: 0.95, zIndex: 10, pointerEvents: "none" }} />
      <img src={corner1Img} alt="" style={{ position: "fixed", bottom: 0, left: 0, width: "clamp(90px, 22vw, 160px)", objectFit: "contain", transform: "scaleY(-1)", opacity: 0.95, zIndex: 10, pointerEvents: "none" }} />
      <img src={corner1Img} alt="" style={{ position: "fixed", bottom: 0, right: 0, width: "clamp(90px, 22vw, 160px)", objectFit: "contain", transform: "scale(-1,-1)", opacity: 0.95, zIndex: 10, pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 3 }}>
        <img src={logoImg} alt="توازنها صح" style={{ width: "clamp(160px, 40vw, 280px)", maxHeight: "clamp(120px, 20vh, 200px)", objectFit: "contain", display: "block" }} />
      </div>
      <div style={{ position: "relative", zIndex: 3, textAlign: "center" }}>
        <div style={{ fontFamily: "'Almarai', sans-serif", fontSize: "clamp(2rem, 8vw, 4.5rem)", fontWeight: 800, color: "white", lineHeight: 1.1, textShadow: "0 2px 12px rgba(41,97,132,0.2)" }}>
          <div>ابدأ</div>
          <div>رحلتك</div>
        </div>
      </div>
      <div style={{ position: "relative", zIndex: 3 }}>
        <div style={{ position: "relative", width: "clamp(160px, 40vw, 280px)", aspectRatio: "1" }}>
          <img src={splashOrbImg} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          <div style={{ position: "absolute", bottom: "16%", left: "50%", transform: "translateX(-50%)", fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "clamp(0.8rem, 2.5vw, 1.3rem)", color: "#296184", letterSpacing: "0.08em", zIndex: 4, whiteSpace: "nowrap" }}>BMI</div>
        </div>
      </div>
      <div style={{ position: "relative", zIndex: 3 }}>
        <button data-testid="button-start" onClick={onStart} className="scale-transition" style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer" }}>
          <div style={{ position: "relative", width: "clamp(200px, 50vw, 320px)", height: "clamp(48px, 8vh, 70px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={buttonImg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "fill" }} />
            <span style={{ position: "relative", zIndex: 2, fontFamily: "'Almarai', sans-serif", fontWeight: 700, fontSize: "clamp(1rem, 3.5vw, 1.5rem)", color: "#296184" }}>ابدأ</span>
          </div>
        </button>
      </div>
    </div>
  );
}
