import "./App.scss";
import Catlogo from "./Img/catcon.png";

import React, { useEffect, useRef } from "react";
import { HashRouter, NavLink, useLocation } from "react-router-dom";

import Welcome from "./Welcome/Welcome";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

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
        <NavLink to="/about" activeclassname="selected">
          About
        </NavLink>
        <NavLink to="/experience" activeclassname="selected">
          Experience
        </NavLink>
        <NavLink to="/projects" activeclassname="selected">
          Projects
        </NavLink>
        <NavLink to="/skills" activeclassname="selected">
          Skills
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
            }}
          />
          <Welcome key={1}/>
          <About ref={aboutRef} />
          <Experience ref={experienceRef} />
          <Projects ref={projectsRef} />
          <Skills ref={skillsRef} />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
