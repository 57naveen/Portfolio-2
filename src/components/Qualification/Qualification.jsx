import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification_container container">
        {/* Tabs */}
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => setToggleState(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon" />
            Courses
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => setToggleState(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon" />
            Experience
          </div>
        </div>

        {/* Sections */}
        <div className="qualification_sections">
          {/* Education */}
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            {/* Row 1 */}
            <div className="qualification_data">
              <div className="qualification_left">
                <h3 className="qualification_title">Namaste React.js</h3>
                <span className="qualification_subtitle">NamasteDev.com</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt" /> 2025 - Present
                </div>
              </div>

              <div className="qualification_middle">
                <span className="qualification_rounder" />
                <span className="qualification_line" />
              </div>
              <div className="qualification_right" />
            </div>

            {/* Row 2 */}
            <div className="qualification_data">
              <div className="qualification_left" />
              <div className="qualification_middle">
                <span className="qualification_rounder" />
                <span className="qualification_line" />
              </div>
              <div className="qualification_right">
                <h3 className="qualification_title">Namaste JavaScript</h3>
                <span className="qualification_subtitle">NamasteDev.com</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt" /> 2025 - Present
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="qualification_data">
              <div className="qualification_left">
                <h3 className="qualification_title">Namaste Node.js</h3>
                <span className="qualification_subtitle">NamasteDev.com</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt" /> 2025 - Present
                </div>
              </div>
              <div className="qualification_middle">
                <span className="qualification_rounder" />
              </div>
              <div className="qualification_right" />
            </div>
          </div>

          {/* Experience */}
          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            {/* Row 1 */}
            <div className="qualification_data">
              <div className="qualification_left">
                <h3 className="qualification_title">FullStack Developer</h3>
                <span className="qualification_subtitle">Esoft labs - India</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt" /> 2022 - 2025
                </div>
              </div>
              <div className="qualification_middle">
                <span className="qualification_rounder" />
                <span className="qualification_line" />
              </div>
              <div className="qualification_right" />
            </div>

            {/* Row 2 */}
            {/* <div className="qualification_data">
              <div className="qualification_left" />
              <div className="qualification_middle">
                <span className="qualification_rounder" />
              </div>
              <div className="qualification_right">
                <h3 className="qualification_title">Intern</h3>
                <span className="qualification_subtitle">Startup - Remote</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt" /> 2021 - 2022
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
