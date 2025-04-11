
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function Login() {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState({});
  const handleEmail = (e) => {
    setInputEmail({
      ...inputEmail,
      [e.target.name]: e.target.value,
    });
    console.log(inputEmail);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${BACKEND_URL}/login`, inputEmail)
      .then((res) => {
        console.log("baby u did it data send", res.data);
        if (res.data) {
          navigate("/emailverify", { state: { email: inputEmail } });
        }
      })
      .catch((error) => {
        console.log("ops baby data not send", error);
      });
  };
  return (
    <>
      <div className=" full-user-login-body  ">
        <div className="outer-user-login-div">
          <div className="inner-userlogin-div">
            <h1>Login / Signup</h1>
            <p>Please enter your email address to continue </p>
            <div className="form-terms">
              <form onSubmit={handlesubmit}>
                <input
                  type="email"
                  name="useremail"
                  placeholder="Email id"
                  onChange={handleEmail}
                />

                <button type="submit" className="btn-user-submit">
                  Send Code
                </button>
              </form>
            </div>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="px-3 text-lg font-medium ">Or Sign up as</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <div className="signupdecide font-medium">
              <div className="flex w-full justify-evenly">
                <Link to="/userSignup" className="">
                  <button className="w-36">User</button>
                </Link>
                <Link to="/businessSignup" className="">
                  <button className="w-36">Corporate</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
