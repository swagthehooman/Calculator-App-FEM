import React from "react";
import "./ButtonStyle.css";
export default function CustomButton(props) {
  return (
    <button
      name={props.text}
      className="numbers"
      style={{
        backgroundColor:
          props.text === "DEL" || props.text === "RESET"
            ? "hsl(225, 21%, 49%)"
            : props.text === "="
            ? "hsl(6, 63%, 50%)"
            : "hsl(30, 25%, 89%)",
        boxShadow:
          props.text === "DEL" || props.text === "RESET"
            ? "0 3px 0 hsl(224, 28%, 35%)"
            : props.text === "="
            ? "0 3px 0 hsl(6, 70%, 34%)"
            : "0 3px 0 hsl(28, 16%, 65%)",
        color:
          props.text === "DEL" || props.text === "RESET" || props.text === "="
            ? "hsl(0, 0%, 100%)"
            : "hsl(221, 14%, 31%)",
      }}
      onClick={props.clickEvent}
    >
      {props.text}
    </button>
  );
}
