import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";

const App = () => {
  return (
      <div className="App">
      <Intro />
      <About />
      <Contact />
    </div>
  );
};

export default App;
