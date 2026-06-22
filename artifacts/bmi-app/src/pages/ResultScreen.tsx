import { BMIResult } from "../App";
import underweightOrb from "@assets/first-category_1782088849101.png";
import healthyOrb from "@assets/second-category_1782088849099.png";
import overweightOrb from "@assets/third-category_1782088849099.png";
import obeseOrb from "@assets/last-category_1782088849096.png";
import scaleIcon from "@assets/mesure-icon_1782088849098.png";
import corner1Img from "@assets/Untitled_design_(9)_1782090873234.png";
import whiteCornerImg from "@assets/Untitled_design_(12)_1782092168769.png";
import homeImg from "@assets/Untitled_design_(11)_1782092054059.png";
import BinaryBackground from "../components/BinaryBackground";
import { useIsMobile } from "../hooks/use-mobile";

interface Props {
  result: BMIResult;
  onHome: () => void;
}

const CATEGORIES = {
  underweight: {
    orb: underweightOrb,
    heading: "نتيجة مؤشر كتلة الجسم (BMI) أنك في نطاق نقص الوزن.",
    paragraph: "قد لا يحصل جسمك على جميع العناصر الغذائية التي يحتاجها، ولا بأس في ذلك، فهذا أمر يمكن تحسينه.",
    advice: "النصيحة: يرجى التفكير في مراجعة أخصائي رعاية صحية لمساعدتك وإرشادك حول كيفية تغذية جسمك بطريقة صحية ومتوازنة.",
  },
  healthy: {
    orb: healthyOrb,
    heading: "تُظهر نتيجة مؤشر كتلة الجسم (BMI) أنك في نطاق الوزن الصحي.",
    paragraph: "هذا رائع! يرتبط هذا النطاق عادةً بمخاطر صحية أقل.",
    advice: "النصيحة: استمر في الاعتناء بنفسك من خلال تناول وجبات متوازنة، وممارسة النشاط البدني، واتباع العادات الصحية. أنت تبلي بلاءً حسنًا!",
  },
  overweight: {
    orb: overweightOrb,
    heading: "تُظهر نتيجة مؤشر كتلة الجسم (BMI) أنك في نطاق زيادة الوزن.",
    paragraph: "هذا الرقم لا يُعبر عنك أو يُحدد مَن أنت، ولكنه قد يعني احتمالية أعلى بقليل للتعرض لبعض المشكلات الصحية.",
    advice: "النصيحة: إن التغييرات الصغيرة والمستمرة—مثل اختيار وجبات صحية أو إضافة القليل من النشاط إلى يومك—يمكن أن تساعدك على الشعور بالراحة وتحسين صحتك بمرور الوقت.",
  },
  obese: {
    orb: obeseOrb,
    heading: "تُظهر نتيجة مؤشر كتلة الجسم (BMI) أنك في نطاق السمنة.",
    paragraph: "لست وحدك، والدعم متوفر دائماً.",
    advice: "النصيحة: التحدث مع مقدم رعاية صحية أو أخصائي تغذية يمكن أن يساعدك على فهم خياراتك وبناء خطة تناسب أسلوب حياتك. حتى الخطوات الصغيرة يمكن أن تصنع فارقاً حقيقياً في صحتك.",
  },
};

const UNIT = "1 0 1 1 0 1 0 1 0 1 1 0 0 1 0 0 1 0 1 1 0 1 0 0 1 1 0 1 0 1 0 0 1 0 1 1 0 0 1 0 1 1 0 1 1 0 1 0 1 0 1 1 ";
const BINARY = UNIT.repeat(120);

export default function ResultScreen({ result, onHome }: Props) {
  const cat = CATEGORIES[result.category];
  const isMobile = useIsMobile();

  if (!isMobile) {
    return (
      <div
        className="fade-in"
        dir="rtl"
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

        {/* Teal corners (top) */}
        <img src={corner1Img} alt="" style={{ position: "fixed", top: 0, left: 0, width: "clamp(90px, 9vw, 130px)", zIndex: 10, pointerEvents: "none" }} />
        <img src={corner1Img} alt="" style={{ position: "fixed", top: 0, right: 0, width: "clamp(90px, 9vw, 130px)", transform: "scaleX(-1)", zIndex: 10, pointerEvents: "none" }} />
        {/* White corners (bottom) */}
        <img src={whiteCornerImg} alt="" style={{ position: "fixed", bottom: 0, right: 0, width: "clamp(120px, 12vw, 200px)", zIndex: 10, pointerEvents: "none" }} />
        <img src={whiteCornerImg} alt="" style={{ position: "fixed", bottom: 0, left: 0, width: "clamp(120px, 12vw, 200px)", transform: "scaleX(-1)", zIndex: 10, pointerEvents: "none" }} />

        {/* BMI label bottom center */}
        <div data-testid="text-bmi-label" style={{ position: "fixed", bottom: "clamp(20px, 3vh, 40px)", left: "50%", transform: "translateX(-50%)", fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(1.2rem, 2vw, 1.8rem)", color: "#296184", letterSpacing: "0.16em", zIndex: 11, pointerEvents: "none", whiteSpace: "nowrap" }}>BMI</div>

        {/* Frosted glass card */}
        <div style={{
          position: "relative",
          zIndex: 5,
          display: "flex",
          alignItems: "stretch",
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1.5px solid rgba(255,255,255,0.35)",
          borderRadius: "40px",
          boxShadow: "0 24px 80px rgba(41,97,132,0.22), 0 2px 0 rgba(255,255,255,0.4) inset",
          maxWidth: "min(980px, 88vw)",
          width: "100%",
          overflow: "hidden",
        }}>
          {/* Left: orb side */}
          <div style={{ flex: "0 0 44%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "clamp(10px, 1.5vh, 20px)", padding: "clamp(32px, 4vh, 56px) clamp(24px, 3vw, 48px)" }}>
            {/* Home button */}
            <button data-testid="button-home" onClick={onHome} className="scale-transition" style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer", alignSelf: "flex-start" }}>
              <img src={homeImg} alt="الرئيسية" style={{ width: "clamp(44px, 5vw, 68px)", height: "clamp(44px, 5vw, 68px)", objectFit: "contain", display: "block", filter: "drop-shadow(0 2px 6px rgba(41,97,132,0.2))" }} />
            </button>

            {/* Scale icon */}
            <img src={scaleIcon} alt="" style={{ width: "clamp(56px, 7vw, 96px)", objectFit: "contain" }} />

            {/* Heading */}
            <p data-testid="text-result-heading" style={{ fontFamily: "'Almarai', sans-serif", fontSize: "clamp(0.85rem, 1.2vw, 1.15rem)", fontWeight: 700, color: "white", lineHeight: 1.65, margin: 0, textAlign: "center", textShadow: "0 1px 6px rgba(41,97,132,0.2)" }}>
              {cat.heading}
            </p>

            {/* Orb */}
            <img src={cat.orb} alt="" data-testid={`img-orb-${result.category}`} style={{ width: "clamp(140px, 18vw, 240px)", objectFit: "contain", filter: "drop-shadow(0 8px 24px rgba(41,97,132,0.25))" }} />
          </div>

          {/* Right: white content panel */}
          <div style={{
            flex: 1,
            background: "white",
            borderRadius: "32px 0 0 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "clamp(36px, 5vh, 64px) clamp(32px, 4vw, 64px)",
            boxSizing: "border-box",
          }}>
            <div style={{ maxWidth: "min(500px, 100%)", width: "100%", direction: "rtl" }}>
              <p data-testid="text-result-paragraph" style={{ fontFamily: "'Almarai', sans-serif", fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)", fontWeight: 400, color: "#444", lineHeight: 2, marginBottom: "clamp(14px, 2vh, 28px)", textAlign: "right" }}>
                {cat.paragraph}
              </p>
              <p data-testid="text-result-advice" style={{ fontFamily: "'Almarai', sans-serif", fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)", fontWeight: 700, color: "#296184", lineHeight: 2, textAlign: "right", margin: 0 }}>
                {cat.advice}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fade-in"
      dir="rtl"
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "100dvh",
        background: "#32C3DE",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <BinaryBackground />
      <img src={corner1Img} alt="" style={{ position: "fixed", top: 0, left: 0, width: "clamp(90px, 22vw, 160px)", objectFit: "contain", opacity: 0.95, zIndex: 10, pointerEvents: "none" }} />
      <img src={corner1Img} alt="" style={{ position: "fixed", top: 0, right: 0, width: "clamp(90px, 22vw, 160px)", objectFit: "contain", transform: "scaleX(-1)", opacity: 0.95, zIndex: 10, pointerEvents: "none" }} />
      <img src={whiteCornerImg} alt="" style={{ position: "fixed", bottom: 0, right: 0, width: "clamp(120px, 30vw, 220px)", objectFit: "contain", zIndex: 10, pointerEvents: "none" }} />
      <img src={whiteCornerImg} alt="" style={{ position: "fixed", bottom: 0, left: 0, width: "clamp(120px, 30vw, 220px)", objectFit: "contain", transform: "scaleX(-1)", zIndex: 10, pointerEvents: "none" }} />
      <div data-testid="text-bmi-label" style={{ position: "fixed", bottom: "clamp(28px, 5vh, 52px)", left: "50%", transform: "translateX(-50%)", fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(1.2rem, 4vw, 2rem)", color: "#296184", letterSpacing: "0.14em", zIndex: 11, pointerEvents: "none", whiteSpace: "nowrap" }}>BMI</div>
      <div style={{ position: "relative", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", width: "100%", paddingTop: "clamp(24px, 5vh, 56px)", paddingBottom: "clamp(12px, 2vh, 24px)", gap: "clamp(6px, 1.2vh, 16px)" }}>
        <button data-testid="button-home" onClick={onHome} className="scale-transition" style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer" }}>
          <img src={homeImg} alt="الرئيسية" style={{ width: "clamp(48px, 12vw, 72px)", height: "clamp(48px, 12vw, 72px)", objectFit: "contain", display: "block" }} />
        </button>
        <img src={scaleIcon} alt="" style={{ width: "clamp(65px, 18vw, 105px)", objectFit: "contain" }} />
        <div style={{ padding: "0 clamp(20px, 6vw, 60px)", textAlign: "center", maxWidth: "min(480px, 90vw)" }}>
          <p data-testid="text-result-heading" style={{ fontFamily: "'Almarai', sans-serif", fontSize: "clamp(0.85rem, 3vw, 1.3rem)", fontWeight: 700, color: "#296184", lineHeight: 1.55, margin: 0 }}>{cat.heading}</p>
        </div>
        <img src={cat.orb} alt="" data-testid={`img-orb-${result.category}`} style={{ width: "clamp(140px, 36vw, 220px)", objectFit: "contain" }} />
      </div>
      <div style={{ flex: "1 1 auto", width: "100%", background: "white", borderRadius: "clamp(20px, 5vw, 44px) clamp(20px, 5vw, 44px) 0 0", position: "relative", zIndex: 3, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "clamp(16px, 3vh, 36px) clamp(20px, 6vw, 60px) clamp(32px, 5vh, 56px)", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "min(500px, 88vw)", width: "100%", direction: "rtl" }}>
          <p data-testid="text-result-paragraph" style={{ fontFamily: "'Almarai', sans-serif", fontSize: "clamp(0.78rem, 2.5vw, 1rem)", fontWeight: 400, color: "#444", lineHeight: 1.85, marginBottom: "clamp(8px, 1.5vh, 16px)", textAlign: "right" }}>{cat.paragraph}</p>
          <p data-testid="text-result-advice" style={{ fontFamily: "'Almarai', sans-serif", fontSize: "clamp(0.78rem, 2.5vw, 1rem)", fontWeight: 700, color: "#296184", lineHeight: 1.85, textAlign: "right", margin: 0 }}>{cat.advice}</p>
        </div>
      </div>
    </div>
  );
}
