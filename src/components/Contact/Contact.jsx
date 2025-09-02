import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>
        <div className="contact_container container grid">
          <div className="contact_content">
            <h3 className="contact_title">Talk to me</h3>

            <div className="contact_info">
              <div className="contact_card">
                <i className="bxr bx-envelope-open contact_card-icon"></i>
                <h3 className="contact_card-title">Email</h3>
                <span className="contact__card-data">user@gmail.com</span>
                <a href="" className="contact_button">
                  Write me
                  <i className="bxr bx-arrow-right-stroke contact_button-icon"></i>
                </a>
              </div>

              <div className="contact_card">
                <i className="bxr bx-message-bubble-captions contact_card-icon"></i>
                <h3 className="contact_card-title">Messanger</h3>
                <span className="contact__card-data">Usercs_3</span>
                <a href="" className="contact_button">
                  Write me
                  <i className="bxr bx-arrow-right-stroke contact_button-icon"></i>
                </a>
              </div>

              <div className="contact_card">
                <i className="bxr bx-message-circle-notification contact_card-icon"></i>
                <h3 className="contact_card-title">Whatsapp</h3>
                <span className="contact__card-data">897564651</span>
                <a href="" className="contact_button">
                  Write me
                  <i className="bxr bx-arrow-right-stroke contact_button-icon"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="contact_content">
            <h3 className="contact_title">Write me your project</h3>

            <form className="contact_form">
              <div className="contact_form-div">
                <label className="contact_form-tag">Name</label>
                <input
                  type="text"
                  name="name"
                  className="contact_form-input"
                  placeholder="Insert your name"
                />
              </div>

              <div className="contact_form-div">
                <label className="contact_form-tag">Email</label>
                <input
                  type="email"
                  name="email"
                  className="contact_form-input"
                  placeholder="Insert your email"
                />
              </div>

              <div className="contact_form-div contact_form-area">
                <label className="contact_form-tag">Project</label>
                <textarea
                  name="project"
                  cols="30"
                  rows="10"
                  className="contact_form-input"
                  placeholder="Write your project"
                ></textarea>
              </div>

                 <button className="button button--flex home-btn">
          Send Message
           <span className="button-send">
            <img className="send-icon"  src="../src/assets/message.png" />
          </span>
        </button>


            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
