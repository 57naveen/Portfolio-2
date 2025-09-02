import React from "react";

const Info = () => {
  return (
    <div>
      <div className="about_info grid">
        <div className="about_box">
            <i class= 'bxr bx-medal-star about__icon'></i>

          <h3 className="about_title">Experience</h3>
          <span className="about_subtitle">8 years Working</span>
        </div>
        <div className="about_box">
            <i class= "bx bx-briefcase-alt about__icon" ></i>

          <h3 className="about_title">Completed</h3>
          <span className="about_subtitle">48 + Projects</span>
        </div>
        <div className="about_box">
            <i class= "bxr bx-community about__icon" ></i>

          <h3 className="about_title">Support</h3>
          <span className="about_subtitle">Online 24/7</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
