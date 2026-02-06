import "./styles.css";
// @ts-ignore
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

// PROJECTS DATA
const projectData = [
  {
    title: "AgriSathi",
    description: "A smart app helping farmers with crop advice, weather updates , and market prices in regional languages.",
    repoUrl: "https://github.com/lobsangshakya/AgriSathi-app",
    tech: ["React", "Supabase", "CNN", "Python"]
  },
  {
    title: "Eco Smart Bin",
    description: "An AI-driven waste management website promoting cleanliness with smart sorting and an interactive design.",
    repoUrl: "https://github.com/lobsangshakya/Eco_smart_bin",
    tech: ["HTML", "CSS", "JavaScript", "Django"]
  },
  {
    title: "IntelliMove DotCatcher",
    description: "Real-Time Dot Game – click appearing dots; Kafka streams events to track score, misses, and duration.",
    repoUrl: "https://github.com/lobsangshakya/IntelliMove---DotCatcher",
    tech: ["React", "Python", "Kafka", "WebSocket", "Docker"]
  },
  {
    title: "ConvoAI",
    description: "an AI chatbot leveraging reinforcement learning for adaptive responses, fully containerized for easy deployment.",
    repoUrl: "https://github.com/lobsangshakya/ConvoAI",
    tech: ["Python", "AI", "RL", "Docker", "FastAPI"]
  },
  {
    title: "Myob to Xero Conversion",
    description: "A streamlined conversion tool for MMC Company, enabling live file conversions with a user-friendly interface.",
    repoUrl: "https://github.com/lobsangshakya/Myob_to_Xero",
    tech: ["HTML", "CSS", "JavaScript", "Django", "Python"]
  },
  {
    title: "CSV_DB_API",
    description: "A beginner‑friendly API to import and serve CSV data, built with FastAPI and SQLAlchemy for easy CRUD operations via REST endpoints.",
    repoUrl: "https://github.com/lobsangshakya/CSV_DB_API",
    tech: ["Python", "FastAPI", "SQLAlchemy", "Uvicorn"]
  },
];

const socialLinks = [
  { icon: "fa-linkedin", url: "https://www.linkedin.com/in/lobsang-shakya" },
  { icon: "fa-github", url: "https://github.com/lobsangshakya" },
  { icon: "fa-youtube", url: "https://www.youtube.com/@Lotse04" },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } }),
};

// SECTIONS
const TerminalLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "$ Initializing Portfolio...";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) setText(fullText.slice(0, index++));
      else { clearInterval(timer); setTimeout(onComplete, 1000); }
    }, 100);
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
          <p className="terminal-text">{text}<span className="cursor-blink">█</span></p>
        </div>
      </div>
    </div>
  );
};

const Navbar: React.FC<{ setCurrentSection: (id: string) => void, currentSection: string }> = ({ setCurrentSection, currentSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ["hero", "about", "projects", "contacts"];

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentSection(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav className="navbar" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <a href="#" className="nav-logo" onClick={(e) => handleNavClick("hero", e)}>Lobsang S.</a>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        {sections.map(sec => (
          <a
            key={sec}
            href="#"
            onClick={(e) => handleNavClick(sec, e)}
            className={currentSection === sec ? "active" : ""}
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </a>
        ))}
      </div>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </button>
    </motion.nav>
  );
};

// Lazy-loaded Sections
const Hero = lazy(() => import("./sections/Hero"));
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Contacts = lazy(() => import("./sections/Contacts"));

// MAIN APP
const About: React.FC<SectionProps> = ({ setCurrentSection }) => (
  <motion.section 
    className="section" 
    id="about"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    exit={{ opacity: 0 }}
  >
    <div className="content">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        About <span>Me</span>
      </motion.h2>
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        I am Lobsang Tsetan Shakya, a Full-Stack Developer and Data Science enthusiast. With experience as a Data Science Intern at MMC Convert and as a Technical Member at ANOVA Club, I am passionate about creating innovative, data-driven solutions that drive impact.
      </motion.p>
      <motion.button 
        className="btn" 
        onClick={() => setCurrentSection("projects")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        View My Work
      </motion.button>
    </div>
  </motion.section>
);

const Projects: React.FC<SectionProps> = ({ setCurrentSection }) => (
  <motion.section 
    className="section" 
    id="projects"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    exit={{ opacity: 0 }}
  >
    <div className="content">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        My <span>Projects</span>
      </motion.h2>
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Here are a few things I've been working on. For more, check out my <a href="https://github.com/lobsangshakya" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </motion.p>
      <motion.div 
        className="project-grid"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        {projectData.map((project, index) => (
          <motion.div 
            className="project-card" 
            key={index}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="tech-item">{tech}</span>
              ))}
            </div>
            <motion.a 
              href={project.repoUrl} 
              className="btn-link" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              View on GitHub <i className="fa-brands fa-github"></i>
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
      <motion.button 
        className="btn" 
        onClick={() => setCurrentSection("contacts")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        Let's Connect
      </motion.button>
    </div>
  </motion.section>
);

const Contacts: React.FC<SectionProps> = ({ setCurrentSection }) => (
  <motion.section 
    className="section" 
    id="contacts"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    exit={{ opacity: 0 }}
  >
    <div className="content">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Get In <span>Touch</span>
      </motion.h2>
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        I'm currently available for freelance work and open to discussing new projects. Let's create something amazing together!
      </motion.p>
      <motion.div 
        className="contact-info"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p><i className="fa-solid fa-envelope"></i> lobsangshakya5@gmail.com</p>
      </motion.div>
      <motion.div 
        className="social-links"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        {socialLinks.map((link, index) => (
          <motion.a 
            key={index} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={link.icon}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <i className={`fa-brands ${link.icon}`}></i>
          </motion.a>
        ))}
      </motion.div>
       <motion.button 
        className="btn" 
        onClick={() => setCurrentSection("hero")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        Back to Home
      </motion.button>
    </div>
  </motion.section>
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
  const [currentSection, setCurrentSection] = useState("loading");
  const [showTransition, setShowTransition] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => { document.body.className = isDarkMode ? "dark-mode" : "light-mode"; }, [isDarkMode]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    document.documentElement.style.setProperty('--scroll-progress', latest.toString());
  });

  const handleSectionChange = (id: string) => {
    if (id === currentSection) return;
    setShowTransition(true);
    setTimeout(() => { setCurrentSection(id); setShowTransition(false); }, 700);
  };

  const renderSection = () => {
    switch(currentSection) {
      case "hero": return <Hero setCurrentSection={handleSectionChange} />;
      case "about": return <About setCurrentSection={handleSectionChange} />;
      case "projects": return <Projects setCurrentSection={handleSectionChange} />;
      case "contacts": return <Contacts setCurrentSection={handleSectionChange} />;
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
          <div className={`warp-transition ${showTransition ? "active" : ""}`}></div>
          <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
          <Navbar setCurrentSection={handleSectionChange} currentSection={currentSection} />

          <main>
            <AnimatePresence mode="wait">
              <Suspense fallback={<div className="loading">Loading...</div>}>
                {renderSection()}
              </Suspense>
            </AnimatePresence>
          </main>

          <motion.div className="mode-toggle" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}>
            <button onClick={() => setIsDarkMode(false)} aria-label="Light mode"><LightModeIcon /></button>
            <button onClick={() => setIsDarkMode(true)} aria-label="Dark mode"><DarkModeIcon /></button>
          </motion.div>

          {/* Smooth Particles */}
          <motion.div className="particles-container">
            {[...Array(15)].map((_, i) => (
              <motion.div key={i} className="particle"
                animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3 + Math.random(), repeat: Infinity, ease: "easeInOut", delay: Math.random() * 2 }}
              />
            ))}
          </motion.div>
        </>
      )}
    </>
  );
};

export default App;

// ICONS
const LightModeIcon = () => (<svg ...>...</svg>);
const DarkModeIcon = () => (<svg ...>...</svg>);