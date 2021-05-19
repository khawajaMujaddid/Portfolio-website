import React from "react";
import "./App.css";
import About from "./components/about";
import Blogs from "./components/blogs";
import NavBar from "./components/header";
import Home from "./components/home";

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
      <span id="blogs" style={{ marginTop: "5vh" }}>
        <Blogs />
      </span>
    </div>
  );
}

export default App;
