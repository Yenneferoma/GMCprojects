import React from "react";
import "./auth.css";

const ResetPassword = () => {
  return (
    <div className="auth-container">
      <h3>Reset Password</h3>
      <form>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
          />
        </div>
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ResetPassword;
