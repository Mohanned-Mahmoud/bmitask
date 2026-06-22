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

export default function ResultScreen({ result, onHome }: Props) {
  const cat = CATEGORIES[result.category];

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

      {/* Top corners — blue, fixed to screen corners */}
      <img src={corner1Img} alt="" style={{ position: "fixed", top: 0, left: 0, width: "clamp(90px, 22vw, 160px)", objectFit: "contain", opacity: 0.95, zIndex: 10, pointerEvents: "none" }} />
      <img src={corner1Img} alt="" style={{ position: "fixed", top: 0, right: 0, width: "clamp(90px, 22vw, 160px)", objectFit: "contain", transform: "scaleX(-1)", opacity: 0.95, zIndex: 10, pointerEvents: "none" }} />
      {/* Bottom corners — white area, fixed to screen corners */}
      <img src={whiteCornerImg} alt="" style={{ position: "fixed", bottom: 0, right: 0, width: "clamp(120px, 30vw, 220px)", objectFit: "contain", zIndex: 10, pointerEvents: "none" }} />
      <img src={whiteCornerImg} alt="" style={{ position: "fixed", bottom: 0, left: 0, width: "clamp(120px, 30vw, 220px)", objectFit: "contain", transform: "scaleX(-1)", zIndex: 10, pointerEvents: "none" }} />

      {/* BMI label — centered at bottom between the two corners */}
      <div
        data-testid="text-bmi-label"
        style={{
          position: "fixed",
          bottom: "clamp(28px, 5vh, 52px)",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(1.2rem, 4vw, 2rem)",
          color: "#296184",
          letterSpacing: "0.14em",
          zIndex: 11,
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        BMI
      </div>

      {/* Top teal section */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          paddingTop: "clamp(24px, 5vh, 56px)",
          paddingBottom: "clamp(12px, 2vh, 24px)",
          gap: "clamp(6px, 1.2vh, 16px)",
        }}
      >
        {/* Home button */}
        <button
          data-testid="button-home"
          onClick={onHome}
          className="scale-transition"
          style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer" }}
        >
          <img
            src={homeImg}
            alt="الرئيسية"
            style={{ width: "clamp(48px, 12vw, 72px)", height: "clamp(48px, 12vw, 72px)", objectFit: "contain", display: "block" }}
          />
        </button>

        {/* Scale icon */}
        <img
          src={scaleIcon}
          alt=""
          style={{ width: "clamp(65px, 18vw, 105px)", objectFit: "contain" }}
        />

        {/* Heading */}
        <div style={{ padding: "0 clamp(20px, 6vw, 60px)", textAlign: "center", maxWidth: "min(480px, 90vw)" }}>
          <p
            style={{
              fontFamily: "'Almarai', sans-serif",
              fontSize: "clamp(0.85rem, 3vw, 1.3rem)",
              fontWeight: 700,
              color: "#296184",
              lineHeight: 1.55,
              margin: 0,
            }}
            data-testid="text-result-heading"
          >
            {cat.heading}
          </p>
        </div>

        {/* Orb */}
        <img
          src={cat.orb}
          alt=""
          data-testid={`img-orb-${result.category}`}
          style={{ width: "clamp(140px, 36vw, 220px)", objectFit: "contain" }}
        />
      </div>

      {/* White bottom panel — fills remaining space */}
      <div
        style={{
          flex: "1 1 auto",
          width: "100%",
          background: "white",
          borderRadius: "clamp(20px, 5vw, 44px) clamp(20px, 5vw, 44px) 0 0",
          position: "relative",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "clamp(16px, 3vh, 36px) clamp(20px, 6vw, 60px) clamp(32px, 5vh, 56px)",
          boxSizing: "border-box",
        }}
      >
        <div style={{ maxWidth: "min(500px, 88vw)", width: "100%", direction: "rtl" }}>
          <p
            style={{
              fontFamily: "'Almarai', sans-serif",
              fontSize: "clamp(0.78rem, 2.5vw, 1rem)",
              fontWeight: 400,
              color: "#444",
              lineHeight: 1.85,
              marginBottom: "clamp(8px, 1.5vh, 16px)",
              textAlign: "right",
            }}
            data-testid="text-result-paragraph"
          >
            {cat.paragraph}
          </p>
          <p
            style={{
              fontFamily: "'Almarai', sans-serif",
              fontSize: "clamp(0.78rem, 2.5vw, 1rem)",
              fontWeight: 700,
              color: "#296184",
              lineHeight: 1.85,
              textAlign: "right",
              margin: 0,
            }}
            data-testid="text-result-advice"
          >
            {cat.advice}
          </p>

        </div>
      </div>
    </div>
  );
}
