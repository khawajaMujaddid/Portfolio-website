import React from "react";
import "./App.css";
import About from "./components/about";
import Blogs from "./components/blogs";
import ContactUS from "./components/contact";
import NavBar from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import Projects from "./components/projects";

function App() {
  const [mobileCheckMark, setMobileCheckMark] = React.useState(false);

  //event listner for window resizing
  window.addEventListener(
    "resize",
    function (_) {
      if (window.innerWidth <= 730) {
        setMobileCheckMark(true);
      } else {
        setMobileCheckMark(false);
      }
    },
    true
  );

  return (
    <div className="App">
      <span id="home">
        {mobileCheckMark === false ? <Home /> : <NavBar />}
        {mobileCheckMark === false ? <NavBar /> : <Home />}
      </span>
      <span id="about" style={{ marginTop: "5vh" }}>
        <About />
      </span>
      <span id="projects" style={{ marginTop: "5vh" }}>
        <Projects />
      </span>
      <span id="blogs" style={{ marginTop: "5vh" }}>
        <Blogs />
      </span>
      <span id="contact">
        <ContactUS />
      </span>
      <span>
        <Footer />
      </span>
    </div>
  );
}

export default App;
