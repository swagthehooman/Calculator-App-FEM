import React, { useState } from "react";
import "./HeadingsStyle.css";
import { to } from "mathjs";
export default function Headings(props) {
  const newStyle = props.customStyle;
  const [toggleColor, setToggleColor] = useState(newStyle.backgroundKeypad);
  return (
    <div className="topic" style={{ color: newStyle.heading }}>
      <div className="topic_name">
        <p>calc</p>
      </div>
      <div className="topic_setting">
        <p>THEME</p>
        <div className="setting_points">
          <div className="labels">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <div
            className="setting"
            style={{ backgroundColor: newStyle.backgroundKeypad }}
          >
            <input
              defaultChecked="true"
              style={{ backgroundColor: newStyle.keyBackgroundEqualsToggle }}
              type="radio"
              value={0}
              name="theme"
              onChange={props.handleRadio}
            />
            <input
              style={{ backgroundColor: newStyle.keyBackgroundEqualsToggle }}
              type="radio"
              value={1}
              name="theme"
              onChange={props.handleRadio}
            />
            <input
              style={{ backgroundColor: newStyle.keyBackgroundEqualsToggle }}
              type="radio"
              value={2}
              name="theme"
              onChange={props.handleRadio}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
