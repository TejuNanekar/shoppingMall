import React from "react";
import "../css/Footer.css";
import { FaGithub } from "react-icons/fa6";
// import { SiGeeksforgeeks } from "react-icons/si";
// import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer-basic">
        <footer>
          <div className="social">
            <Link to="#">
              <FaGithub />
            </Link>
            <Link to="#">
              <FaGithub />
            </Link>
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
