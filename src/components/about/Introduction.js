import React from "react";

export default function Introduction() {
  return (
    <div id="profile-container">
      <div id="profile-image"></div>
      <div id="profile-introduction">
        <h5 id="who-this">Who's this guy</h5>
        <p id="who-this-description">
          I'm a MERN Stack Developer and Junior Data Scientist. I have serious
          passion for UI effects, animations and creating intuitive, dynamic
          user experiences. <br />
          <span style={{ justifyContent: "center" }}>
            <span style={{ color: "blue" }}>Let's make something special.</span>
          </span>
        </p>
      </div>
    </div>
  );
}
