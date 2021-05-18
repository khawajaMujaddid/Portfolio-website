import React from "react";

export default function Skills({ skill, width }) {
  let bar_width = (40 * width) / 100;
  let bar_width_max = bar_width + 20;
  bar_width = bar_width.toString() + "%";
  bar_width_max = bar_width_max.toString() + "%";

  return (
    <div style={{ display: "flex" }}>
      <div id="skill-name">{skill}</div>
      <div
        id="skill-width"
        style={{
          width: `clamp(${bar_width}, ${bar_width_max}, ${bar_width_max})`,
        }}
      ></div>
      <div id="skill-bar">{width}%</div>
    </div>
  );
}
