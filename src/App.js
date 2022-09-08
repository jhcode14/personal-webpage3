import "./App.scss";

import Welcome from "./Welcome/Welcome";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";

import Catlogo from "./Img/catcon.png";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="Nav">
          <div className="Icon">
            <img src={Catlogo} alt="Logo" width={64} height={64} />
          </div>
          <div className="Nav_content">
            <button value="PAGE_ABOUT_ME" className="Button">
              About
            </button>
            <button value="PAGE_PROJECTS" className="Button">
              Projects
            </button>
            <button value="PAGE_EXPERIENCE" className="Button">
              Experience
            </button>
            <button value="PAGE_WELCOME" className="Button">
              Contact Me
            </button>
          </div>
        </div>
        <Welcome />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
