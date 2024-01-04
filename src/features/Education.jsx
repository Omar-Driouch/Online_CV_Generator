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
        </div>
        {!isHide && (
          <div className="education-area">
            <input type="text" id="education-name" />
            <label>Start date</label>
            <input type="date" id="date" />

            <label>End Date</label>
            <input type="date" id="date" />

            <button className="add-skill-btn">Add Education</button>
          </div>
        )}
      </section>
    </>
  );
}

export default Education
