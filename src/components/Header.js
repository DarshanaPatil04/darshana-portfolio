import React from "react";
import { Link } from "react-scroll";
import "../components/Header.css";

const Header = () => {
  return (
    <header className="headerContainer">
      <div className="logo">Darshana<span>.dev</span></div>
      <nav className="navLinks">
        <ul>
          <li>
            <Link activeClass="active" smooth spy to="home">
              Home
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="about">
              About
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="projects">
              Projects
            </Link>
          </li>
          <li>
            <Link activeClass="active" smooth spy to="contacts">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
