import React from "react";
import "./HeadingsStyle.css";
export default function Headings(props) {
  const newStyle = props.customStyle;
  return (
    <div className="topic" style={{ color: newStyle.heading }}>
      <div className="topic_name">
        <p>calc</p>
      </div>
      <div className="topic_setting">
        <p>THEME</p>
        <div className="setting">
          <input
            type="radio"
            value={0}
            name="theme"
            onChange={props.handleRadio}
          />
          <input
            type="radio"
            value={1}
            name="theme"
            onChange={props.handleRadio}
          />
          <input
            type="radio"
            value={2}
            name="theme"
            onChange={props.handleRadio}
          />
        </div>
      </div>
    </div>
  );
}
