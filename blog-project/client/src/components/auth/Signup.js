import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import useFormValidation from "../../hooks/useFormValidation.js";
import { useCreateNewUserMutation } from "../../lib/APIs/userApis";
import ErrorOutput from "../common/ErrorOutput";
import "./auth.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [createNewUser, { isLoading, error, isError, isSuccess }] =
    useCreateNewUserMutation();

  const [validateInput, formError, isFormValid] = useFormValidation();

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      validateInput(formData);
    }, 500);

    return () => clearTimeout(timer);
  }, [formData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    validateInput(formData);
    if (!isFormValid) return;

    await createNewUser(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      // navigate to verification page
      navigate("/get-started/verify-account");
    }
  }, [isSuccess]);

  return (
    <div className="auth-container">
      <h3>Sign up</h3>
      {formError && <ErrorOutput errorMessage={formError} />}
      {isError && (
        <ErrorOutput
          errorMessage={
            error?.error || error?.data?.error || "something went wrong"
          }
        />
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            className="form-control"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            className="form-control"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button
          className={`btn form-control btn-secondary ${
            !isFormValid && "disabled"
          }`}
          type="submit"
        >
          {isLoading ? "Please wait....." : "Submit"}
        </button>
      </form>

      <div className="form-footer">
        <p>
          Already have an account? <Link to="/get-started/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
