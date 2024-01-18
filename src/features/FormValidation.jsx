import { useState } from "react";

const useFormValidation = (object, callback, SetIsUpdate, ComponentName) => {
  const [values, setValues] = useState(object);
  const [errors, setErrors] = useState({});

  const validateEducationAdd = () => {
    let newErrors = {};

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

      if (values.startDate === "") {
        newErrors.startDate = "Start date is required";
      }

      if (values.endDate === "") {
        newErrors.endDate = "End date date is required";
      }
    }
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
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
      newErrors = { [e.target?.id]: [e.target?.id] + " is required" };
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
      // console.log("Form submitted:", values);
    }
  };

  const handleUpdatEducation = (objToUpdate) => {
    values.id = objToUpdate.id;
    values.school = objToUpdate.school;
    values.degree = objToUpdate.degree;
    values.study = objToUpdate.study;
    return values;
  };

  const handleUpdatExperience = (objToUpdate) => {
    values.id = objToUpdate.id;
    values.company = objToUpdate.company;
    values.role = objToUpdate.role;
    values.location = objToUpdate.location;
    values.workType = objToUpdate.workType;
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
  };
};

export default useFormValidation;
