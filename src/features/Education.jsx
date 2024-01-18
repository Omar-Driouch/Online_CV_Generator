/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EducationItemDisplay from "../components/EducationItemDisplay";
import Button from "@mui/material/Button";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import useFormValidation from "./FormValidation";

// eslint-disable-next-line react/prop-types
const Education = ({ sendData }) => {
  let IsValid = false;
  
  const [isUpdate, setIsUpdate] = useState(false);
  
     const LoadData = () => {
      if (!isUpdate) setEducations([...educations, values]);
      return isUpdate;
     }; 

    const SetIsUpdate = (education) => {
       setEducations(
            educations.map((ed) => {
               
              return ed.id == education.id
                ? {
                    id: education.id,
                    school: education.school,
                    degree: education.degree,
                    study: education.study,
                    startDate: education.startDate,
                    endDate: education.endDate,
                  }
                : ed;
            })
          );
      setIsUpdate(false);
    };  
   const {
     values,
     errors,
     handleChange,
     handleSubmit,
     handleChangeDatePicker,
     handleUpdatEducation,
   } = useFormValidation(
     {
       id: Date.now(),
       school: "",
       degree: "",
       study: "",
       startDate: "",
       endDate: "",
     },
     LoadData,
     SetIsUpdate,
     "Education"
   );


  const [educations, setEducations] = useState([]);
  const [educationToUpdate, seteEducationToUpdate] = useState({});



 const handleRemove = (educationToRemove) => {
 
    setEducations([...educations.filter(
     (education) => education.id !== educationToRemove.id
   )]) 

 };

  
   const handleUpdateEducation = (educationToUpdate) => {
    
     seteEducationToUpdate(educationToUpdate);
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
          <Box className="form-box" component="form" onSubmit={handleSubmit}>
            <div className="d-flex flex-wrap gap-3 justify-content-start align-items-end">
              <div className="mb-3" style={{ width: "30%" }}>
                <TextField
                  id="school"
                  label="school"
                  variant="outlined"
                  value={values.school}
                  onChange={handleChange}
                  error={errors.school}
                  helperText={errors.school}
                />
              </div>
              <div className="mb-3" style={{ width: "30%" }}>
                <TextField
                  id="degree"
                  label="Degree"
                  variant="outlined"
                  value={values.degree}
                  onChange={handleChange}
                  error={errors.degree}
                  helperText={errors.degree}
                />
              </div>
              <div className="mb-3" style={{ width: "30%" }}>
                <TextField
                  id="study"
                  label="Field of study"
                  variant="outlined"
                  value={values.study}
                  onChange={handleChange}
                  error={errors.study}
                  helperText={errors.study}
                />
              </div>
              <div className="mb-3">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    id="startDate"
                    value={values.startDate}
                    onChange={(date) =>
                      handleChangeDatePicker(date, "startDate")
                    }
                    label="Start date"
                    slotProps={{
                      textField: {
                        variant: "outlined",
                        error: errors.startDate,
                        helperText: errors.startDate,
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
              <div className="mb-3">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    id="endDate"
                    value={values.endDate}
                    onChange={(date) => handleChangeDatePicker(date, "endDate")}
                    label="Graduation Date"
                    slotProps={{
                      textField: {
                        variant: "outlined",
                        error: errors.endDate,
                        helperText: errors.endDate,
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>
            <button type="submit" className="add-btn">
              <span>
                <FiPlus />
              </span>
              {isUpdate ? (
                <span>Update Education </span>
              ) : (
                <span>Add Education </span>
              )}
            </button>
          </Box>
        )}
        <div className="educations-list">
          {educations.map((e) => (
            <EducationItemDisplay
              handleRemove={(a) => handleRemove(a)}
              handleUpdate={(a) =>
                handleUpdateEducation(handleUpdatEducation(a))
              }
              education={e}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Education;
