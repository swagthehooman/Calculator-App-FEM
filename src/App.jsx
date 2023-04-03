import React, { useState } from "react";
import ResultScreen from "./components/resultSection/ResultScreen";
import Headings from "./components/headingSection/Headings";
import Keypad from "./components/keypadSection/Keypad";
import { evaluate, round } from "mathjs";
import "./App.css";

function App() {
  const [result, setResult] = useState("0");

  function handleClick(event) {
    var buttonType = event.target.name;

    if (buttonType !== "DEL" && buttonType !== "RESET" && buttonType !== "=") {
      if (
        buttonType === "+" ||
        buttonType === "-" ||
        buttonType === "x" ||
        buttonType === "/"
      ) {
        setResult(
          (prev) =>
            (prev += " " + (buttonType === "x" ? "*" : buttonType) + " ")
        );
      } else {
        if (result === "0") {
          setResult(buttonType);
        } else {
          setResult((prev) => (prev += buttonType));
        }
      }
    } else if (buttonType === "DEL") {
      if (result.length > 1) {
        setResult(result.substring(0, result.length - 1));
      } else {
        setResult("0");
      }
    } else if (buttonType === "RESET") {
      setResult("0");
    } else {
      try {
        setResult(round(evaluate(result), 2));
      } catch (error) {
        console.log();
      }
    }
  }

  return (
    <main>
      <Headings />
      <ResultScreen text={result} />
      <Keypad keyFunction={handleClick} />
    </main>
  );
}

export default App;
