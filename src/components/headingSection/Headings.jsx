import React from "react";
import "./HeadingsStyle.css";

export default function Headings() {
  return (
    <div className="topic">
      <div className="topic_name">
        <p>calc</p>
      </div>
      <div className="topic_setting">
        <p>THEME</p>
        <div className="setting">
          <p>1 2 3</p>
          <span className="slider"></span>
        </div>
      </div>
    </div>
  );
}
