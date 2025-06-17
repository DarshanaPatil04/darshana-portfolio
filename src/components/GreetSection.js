import React from "react";
import DarshanaImage from "../images/Darsh.png";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components/GreetSection.css";

const GreetSection = () => {
  return (
    <section className="hero-section" id="home">
    
      <div className="hero-content">
        <img src={DarshanaImage} alt="Darshana" className="hero-img" />
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">Darshana Patil</span>
          </h1>
          <h2 className="typewriter">A Frontend Developer 👩‍💻</h2>
          <p>
            Self-driven and passionate about UI/UX design, I enjoy turning ideas
            into user-friendly web experiences using React, Tailwind, and more.
          </p>
          <div className="hero-buttons">
            <a
              className="btn linkedin"
              href="https://www.linkedin.com/in/darshana-patil-27840b23b"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className="btn github"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="btn resume"
              href="https://drive.google.com/file/d/1CEwa81b_oTvgbxaSrfK4Wvfx0llyn_a8/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFileAlt} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreetSection;
