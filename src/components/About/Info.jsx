import React from "react";

const Info = () => {
  return (
    <div>
      <div className="about_info grid">
        <div className="about_box">
             <span className="about_experience">
            <img src="../src/assets/quality.png" />
          </span>

          <h3 className="about_title">Experience</h3>
          <span className="about_subtitle">3+ years Working</span>
        </div>
        <div className="about_box">
            <span className="about_experience">
            <img src="../src/assets/success.png" />
          </span>

          <h3 className="about_title">Completed</h3>
          <span className="about_subtitle">10+ Projects</span>
        </div>
        <div className="about_box">
           <span className="about_experience">
            <img src="../src/assets/customer-service.png" />
          </span>

          <h3 className="about_title">Support</h3>
          <span className="about_subtitle">Online 24/7</span>
        </div>
      </div>
    </div>
  );
};

export default Info;
