import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const BACKEND_URL = import.meta.env.BACKEND_URL;

function Login() {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState({});

  const handleEmail = (e) => {
    setInputEmail({
      ...inputEmail,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${BACKEND_URL}/login`, inputEmail)
      .then((res) => {
        if (res.data) {
          navigate("/emailverify", { state: { email: inputEmail } });
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div className="flex justify-center items-center w-full h-screen px-4">
      <div className="bg-white flex justify-center items-center px-8 py-10 rounded-[10px] border border-[#b3b3b3] max-w-[500px] w-full">
        <div className="w-[400px]">
          <h1 className="text-[36px] font-medium mb-2">Login / Signup</h1>
          <p className="text-[18px] mb-6">Please enter your email address to continue</p>

          <div className="flex flex-col items-center gap-[10px] my-6 w-full">
            <form onSubmit={handlesubmit} className="flex flex-col gap-[20px] items-center w-full">
              <input
                type="email"
                name="useremail"
                placeholder="Email id"
                onChange={handleEmail}
                className="text-[18px] h-[50px] rounded-[10px] border border-[#b3b3b3] px-[15px] bg-white w-full font-normal outline-none"
              />
              <button
                type="submit"
                className="text-[20px] h-[55px] w-full max-w-[400px] rounded-[10px] bg-[#6439ff] text-white mb-5 flex justify-center items-center"
              >
                Send Code
              </button>
            </form>
          </div>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-3 text-lg font-medium">Or Sign up as</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex items-center gap-5 font-medium w-full justify-evenly">
            <Link to="/userSignup">
              <button className="text-[20px] text-black h-[55px] flex justify-center items-center gap-[10px] px-4 w-36 rounded-[10px] border border-[#B2B2B2]">
                User
              </button>
            </Link>
            <Link to="/businessSignup">
              <button className="text-[20px] text-black h-[55px] flex justify-center items-center gap-[10px] px-4 w-36 rounded-[10px] border border-[#B2B2B2]">
                Corporate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
