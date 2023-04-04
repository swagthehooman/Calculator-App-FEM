import React from "react";
import "./ButtonStyle.css";
export default function CustomButton(props) {
  const newStyle = props.buttonStyle;
  return (
    <button
      name={props.text}
      className="numbers"
      style={{
        backgroundColor:
          props.text === "DEL" || props.text === "RESET"
            ? newStyle.keyBackgroundSpecialsDelReset
            : props.text === "="
            ? newStyle.keyBackgroundEqualsToggle
            : newStyle.keyBackgroundNormal,
        boxShadow:
          props.text === "DEL" || props.text === "RESET"
            ? newStyle.keyShadowDelReset
            : props.text === "="
            ? newStyle.keyShadowEqualsToggle
            : newStyle.keyShadowNormal,
        color:
          props.text === "DEL" || props.text === "RESET" || props.text === "="
            ? newStyle.delResetEqualText
            : newStyle.normalText,
      }}
      onClick={props.clickEvent}
    >
      {props.text}
    </button>
  );
}
