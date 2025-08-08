import React, { useState, useEffect } from "react";
import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface SectionProps {
  setCurrentSection: (sectionId: string) => void;
}

const TerminalLoader: React.FC<{ onComplete: () => void }> = ({
  onComplete,
}) => {
  const [text, setText] = useState("");
  const fullText = "$Initializing Portfolio...";

  useEffect(() => {
    let index = 0;
    const typingSpeed = 100;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(onComplete, 1000);
      }
    }, typingSpeed);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="terminal-loader">
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="terminal-dot red"></span>
          <span className="terminal-dot yellow"></span>
          <span className="terminal-dot green"></span>
        </div>
        <div className="terminal-body">
          <p className="terminal-text">
            <span className="prompt"> </span>
            {text}
            <span className="cursor-blink">█</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Navbar: React.FC<SectionProps> = ({ setCurrentSection }) => (
  <nav className="navbar">
    <a href="#" onClick={() => setCurrentSection("hero")}>
      Home
    </a>
    <a href="#" onClick={() => setCurrentSection("about")}>
      About
    </a>
    <a href="#" onClick={() => setCurrentSection("projects")}>
      Projects
    </a>
    <a href="#" onClick={() => setCurrentSection("contacts")}>
      Contacts
    </a>
    <a href="#" onClick={() => setCurrentSection("hours")}>
      Working Hours
    </a>
  </nav>
);

const Hero: React.FC<SectionProps> = ({ setCurrentSection }) => (
  <div className="section hero" id="hero">
    <div className="content">
      <h1>
        Welcome to <span>Lobsang's Portfolio</span>
      </h1>
      <p>Explore my world of Data Science, creativity, and innovation!</p>
      <a href="#" className="btn" onClick={() => setCurrentSection("about")}>
        Discover More
      </a>
    </div>
    <div className="bubbles">
      {[...Array(5)].map((_, i) => (
        <div className="bubble" key={i}></div>
      ))}
    </div>
  </div>
);

const About: React.FC<SectionProps> = ({ setCurrentSection }) => (
  <div className="section" id="about">
    <div className="content">
      <h2>
        About <span>Me</span>
      </h2>
      <p>
        I'm Lobsang Tsetan Shakya, a Full-Stack Web Developer, Data Science
        Enthusiast, and Coordinator at ANOVA Club. Former Data Science Intern at
        MMC Convert, passionate about building innovative, data-driven
        solutions.
      </p>
      <a href="#" className="btn" onClick={() => setCurrentSection("projects")}>
        View My Projects
      </a>
    </div>
    <div className="bubbles">
      {[...Array(5)].map((_, i) => (
        <div className="bubble" key={i}></div>
      ))}
    </div>
  </div>
);

const Projects: React.FC<SectionProps> = ({ setCurrentSection }) => (
  <div className="section" id="projects">
    <div className="content">
      <h2>
        My <span>Projects</span>
      </h2>
      <p>
        Check out my work on{" "}
        <a href="https://github.com/lobsangshakya">GitHub</a>:
      </p>
      <div className="project-grid">
        <div className="project-card">
          <h3>AgriSathi</h3>
          <p>
            AgriSathi is a smart app that helps small and marginal farmers
            with crop advice, weather updates, market prices, and government
            schemes in simple regional languages.
          </p>
          <a
            href="https://github.com/lobsangshakya/AgriSathi-app"
            className="btn"
          >
            View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Eco Smart bin</h3>
          <p>
            An AI-driven waste management website built with HTML, CSS, and
            JavaScript, promoting cleanliness with smart sorting and interactive
            design.
          </p>
          <a
            href="https://github.com/lobsangshakya/Eco_smart_bin"
            className="btn"
          >
            View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>Myob to Xero Conversion</h3>
          <p>
            A streamlined MYOB to Xero conversion website for MMC Company,
            enabling live file conversions with a clean, user-friendly
            interface.
          </p>
          <a
            href="https://github.com/lobsangshakya/Myob_to_Xero"
            className="btn"
          >
            View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3>AI-driven FinancePro</h3>
          <p>
            An AI-driven stock prediction website built with HTML, CSS, and
            JavaScript, delivering clean, actionable investment insights for
            Finance Pro users.
          </p>
          <a
            href="https://github.com/lobsangshakya/AI_driven_FinancePro"
            className="btn"
          >
            View on GitHub
          </a>
        </div>
      </div>
      <a href="#" className="btn" onClick={() => setCurrentSection("hours")}>
        Check My Availability
      </a>
    </div>
    <div className="bubbles">
      {[...Array(5)].map((_, i) => (
        <div className="bubble" key={i}></div>
      ))}
    </div>
  </div>
);

const Contacts: React.FC = () => (
  <div className="section" id="contacts">
    <div className="content">
      <h2>
        Contact <span>Me</span>
      </h2>
      <p>Let's collaborate on something amazing!</p>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/lobsang-shakya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin fa"></i>
        </a>
        <a
          href="https://github.com/lobsangshakya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github fa"></i>
        </a>
        <a
          href="https://www.youtube.com/@Lotse04"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-youtube fa"></i>
        </a>
      </div>
      <p>
        <i className="fa-solid fa-envelope fa"></i> Email:
        lobsangshakya5@gmail.com
      </p>
      <p>
        <i className="fa-solid fa-briefcase fa"></i> Professional Experience (
        <a href="https://www.linkedin.com/in/lobsang-shakya">LinkedIn</a>):
      </p>
    </div>
    <div className="bubbles">
      {[...Array(5)].map((_, i) => (
        <div className="bubble" key={i}></div>
      ))}
    </div>
  </div>
);

const Hours: React.FC<SectionProps> = ({ setCurrentSection }) => (
  <div className="section" id="hours">
    <div className="content">
      <h2>
        Working <span>Hours</span>
      </h2>
      <p>
        Ready to collaborate on innovative projects:
        <br />
        Monday - Friday: 8 PM - 10 PM
        <br />
        Saturday: 8 PM - 9 PM
        <br />
        Sunday: Open for urgent queries
        <br />
        Reach out via email or social media!
      </p>
      <a href="#" className="btn" onClick={() => setCurrentSection("hero")}>
        Back to Home
      </a>
    </div>
    <div className="bubbles">
      {[...Array(5)].map((_, i) => (
        <div className="bubble" key={i}></div>
      ))}
    </div>
  </div>
);

interface MyAppProps {
  children: React.ReactNode;
}

export const My_app: React.FC<MyAppProps> = ({ children }) => {
  return <div className="my-app">{children}</div>;
};

export const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>("loading");
  const [showTransition, setShowTransition] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleSectionChange = (sectionId: string) => {
    setShowTransition(true);
    setTimeout(() => {
      setCurrentSection(sectionId);
      setShowTransition(false);
    }, 1000);
  };

  useEffect(() => {
    if (currentSection !== "loading") {
      const cursor = document.getElementById("cursor");
      const trail = document.getElementById("trail");
      if (cursor && trail) {
        let trailX = 0,
          trailY = 0;
        const handleMouseMove = (e: MouseEvent) => {
          cursor.style.left = e.clientX + "px";
          cursor.style.top = e.clientY + "px";
          trailX += (e.clientX - trailX) * 0.1;
          trailY += (e.clientY - trailY) * 0.1;
          trail.style.left = trailX + "px";
          trail.style.top = trailY + "px";
        };
        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
      }
    }
  }, [currentSection]);

  return (
    <My_app>
      {currentSection === "loading" ? (
        <TerminalLoader onComplete={() => setCurrentSection("hero")} />
      ) : (
        <div className={isDarkMode ? "dark-mode" : "light-mode"}>
          <div className="mode-toggle">
            <button
              type="button"
              className="btn btn-light"
              onClick={() => setIsDarkMode(false)}
            >
              Dark
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => setIsDarkMode(true)}
            >
              Galaxy
            </button>
          </div>
          <div className="custom-cursor" id="cursor"></div>
          <div className="cursor-trail" id="trail"></div>
          <div className={`warp-transition ${showTransition ? "active" : ""}`}>
            <div className="warp-core">
              <div className="warp-glow"></div>
              {[...Array(50)].map((_, i) => (
                <div
                  className="star-particle"
                  key={i}
                  style={
                    {
                      "--star-delay": i,
                      "--star-x": Math.random() * 2 - 1,
                      "--star-y": Math.random() * 2 - 1,
                    } as React.CSSProperties
                  }
                ></div>
              ))}
            </div>
          </div>
          <Navbar setCurrentSection={handleSectionChange} />
          {currentSection === "hero" && (
            <Hero setCurrentSection={handleSectionChange} />
          )}
          {currentSection === "about" && (
            <About setCurrentSection={handleSectionChange} />
          )}
          {currentSection === "projects" && (
            <Projects setCurrentSection={handleSectionChange} />
          )}
          {currentSection === "contacts" && <Contacts />}
          {currentSection === "hours" && (
            <Hours setCurrentSection={handleSectionChange} />
          )}
        </div>
      )}
    </My_app>
  );
};

export default App;
