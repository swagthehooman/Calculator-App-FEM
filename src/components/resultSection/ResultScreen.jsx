import React from "react";
import "./ResultScreenStyle.css";

export default function ResultScreen(props) {
  return (
    <div
      className="result_screen"
      style={{
        backgroundColor: props.customStyle.backgroundScreen,
        color: props.customStyle.heading,
      }}
    >
      <h1>{props.text}</h1>
    </div>
  );
}
