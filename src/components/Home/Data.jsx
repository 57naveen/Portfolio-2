import React from "react";
import  "./Home.css"

const Data = () => {
  return (
    <div>
      <div className="home_data">
        <h1 className="home__title">
          Naveen Kishore
          <span className="home__hand">
            <img src="../src/assets/hand.svg" />
          </span>
        </h1>

        <h3 className="home__subtitle">Full Stack Developer</h3>
        <p
          className= "home__description">I specialize in building scalable web applications with clean code, intuitive design, and seamless user experiences.
        </p>
        <a href="#contact" className="button button--flex home-btn">
          Say Hello
           <span className="button-send">
            <img className="send-icon"  src="../src/assets/message.png" />
          </span>
        </a>
      </div>
    </div>
  )
};

export default Data;
