"use client";

import { useState } from "react";

const useFormValidator = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [formValid, setFormValid] = useState(false);

  const handleChange = (e) => {
    const input = e.currentTarget;
    const name = e.target.name;
    const val = e.target.value;

    setValues({
      ...values,
      [name]: val,
    });

    setErrors({
      ...errors,
      [name]: input.validationMessage,
    });

    setFormValid(input.form.checkValidity());
  };

  return { values, errors, formValid, handleChange };
};

export default useFormValidator;
