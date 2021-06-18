import React from "react";

export default function Skills({ skill, width }) {
  let bar_width = (42 * width) / 100;
  let bar_width_max = bar_width + 20;
  bar_width = bar_width.toString() + "%";
  bar_width_max = bar_width_max.toString() + "%";

  return (
    <div style={{ display: "flex" }}>
      <div id="skill-name">{skill}</div>
      <div
        id="skill-width"
        // data-aos="slide-right"
        // data-aos-duration="2000"
        style={{
          width: `${bar_width_max}`,
          maxWidth: `${bar_width_max}`,
          minWidth: `${bar_width}`,
        }}
      ></div>
      <div id="skill-bar">{width}%</div>
    </div>
  );
}
