import { useState, useEffect } from "react";

import "./App.css";

import Welcome from "./Welcome/Welcome";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  const [visiblePage, setVisiblePage] = useState(<Welcome />);

  const handleNavButton = (e) => {
    switch (e.target.value) {
      case "PAGE_WELCOME":
        setVisiblePage(<Welcome />);
        break;
      case "PAGE_ABOUT_ME":
        setVisiblePage(<About />);
        break;
      case "PAGE_PROJECTS":
        setVisiblePage(<Projects />);
        break;
      case "PAGE_RESUME":
        setVisiblePage(<Resume />);
        break;
      case "PAGE_CONTACT":
        setVisiblePage(<Contact />);
        break;
      default:
        break;
    }
  };
  return (
    <div className="App">
      <div className="Container">
        <div className="Nav">
          <button
            value="PAGE_WELCOME"
            onClick={handleNavButton}
            className="Button"
          >
            Welcome
          </button>
          <button
            value="PAGE_ABOUT_ME"
            onClick={handleNavButton}
            className="Button"
          >
            About
          </button>
          <button
            value="PAGE_PROJECTS"
            onClick={handleNavButton}
            className="Button"
          >
            Projects
          </button>
          <button
            value="PAGE_RESUME"
            onClick={handleNavButton}
            className="Button"
          >
            Resume
          </button>
          <button
            value="PAGE_CONTACT"
            onClick={handleNavButton}
            className="Button"
          >
            Contact
          </button>
        </div>
        {visiblePage}
        <Footer />
      </div>
    </div>
  );
}

export default App;
