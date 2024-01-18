/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LanguageItemDisplay from "./LanguageItemDisplay";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import useFormValidation from "../../features/FormValidation";




// eslint-disable-next-line react/prop-types
const Language = ({ sendData }) => {
  let IsValid = false;

    
  const [isUpdate, setIsUpdate] = useState(false);

  const LoadData = () => {
    if (!isUpdate) setlanguage([...language, values]);
    return isUpdate;
  };

  const SetIsUpdate = (obj) => {
    
    setlanguage(
      language.map((ed) => {
        
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

  const [language, setlanguage] = useState([]);
  const [educationToUpdate, seteExperienceToUpdate] = useState({});

  const handleRemove = (lanToUpdate) => {
    setlanguage([...language.filter((lan) => lan.id !== lanToUpdate.id)]);
  };

  const handleUpdateExperience = (lanToUpdate) => {
    seteExperienceToUpdate(lanToUpdate);
    setIsUpdate(true);
  };

  const [isHide, setIsHide] = useState(true);

  sendData(language);
  
  return (
    <>
      <section className="education-section">
        <div className="section-heading" onClick={() => setIsHide(!isHide)}>
          <h1>Language</h1>
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
                  placeholder="Arabic"
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
                  placeholder="Native"
                />
              </div>
            </div>
            <button type="submit" className="add-btn">
              <span>
                <FiPlus />
              </span>
              {isUpdate ? (
                <span>Update language </span>
              ) : (
                <span>Add language </span>
              )}
            </button>
          </Box>
        )}
        <div className="educations-list">
          {language.map((e) => (
            <LanguageItemDisplay
              handleRemove={(a) => handleRemove(a)}
              handleUpdate={(a) =>
                handleUpdateExperience(handleUpdatLanguages(a))
              }
              language={e}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Language;
