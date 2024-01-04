/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
const Education = () => {
  const [educations, setEducations] = useState([])
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [study, setStudy] = useState("");
  const [startDate, SetStartDate] = useState("");
  const [graduationDate, setGraduationDate] = useState("");

  function handleEducations() {
    setEducations([...educations, {
      school: school,
      degree: degree,
      study: study,
      startDate: startDate,
      graduationDate: graduationDate,
    }]);

    setSchool("");
    setDegree("");
    setStudy("");
    SetStartDate("");
    setGraduationDate("");
  }

  console.log('====================================')
  console.log(educations);
  console.log('====================================')

  const [isHide, setIsHide] = useState(false);
  const labelStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

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
            <label style={labelStyle}>School </label>
            <input
              type="text"
              id="education-name"
              placeholder="Ex: UIR "
              value={school}
              onChange={(e) => {
                setSchool(e.target.value);
              }}
            />

            <label style={labelStyle}>Degree </label>
            <input
              type="text"
              id="education-name"
              placeholder="Ex: Bachelor's "
              value={degree}
              onChange={(e) => {
                setDegree(e.target.value);
              }}
            />
            <label style={labelStyle}>Field of study </label>
            <input
              type="text"
              id="education-name"
              placeholder="Ex: FULL-Stack Developer "
              value={study}
              onChange={(e) => {
                setStudy(e.target.value);
              }}
            />
            <label style={labelStyle}>Start date</label>
            <input
              type="date"
              id="date"
              value={startDate}
              onChange={(e) => {
                SetStartDate(e.target.value);
              }}
            />

            <label style={labelStyle}>Graduation date</label>
            <input
              type="date"
              id="date"
              value={graduationDate}
              onChange={(e) => {
                setGraduationDate(e.target.value);
              }}
            />

            <button className="add-skill-btn" onClick={handleEducations} >
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
};

export default Education;
