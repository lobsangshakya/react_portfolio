import { useState, useEffect } from 'react';
import '../styles/interactive-dog.css';

const InteractiveDog = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  
  const messages = [
    "Woof! 👋",
    "Hey there! 🐾",
    "Welcome! 🎉",
    "Nice to meet you! 🐶",
    "Have a great day! ☀️"
  ];

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Show a random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
    setShowMessage(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Hide message after a delay
    setTimeout(() => {
      setShowMessage(false);
    }, 300);
  };

  return (
    <div 
      className="interactive-dog-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`dog ${isHovered ? 'wagging' : ''}`}>
        {/* Dog body */}
        <div className="dog-body"></div>
        
        {/* Dog head */}
        <div className="dog-head">
          {/* Dog ears */}
          <div className={`ear ear-left ${isHovered ? 'ear-wiggle' : ''}`}></div>
          <div className={`ear ear-right ${isHovered ? 'ear-wiggle' : ''}`}></div>
          
          {/* Dog eyes */}
          <div className="eye eye-left"></div>
          <div className="eye eye-right"></div>
          
          {/* Dog nose */}
          <div className="nose"></div>
          
          {/* Dog mouth */}
          {isHovered ? (
            <div className="mouth happy-mouth"></div>
          ) : (
            <div className="mouth normal-mouth"></div>
          )}
        </div>
        
        {/* Dog tail */}
        <div className={`tail ${isHovered ? 'wag' : ''}`}></div>
        
        {/* Dog legs */}
        <div className="leg leg-front"></div>
        <div className="leg leg-back"></div>
      </div>
      
      {/* Message bubble */}
      {showMessage && (
        <div className="message-bubble">
          {message}
        </div>
      )}
    </div>
  );
};

export default InteractiveDog;