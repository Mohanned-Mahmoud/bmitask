import logoImg from "@assets/Untitled_design_(7)_1782090506322.png";
import splashOrbImg from "@assets/V.02_-_Tawazonha_Sah_-Arabic-_BMI_App_-_Mobile._Version.ai_(2)_1782088849100.png";
import buttonImg from "@assets/Untitled_design_(8)_1782090779913.png";
import corner1Img from "@assets/Untitled_design_(9)_1782090873234.png";
import BinaryBackground from "../components/BinaryBackground";

interface Props {
  onStart: () => void;
}

export default function SplashScreen({ onStart }: Props) {
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

      {/* Corners — fixed to actual viewport corners */}
      <img src={corner1Img} alt="" style={{ position: "fixed", top: 0, left: 0, width: "clamp(90px, 22vw, 160px)", objectFit: "contain", opacity: 0.95, zIndex: 10, pointerEvents: "none" }} />
      <img src={corner1Img} alt="" style={{ position: "fixed", top: 0, right: 0, width: "clamp(90px, 22vw, 160px)", objectFit: "contain", transform: "scaleX(-1)", opacity: 0.95, zIndex: 10, pointerEvents: "none" }} />
      <img src={corner1Img} alt="" style={{ position: "fixed", bottom: 0, left: 0, width: "clamp(90px, 22vw, 160px)", objectFit: "contain", transform: "scaleY(-1)", opacity: 0.95, zIndex: 10, pointerEvents: "none" }} />
      <img src={corner1Img} alt="" style={{ position: "fixed", bottom: 0, right: 0, width: "clamp(90px, 22vw, 160px)", objectFit: "contain", transform: "scale(-1,-1)", opacity: 0.95, zIndex: 10, pointerEvents: "none" }} />

      {/* Logo */}
      <div style={{ position: "relative", zIndex: 3 }}>
        <img
          src={logoImg}
          alt="توازنها صح"
          style={{
            width: "clamp(160px, 40vw, 280px)",
            maxHeight: "clamp(120px, 20vh, 200px)",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>

      {/* Title */}
      <div style={{ position: "relative", zIndex: 3, textAlign: "center" }}>
        <div
          style={{
            fontFamily: "'Almarai', sans-serif",
            fontSize: "clamp(2rem, 8vw, 4.5rem)",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            textShadow: "0 2px 12px rgba(41,97,132,0.2)",
          }}
        >
          <div>ابدأ</div>
          <div>رحلتك</div>
        </div>
      </div>

      {/* Orb */}
      <div style={{ position: "relative", zIndex: 3 }}>
        <div style={{ position: "relative", width: "clamp(160px, 40vw, 280px)", aspectRatio: "1" }}>
          <img src={splashOrbImg} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          <div
            style={{
              position: "absolute",
              bottom: "16%",
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(0.8rem, 2.5vw, 1.3rem)",
              color: "#296184",
              letterSpacing: "0.08em",
              zIndex: 4,
              whiteSpace: "nowrap",
            }}
          >
            BMI
          </div>
        </div>
      </div>

      {/* Button */}
      <div style={{ position: "relative", zIndex: 3 }}>
        <button
          data-testid="button-start"
          onClick={onStart}
          className="scale-transition"
          style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer" }}
        >
          <div
            style={{
              position: "relative",
              width: "clamp(200px, 50vw, 320px)",
              height: "clamp(48px, 8vh, 70px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={buttonImg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "fill" }} />
            <span
              style={{
                position: "relative",
                zIndex: 2,
                fontFamily: "'Almarai', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1rem, 3.5vw, 1.5rem)",
                color: "#296184",
              }}
            >
              ابدأ
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
