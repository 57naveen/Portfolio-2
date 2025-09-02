import React, { useState } from "react";
import "./Service.css"

const Service = () => {

    const [toggleState, setToggleState] = useState(0);
const toggleTab = (index) => {
    setToggleState(index);
}
 
  return (
    <div>
      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span> 
        <div className="services_container  container grid">
          <div className="services_content">
            <div>
              <i className="uil uil-web-grid services_icon"></i>
              <h3 className="services_title">Product <br /> Designed</h3>
            </div>
            <span onClick={()=>toggleTab(1)} className="services_button">View More <i className="uil uil-arrow-right services_button-icon"></i> </span>
            <div className="services_modal">
              <div className="services_modal-content">
                <i onClick={()=>toggleTab(0)} className="uil uil-times services_modal-close"></i>
                <h3 className="services_modal-title">Product Designed</h3>
                <p className="services_modal-description">
                  Service with more than 3 years of experience. Providing
                  quality work to clients and companies.
                </p>

                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services_moqal-info">
                      I develop the user interface
                    </p>
                  </li>

                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services_moqal-info">
                      Web page development
                    </p>
                  </li>

                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services_moqal-info">
                      I create ux element interactions.
                    </p>
                  </li>

                   <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services_moqal-info">
                      I Position your company brand.
                    </p>
                  </li>

                   <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services_moqal-info">
                      Design and mockups of products for companies.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services_content">
            <div>
              <i className="uil uil-arrow services_icon"></i>
              <h3 className="services_title">Ui/Ux <br /> Designer </h3>
            </div>
             <span onClick={()=>toggleTab(1)} className="services_button">View More <i className="uil uil-arrow-right services_button-icon"></i> </span>
            <div className="services_modal">
              <div className="services_modal-content">
                <i onClick={()=>toggleTab(0)} className="uil uil-times services_modal-close"></i>
                <h3 className="services_modal-title">Ui/Ux</h3>
                <p className="services_modal-description">
                  Service with more than 3 years of experience. Providing
                  quality work to clients and companies.
                </p>

                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services_moqal-info">
                      I develop the user interface
                    </p>
                  </li>

                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services_moqal-info">
                      Web page development
                    </p>
                  </li>

                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services_moqal-info">
                      I create ux element interactions.
                    </p>
                  </li>

                   <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services_moqal-info">
                      I Position your company brand.
                    </p>
                  </li>

                   <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services_moqal-info">
                      Design and mockups of products for companies.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services_content">
            <div>
              <i className="uil uil-edit services_icon"></i>
              <h3 className="services_title">Visual <br/> Designer</h3>
            </div>
             <span onClick={()=>toggleTab(1)} className="services_button">View More <i className="uil uil-arrow-right services_button-icon"></i> </span>
            <div className={toggleState === 1 ? "services_modal active-model": "services_modal"}>
              <div className="services_modal-content">
                <i onClick={()=>toggleTab(0)} className="uil uil-times services_modal-close"></i>
                <h3 className="services_modal-title">Visual Designer</h3>
                <p className="services_modal-description">
                  Service with more than 3 years of experience. Providing
                  quality work to clients and companies.
                </p>

                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services_moqal-info">
                      I develop the user interface
                    </p>
                  </li>

                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services_moqal-info">
                      Web page development
                    </p>
                  </li>

                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services_moqal-info">
                      I create ux element interactions.
                    </p>
                  </li>

                   <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services_moqal-info">
                      I Position your company brand.
                    </p>
                  </li>

                   <li className="services_modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services_moqal-info">
                      Design and mockups of products for companies.
                    </p>
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
