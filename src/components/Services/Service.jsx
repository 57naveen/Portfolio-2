import React, { useState } from "react";
import "./Service.css";

const Service = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services_container container grid">
          {/* Web Development */}
          <div className="services_content">
            <div>
              <i className="uil uil-web-grid services_icon"></i>
              <h3 className="services_title">
                Web <br /> Development
              </h3>
            </div>
            <span
              onClick={() => toggleTab(1)}
              className="services_button"
            >
              View More{" "}
              <i className="uil uil-arrow-right services_button-icon"></i>
            </span>
            <div
              className={
                toggleState === 1
                  ? "services_modal active-model"
                  : "services_modal"
              }
            >
              <div className="services_modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services_modal-close"
                ></i>
                <h3 className="services_modal-title">Web Development</h3>
                <p className="services_modal-description">
                  I build fast, scalable, and responsive web applications using
                  modern frameworks and technologies, tailored to meet client
                  needs.
                </p>

                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Responsive websites with modern UI</p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Full-stack web application development</p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>API integration and backend services</p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Performance optimization & SEO-friendly builds</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="services_content">
            <div>
              <i className="uil uil-arrow services_icon"></i>
              <h3 className="services_title">
                UI/UX <br /> Design
              </h3>
            </div>
            <span
              onClick={() => toggleTab(2)}
              className="services_button"
            >
              View More{" "}
              <i className="uil uil-arrow-right services_button-icon"></i>
            </span>
            <div
              className={
                toggleState === 2
                  ? "services_modal active-model"
                  : "services_modal"
              }
            >
              <div className="services_modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services_modal-close"
                ></i>
                <h3 className="services_modal-title">UI/UX Design</h3>
                <p className="services_modal-description">
                  I design user-friendly interfaces and seamless experiences that
                  blend creativity with usability, making digital products
                  engaging and intuitive.
                </p>

                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Wireframing and prototyping</p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>User flow & interaction design</p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Accessibility and responsive design</p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Design systems and reusable components</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* n8n Automation */}
          <div className="services_content">
            <div>
              <i className="uil uil-edit services_icon"></i>
              <h3 className="services_title">
                n8n <br /> Automation
              </h3>
            </div>
            <span
              onClick={() => toggleTab(3)}
              className="services_button"
            >
              View More{" "}
              <i className="uil uil-arrow-right services_button-icon"></i>
            </span>
            <div
              className={
                toggleState === 3
                  ? "services_modal active-model"
                  : "services_modal"
              }
            >
              <div className="services_modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services_modal-close"
                ></i>
                <h3 className="services_modal-title">n8n Automation</h3>
                <p className="services_modal-description">
                  I help businesses streamline workflows by automating repetitive
                  tasks and integrating multiple apps using n8n.
                </p>

                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Custom workflow automation</p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Third-party app integrations</p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Automated data collection & reporting</p>
                  </li>
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Business process optimization</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
