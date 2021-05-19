import React from "react";
import "../../styles/contact.scss";
import ContactForm from "./Form";
import { MdArrowUpward } from "react-icons/md";

export default function ContactUS() {
  return (
    <>
      <div id="contact_container">
        <div id="heading_container">
          <h2 id="heading">Contact</h2>
          <h2 id="heading_bar">{}</h2>
          <h3 id="contact_sub_heading">
            Have a question or wanna work together?
          </h3>
        </div>
        <div id="form-container">
          <ContactForm />
        </div>
      </div>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          margin: "-10vh 0 0 0",
        }}
      >
        <a href="#home" style={upArrow} id="topArrow">
          <MdArrowUpward />
        </a>
      </div>
    </>
  );
}

const upArrow = {
  textDecoration: "none",
  marginTop: "0rem",
  padding: "10px 12px",
  cursor: "pointer",
  backgroundColor: "rgb(248,30,119)",
  color: "white",
  fontSize: "22pt",
  zIndex: "100",
};
