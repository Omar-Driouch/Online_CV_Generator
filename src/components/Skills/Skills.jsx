/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SkillsItemDisplay from "./SkillsItemDisplay";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import useFormValidation from "../../FormValidation";

// eslint-disable-next-line react/prop-types
const Skills = ({ sendData }) => {
  let IsValid = false;

  const [isUpdate, setIsUpdate] = useState(false);

  const LoadData = () => {
    if (!isUpdate) setlanguage([...skill, values]);
    return isUpdate;
  };

  const SetIsUpdate = (obj) => {
    setlanguage(
      skill.map((ed) => {
        return ed.id == obj.id
          ? {
              id: obj.id,
              skill: obj.skill,
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
    handleUpdatSkills,
  } = useFormValidation(
    {
      id: Date.now(),
      skill: "",
      level: "",
    },
    LoadData,
    SetIsUpdate,
    "Skill"
  );

  const [skill, setlanguage] = useState([]);
  const [educationToUpdate, seteExperienceToUpdate] = useState({});

  const handleRemove = (lanToUpdate) => {
    setlanguage([...skill.filter((lan) => lan.id !== lanToUpdate.id)]);
  };

  const handleUpdateSkills = (lanToUpdate) => {
    seteExperienceToUpdate(lanToUpdate);
    setIsUpdate(true);
  };

  const [isHide, setIsHide] = useState(true);

  sendData(skill);

  return (
    <>
      <section className="education-section">
        <div className="section-heading" onClick={() => setIsHide(!isHide)}>
          <h1>Skills</h1>
          <button style={{ border: "none", background: "transparent" }}>
            <FaChevronDown />
          </button>
        </div>
        {!isHide && (
          <Box className="form-box" component="form" onSubmit={handleSubmit}>
            <div className="d-flex flex-wrap gap-3 justify-content-start align-items-end">
              <div className="mb-3" style={{ width: "30%" }}>
                <TextField
                  id="skill"
                  label="skill"
                  variant="outlined"
                  value={values.skill}
                  onChange={handleChange}
                  error={errors.skill}
                  helperText={errors.skill}
                  placeholder="React"
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
                  placeholder="80%"
                />
              </div>
            </div>
            <button type="submit" className="add-btn">
              <span>
                <FiPlus />
              </span>
              {isUpdate ? <span>Update skill </span> : <span>Add skill </span>}
            </button>
          </Box>
        )}
        <div className="educations-list">
          {skill.map((e) => (
            <SkillsItemDisplay
              handleRemove={(a) => handleRemove(a)}
              handleUpdate={(a) => handleUpdateSkills(handleUpdatSkills(a))}
              skill={e}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
