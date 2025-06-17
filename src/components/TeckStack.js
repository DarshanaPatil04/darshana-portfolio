import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";

import "../components/TeckStack.css";
import "devicon/devicon.min.css";

const TeckStack = () => {
  return (
    <section className="teckStackSection" id="techstack">
      <h3 className="teckStackHeader">Tech Stack</h3>
      <div className="icon-grid">
        <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer" title="JavaScript">
          <FontAwesomeIcon icon={faJsSquare} />
        </a>
        <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noopener noreferrer" title="CSS">
          <FontAwesomeIcon icon={faCss3Alt} />
        </a>
        <a href="https://html5.org/" target="_blank" rel="noopener noreferrer" title="HTML">
          <FontAwesomeIcon icon={faHtml5} />
        </a>
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" title="React">
          <FontAwesomeIcon icon={faReact} />
        </a>
        <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" title="Python">
          <FontAwesomeIcon icon={faPython} />
        </a>
        <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" title="MySQL">
          <FontAwesomeIcon icon={faDatabase} />
        </a>
        <a href="https://www.cplusplus.com/" target="_blank" rel="noopener noreferrer" title="C++">
          <FontAwesomeIcon icon={faCode} />
        </a>
        <a href="https://frappeframework.com/" target="_blank" rel="noopener noreferrer" title="Frappe">
          <i className="devicon-frappe-plain"></i>
        </a>
      </div>
    </section>
  );
};

export default TeckStack;
