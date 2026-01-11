import "./styles.css";
// @ts-ignore
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import InteractiveDog from "./components/InteractiveDog";

// PROJECTS 
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
    tech: ["HTML", "CSS", "JavaScript"]
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

  const handleNavClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentSection(sectionId);
    setIsOpen(false);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a href="#" className="nav-logo" onClick={(e) => handleNavClick("hero", e)}>
        Lobsang S.
      </a>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <a href="#" onClick={(e) => handleNavClick("hero", e)}>Home</a>
        <a href="#" onClick={(e) => handleNavClick("about", e)}>About</a>
        <a href="#" onClick={(e) => handleNavClick("projects", e)}>Projects</a>
        <a href="#" onClick={(e) => handleNavClick("contacts", e)}>Contact</a>
      </div>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu">
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </button>
    </motion.nav>
  );
};

const Hero: React.FC<SectionProps> = ({ setCurrentSection }) => (
  <motion.section 
    className="section" 
    id="hero"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="content">
      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Welcome to <span>Lobsang's Portfolio</span>
      </motion.h1>
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Innovating across Data, Web and AI
      </motion.p>
      <motion.p
        className="location"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <i className="fas fa-map-marker-alt"></i> Bangalore, India
      </motion.p>
      <motion.button 
        className="btn" 
        onClick={() => setCurrentSection("about")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Discover More <i className="fas fa-arrow-right"></i>
      </motion.button>
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <InteractiveDog />
      </div>
    </div>
  </motion.section>
);

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
        I'm Lobsang Tsetan Shakya, a Full-Stack Developer and Data Science
        Enthusiast. With experience as a Data Science Intern at MMC Convert and Coordinator at ANOVA Club, I am passionate about building innovative, data-driven solutions that make an impact.
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

    const cursorDot = document.getElementById("cursor-dot");
    if (!cursorDot) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [currentSection]);
  
  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
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

  // Add scroll progress indicator
  const { scrollYProgress } = useScroll();
  
  // Add scroll progress effect
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const container = document.querySelector('main');
    if (container) {
      container.style.setProperty('--scroll-progress', latest.toString());
    }
  });

  return (
    <>
      {currentSection === "loading" ? (
        <TerminalLoader onComplete={() => setCurrentSection("hero")} />
      ) : (
        <>
          <div className="aurora-background"></div>
          <div id="cursor-dot"></div>
          <div className={`warp-transition ${showTransition ? "active" : ""}`}></div>
          
          {/* Scroll progress bar */}
          <motion.div 
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          
          <Navbar setCurrentSection={handleSectionChange} />
          
          <main>
            <AnimatePresence mode="wait">
              {renderSection()}
            </AnimatePresence>
          </main>
          
          <motion.div 
            className="mode-toggle"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <button onClick={() => setIsDarkMode(false)} aria-label="Switch to light mode">
              <LightModeIcon />
            </button>
            <button onClick={() => setIsDarkMode(true)} aria-label="Switch to dark mode">
              <DarkModeIcon />
            </button>
          </motion.div>
          
          {/* Floating particles effect */}
          <div className="particles-container">
            {[...Array(15)].map((_, i) => (
              <motion.div 
                key={i}
                className="particle"
                animate={{
                  y: [0, -20, 0],
                  x: [0, Math.sin(i) * 20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default App;
