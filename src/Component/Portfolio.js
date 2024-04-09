import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Experience from "./Experience/Experience";
import Nav from "./NavBar/Nav";

import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";

const Portfolio = () => {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default Portfolio;
