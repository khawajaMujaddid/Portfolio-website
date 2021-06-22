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

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
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
      <div id="home">
        {dimensions.width > 730 ? <Home /> : <NavBar />}
        {dimensions.width > 730 ? <NavBar /> : <Home />}
      </div>
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
