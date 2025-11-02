import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState, useEffect } from "react";

// PROJECTS 
const projectData = [
  {
    title: "AgriSathi",
    description: "A smart app helping farmers with crop advice, weather updates , and market prices in regional languages.",
    repoUrl: "https://github.com/lobsangshakya/AgriSathi-app",
  },
  {
    title: "Eco Smart Bin",
    description: "An AI-driven waste management website promoting cleanliness with smart sorting and an interactive design.",
    repoUrl: "https://github.com/lobsangshakya/Eco_smart_bin",
  },
  {
    title: "Myob to Xero Conversion",
    description: "A streamlined conversion tool for MMC Company, enabling live file conversions with a user-friendly interface.",
    repoUrl: "https://github.com/lobsangshakya/Myob_to_Xero",
  },
  {
    title: "Project Zinova",
    description: "An innovative platform that tackles food waste and hunger using AI, blockchain, and data-driven insights. By connecting farmers, restaurants, and NGOs in real time, it ensures surplus food is efficiently redistributed to communities in need. With smart AI matching, blockchain transparency, Azure Maps logistics, and Power BI dashboards, Zinova brings sustainability and social impact together.",
    repoUrl: "https://github.com/lobsangshakya/Project-Zinova",
  },
];

const socialLinks = [
  { icon: "fa-linkedin", url: "https://www.linkedin.com/in/lobsang-shakya" },
  { icon: "fa-github", url: "https://github.com/lobsangshakya" },
  { icon: "fa-youtube", url: "https://www.youtube.com/@Lotse04" },
];

interface SectionProps {
  setCurrentSection: (sectionId: string) => void;
}

// BODY 

const TerminalLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "$ Initializing Portfolio...";

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
            {text}
            <span className="cursor-blink">█</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Navbar: React.FC<SectionProps> = ({ setCurrentSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setCurrentSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#" className="nav-logo" onClick={() => handleNavClick("hero")}>
        Lobsang S.
      </a>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <a href="#" onClick={() => handleNavClick("hero")}>Home</a>
        <a href="#" onClick={() => handleNavClick("about")}>About</a>
        <a href="#" onClick={() => handleNavClick("projects")}>Projects</a>
        <a href="#" onClick={() => handleNavClick("contacts")}>Contact</a>
      </div>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </button>
    </nav>
  );
};

const Hero: React.FC<SectionProps> = ({ setCurrentSection }) => (
  <section className="section" id="hero">
    <div className="content">
      <h1>Welcome to <span>Lobsang's Portfolio</span></h1>
      <p>Exploring the intersection of Data Science, creativity, and innovation.</p>
      <button className="btn" onClick={() => setCurrentSection("about")}>
        Discover More <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  </section>
);

const About: React.FC<SectionProps> = ({ setCurrentSection }) => (
  <section className="section" id="about">
    <div className="content">
      <h2>About <span>Me</span></h2>
      <p>
        I'm Lobsang Tsetan Shakya, a Full-Stack Developer and Data Science
        Enthusiast. With experience as a Data Science Intern at MMC Convert and Coordinator at ANOVA Club, I am passionate about building innovative, data-driven solutions that make an impact.
      </p>
      <button className="btn" onClick={() => setCurrentSection("projects")}>
        View My Work
      </button>
    </div>
  </section>
);

const Projects: React.FC<SectionProps> = ({ setCurrentSection }) => (
  <section className="section" id="projects">
    <div className="content">
      <h2>My <span>Projects</span></h2>
      <p>Here are a few things I've been working on. For more, check out my <a href="https://github.com/lobsangshakya" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.repoUrl} className="btn-link" target="_blank" rel="noopener noreferrer">
              View on GitHub <i className="fa-brands fa-github"></i>
            </a>
          </div>
        ))}
      </div>
      <button className="btn" onClick={() => setCurrentSection("contacts")}>
        Let's Connect
      </button>
    </div>
  </section>
);

const Contacts: React.FC<SectionProps> = ({ setCurrentSection }) => (
  <section className="section" id="contacts">
    <div className="content">
      <h2>Get In <span>Touch</span></h2>
      <p>I'm currently available for freelance work and open to discussing new projects. Let's create something amazing together!</p>
      <div className="contact-info">
        <p><i className="fa-solid fa-envelope"></i> lobsangshakya5@gmail.com</p>
      </div>
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.icon}>
            <i className={`fa-brands ${link.icon}`}></i>
          </a>
        ))}
      </div>
       <button className="btn" onClick={() => setCurrentSection("hero")}>
        Back to Home
      </button>
    </div>
  </section>
);

// ICONS FOR THEME 
const LightModeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.106a.75.75 0 010 1.06l-1.591 1.59a.75.75 0 11-1.06-1.06l1.59-1.59a.75.75 0 011.06 0zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.894 17.894a.75.75 0 011.06 0l1.59 1.59a.75.75 0 11-1.06 1.06l-1.59-1.59a.75.75 0 010-1.06zM12 17.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 17.25zM6.106 18.894a.75.75 0 010-1.06l1.59-1.59a.75.75 0 111.06 1.06l-1.59 1.59a.75.75 0 01-1.06 0zM4.5 12a.75.75 0 01-.75.75H1.5a.75.75 0 010-1.5h2.25A.75.75 0 014.5 12zM6.106 5.106a.75.75 0 011.06 0l1.591 1.59a.75.75 0 01-1.06 1.06L6.106 6.166a.75.75 0 010-1.06z" />
    </svg>
);

const DarkModeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 004.463-.949a.75.75 0 01.819.162l.805.806a.75.75 0 01-.162.819A10.5 10.5 0 119.528 1.718zM16.5 9a.75.75 0 000-1.5h-3a.75.75 0 000 1.5h3z" clipRule="evenodd" />
    </svg>
);

// BODY 
export const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<string>("loading");
  const [showTransition, setShowTransition] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const handleSectionChange = (sectionId: string) => {
    if (sectionId === currentSection) return;
    setShowTransition(true);
    setTimeout(() => {
      setCurrentSection(sectionId);
      setShowTransition(false);
    }, 800);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  useEffect(() => {
    if (currentSection === "loading") return;

    const cursor = document.getElementById("cursor");
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [currentSection]);
  
  const renderSection = () => {
    switch(currentSection) {
        case 'hero': return <Hero setCurrentSection={handleSectionChange} />;
        case 'about': return <About setCurrentSection={handleSectionChange} />;
        case 'projects': return <Projects setCurrentSection={handleSectionChange} />;
        case 'contacts': return <Contacts setCurrentSection={handleSectionChange} />;
        default: return <Hero setCurrentSection={handleSectionChange} />;
    }
  };

  return (
    <>
      {currentSection === "loading" ? (
        <TerminalLoader onComplete={() => setCurrentSection("hero")} />
      ) : (
        <>
          <div className="aurora-background"></div>
          <div id="cursor" className="custom-cursor"></div>
          <div className={`warp-transition ${showTransition ? "active" : ""}`}></div>
          
          <Navbar setCurrentSection={handleSectionChange} />
          
          <main>
            {renderSection()}
          </main>
          
          <div className="mode-toggle">
            <button onClick={() => setIsDarkMode(false)} aria-label="Switch to light mode">
              <LightModeIcon />
            </button>
            <button onClick={() => setIsDarkMode(true)} aria-label="Switch to dark mode">
              <DarkModeIcon />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default App;
