import React from "react";
import Particles from "react-particles-js";
import styles from "../../styles/home.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import ReactTypingEffect from "react-typing-effect";

const TypingStyle = {
  letterSpacing: "0.03cm",
  fontSize: "clamp(2rem, 1rem + 2vw, 7rem)",
  fontWeight: "bolder",
  color: "white",
};

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.scale_in_center} id="welcome">
        <h1 data-aos="zoom-out" data-aos-duration={2000}>
          Hello , I'm <span style={{ color: "rgb(227,27,109)" }}>Ibad.</span>{" "}
          <br />
          I'm&nbsp;
          <span>
            <ReactTypingEffect
              text={["MERN Developer."]}
              cursorRenderer={(cursor) => <span>{cursor}</span>}
              typingDelay="1200"
              eraseDelay="1500"
              displayTextRenderer={(text) => {
                return (
                  <div>
                    {text.split("").map((char, i) => {
                      return (
                        <span key={i} style={TypingStyle}>
                          {char}
                        </span>
                      );
                    })}
                  </div>
                );
              }}
            />
          </span>
        </h1>
        <br />
        <a
          href="#projects"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <button id="view_work_btn">
            View My Work
            <p id="workbtn_logo">
              &nbsp;&nbsp;
              <AiOutlineArrowRight />
            </p>
          </button>
        </a>
      </div>
      <div>{/* <Certifications /> */}</div>

      <Particles
        id="particles-js"
        params={{
          particles: {
            number: {
              value: 25,
              density: {
                enable: true,
                value_area: 700,
              },
            },
            backgroundImage: {
              value: "linearGradient(rgb(4, 194, 201),rgb(227, 27, 109))",
            },
            opacity: {
              value: 0.15,
              anim: {
                enable: true,
              },
            },
            size: {
              value: 15,
              random: true,
              anim: {
                enable: true,
                speed: 3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 0.45,
            },
          },
        }}
      />
    </div>
  );
}
