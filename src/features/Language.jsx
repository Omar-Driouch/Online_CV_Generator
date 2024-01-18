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
import LanguageItemDisplay from "../components/LanguageItemDisplay";
import Button from "@mui/material/Button";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import useFormValidation from "./FormValidation";

// eslint-disable-next-line react/prop-types
const Language = ({ sendData }) => {
  let IsValid = false;

  const [isUpdate, setIsUpdate] = useState(false);

  const LoadData = () => {
    if (!isUpdate) setExperience([...experience, values]);
    return isUpdate;
  };

  const SetIsUpdate = (obj) => {
    
    setExperience(
      experience.map((ed) => {
        
        return ed.id == obj.id
          ? {
              id: obj.id,
              language: obj.language,
              level: obj.level,
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
    handleUpdatExperience,
    handleUpdatLanguages,
  } = useFormValidation(
    {
      id: Date.now(),
      language: "",
      level: "",
    },
    LoadData,
    SetIsUpdate,
    "Language"
  );

  const [experience, setExperience] = useState([]);
  const [educationToUpdate, seteExperienceToUpdate] = useState({});

  const handleRemove = (educationToRemove) => {
    setExperience([
      ...experience.filter(
        (education) => education.id !== educationToRemove.id
      ),
    ]);
  };

  const handleUpdateExperience = (educationToUpdate) => {
    seteExperienceToUpdate(educationToUpdate);
    setIsUpdate(true);
  };

  const [isHide, setIsHide] = useState(true);

  sendData(experience);

  return (
    <>
      <section className="education-section">
        <div className="section-heading" onClick={() => setIsHide(!isHide)}>
          <h1>Experience</h1>
          <button style={{ border: "none", background: "transparent" }}>
            <FaChevronDown />
          </button>
        </div>
        {!isHide && (
          <Box className="form-box" component="form" onSubmit={handleSubmit}>
            <div className="d-flex flex-wrap gap-3 justify-content-start align-items-end">
              <div className="mb-3" style={{ width: "30%" }}>
                <TextField
                  id="language"
                  label="language"
                  variant="outlined"
                  value={values.language}
                  onChange={handleChange}
                  error={errors.language}
                  helperText={errors.language}
                />
              </div>
              <div className="mb-3" style={{ width: "30%" }}>
                <TextField
                  id="level"
                  label="level"
                  variant="outlined"
                  value={values.level}
                  onChange={handleChange}
                  error={errors.level}
                  helperText={errors.level}
                />
              </div>
            </div>
            <button type="submit" className="add-btn">
              <span>
                <FiPlus />
              </span>
              {isUpdate ? (
                <span>Update Experience </span>
              ) : (
                <span>Add Experience </span>
              )}
            </button>
          </Box>
        )}
        <div className="educations-list">
          {experience.map((e) => (
            <LanguageItemDisplay
              handleRemove={(a) => handleRemove(a)}
              handleUpdate={(a) =>
                handleUpdateExperience(handleUpdatLanguages(a))
              }
              experience={e}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Language;
