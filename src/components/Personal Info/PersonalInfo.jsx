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
import useFormValidation from "../../FormValidation";
import PersonalinfoItemDisplay from "./PersonalInfoItemDisplay";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";



// eslint-disable-next-line react/prop-types
const PersonalInfo = ({ sendData }) => {
  let IsValid = false;

  const [isUpdate, setIsUpdate] = useState(false);

  const LoadData = () => {
    if (!isUpdate) setPersonalinfos([values]);
    return isUpdate;
  };

  const SetIsUpdate = (obj) => {
   
    setPersonalinfo(
      Personalinfos.map((ed) => {
        return ed.id == obj.id
          ? {
              id: obj.id,
              firstName: obj.firstName,
              lastName: obj.lastName,
              email: obj.e_mail,
              phone: obj.phone,
              title: obj.title,
              address: obj.address,
              description: obj.description,
              image: obj.image,
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
    handleUpdatPersonalInfo,
    handleChangeImage,
  } = useFormValidation(
    {
      id: Date.now(),
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      title: "",
      address: "",
      description: "",
      image: "",
    },
    LoadData,
    SetIsUpdate,
    "Personalinfo"
  );

  const [Personalinfos, setPersonalinfos] = useState([]);
  const [educationToUpdate, seteExperienceToUpdate] = useState({});

  const handleRemove = (itemToRemove) => {
    setPersonalinfos([
      ...Personalinfos.filter((item) => item.id !== itemToRemove.id),
    ]);
  };

  const handleUpdateExperience = (itemToUpdate) => {
    seteExperienceToUpdate(itemToUpdate);
    setIsUpdate(true);
  };

  const [isHide, setIsHide] = useState(true);

  sendData(Personalinfos);
  console.log(Personalinfos, " hELLO ");

  return (
    <>
      <section className="education-section">
        <div className="section-heading" onClick={() => setIsHide(!isHide)}>
          <h1>Personal information</h1>
          <button style={{ border: "none", background: "transparent" }}>
            <FaChevronDown />
          </button>
        </div>
        {!isHide && (
          <Box className="form-box" component="form" onSubmit={handleSubmit}>
            <div className="d-flex flex-wrap gap-3 justify-content-start align-items-end">
              <div className="mb-0" style={{ width: "30%" }}>
                <div className="mb-0 img-box">
                  <label className="img-label" htmlFor="image">
                    <Stack direction="row">
                      <Avatar
                        alt="Travis Howard"
                        src={values.image}
                        sx={{ width: 100, height: 100 }}
                      />
                    </Stack>
                  </label>
                  <input
                    id="image"
                    type="file"
                    placeholder="chose image .."
                    accept="image/*"
                    onChange={handleChangeImage}
                  />
                </div>
              </div>
              <div className="mb-3" style={{ width: "30%" }}>
                <TextField
                  id="firstName"
                  label="first name"
                  variant="outlined"
                  value={values.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                  helperText={errors.firstName}
                />
              </div>
              <div className="mb-3" style={{ width: "30%" }}>
                <TextField
                  id="lastName"
                  label="last Name"
                  variant="outlined"
                  value={values.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                  helperText={errors.lastName}
                />
              </div>
              <div className="mb-3" style={{ width: "30%" }}>
                <TextField
                  id="email"
                  label="e-mail"
                  variant="outlined"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                  helperText={errors.email}
                />
              </div>
              <div className="mb-3" style={{ width: "30%" }}>
                <TextField
                  id="phone"
                  label="Phone"
                  type="phone"
                  variant="outlined"
                  value={values.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  helperText={errors.phone}
                />
              </div>
              <div className="mb-3" style={{ width: "30%" }}>
                <TextField
                  id="title"
                  label="Title"
                  variant="outlined"
                  value={values.title}
                  onChange={handleChange}
                  error={errors.title}
                  helperText={errors.title}
                />
              </div>
              <div className="mb-3" style={{ width: "30%" }}>
                <TextField
                  id="address"
                  label="address"
                  variant="outlined"
                  value={values.address}
                  onChange={handleChange}
                  error={errors.address}
                  helperText={errors.address}
                />
              </div>
              <div className="mb-3" style={{ width: "30%" }}>
                <TextField
                  id="description"
                  label="description"
                  variant="outlined"
                  value={values.description}
                  onChange={handleChange}
                  error={errors.description}
                  helperText={errors.description}
                />
              </div>
            </div>
            <button type="submit" className="add-btn">
              <span>
                <FiPlus />
              </span>
              {isUpdate ? (
                <span>Update Personal information </span>
              ) : (
                <span>Add Personalinfo </span>
              )}
            </button>
          </Box>
        )}
        <div className="educations-list">
          {Personalinfos.map((e, index) => (
            <PersonalinfoItemDisplay
              key={index}
              handleRemove={(a) => handleRemove(a)}
              handleUpdate={(a) =>
                handleUpdateExperience(handleUpdatPersonalInfo(a))
              }
              Personalinfo={e}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default PersonalInfo;
