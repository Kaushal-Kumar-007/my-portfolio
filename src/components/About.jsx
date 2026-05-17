import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = parseInt(target);
    const duration = 2000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return <h3 ref={elementRef}>{count}</h3>;
};

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="section-title">
        <h2>About Me</h2>
      </div>

      <div className="about-container">
        <div className="about-image">
          <div className="avatar-card">
            <img src="/assets/My_photo.png" alt="Kaushal Kumar" />
          </div>
        </div>

        <div className="about-content">
          <p>
            I’m a passionate Data Analyst focused on transforming complex
            datasets into business insights that drive smarter decisions.
            I enjoy creating dashboards, analyzing trends, and building
            analytical solutions using Power BI, SQL, Python, and visualization tools.
          </p>

          <div className="counter-wrapper">
            <div className="counter-card">
              <Counter target="25" />
              <p>Projects</p>
            </div>

            <div className="counter-card">
              <Counter target="15" />
              <p>Tools Learned</p>
            </div>

            <div className="counter-card">
              <Counter target="40" />
              <p>Dashboards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
