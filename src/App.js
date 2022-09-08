import "./App.css";

import Welcome from "./Welcome/Welcome";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="Nav">
          <img
            src={process.env.PUBLIC_URL + "catcon.png"}
            alt="Logo"
            width={64}
            height={64}
          />
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
        <div className="Footer">
          <h1>Contact</h1>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
