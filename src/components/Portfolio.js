import React from "react";
import "../components/Portfolio.css";

import employeeManagementImg from "../images/Employee_Management.jpg";
import cryptoTrackerImg from "../images/Crypto-Tracker.jpg";

import UsedTools from "../components/UsedTools";
import PreviewProjectButtons from "../components/PreviewProjectButtons";

export const Portfolio = () => {
  return (
    <div className="portfolioSectionContainer" id="projects">
      <h2 className="portfolioHeader">Portfolio</h2>
      <h4 className="portfolioTitle">
        Each project is a unique piece of development 🧩
      </h4>

      <div className="projectContainer">
        <img
          className="portfolioImageContainer"
          src={employeeManagementImg}
          alt="Employee Management System preview"
        />
        <div className="projectDescriptionTextContainer">
          <h4 className="projectHeaderText">Employee Management System 🧑‍💼</h4>
          <p>
            🧑‍💼 Developed an Employee Management System using Django, implementing core features such as user authentication and social authentication for seamless login experiences.
            <ul>
              <h4>Key Features:</h4>
              <li>User Authentication and Social Auth for secure login</li>
              <li>Download reports in Excel and PDF formats</li>
              <li>OTP-based verification for enhanced security</li>
              <li>Responsive UI using Bootstrap</li>
              <li>Scalable and user-friendly design</li>
            </ul>
          </p>
          <UsedTools />
          <PreviewProjectButtons
            codeUrl={"https://github.com/DarshanaPatil04/Authentication"}
            previewUrl={"https://github.com/DarshanaPatil04/Authentication"}
          />
        </div>
      </div>

      <div className="projectContainer">
        <img
          className="portfolioImageContainer"
          src={cryptoTrackerImg}
          alt="Crypto Tracker preview"
        />
        <div className="projectDescriptionTextContainer">
          <h4 className="projectHeaderText">Crypto-Tracker 🚀</h4>
          <p>
            🚀 Designed and developed an AI assistant interface using HTML, CSS, and JavaScript, providing real-time user interaction through a dynamic chat window.
            Implemented responsive design for cross-device compatibility and smooth user experience.
          </p>
          <div>
            <h4>Key Features:</h4>
            <ul>
              <li>Real-time cryptocurrency price tracking and updates</li>
              <li>AI assistant for user interaction and queries</li>
              <li>Responsive design for seamless experience on mobile and desktop</li>
              <li>Integration with popular cryptocurrency APIs for accurate data</li>
              <li>Customizable user interface with dark/light theme options</li>
            </ul>
          </div>
          <UsedTools />
          <PreviewProjectButtons
            codeUrl={"https://github.com/DarshanaPatil04/Crypto-Tracker.git"}
            previewUrl={"https://github.com/DarshanaPatil04/Crypto-Tracker.git"}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
