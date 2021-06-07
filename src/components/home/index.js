import React from "react";
import Particles from "react-particles-js";
import styles from "../../styles/home.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import ReactTypingEffect from "react-typing-effect";

export default function Home() {
  const TypingStyle = {
    letterSpacing: "0.03cm",
    fontSize: "5vw",
    fontWeight: "bolder",
    color: "white",
  };

  return (
    <div>
      <div className={styles.scale_in_center} id="welcome">
        <h1>
          Hello , I'm{" "}
          <span style={{ color: "rgb(227,27,109)" }}>Ibad Ahmad.</span> <br />
          I'm&nbsp;
          <span>
            <ReactTypingEffect
              text={["MERN Developer.", "Data Scientist."]}
              cursorRenderer={(cursor) => <span>{cursor}</span>}
              typingDelay="300"
              eraseDelay="2000"
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
        <button id="view_work_btn">
          <a
            href="#projects"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            View My Work
          </a>
          <span id="workbtn_logo">
            &nbsp;&nbsp;
            <AiOutlineArrowRight />
          </span>
        </button>
      </div>

      <Particles
        id="particles-js"
        params={{
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 700,
              },
            },
            backgroundImage: {
              value: "linearGradient(rgb(4, 194, 201),rgb(227, 27, 109))",
            },
            opacity: {
              value: 0.3,
              anim: {
                enable: true,
              },
            },
            size: {
              value: 7,
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
              speed: 0.43,
            },
          },
        }}
      />
    </div>
  );
}
