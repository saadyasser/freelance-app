import { useState } from 'react';
import validate from '../helpers/validate';

const useForm = (initialValues, rules) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const [touched, setTouched] = useState({}); // Add this

  const valuesChangeHandler = (e) => {
    setValues((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value,
      };
    });
    setErrors((prevValues) => {
      return { ...prevValues, [e.target.name]: '' };
    });
  };
  const inputBlurHandler = (e) => {
    const { errorMessages, valid } = validate(values, rules);
    setTouched({ ...touched, [e.target.name]: true }); // Add this
    setErrors((prevValues) => {
      return errorMessages;
    });

    setIsValid(valid);
  };
  return {
    values,
    valuesChangeHandler,
    errors,
    isValid,
    touched,
    inputBlurHandler,
    setIsValid,
    setErrors,
    setTouched,
  };
};
export default useForm;
