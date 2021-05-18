import React from "react";
import profile_img from "../../assets/profile_picture.jpeg";

export default function Introduction() {
  return (
    <div id="profile-container">
      <div id="profile-image">
        <img
          // src={profile_img}
          // alt="profile_photo"
          style={{ objectFit: "contain", backgroundSize: "100% 100%" }}
        />
      </div>
      <div id="profile-introduction">
        <h5 id="who-this">Who's this guy</h5>
        <p id="who-this-description">
          I'm a MERN Stack Developer and Junior Data Scientist. I have serious
          passion for UI effects, animations and creating intuitive, dynamic
          user experiences. <br />
          <span style={{ justifyContent: "center" }}>
            Let's make something special.
          </span>
        </p>
      </div>
    </div>
  );
}
