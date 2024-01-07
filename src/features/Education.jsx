/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { useRef } from "react";
const Education = () => {
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


    if(isValid){
      
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
          <form onSubmit={handleSubmit}>
            <label style={labelStyle}>School </label>
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

            <label style={labelStyle}>Degree </label>
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
            <label style={labelStyle}>Field of study </label>
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
            <label style={labelStyle}>Start date</label>
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

            <label style={labelStyle}>Graduation date</label>
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

            <button className="add-btn">
              <span>
                <FiPlus />
              </span>
              <span>Add Education </span>
            </button>
            <div>
              <ul>
                {educations.map((e) => (
                  <li className="add-btn" key={e.id}>
                    {e.school}
                  </li>
                ))}
              </ul>
            </div>
          </form>
        )}
      </section>
    </>
  );
};

export default Education;
