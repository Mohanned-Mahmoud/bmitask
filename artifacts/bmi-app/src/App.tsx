import { useState } from "react";
import SplashScreen from "./pages/SplashScreen";
import InputScreen from "./pages/InputScreen";
import ResultScreen from "./pages/ResultScreen";

type Screen = "splash" | "input" | "result";

export interface BMIResult {
  bmi: number;
  category: "underweight" | "healthy" | "overweight" | "obese";
}

function App() {
  const [screen, setScreen] = useState<Screen>("splash");
  const [result, setResult] = useState<BMIResult | null>(null);

  const handleStart = () => setScreen("input");

  const handleCalculate = (height: number, weight: number) => {
    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);
    let category: BMIResult["category"];
    if (bmi < 18.5) category = "underweight";
    else if (bmi < 25) category = "healthy";
    else if (bmi < 30) category = "overweight";
    else category = "obese";
    setResult({ bmi, category });
    setScreen("result");
  };

  const handleHome = () => {
    setResult(null);
    setScreen("splash");
  };

  return (
    <div style={{ width: "100vw", minHeight: "100dvh", background: "#32C3DE" }}>
      {screen === "splash" && <SplashScreen onStart={handleStart} />}
      {screen === "input" && <InputScreen onCalculate={handleCalculate} />}
      {screen === "result" && result && <ResultScreen result={result} onHome={handleHome} />}
    </div>
  );
}

export default App;
