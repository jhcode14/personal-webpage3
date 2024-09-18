import "./App.scss";
import Catlogo from "./Img/catcon.png";

import React, { useEffect, useRef } from "react";
import { HashRouter, NavLink, useLocation } from "react-router-dom";

import Welcome from "./Welcome/Welcome";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";

const Header = ({ refs }) => {
  const location = useLocation();

  useEffect(() => {
    console.log("location", location.pathname);
    switch (location.pathname) {
      case "/about":
        scrollHandler(refs.aboutRef);
        break;
      case "/experience":
        scrollHandler(refs.experienceRef);
        break;
      case "/projects":
        scrollHandler(refs.projectsRef);
        break;
      case "/skills":
        scrollHandler(refs.skillsRef);
        break;
      case "/contact":
        scrollHandler(refs.contactRef);
        break;
      default:
        return;
    }
  }, [location, refs]);

  const scrollHandler = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="Nav">
      <div className="Icon">
        <img src={Catlogo} alt="Logo" width={64} height={64} />
      </div>
      <div className="Nav_content">
        <NavLink to="/about" activeClassName="selected">
          About
        </NavLink>
        <NavLink to="/experience" activeClassName="selected">
          Experience
        </NavLink>
        <NavLink to="/projects" activeClassName="selected">
          Projects
        </NavLink>
        <NavLink to="/skills" activeClassName="selected">
          Skills
        </NavLink>
        <NavLink to="/contact" activeClassName="selected">
          Contact Me
        </NavLink>
      </div>
    </div>
  );
};

function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <div className="Container">
        <HashRouter>
          <Header
            refs={{
              aboutRef,
              experienceRef,
              projectsRef,
              skillsRef,
              contactRef,
            }}
          />
          <Welcome />
          <About ref={aboutRef} />
          <Experience ref={experienceRef} />
          <Projects ref={projectsRef} />
          <Skills ref={skillsRef} />
          <Contact ref={contactRef} />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
