import { useState } from "react";

const useFormValidation = (object, callback, SetIsUpdate) => {
  const [values, setValues] = useState(object);
  const [errors, setErrors] = useState({});

  const validateEducationAdd = () => {
    let newErrors = {};

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
      newErrors.endDate = "Graduation date is required";
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

    if (true) {
      let isUpdate = callback();
      if (isUpdate) {
        SetIsUpdate(values);
      }
      setValues(object);
      // console.log("Form submitted:", values);
    }
  };

  const handleUpdate = (objToUpdate) => {
    values.id = objToUpdate.id;
    values.school = objToUpdate.school;
    values.degree = objToUpdate.degree;
    values.study = objToUpdate.study;
    return values;
  };

  return {
    values,
    errors,
    handleChange,
    handleChangeDatePicker,
    handleSubmit,
    handleUpdate,
  };
};

export default useFormValidation;
