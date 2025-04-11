import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import styles from "../css/emailverify.module.css";

function EmailVerify({ verificationEndpoint }) {
  const navigate = useNavigate();
  const { state } = useLocation();
  const email = state?.email;
  const [emailCode, setEmailCode] = useState(Array(6).fill(""));

  const handleInputChange = (index, e) => {
    const value = e.target.value.slice(0, 1);
    const newEmailCode = [...emailCode];
    newEmailCode[index] = value;
    setEmailCode(newEmailCode);

    if (value && index < 5) {
      document.getElementById(`input-${index + 1}`).focus();
    } else if (!value && e.nativeEvent.inputType === "deleteContentBackward" && index > 0) {
      document.getElementById(`input-${index - 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const verificationCode = emailCode.join("");

    if (emailCode.includes(" ")) {
      toast.error("Please fill all 6 digits before submitting.");
      return;
    }

    axios
      .post(`${import.meta.env.BACKEND_URL}${verificationEndpoint}`, { verificationCode, email })
      .then((res) => {
        toast.success("Successfully verified");
        if (res.data) {
          navigate("/home");
        }
      })
      .catch((error) => {
        console.error("Error sending data", error);
        if (error.response) {
          toast.error(`Error: ${error.response.data || 'Failed to submit the verification code'}`);
        } else if (error.request) {
          toast.error('No response from the server. Please check your internet connection.');
        } else {
          toast.error('An unexpected error occurred. Please try again later.');
        }
      });
  };

  return (
    <div className={styles.fullUserLoginBody}>
      <div className={styles.outerUserLoginDiv}>
        <div className={styles.innerUserLoginDiv}>
          <h1>Login / Signup</h1>
          <p>Please enter your email address to continue</p>
          <div className={styles.formTerms}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formInput}>
                {emailCode.map((_, index) => (
                  <input
                    key={index}
                    id={`input-${index}`}
                    type="text"
                    maxLength="1"
                    value={emailCode[index]}
                    onChange={(e) => handleInputChange(index, e)}
                  />
                ))}
              </div>
              <button
                type="submit"
                className={styles.btnUserSubmit}
                disabled={emailCode.includes("")}
              >
                Verify
              </button>
            </form>
          </div>
          <div className={styles.haveAccount}>
            <p>Didn't receive an email?</p>
            <Link to={"/verifyemail"} className={styles.toSignInPage}>
              Resend
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailVerify;
