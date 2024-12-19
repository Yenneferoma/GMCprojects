import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorOutput from "../common/ErrorOutput";
import "./auth.css";
import { useLoginUserMutation } from "../../lib/APIs/authApis";

const Signin = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loginUser, { isLoading, error, isError, isSuccess, data }] =
    useLoginUserMutation();

  const navigate = useNavigate();

  const loginUserHandler = async (event) => {
    event.preventDefault();

    if (!email || !password) return;

    await loginUser({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("r_f", data?.refreshToken);
      navigate("/");
    }
  }, [isSuccess]);

  return (
    <div className="auth-container">
      <h3>Sign in</h3>
      {isError && (
        <ErrorOutput
          errorMessage={
            error?.error || error?.data?.error || "Something went wrong"
          }
        />
      )}
      <form onSubmit={loginUserHandler}>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">{isLoading ? "Please wait..." : "Login"}</button>
      </form>
      <div className="form-footer">
        <p>
          Don't have an account? <Link to="/get-started/sign-up">Sign up</Link>
        </p>
        <p>
          <Link to="/get-started/reset-password">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
