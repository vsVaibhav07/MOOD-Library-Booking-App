import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Usersignup() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({});

  const handleinput = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const { username, useremail, mobile_no } = inputData;

    if (!username || !useremail || !mobile_no) {
      toast.error("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(useremail)) {
      toast.error("Enter a valid email address.");
      return;
    }

    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile_no)) {
      toast.error("Mobile number must be a 10-digit number.");
      return;
    }

    try {
      const response = await axios.post(
        "BACKEND_URL8000/usersignup", inputData
      );

      toast.success("Otp has been sent to: " + response.data.email);
      if (response.data) {
        navigate("/emailverify", { state: { email: useremail } });
      }
    } catch (error) {
      if (error.response) {
        toast.error("Error: " + error.response.data);
      } else if (error.request) {
        toast.error("No response from server.");
      } else {
        toast.error("Something went wrong: " + error.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen px-4">
      <div className="bg-white flex justify-center items-center p-10 rounded-[10px] border border-[#b3b3b3] max-w-[500px] w-full">
        <div className="w-[400px]">
          <h1 className="text-[36px] font-medium mb-2">Welcome</h1>

          <div className="flex flex-col gap-[10px] justify-center items-center my-8">
            <form onSubmit={handlesubmit} className="flex flex-col gap-[20px] w-full">
              <input
                type="text"
                name="username"
                placeholder="Name"
                pattern="[A-Za-z ]+"
                title="Name must only contain alphabetic characters and spaces"
                onChange={handleinput}
                className="text-[18px] h-[50px] rounded-[10px] border border-[#b3b3b3] px-[15px] bg-white w-full outline-none font-normal"
              />
              <input
                type="email"
                name="useremail"
                placeholder="Email id"
                onChange={handleinput}
                className="text-[18px] h-[50px] rounded-[10px] border border-[#b3b3b3] px-[15px] bg-white w-full outline-none font-normal"
              />
              <input
                type="number"
                name="mobile_no"
                placeholder="Mobile"
                onChange={handleinput}
                className="text-[18px] h-[50px] rounded-[10px] border border-[#b3b3b3] px-[15px] bg-white w-full outline-none font-normal"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                onChange={handleinput}
                className="text-[18px] h-[50px] rounded-[10px] border border-[#b3b3b3] px-[15px] bg-white w-full outline-none font-normal"
              />

              <div className="flex items-start gap-2 text-sm text-[#4d4d4d]">
                <FontAwesomeIcon icon={faCheckSquare} className="w-[12px] h-[12px] flex-shrink-0 mt-1" />
                <p>
                  By logging in, you agree to our Privacy policy and Terms & Conditions.
                </p>
              </div>

              <button
                type="submit"
                className="text-[20px] h-[55px] w-full max-w-[400px] rounded-[10px] bg-[#6439ff] text-white mb-5 flex justify-center items-center"
              >
                Register Now
              </button>
            </form>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <p className="text-[18px] text-black font-normal">Have an account?</p>
            <Link to="/login" className="text-[20px] text-[#6439ff] hover:text-[#fabc3f] font-medium">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usersignup;
