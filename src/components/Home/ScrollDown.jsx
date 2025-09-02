import React from "react";

const ScrollDown = () => {
  return (
    <div>
      <div className="home_scroll">
        <a href="#about" className="home_scroll-button button--flex">
          <span className="scroll-icon">
            <img
              className="scroll-img"
              src="/assets/scroll.svg"
              alt="scroll-icon"
            />
          </span>
          <span className="home_scroll-name">Scroll Down</span>
          <i className="uil uil-arrow-down home_scroll-arrow"></i>
        </a>
      </div>
    </div>
  );
};

export default ScrollDown;
