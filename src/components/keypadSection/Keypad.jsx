import React from "react";
import CustomButton from "../buttons/CustomButtons";
import "./KeypadStyle.css";

const buttonType = [
  "7",
  "8",
  "9",
  "DEL",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "-",
  ".",
  "0",
  "/",
  "x",
];
const specialType = ["RESET", "="];

export default function Keypad(props) {
  function keypadNumber(i) {
    return <CustomButton key={i} text={i} clickEvent={props.keyFunction} />;
  }
  function keypadSpecial(i) {
    return <CustomButton key={i} text={i} clickEvent={props.keyFunction} />;
  }
  return (
    <div className="keypad">
      <div className="keypad_numbers">{buttonType.map(keypadNumber)}</div>
      <div className="keypad_special">{specialType.map(keypadSpecial)}</div>
    </div>
  );
}
