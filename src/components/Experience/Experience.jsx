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
import ExperienceItemDisplay from "./ExperienceItemDisplay";
import Button from "@mui/material/Button";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import useFormValidation from "../../FormValidation";

// eslint-disable-next-line react/prop-types
const Experience = ({ sendData }) => {
  let IsValid = false;

  const [isUpdate, setIsUpdate] = useState(false);

  const LoadData = () => {
    if (!isUpdate) setExperience([...experience, values]);
    return isUpdate;
  };

  const SetIsUpdate = (obj) => {
    console.log("====================================");
    console.log(obj);
    console.log("====================================");
    setExperience(
      experience.map((ed) => {
        return ed.id == obj.id
          ? {
              id: obj.id,
              company: obj.company,
              role: obj.role,
              location: obj.location,
              workType: obj.workType,
              startDate: obj.startDate,
              endDate: obj.endDate,
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
  } = useFormValidation(
    {
      id: Date.now(),
      company: "",
      role: "",
      location: "",
      workType: "",
      tasks:"",
      startDate: "",
      endDate: "",
    },
    LoadData,
    SetIsUpdate,
    "Experience"
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
                  id="company"
                  label="company"
                  variant="outlined"
                  value={values.company}
                  onChange={handleChange}
                  error={errors.company}
                  helperText={errors.company}
                />
              </div>
              <div className="mb-3" style={{ width: "30%" }}>
                <TextField
                  id="role"
                  label="role"
                  variant="outlined"
                  value={values.role}
                  onChange={handleChange}
                  error={errors.role}
                  helperText={errors.role}
                />
              </div>
              <div className="mb-3" style={{ width: "30%" }}>
                <TextField
                  id="location"
                  label="location"
                  variant="outlined"
                  value={values.location}
                  onChange={handleChange}
                  error={errors.location}
                  helperText={errors.location}
                />
              </div>
              <div className="mb-3" style={{ width: "30%" }}>
                <TextField
                  id="workType"
                  label="workType"
                  variant="outlined"
                  value={values.workType}
                  onChange={handleChange}
                  error={errors.workType}
                  helperText={errors.workType}
                />
              </div>

              <div className="mb-3" style={{ width: "30%" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    id="statDate"
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
              <div className="mb-3" style={{ width: "30%" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    id="endDate"
                    value={values.endDate}
                    onChange={(date) => handleChangeDatePicker(date, "endDate")}
                    label="End Date"
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
              <div className="mb-3" style={{ width: "30%" }}>
                <TextField
                  id="tasks"
                  label="Add tasks"
                  variant="filled"
                  placeholder="Add task for each line"
                  multiline
                  maxRows={3}
                  value={values.tasks}
                  onChange={handleChange}
                  error={errors.tasks}
                  helperText={errors.tasks}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded flex gap-2 items-center"
            >
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
            <ExperienceItemDisplay
              handleRemove={(a) => handleRemove(a)}
              handleUpdate={(a) =>
                handleUpdateExperience(handleUpdatExperience(a))
              }
              experience={e}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
