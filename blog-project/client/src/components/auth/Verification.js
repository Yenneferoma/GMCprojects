import "./auth.css";
import { useNavigate } from "react-router-dom";
import { useVerifyUserMutation } from "../../lib/APIs/userApis";
import ErrorOutput from "../common/ErrorOutput";
import React, { useRef, useEffect } from "react";

const Verification = () => {
  const verificationTokenRef = useRef();

  const navigate = useNavigate();

  const [verifyUser, { isLoading, error, isError, isSuccess }] =
    useVerifyUserMutation();

  const onVerifyUser = async (event) => {
    event.preventDefault();
    const verificationToken = verificationTokenRef.current.value;

    await verifyUser({ verificationToken });
  };

  useEffect(() => {
    if (isSuccess) {
      // navigate to login page
      navigate("/get-started/login");
    }
  }, [isSuccess]);

  console.log(error);

  return (
    <div className="auth-container">
      <h3>Verify Account</h3>
      {isError && (
        <ErrorOutput
          errorMessage={
            error?.error || error?.data?.error || "Something went wrong"
          }
        />
      )}
      <form onSubmit={onVerifyUser}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter verification code"
            ref={verificationTokenRef}
          />
        </div>

        <button type="submit">{isLoading ? "Please wait..." : "Verify"}</button>
      </form>
    </div>
  );
};

export default Verification;
