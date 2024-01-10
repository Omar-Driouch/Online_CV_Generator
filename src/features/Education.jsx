/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { useRef } from "react";
import EducationItemDisplay from "../components/EducationItemDisplay";
const Education = ({ sendData }) => {
  let IsValid = false;
   const [inputClass, setInputClass] = useState("green-placeholder");
  const [isUpdate, setIsUpdate] = useState(false);
  const inputRefSchool = useRef(null);
  const inputRefDegree = useRef(null);
  const inputRefStudy = useRef(null);
  const inputRefStartDate = useRef(null);
  const inputRefGraduationDate = useRef(null);

   
  function backToFirstStatus(inputfield, placeholdertext) {
    inputfield.current.style.border = "2px solid #80b8de";
    inputfield.current.placeholder = placeholdertext ;
    setInputClass("valid-input");
   
  }

  function handleInputValidation(inputfield) {
    if (inputfield.current.value.trim() !== "") {
      
      inputfield.current.style.border = "2px solid #80b8de";
       return true;
    } else {
      
      inputfield.current.style.border = "2px solid red";
      inputfield.current.placeholder =
      inputfield.current.id + " is required";
       setInputClass("invalid-input");
      inputfield.current.focus();
      return  false;
    }
  }

  const [educations, setEducations] = useState([]);
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [study, setStudy] = useState("");
  const [startDate, SetStartDate] = useState("");
  const [graduationDate, setGraduationDate] = useState("");
  const [educationToUpdate, seteEducationToUpdate] = useState({});

  function handleEducations() {
     
      setEducations([
        ...educations,
        {
          id: Date.now(),
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
       
        IsValid = false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((
      handleInputValidation(inputRefSchool) &&
      handleInputValidation(inputRefDegree) &&
      handleInputValidation(inputRefStudy) &&
      handleInputValidation(inputRefStartDate) &&
      handleInputValidation(inputRefGraduationDate)
      )=== true
    ) {
      if(!isUpdate)
      {
        handleEducations();
      }
      else
      {
        setEducations(
          educations.map((ed) => {
            /* console.log("aaa", ed.id == educationToUpdate.id); */
            return ed.id == educationToUpdate.id
              ? {
                  id: educationToUpdate.id,
                  school: school,
                  degree: degree,
                  study: study,
                  startDate: startDate,
                  graduationDate: graduationDate,
                }
              : ed;
          })
        );
          
         
        setIsUpdate(false);
        setSchool("");
        setDegree("");
        setStudy("");
        SetStartDate("");
        setGraduationDate("");

        IsValid = false;
      }
    }  
    
  };

 const handleRemove = (educationToRemove) => {
 
    setEducations([...educations.filter(
     (education) => education.id !== educationToRemove.id
   )]) 

   console.log("Remove education:", educationToRemove);
   
 };

  const handleUpdateEducation = (educationToUpdate) => {
     
      setSchool(educationToUpdate.school);
      setDegree(educationToUpdate.degree);
      setStudy(educationToUpdate.study);
      SetStartDate(educationToUpdate.startDate);
      setGraduationDate(educationToUpdate.graduationDate);
      const newEdu = {
        id:educationToUpdate.id,
        school: school,
        degree: degree,
        study: study,
        startDate: startDate,
        graduationDate: graduationDate,
      };
       
      seteEducationToUpdate(newEdu);
      setIsUpdate(true);
      

  };

 
 const [isHide, setIsHide] = useState(true);
  
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
              <div className="mb-3" style={{ width: "30%" }}>
                <label>School </label>
                <input
                  ref={inputRefSchool}
                  type="text"
                  className={inputClass}
                  id="School"
                  placeholder="Ex: UIR "
                  value={school}
                  onChange={(e) => {
                    setSchool(e.target.value);
                    backToFirstStatus(inputRefSchool, "Ex: UIR ");
                  }}
                />
              </div>
              <div className="mb-3" style={{ width: "30%" }}>
                <label>Degree </label>
                <input
                  ref={inputRefDegree}
                  type="text"
                  className={inputClass}
                  id="Degree"
                  placeholder="Ex: Bachelor's "
                  value={degree}
                  onChange={(e) => {
                    setDegree(e.target.value);
                    backToFirstStatus(inputRefDegree, "Ex: Bachelor's ");
                  }}
                />
              </div>
              <div className="mb-3" style={{ width: "30%" }}>
                <label>Field of study </label>
                <input
                  ref={inputRefStudy}
                  type="text"
                  className={inputClass}
                  id="Field of Study"
                  placeholder="Ex: FULL-Stack Developer "
                  value={study}
                  onChange={(e) => {
                    setStudy(e.target.value);
                    backToFirstStatus(
                      inputRefStudy,
                      "Ex: FULL-Stack Developer "
                    );
                  }}
                />
              </div>
              <div className="mb-3">
                <label>Start date</label>
                <input
                  ref={inputRefStartDate}
                  type="date"
                  id="Start date"
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
                  id="Graduation date"
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
              {isUpdate ? (
                <span>Update Education </span>
              ) : (
                <span>Add Education </span>
              )}
            </button>
          </form>
        )}
        <div className="educations-list">
          {educations.map((e) => (
            <EducationItemDisplay
              handleRemove={(a) => handleRemove(a)}
              handleUpdateEducation={(a) => handleUpdateEducation(a)}
              education={e}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Education;
