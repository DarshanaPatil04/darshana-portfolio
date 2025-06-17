import React from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components/ContactInfo.css";

export const ContactInfo = () => {
  const startYear = 2025;
const currentYear = new Date().getFullYear();
const displayYear = startYear === currentYear ? currentYear : `${startYear} - ${currentYear}`;

  return (
    <footer className="footerContainer" id="contacts">
      <div className="footerContentContainer">
        <p className="contactsHeader">Contacts</p>
        <p className="dontBeShyText">Don't be shy! Hit me up!🤝</p>
        <a
          href="mailto:smirnova.anastasia.k@gmail.com?cc=smirnowa.anastasiia@gmail.com&subject=Email to Anastasia"
          target="_blank"
          className="email"
        >
          patildarshana712@gmail.com &nbsp;
          <FontAwesomeIcon icon={faPaperPlane} />
        </a>
        <p className="copyrightText">
         © Darshana Patil {displayYear}
         </p>
      </div>
    </footer>
  );
};

export default ContactInfo;
