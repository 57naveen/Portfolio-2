import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer_container container">
          <h1 className="footer_title">Naveen</h1>
          <ul className="footer_list">
            <li>
              <a href="#about" className="footer_link">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="footer_link">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="footer_link">
                Testimonials
              </a>
            </li>
          </ul>

          <div className="footer_social">
              <a href=" " className="footer_social-icon" target="_blank">
               <i class="uil uil-github-alt"></i>
            </a>
            <a href=" " className="footer_social-icon" target="_blank">
              <i class="uil uil-dribbble"></i>
            </a>

            
            <a href=" " className="footer_social-icon" target="_blank">
              <i class="uil uil-github-alt"></i>
            </a>
          </div>

            <span className="footer_copy">&#169; NaveenKishore. All rights reserved</span>

        </div>
      </footer>
    </div>
  );
};

export default Footer;

