import React, { useState, useEffect } from 'react';

const roles = [
  "Power BI Developer",
  "SQL Analyst",
  "Python Data Analyst",
  "Business Intelligence Enthusiast"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout;
    if (isTyping) {
      if (charIndex < roles[roleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev + roles[roleIndex].charAt(charIndex));
          setCharIndex(prev => prev + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 1500);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        }, 50);
      } else {
        setRoleIndex(prev => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, roleIndex]);

  return (
    <section className="hero">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="hero-content">
        <p className="hero-intro">Hello, I'm</p>
        <h1>Kaushal Kumar</h1>
        <h2>
          <span>{displayedText}</span>
          <span className="cursor">|</span>
        </h2>
        <p className="hero-text">
          Turning raw data into meaningful insights through analytics,
          dashboards, and business intelligence solutions.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">View Projects</a>
          <a href="#contact" className="btn secondary-btn">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
