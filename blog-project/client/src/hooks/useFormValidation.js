import { useState } from "react";

const useFormValidation = () => {
  const [formError, setFormError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateInput = (inputData) => {
    if (
      !inputData?.firstName ||
      !inputData?.lastName ||
      !inputData?.email ||
      !inputData?.password ||
      !inputData?.confirmPassword
    ) {
      setFormError("All input fields are required");
      return setIsFormValid(false);
    }

    if (inputData?.password !== inputData?.confirmPassword) {
      setFormError("Passwords do not match");
      return setIsFormValid(false);
    }
    if (inputData?.password.length < 6) {
      setFormError("Password must be at least 6 characters");
      return setIsFormValid(false);
    }

    if (inputData?.firstName.length < 2) {
      setFormError("First name must be at least 2 characters");
      return setIsFormValid(false);
    }

    if (inputData?.lastName.length < 2) {
      setFormError("Last name must be at least 2 characters");
      return setIsFormValid(false);
    }

    if (inputData?.email.length < 2) {
      setFormError("Email must be at least 2 characters");
      return setIsFormValid(false);
    }

    if (!/^[A-Za-z]+$/.test(inputData?.firstName)) {
      setFormError("First name can only contain letters");
      return setIsFormValid(false);
    }

    if (!/^[A-Za-z]+$/.test(inputData?.lastName)) {
      setFormError("Last name can only contain letters");
      return setIsFormValid(false);
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputData?.email)) {
      setFormError("Invalid email address");
      return setIsFormValid(false);
    }

    setFormError("");
    return setIsFormValid(true);
  };

  return [validateInput, formError, isFormValid];
};

export default useFormValidation;
