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
    title: "Project Zinova",
    description: "Zinova uses AI and blockchain to connect farmers, restaurants, and NGOs, redistributing surplus food efficiently to fight waste and hunger.",
    repoUrl: "https://github.com/lobsangshakya/Project-Zinova",
    tech: ["React", "Microsoft Azure", "Node.js", "AI"]
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