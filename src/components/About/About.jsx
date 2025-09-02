import React from "react";
import "./About.css";
// import AboutImg from "../../assets/naveen.jpg";
import CV from "/assets/John-Cv.pdf";
import Info from "./Info";

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about_container container grid ">
          {/* <img style={{filter:"grayscale(100%)"}} src={AboutImg} alt="" className= "about_img" /> */}
          <div className="about_data">
            <Info />
            <p className="about_description">
              “I’m a Frontend Developer specializing in creating modern,
              responsive, and user-friendly web interfaces. With years of
              experience, I focus on delivering clean design, smooth user
              experiences.
            </p>
            <a download="" href={CV} className="button button--flex">
              Download CV{" "}
              <span className="Cv_btn">
                <img className="cv_svg" src="/assets/document.png" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
