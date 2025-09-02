import { Github, Linkedin } from "lucide-react";
import React from "react";



const Social = () => {
  return (
    <div>
      <div className="home_social">
        <a
          href="https://www.linkedin.com/in/naveenkishore-s/"
          className="home_social-icon"
          target="_blank"
        >
          <span className="home_linkedin">
            <img src="/assets/linkedin2.png" />
          </span>
        </a>
        {/* <a href=" " className="home_social-icon" target="_blank">
          <i class="uil uil-dribbble"></i>
        </a> */}
        <a href="https://github.com/57naveen" className="home_social-icon" target="_blank">
         <span className="home_git">
            <img src="/assets/social.png" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Social;
