import { useState } from "react";
import {SplitTostring}  from "./features/Helpers.js";

const useFormValidation = (object, callback, SetIsUpdate, ComponentName) => {
  const [values, setValues] = useState(object);
  const [errors, setErrors] = useState({});

  const validateEducationAdd = () => {
    let newErrors = {};

    if (ComponentName === "Personalinfo") {
      if (!values.firstName.trim()) {
        newErrors.firstName = "first Name is required";
      }
      if (!values.lastName.trim()) {
        newErrors.lastName = "last Name is required";
      }
      if (!values.email.trim()) {
        newErrors.email = "Email is required";
      }

      if (values.phone === "") {
        newErrors.phone = "Phone is required";
      }

      if (values.title === "") {
        newErrors.title = "Title is required";
      }
      if (values.address === "") {
        newErrors.address = "address is required";
      }
      if (values.description === "") {
        newErrors.description = "description is required";
      }
    }


    if (ComponentName === "Education") {
      if (!values.school.trim()) {
        newErrors.school = "school is required";
      }
      if (!values.degree.trim()) {
        newErrors.degree = "degree is required";
      }
      if (!values.study.trim()) {
        newErrors.study = "field of study is required";
      }
      if (!values.location.trim()) {
        newErrors.location = "Location is required";
      }

      if (values.startDate === "") {
        newErrors.startDate = "Start date is required";
      }

      if (values.endDate === "") {
        newErrors.endDate = "End date is required";
      }
    }


    if (ComponentName === "Experience") {
      if (!values.company.trim()) {
        newErrors.company = "company is required";
      }
      if (!values.role.trim()) {
        newErrors.role = "role is required";
      }
      if (!values.location.trim()) {
        newErrors.location = "location is required";
      }

      if (!values.workType.trim()) {
        newErrors.workType = "Work Type is required";
      }

      if (values.tasks === "") {
        newErrors.tasks = "tasks is required";
      }
   
      if (values.startDate === "") {
        newErrors.startDate = "Start date is required";
      }

      if (values.endDate === "") {
        newErrors.endDate = "End date date is required";
      }
    }

     if (ComponentName === "Language") {
       if (!values.language.trim()) {
         newErrors.language = "language is required";
       }
       if (!values.level.trim()) {
         newErrors.level = "level is required";
       }
       
     }
      if (ComponentName === "Skill") {
        if (!values.skill.trim()) {
          newErrors.skill = "Skill is required";
        }
        if (!values.level.trim()) {
          newErrors.level = "level is required";
        }
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

    const handleChangeImage = (e) => {
      const file = e.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
       
        setValues({
          ...values,
          [e.target?.id]: imageUrl,
        });
      }
    };


  const handleChangeDatePicker = (date, id) => {
    let newErrors = {};
    const d = date?.$d.toLocaleDateString("en-US");
    if (d.length > 0) {
      if (id !== "endDate") {
        setValues({
          ...values,
          [id]: d,
        });
      } else {
        if (new Date(d) > new Date(values.startDate)) {
          setValues({
            ...values,
            [id]: d,
          });

          newErrors.endDate = "";
        } else {
          newErrors.endDate = d + " is less than " + values.startDate;
        }
      }
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    let newErrors = {};
    if (e.target?.value.length !== 0) {
      setValues({
        ...values,
        [e.target?.id]: e.target?.value,
      });

      setErrors(newErrors);
    } else {
      newErrors = {
        [e.target?.id]: SplitTostring(e.target?.id ) + " is required",
      };
      setErrors(newErrors);
      setValues({
        ...values,
        [e.target?.id]: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEducationAdd()) {
      let isUpdate = callback();
      if (isUpdate) {
        SetIsUpdate(values);
      }
      setValues(object);
       console.log("Form submitted:", values);
    }
  };


  const handleUpdatPersonalInfo = (objToUpdate) => {
    values.id = objToUpdate.id;
    values.firstName = objToUpdate.firstName;
    values.lastName = objToUpdate.lastName;
    values.email = objToUpdate.email;
    values.phone = objToUpdate.phone;
    values.title = objToUpdate.title;
    values.address = objToUpdate.address;
    values.description = objToUpdate.description;
    values.image= objToUpdate.image;
    
    return values;
  };



  const handleUpdatEducation = (objToUpdate) => {
    values.id = objToUpdate.id;
    values.school = objToUpdate.school;
    values.degree = objToUpdate.degree;
    values.study = objToUpdate.study;
    values.location = objToUpdate.location;
    return values;
  };

  const handleUpdatLanguages = (objToUpdate) => {
    
    values.id = objToUpdate.id;
    values.language = objToUpdate.language;
    values.level = objToUpdate.level;

    return values;
  };

  const handleUpdatReferencess = (objToUpdate) => {
    
    values.id = objToUpdate.id;
    values.language = objToUpdate.language;
    values.level = objToUpdate.level;

    return values;
  };

  const handleUpdatSkills = (objToUpdate) => {
    values.id = objToUpdate.id;
    values.skill = objToUpdate.skill;
    values.level = objToUpdate.level;

    return values;
  };


  const handleUpdatExperience = (objToUpdate) => {
    values.id = objToUpdate.id;
    values.company = objToUpdate.company;
    values.role = objToUpdate.role;
    values.location = objToUpdate.location;
    values.workType = objToUpdate.workType;
    values.tasks = objToUpdate.tasks;
    return values;
  };

  return {
    values,
    errors,
    handleChange,
    handleChangeDatePicker,
    handleSubmit,
    handleUpdatEducation,
    handleUpdatExperience,
    handleUpdatLanguages,
    handleUpdatSkills,
    handleUpdatPersonalInfo,
    handleChangeImage,
  };
};

export default useFormValidation;
