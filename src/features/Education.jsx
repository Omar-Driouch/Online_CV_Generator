/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";


const Education = () => {
  const [isHide, setIsHide] = useState(false);

  return (
    <>
      <section className="skills-section">
        <div className="section-heading" onClick={() => setIsHide(!isHide)}>
          <h1>Education</h1>
          <button style={{ border: "none", background: "transparent" }}>
            <FaChevronDown />
          </button>
        </div>
        {!isHide && (
          <div className="education-area">
            <label>University</label>
            <input type="text" id="education-name" />
            <label>Start date</label>
            <input type="date" id="date" />

            <label>Graduation date</label>
            <input type="date" id="date" />

            <button className="add-skill-btn">
              <span>
                <FiPlus />
              </span>
              <span>Add Education</span>
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default Education
