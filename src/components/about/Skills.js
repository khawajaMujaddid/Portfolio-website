import React from "react";

export default function Skills({ skill, width }) {
  let bar_width = (45 * width) / 100;
  let bar_width_max = bar_width + 16;
  bar_width = bar_width.toString() + "%";
  bar_width_max = bar_width_max.toString() + "%";
  const [skillClass] = React.useState("skill-width-animation");

  // React.useEffect(() => {
  //   window.addEventListener("aos:in", ({ detail }) => {
  //     console.log("animated in", detail);
  //   });
  // });

  // React.useEffect(() => {
  //   const changeHeaderPosition = () => {
  //     if (window.scrollY >= 900 && window.scrollY >= 910) {
  //       setSkillClass("skill-width-animation");
  //     }
  //     else if (window.scrollY >= 1000 && window.scrollY >= 1010) {
  //       setSkillClass("skill-width-animation");
  //     }

  //     window.scrollY >= 1100 && console.log("hello");
  //   };

  //   window.addEventListener("scroll", changeHeaderPosition);
  // });

  return (
    <div
      style={{ display: "flex" }}
      id="container"
      className="skill_skill"
     
    >
      <div id="skill-name">{skill}</div>
      <div
        id={skillClass}
      
        style={{
          width: "0px",
          maxWidth: `${bar_width_max}`,
          minWidth: "0px",
          backgroundColor: "#eee",
        }}
      ></div>
      <div id="skill-bar">{width}%</div>
    </div>
  );
}
