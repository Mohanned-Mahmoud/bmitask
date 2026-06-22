import { useState } from "react";
import orbImg from "@assets/V.02_-_Tawazonha_Sah_-Arabic-_BMI_App_-_Mobile._Version.ai_(2)_1782088849100.png";
import buttonImg from "@assets/Untitled_design_(8)_1782090779913.png";
import inputImg from "@assets/Untitled_design_(10)_1782091090798.png";
import corner1Img from "@assets/Untitled_design_(9)_1782090873234.png";
import BinaryBackground from "../components/BinaryBackground";

interface Props {
  onCalculate: (height: number, weight: number) => void;
}

export default function InputScreen({ onCalculate }: Props) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (!height || !weight || isNaN(h) || isNaN(w)) {
      setError("يرجى إدخال الطول والوزن");
      return;
    }
    if (h < 50 || h > 250) {
      setError("الطول يجب أن يكون بين 50 و 250 سم");
      return;
    }
    if (w < 10 || w > 300) {
      setError("الوزن يجب أن يكون بين 10 و 300 كجم");
      return;
    }
    setError("");
    onCalculate(h, w);
  };

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

      {/* Orb */}
      <div style={{ position: "relative", zIndex: 3 }}>
        <img
          src={orbImg}
          alt=""
          style={{ width: "clamp(150px, 38vw, 260px)", objectFit: "contain", display: "block" }}
        />
      </div>

      {/* Title */}
      <div style={{ position: "relative", zIndex: 3, textAlign: "center", padding: "0 clamp(16px, 5vw, 40px)" }}>
        <h1
          style={{
            fontFamily: "'Almarai', sans-serif",
            fontSize: "clamp(1.4rem, 5vw, 3rem)",
            fontWeight: 800,
            color: "#296184",
            lineHeight: 1.4,
            textShadow: "0 1px 4px rgba(255,255,255,0.35)",
            margin: 0,
          }}
        >
          ما هو طولك
          <br />
          ووزنك؟
        </h1>
      </div>

      {/* Inputs */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          gap: "clamp(10px, 2vh, 20px)",
          alignItems: "center",
          width: "100%",
        }}
      >
        {[
          { id: "input-height", placeholder: "الطـــول (سم)", value: height, onChange: setHeight },
          { id: "input-weight", placeholder: "الـوزن (كجم)", value: weight, onChange: setWeight },
        ].map(({ id, placeholder, value, onChange }) => (
          <div
            key={id}
            style={{
              position: "relative",
              width: "clamp(220px, 60vw, 380px)",
              height: "clamp(46px, 7vh, 64px)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={inputImg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "fill" }} />
            <input
              data-testid={id}
              type="number"
              placeholder={placeholder}
              value={value}
              onChange={(e) => { onChange(e.target.value); setError(""); }}
              style={{
                position: "relative",
                zIndex: 2,
                width: "100%",
                height: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                textAlign: "center",
                fontFamily: "'Almarai', sans-serif",
                fontSize: "clamp(0.9rem, 3vw, 1.2rem)",
                color: "#296184",
                direction: "rtl",
              }}
            />
          </div>
        ))}

        {error && (
          <p style={{ color: "white", fontFamily: "'Almarai', sans-serif", fontSize: "clamp(0.8rem, 2.5vw, 1rem)", textShadow: "0 1px 3px rgba(0,0,0,0.25)", fontWeight: 700, margin: 0 }}>
            {error}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div style={{ position: "relative", zIndex: 3 }}>
        <button
          data-testid="button-submit"
          onClick={handleSubmit}
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
              إرسال
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
