import React from "react";
import "../assets//css/Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
// import { SiGeeksforgeeks } from "react-icons/si";
// import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer-basic">
        <footer>
          <div className="social">
            <a href="https://github.com/TejuNanekar" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/tejaswini-nanekar-2821a2238/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link to="/">Home</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/about">About</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/">Contact</Link>
            </li>
            <li className="list-inline-item">
              <Link to="/">Privacy Policy</Link>
            </li>
          </ul>
          <p className="copyright">All right Reserved &copy;Shopping Mall</p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
