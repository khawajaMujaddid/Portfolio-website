import React from "react";
import "../../styles/about.scss";
import { AiOutlineBulb } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { BiAccessibility, BiRocket } from "react-icons/bi";
import Designs from "./Designs";
import Introduction from "./Introduction";
import Skills from "./Skills";

export default function About() {
  return (
    <div id="about_container">
      <div
        id="main_heading_container"
        data-aos="fade-right"
        data-aos-duration="2000"
      >
        <h2 id="main_heading">About</h2>
        <h2 id="main_heading_bar">{}</h2>
      </div>
      <div id="design_container" data-aos="zoom-in">
        <Designs
          title={"Fast"}
          description={
            "Fast load times and lag free interaction, my highest priority."
          }
          VscRocket={BiRocket}
        />
        <Designs
          title={"Responsive"}
          description={"My layouts will work on any device, big or small."}
          VscRocket={FaLaptopCode}
        />
        <Designs
          title={"Intuitive"}
          description={"Strong preference for easy to use, intuitive UX/UI."}
          VscRocket={AiOutlineBulb}
        />
        <Designs
          title={"Dynamic"}
          description={
            "Websites don't have to be static, I love making pages come to life."
          }
          VscRocket={BiAccessibility}
        />
      </div>
      <div id="profile_section">
        <Introduction />
        <span id="skills-section" data-aos="fade-left">
          <Skills skill={"CSS"} width={80} />
          <Skills skill={"HTML"} width={90} />
          <Skills skill={"Javascript"} width={80} />
          <Skills skill={"MERN"} width={90} />
          <Skills skill={"ScikitLearn"} width={80} />
          <Skills skill={"Tensorflow"} width={70} />
          <Skills skill={"Keras"} width={65} />
          <Skills skill={"Redux"} width={80} />
          <Skills skill={"UI Tools"} width={50} />
          <Skills skill={"NextJS"} width={70} />
          <Skills skill={"Firebase"} width={75} />
          <Skills skill={"GraphQL"} width={60} />
          <Skills skill={"PassportJS"} width={65} />
        </span>
      </div>
    </div>
  );
}
