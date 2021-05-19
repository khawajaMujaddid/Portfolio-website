import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa";
import "../../styles/footer.scss";

export default function Footer() {
  return (
    <div id="footer-container">
      <div id="icons-container">
        <div id="social-icon">
          <AiFillFacebook />
        </div>
        <div id="social-icon">
          <AiFillLinkedin />
        </div>
        <div id="social-icon">
          <AiFillGithub />
        </div>
        <div id="social-icon">
          <FaStackOverflow />
        </div>
      </div>
      <h6 id="footnote">
        IBAD AHMAD <span style={{ color: "rgb(248,30,119)" }}>©2021</span>
      </h6>
    </div>
  );
}
