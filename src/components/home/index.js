import React from "react";
import Particles from "react-particles-js";
import styles from "../../styles/home.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
// import { BiRocket } from "react-icons/bi";
// import Lottie from "react-lottie";
// import animation from "../../assets/lottie-animation.json";
import ReactTypingEffect from "react-typing-effect";
// import { SiIbm } from "react-icons/si";
// import { AiOutlineGoogle } from "react-icons/ai";

// const defaultOptions = {
//   loop: true,
//   autoplay: true,
//   animationData: animation,
//   rendererSettings: {
//     preserveAspectRatio: "xMidYMid slice",
//   },
// };

const TypingStyle = {
  letterSpacing: "0.03cm",
  fontSize: "6vw",
  fontWeight: "bolder",
  color: "white",
};

// function debounce(fn, ms) {
//   let timer;
//   return (_) => {
//     clearTimeout(timer);
//     timer = setTimeout((_) => {
//       timer = null;
//       fn.apply(this, arguments);
//     }, ms);
//   };
// }

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
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
              value: 15,
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

// function Certifications() {
//   const [dimensions, setDimensions] = React.useState({
//     height: window.innerHeight,
//     width: window.innerWidth,
//   });
//   React.useEffect(() => {
//     const debouncedHandleResize = debounce(function handleResize() {
//       setDimensions({
//         height: window.innerHeight,
//         width: window.innerWidth,
//       });
//     }, 1000);

//     window.addEventListener("resize", debouncedHandleResize);
//     return (_) => {
//       window.removeEventListener("resize", debouncedHandleResize);
//     };
//   });

//   return (
//     <div id="secondary-section" data-aos="fade-up">
//       <div id="lottie-animation" data-aos="zoom-out">
//         <Lottie
//           options={defaultOptions}
//           height={470}
//           width={
//             dimensions.width >= 1099 || dimensions.width <= 650 ? 400 : 500
//           }
//         />
//       </div>
//       <div id="lottie-paragraph">
//         <div id="lottie-paragraph-heading">
//           Certified By
//           <div id="lottie-paragraph-text">
//             <Certificate
//               SiIbm={SiIbm}
//               text={
//                 "International Business Machines Corporation is an American multinational technology company headquartered in Armonk, New York, with operations in over 170 countries."
//               }
//             />
//             <Certificate
//               SiIbm={AiOutlineGoogle}
//               text={
//                 "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies."
//               }
//             />

//             <Certificate
//               SiIbm={BiRocket}
//               text={
//                 "Eduonix Learning Solutions is an esteemed name in the e-learning field and has a vast library of web designing and development courses to help cater the lear."
//               }
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Certificate({ text, SiIbm }) {
//   return (
//     <div id="certification">
//       <div id="icon" data-aos="zoom-in">
//         <SiIbm />
//       </div>
//       <h6 id="certification-text">{text}</h6>
//     </div>
//   );
// }
