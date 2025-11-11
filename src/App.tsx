import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// PROJECTS 
const projectData = [
  {
    title: "AgriSathi",
    description: "A smart app helping farmers with crop advice, weather updates, and market prices in regional languages.",
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
    description: "Zinova uses AI and blockchain to connect farmers, restaurants, and NGOs, redistributing surplus food efficiently to fight waste and hunger.",
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
    const typingSpeed = 110;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(onComplete, 1100);
      }
    }, typingSpeed);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="terminal-loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="terminal-dot red"></span>
          <span className="terminal-dot yellow"></span>
          <span className="terminal-dot green"></span>
        </div>
        <div className="terminal-body">
          <motion.p 
            className="terminal-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {text}
            <span className="cursor-blink">█</span>
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

const Navbar: React.FC<SectionProps> = ({ setCurrentSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentSection(sectionId);
    setIsOpen(false);
    // Smooth scroll to top with a slight delay to ensure section change
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 80);
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        duration: 0.5,
        ease: "easeOut"
      }}
    >
      <motion.a 
        href="#" 
        className="nav-logo" 
        onClick={(e) => handleNavClick("hero", e)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 350, damping: 15 }}
      >
        Lobsang S.
      </motion.a>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
          <motion.a
            key={item}
            href="#"
            onClick={(e) => handleNavClick(
              item.toLowerCase() === 'home' ? 'hero' : 
              item.toLowerCase() === 'contact' ? 'contacts' : 
              item.toLowerCase(), e)}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.1 * (index + 1),
              duration: 0.35,
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.97 }}
          >
            {item}
          </motion.a>
        ))}
      </div>
      <motion.button 
        className="hamburger" 
        onClick={() => setIsOpen(!isOpen)} 
        aria-label="Toggle navigation menu"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ duration: 0.25 }}
      >
        <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </motion.button>
    </motion.nav>
  );
};

const Hero: React.FC<SectionProps> = ({ setCurrentSection }) => (
  <motion.section 
    className="section" 
    id="hero"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div className="content">
      <motion.h1
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: 0.15, 
          duration: 0.6,
          ease: "easeOut"
        }}
      >
        Welcome to <span>Lobsang's Portfolio</span>
      </motion.h1>
      <motion.p
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: 0.3, 
          duration: 0.6,
          ease: "easeOut"
        }}
      >
        Exploring the intersection of Data Science, creativity, and innovation.
      </motion.p>
      <motion.button 
        className="btn" 
        onClick={() => setCurrentSection("about")}
        whileHover={{ 
          y: -3,
          transition: { duration: 0.15 }
        }}
        whileTap={{ scale: 0.97 }}
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: 0.45, 
          duration: 0.6,
          ease: "easeOut"
        }}
      >
        Discover More <i className="fas fa-arrow-right"></i>
      </motion.button>
    </div>
  </motion.section>
);

const About: React.FC<SectionProps> = ({ setCurrentSection }) => (
  <motion.section 
    className="section" 
    id="about"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div className="content">
      <motion.h2
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: 0.15, 
          duration: 0.6,
          ease: "easeOut"
        }}
      >
        About <span>Me</span>
      </motion.h2>
      <motion.p
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: 0.3, 
          duration: 0.6,
          ease: "easeOut"
        }}
      >
        I'm Lobsang Tsetan Shakya, a Full-Stack Developer and Data Science
        Enthusiast. With experience as a Data Science Intern at MMC Convert and Coordinator at ANOVA Club, I am passionate about building innovative, data-driven solutions that make an impact.
      </motion.p>
      <motion.button 
        className="btn" 
        onClick={() => setCurrentSection("projects")}
        whileHover={{ 
          y: -3,
          transition: { duration: 0.15 }
        }}
        whileTap={{ scale: 0.97 }}
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: 0.45, 
          duration: 0.6,
          ease: "easeOut"
        }}
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
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div className="content">
      <motion.h2
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: 0.15, 
          duration: 0.6,
          ease: "easeOut"
        }}
      >
        My <span>Projects</span>
      </motion.h2>
      <motion.p
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: 0.3, 
          duration: 0.6,
          ease: "easeOut"
        }}
      >
        Here are a few things I've been working on. For more, check out my <a href="https://github.com/lobsangshakya" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </motion.p>
      <motion.div 
        className="project-grid"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: 0.45, 
          duration: 0.6,
          ease: "easeOut"
        }}
      >
        {projectData.map((project, index) => (
          <motion.div 
            className="project-card" 
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.6 + index * 0.08,
              duration: 0.45,
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.25, ease: "easeOut" }
            }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + index * 0.08, duration: 0.35 }}
            >
              {project.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.08, duration: 0.35 }}
            >
              {project.description}
            </motion.p>
            <motion.a 
              href={project.repoUrl} 
              className="btn-link" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ 
                x: 6,
                transition: { duration: 0.15 }
              }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 + index * 0.08, duration: 0.35 }}
            >
              View on GitHub <i className="fa-brands fa-github"></i>
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
      <motion.button 
        className="btn" 
        onClick={() => setCurrentSection("contacts")}
        whileHover={{ 
          y: -3,
          transition: { duration: 0.15 }
        }}
        whileTap={{ scale: 0.97 }}
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: 0.8, 
          duration: 0.6,
          ease: "easeOut"
        }}
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
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div className="content">
      <motion.h2
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: 0.15, 
          duration: 0.6,
          ease: "easeOut"
        }}
      >
        Get In <span>Touch</span>
      </motion.h2>
      <motion.p
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: 0.3, 
          duration: 0.6,
          ease: "easeOut"
        }}
      >
        I'm currently available for freelance work and open to discussing new projects. Let's create something amazing together!
      </motion.p>
      <motion.div 
        className="contact-info"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: 0.45, 
          duration: 0.6,
          ease: "easeOut"
        }}
        whileHover={{ 
          scale: 1.01,
          transition: { duration: 0.25 }
        }}
      >
        <p><i className="fa-solid fa-envelope"></i> lobsangshakya5@gmail.com</p>
      </motion.div>
      <motion.div 
        className="social-links"
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: 0.6, 
          duration: 0.6,
          ease: "easeOut"
        }}
      >
        {socialLinks.map((link, index) => (
          <motion.a 
            key={index} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={link.icon}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.7 + index * 0.08,
              duration: 0.45,
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -6,
              scale: 1.12,
              transition: { duration: 0.25, type: "spring", stiffness: 350 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <i className={`fa-brands ${link.icon}`}></i>
          </motion.a>
        ))}
      </motion.div>
       <motion.button 
        className="btn" 
        onClick={() => setCurrentSection("hero")}
        whileHover={{ 
          y: -3,
          transition: { duration: 0.15 }
        }}
        whileTap={{ scale: 0.97 }}
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: 0.8, 
          duration: 0.6,
          ease: "easeOut"
        }}
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
    }, 500);
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
      
      // Check if hovering over interactive elements
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      if (hoveredElement && (
        hoveredElement.tagName === 'A' || 
        hoveredElement.tagName === 'BUTTON' ||
        hoveredElement.classList.contains('btn') ||
        hoveredElement.classList.contains('project-card')
      )) {
        cursor.classList.add('focused');
      } else {
        cursor.classList.remove('focused');
      }
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
            <AnimatePresence mode="wait">
              {renderSection()}
            </AnimatePresence>
          </main>
          
          <motion.div 
            className="mode-toggle"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.08,
              transition: { duration: 0.15 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button 
              onClick={() => setIsDarkMode(false)} 
              aria-label="Switch to light mode"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                backgroundColor: isDarkMode ? "rgba(128, 128, 128, 0)" : "rgba(128, 128, 128, 0.2)"
              }}
            >
              <LightModeIcon />
            </motion.button>
            <motion.button 
              onClick={() => setIsDarkMode(true)} 
              aria-label="Switch to dark mode"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                backgroundColor: isDarkMode ? "rgba(128, 128, 128, 0.2)" : "rgba(128, 128, 128, 0)"
              }}
            >
              <DarkModeIcon />
            </motion.button>
          </motion.div>
        </>
      )}
    </>
  );
};

export default App;