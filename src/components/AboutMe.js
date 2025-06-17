import React, { useEffect, useRef } from "react";
import workspaceImg from "../images/workspace.jpg";
import "../components/AboutMe.css";

const AboutMe = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current.classList.add("about-fade-in");
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <section className="about-section" id="about" ref={aboutRef}>
      <h3 className="about-heading">About Me</h3>
      <div className="about-card">
        <div className="about-img">
          <img src={workspaceImg} alt="Workspace setup" />
        </div>
        <div className="about-content">
          <h4 className="about-subtitle">Frontend Developer with a Passion for UI ✨</h4>
          <p>
            I'm a Front-End Developer skilled in HTML, CSS, JavaScript, React, and modern tools like
            Tailwind and Bootstrap. I build responsive and engaging user interfaces that not only look
            good but also perform smoothly. I love clean code, collaboration, and solving real-world
            problems with creative web solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
