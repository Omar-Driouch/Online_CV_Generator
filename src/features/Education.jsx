/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { useRef } from "react";
const Education = ({ sendData }) => {
  const [isValid, setIsValid] = useState(false);
  const inputRefSchool = useRef(null);
  const inputRefDegree = useRef(null);
  const inputRefStudy = useRef(null);
  const inputRefStartDate = useRef(null);
  const inputRefGraduationDate = useRef(null);

  function backToFirstStatus(inputfield, placeholdertext) {
    inputfield.current.style.border = "2px solid #80b8de";
    inputfield.current.placeholder = placeholdertext;
    inputfield.current.classList.add("valid-input");
  }

  function handleInputValidation(inputfield) {
    if (inputfield.current.value.trim() !== "") {
      setIsValid(true);
      inputfield.current.style.border = "2px solid #80b8de";
    } else {
      setIsValid(false);
      inputfield.current.style.border = "2px solid red";
      inputfield.current.placeholder = "Please fill up this field";
      inputfield.current.classList.add("invalid-input");
      inputfield.current.focus();
    }
  }

  const [educations, setEducations] = useState([]);
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [study, setStudy] = useState("");
  const [startDate, SetStartDate] = useState("");
  const [graduationDate, setGraduationDate] = useState("");

  function handleEducations() {
     
      setEducations([
        ...educations,
        {
          school: school,
          degree: degree,
          study: study,
          startDate: startDate,
          graduationDate: graduationDate,
        },
      ]);
      setSchool("");
      setDegree("");
      setStudy("");
      SetStartDate("");
      setGraduationDate("");
      setIsValid(false);
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    handleInputValidation(inputRefSchool);
    handleInputValidation(inputRefDegree);
    handleInputValidation(inputRefStudy);
    handleInputValidation(inputRefStartDate);
    handleInputValidation(inputRefGraduationDate);

    handleEducations();
  };

  const [isHide, setIsHide] = useState(false);
  sendData(educations);
  return (
    <>
      <section className="education-section">
        <div className="section-heading" onClick={() => setIsHide(!isHide)}>
          <h1>Education</h1>
          <button style={{ border: "none", background: "transparent" }}>
            <FaChevronDown />
          </button>
        </div>
        {!isHide && (
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-wrap gap-3 justify-content-start align-items-end">
              <div className="mb-3">
            <label>School </label>
            <input
              ref={inputRefSchool}
              type="text"
              id="education-School"
              placeholder="Ex: UIR "
              value={school}
              onChange={(e) => {
                setSchool(e.target.value);
                backToFirstStatus(inputRefSchool, "Ex: UIR ");
              }}
            />
            </div>
            <div className="mb-3">

            <label>Degree </label>
            <input
              ref={inputRefDegree}
              type="text"
              id="education-Degree"
              placeholder="Ex: Bachelor's "
              value={degree}
              onChange={(e) => {
                setDegree(e.target.value);
                backToFirstStatus(inputRefDegree, "Ex: Bachelor's ");
              }}
            />
            </div>
            <div className="mb-3">

            <label>Field of study </label>
            <input
              ref={inputRefStudy}
              type="text"
              id="education-name"
              placeholder="Ex: FULL-Stack Developer "
              value={study}
              onChange={(e) => {
                setStudy(e.target.value);
                backToFirstStatus(inputRefStudy, "Ex: FULL-Stack Developer ");
              }}
            />
            </div>
            <div className="mb-3">

            <label>Start date</label>
            <input
              ref={inputRefStartDate}
              type="date"
              id="date"
              value={startDate}
              onChange={(e) => {
                SetStartDate(e.target.value);
                backToFirstStatus(inputRefStartDate, "");
              }}
            />
            </div>
            <div className="mb-3">

            <label>Graduation date</label>
            <input
              type="date"
              id="date"
              ref={inputRefGraduationDate}
              value={graduationDate}
              onChange={(e) => {
                setGraduationDate(e.target.value);
                backToFirstStatus(inputRefGraduationDate, "");
              }}
            />
            </div>
            </div>
            <button className="add-btn">
              <span>
                <FiPlus />
              </span>
              <span>Add Education </span>
            </button>
          </form>
        )}
            <div className="educations-list">
                {educations.map((e) => (
                  <div className="item" key={e.id}>
                    <div className="text-primary">{e.startDate} / {e.graduationDate}</div>
                    <h5 className="bg-warning text-light px-2 py-1 rounded-2 fs-6 d-inline-block">{e.degree}</h5>
                    <p className="text-muted fw-bold">{e.study} <br /> {e.school}</p>
                  </div>
                ))}
            </div>
      </section>
    </>
  );
};

export default Education;
