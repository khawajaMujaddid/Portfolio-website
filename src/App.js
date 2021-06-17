import React from "react";
import "./App.css";
import About from "./components/about";
import Blogs from "./components/blogs";
import ContactUS from "./components/contact";
import NavBar from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Aos from "aos";

function App() {
  const [mobileCheckMark, setMobileCheckMark] = React.useState(false);

  //event listner for window resizing
  React.useEffect(() => {
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
  });

  React.useEffect(() => {
    Aos.init({
      // Global settings:
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 200, // offset (in px) from the original trigger point
      duration: 1000, // values from 0 to 3000, with step 50m
    });
  });

  return (
    <div className="App">
      <span id="home">
        {mobileCheckMark === false ? <Home /> : <NavBar />}
        {mobileCheckMark === false ? <NavBar /> : <Home />}
      </span>
      <span id="about">
        <About />
      </span>
      <span id="projects">
        <Projects />
      </span>
      <span id="blogs">
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
