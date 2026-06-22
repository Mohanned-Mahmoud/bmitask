import { useState } from "react";
import orbImg from "@assets/V.02_-_Tawazonha_Sah_-Arabic-_BMI_App_-_Mobile._Version.ai_(2)_1782088849100.png";
import buttonImg from "@assets/Untitled_design_(8)_1782090779913.png";
import inputImg from "@assets/Untitled_design_(10)_1782091090798.png";
import corner1Img from "@assets/Untitled_design_(9)_1782090873234.png";
import BinaryBackground from "../components/BinaryBackground";
import { useIsMobile } from "../hooks/use-mobile";

interface Props {
  onCalculate: (height: number, weight: number) => void;
}

const UNIT = "1 0 1 1 0 1 0 1 0 1 1 0 0 1 0 0 1 0 1 1 0 1 0 0 1 1 0 1 0 1 0 0 1 0 1 1 0 0 1 0 1 1 0 1 1 0 1 0 1 0 1 1 ";
const BINARY = UNIT.repeat(120);

export default function InputScreen({ onCalculate }: Props) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");
  const isMobile = useIsMobile();

  const handleSubmit = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!height || !weight || isNaN(h) || isNaN(w)) { setError("يرجى إدخال الطول والوزن"); return; }
    if (h < 50 || h > 250) { setError("الطول يجب أن يكون بين 50 و 250 سم"); return; }
    if (w < 10 || w > 300) { setError("الوزن يجب أن يكون بين 10 و 300 كجم"); return; }
    setError("");
    onCalculate(h, w);
  };

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
          <div style={{ flexShrink: 0 }}>
            <img src={orbImg} alt="" style={{ width: "clamp(180px, 22vw, 270px)", objectFit: "contain", display: "block", filter: "drop-shadow(0 8px 32px rgba(41,97,132,0.28))" }} />
          </div>

          {/* Right: Title + Inputs + Button */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "clamp(18px, 2.5vh, 30px)" }}>
            <h1 style={{ fontFamily: "'Almarai', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3.2rem)", fontWeight: 800, color: "white", lineHeight: 1.2, textShadow: "0 2px 16px rgba(41,97,132,0.25)", margin: 0, textAlign: "center", letterSpacing: "-0.01em" }}>
              ما هو طولك<br />ووزنك؟
            </h1>

            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(10px, 1.5vh, 18px)", alignItems: "center", width: "100%" }}>
              {[
                { id: "input-height", placeholder: "الطـــول (سم)", value: height, onChange: setHeight },
                { id: "input-weight", placeholder: "الـوزن (كجم)", value: weight, onChange: setWeight },
              ].map(({ id, placeholder, value, onChange }) => (
                <div key={id} style={{ position: "relative", width: "clamp(240px, 26vw, 380px)", height: "clamp(50px, 6.5vh, 66px)", display: "flex", alignItems: "center" }}>
                  <img src={inputImg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "fill", filter: "drop-shadow(0 2px 8px rgba(41,97,132,0.15))" }} />
                  <input
                    data-testid={id}
                    type="number"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => { onChange(e.target.value); setError(""); }}
                    style={{ position: "relative", zIndex: 2, width: "100%", height: "100%", background: "transparent", border: "none", outline: "none", textAlign: "center", fontFamily: "'Almarai', sans-serif", fontSize: "clamp(1rem, 1.4vw, 1.25rem)", color: "#296184", direction: "rtl" }}
                  />
                </div>
              ))}
              {error && (
                <p style={{ color: "white", fontFamily: "'Almarai', sans-serif", fontSize: "clamp(0.85rem, 1.1vw, 1rem)", textShadow: "0 1px 3px rgba(0,0,0,0.2)", fontWeight: 700, margin: 0 }}>{error}</p>
              )}
            </div>

            <button data-testid="button-submit" onClick={handleSubmit} className="scale-transition" style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer" }}>
              <div style={{ position: "relative", width: "clamp(220px, 22vw, 310px)", height: "clamp(54px, 7vh, 70px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <img src={buttonImg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "fill", filter: "drop-shadow(0 4px 12px rgba(41,97,132,0.2))" }} />
                <span style={{ position: "relative", zIndex: 2, fontFamily: "'Almarai', sans-serif", fontWeight: 700, fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)", color: "#296184" }}>إرسال</span>
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
        <img src={orbImg} alt="" style={{ width: "clamp(150px, 38vw, 260px)", objectFit: "contain", display: "block" }} />
      </div>
      <div style={{ position: "relative", zIndex: 3, textAlign: "center", padding: "0 clamp(16px, 5vw, 40px)" }}>
        <h1 style={{ fontFamily: "'Almarai', sans-serif", fontSize: "clamp(1.4rem, 5vw, 3rem)", fontWeight: 800, color: "#296184", lineHeight: 1.4, textShadow: "0 1px 4px rgba(255,255,255,0.35)", margin: 0 }}>
          ما هو طولك<br />ووزنك؟
        </h1>
      </div>
      <div style={{ position: "relative", zIndex: 3, display: "flex", flexDirection: "column", gap: "clamp(10px, 2vh, 20px)", alignItems: "center", width: "100%" }}>
        {[
          { id: "input-height", placeholder: "الطـــول (سم)", value: height, onChange: setHeight },
          { id: "input-weight", placeholder: "الـوزن (كجم)", value: weight, onChange: setWeight },
        ].map(({ id, placeholder, value, onChange }) => (
          <div key={id} style={{ position: "relative", width: "clamp(220px, 60vw, 380px)", height: "clamp(46px, 7vh, 64px)", display: "flex", alignItems: "center" }}>
            <img src={inputImg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "fill" }} />
            <input data-testid={id} type="number" placeholder={placeholder} value={value} onChange={(e) => { onChange(e.target.value); setError(""); }} style={{ position: "relative", zIndex: 2, width: "100%", height: "100%", background: "transparent", border: "none", outline: "none", textAlign: "center", fontFamily: "'Almarai', sans-serif", fontSize: "clamp(0.9rem, 3vw, 1.2rem)", color: "#296184", direction: "rtl" }} />
          </div>
        ))}
        {error && <p style={{ color: "white", fontFamily: "'Almarai', sans-serif", fontSize: "clamp(0.8rem, 2.5vw, 1rem)", textShadow: "0 1px 3px rgba(0,0,0,0.25)", fontWeight: 700, margin: 0 }}>{error}</p>}
      </div>
      <div style={{ position: "relative", zIndex: 3 }}>
        <button data-testid="button-submit" onClick={handleSubmit} className="scale-transition" style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer" }}>
          <div style={{ position: "relative", width: "clamp(200px, 50vw, 320px)", height: "clamp(48px, 8vh, 70px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={buttonImg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "fill" }} />
            <span style={{ position: "relative", zIndex: 2, fontFamily: "'Almarai', sans-serif", fontWeight: 700, fontSize: "clamp(1rem, 3.5vw, 1.5rem)", color: "#296184" }}>إرسال</span>
          </div>
        </button>
      </div>
    </div>
  );
}
