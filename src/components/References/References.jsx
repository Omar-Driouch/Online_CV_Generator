/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ReferencesItemDisplay from "./ReferencesItemDisplay";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import useFormValidation from "../../FormValidation";

// eslint-disable-next-line react/prop-types
const References = ({ sendData }) => {
  let IsValid = false;

  const [isUpdate, setIsUpdate] = useState(false);

  const LoadData = () => {
    if (!isUpdate) setReferences([...References, values]);
    return isUpdate;
  };

  const SetIsUpdate = (obj) => {
    setReferences(
      References.map((ed) => {
        return ed.id == obj.id
          ? {
              id: obj.id,
              References: obj.References,
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
    handleUpdatReferencess,
  } = useFormValidation(
    {
      id: Date.now(),
      References: "",
      level: "",
    },
    LoadData,
    SetIsUpdate,
    "References"
  );

  const [References, setReferences] = useState([]);
  const [educationToUpdate, seteExperienceToUpdate] = useState({});

  const handleRemove = (lanToUpdate) => {
    setReferences([...References.filter((lan) => lan.id !== lanToUpdate.id)]);
  };

  const handleUpdateExperience = (lanToUpdate) => {
    seteExperienceToUpdate(lanToUpdate);
    setIsUpdate(true);
  };

  const [isHide, setIsHide] = useState(true);

  sendData(References);

  return (
    <>
      <section className="education-section">
        <div className="section-heading" onClick={() => setIsHide(!isHide)}>
          <h1>References</h1>
          <button style={{ border: "none", background: "transparent" }}>
            <FaChevronDown />
          </button>
        </div>
        {!isHide && (
          <Box className="form-box" component="form" onSubmit={handleSubmit}>
            <div className="d-flex flex-wrap gap-3 justify-content-start align-items-end">
              <div className="mb-3" style={{ width: "30%" }}>
                <TextField
                  id="Name"
                  label="Name"
                  variant="outlined"
                  value={values.Name}
                  onChange={handleChange}
                  error={errors.Name}
                  helperText={errors.Name}
                  placeholder="Arabic"
                />
              </div>
              <div className="mb-3" style={{ width: "30%" }}>
                <TextField
                  id="Description"
                  label="Description"
                  variant="outlined"
                  value={values.Description}
                  onChange={handleChange}
                  error={errors.Description}
                  helperText={errors.Description}
                  placeholder="Native"
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
                <span>Update References </span>
              ) : (
                <span>Add References </span>
              )}
            </button>
          </Box>
        )}
        <div className="educations-list">
          {References.map((e) => (
            <ReferencesItemDisplay
              handleRemove={(a) => handleRemove(a)}
              handleUpdate={(a) =>
                handleUpdateExperience(handleUpdatReferencess(a))
              }
              References={e}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default References;
