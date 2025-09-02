import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rqc57d3", // from EmailJS dashboard
        "template_uiuupj2", // your template ID
        form.current,
        "qY-r5vedn5tnP-LAY" // public key
      )
      .then(
        (result) => {
          console.log("Message sent ✅", result.text);
          toast.success("Message Sent Successfully! 🎉");
          form.current.reset(); // clear form
        },
        (error) => {
          console.log("Error ❌", error.text);
          toast.error("Something went wrong. Try again!");
        }
      );
  };


  return (
    <div>
      <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>
        <div className="contact_container container grid">
          <div className="contact_content">
            <h3 className="contact_title">Let's Talk</h3>

            <form ref={form} onSubmit={sendEmail} className="contact_form">
              <div className="contact_form-div">
                <label className="contact_form-tag">Name</label>
                <input
                  type="text"
                  name="name"
                  className="contact_form-input"
                  // placeholder="Insert your name"
                />
              </div>

              <div className="contact_form-div">
                <label className="contact_form-tag">Email</label>
                <input
                  type="email"
                  name="email"
                  className="contact_form-input"
                  // placeholder="Insert your email"
                />
              </div>

              <div className="contact_form-div contact_form-area">
                <label className="contact_form-tag">Description</label>
                <textarea
                  name="message"
                  cols="30"
                  rows="10"
                  className="contact_form-input"
                  // placeholder="Write your project"
                ></textarea>
              </div>

              <button className="button button--flex home-btn">
                Send Message
                <span className="button-send">
                  <img className="send-icon" src="../src/assets/message.png" />
                </span>
              </button>
            </form>

             {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

      
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
