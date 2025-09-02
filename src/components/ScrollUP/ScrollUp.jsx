import React from "react";
import "./ScrollUp.css";
import { FaArrowUp } from "react-icons/fa";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  });

  return (
    <div>
      <a href="#" className="scrollup">
          <FaArrowUp className="scrollup_icon" />
      </a>
    </div>
  );
};

export default ScrollUp;  


