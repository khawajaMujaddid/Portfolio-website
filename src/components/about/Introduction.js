import React from "react";

export default function Introduction() {
  return (
    <div id="profile-container" data-aos="fade-right">
      <div id="profile-image"></div>
      <div id="profile-introduction">
        <h5 id="who-this">Who's this guy</h5>
        <p id="who-this-description">
          I'm a <b>MERN Stack Developer</b> and <b>Junior Data Scientist</b>. I have serious
          passion for UI effects, animations and creating intuitive, dynamic
          user experiences. Moreover, can create intelligent models end to end
          using Artificial Intelligence <br />
          <span style={{ justifyContent: "center" }}>
            <a
              href="#contact"
              style={{
                color: "blue",
                textDecoration: "none",
              }}
            >
              Let's make something special.
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
