import React from "react";
import "./ResultScreenStyle.css";

export default function ResultScreen(props) {
  return (
    <div className="result_screen">
      <h1>{props.text}</h1>
    </div>
  );
}
