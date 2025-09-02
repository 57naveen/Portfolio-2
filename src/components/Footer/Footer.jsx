import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer_container container">
          {/* <h1 className="footer_title">Naveen</h1> */}
          <ul className="footer_list">
            <li>
              <a href="#about" className="footer_link">
                About
              </a>
            </li>
            <li>
              <a href="#Projects" className="footer_link">
                Projects
              </a>
            </li>
            <li>
              <a href="#services" className="footer_link">
                Services
              </a>
            </li>
          </ul>

          <div className="footer_social">
               <a
          href="https://www.linkedin.com/in/naveenkishore-s/"
          className="home_social-icon"
          target="_blank"
        >
          <span className="home_linkedin">
            <img src="../src/assets/linkedin2.png" />
          </span>
        </a>
            <a href="https://github.com/57naveen" className="home_social-icon" target="_blank">
         <span className="home_git">
            <img src="../src/assets/social.png" />
          </span>
        </a>
            
          
          </div>

            <span className="footer_copy">&#169; 2025. All rights reserved</span>

        </div>
      </footer>
    </div>
  );
};

export default Footer;

