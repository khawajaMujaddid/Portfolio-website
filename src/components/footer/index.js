import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa";
import "../../styles/footer.scss";

export default function Footer() {
  return (
    <div id="footer-container">
      <div id="icons-container">
        <div id="social-icon">
          <a
            href="https://www.facebook.com/?react=AQDaeXFepi_ZImXLzCU"
            target="blank"
            style={{ color: "inherit" }}
          >
            <AiFillFacebook />
          </a>
        </div>
        <div id="social-icon">
          <a
            href="https://linkedin.com/in/ibad-ahmad"
            target="blank"
            style={{ color: "inherit" }}
          >
            <AiFillLinkedin />
          </a>
        </div>
        <div id="social-icon">
          <a
            href="https://github.com/IbadAhmad80"
            target="blank"
            style={{ color: "inherit" }}
          >
            <AiFillGithub />
          </a>
        </div>
        <div id="social-icon">
          <a
            href="https://stackoverflow.com/users/story/14998000?view=Timeline"
            target="blank"
            style={{ color: "inherit" }}
          >
            <FaStackOverflow />
          </a>
        </div>
      </div>
      <h6 id="footnote">
        IBAD AHMAD <span style={{ color: "rgb(248,30,119)" }}>©2021</span>
      </h6>
    </div>
  );
}
