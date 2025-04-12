import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function BusinessSignup() {
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
        "BACKEND_URL8000/businessSignup",
        inputData
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
    <div className="flex justify-center items-center w-full h-screen bg-gray-100">
      <div className="bg-white p-10 border border-gray-400 rounded-xl max-w-md w-full">
        <div className="w-full">
          <h1 className="text-3xl font-medium mb-8 text-center">Welcome</h1>

          <form onSubmit={handlesubmit} className="flex flex-col gap-5 items-center">
            <input
              type="text"
              name="libraryname"
              placeholder="Library Name"
              onChange={handleinput}
              className="w-full text-base h-[50px] px-4 rounded-lg border border-gray-400 outline-none"
            />
            <input
              type="text"
              name="username"
              placeholder="Name"
              pattern="[A-Za-z ]+"
              title="Name must only contain alphabetic characters and spaces"
              onChange={handleinput}
              className="w-full text-base h-[50px] px-4 rounded-lg border border-gray-400 outline-none"
            />
            <input
              type="email"
              name="useremail"
              placeholder="Email id"
              onChange={handleinput}
              className="w-full text-base h-[50px] px-4 rounded-lg border border-gray-400 outline-none"
            />
            <input
              type="number"
              name="mobile_no"
              placeholder="Mobile"
              onChange={handleinput}
              className="w-full text-base h-[50px] px-4 rounded-lg border border-gray-400 outline-none"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleinput}
              className="w-full text-base h-[50px] px-4 rounded-lg border border-gray-400 outline-none"
            />

            <div className="flex items-start gap-2 mt-2">
              <FontAwesomeIcon icon={faCheckSquare} className="w-3 h-3 mt-1" />
              <p className="text-sm text-gray-600">
                By logging in, you agree to our Privacy policy and Terms & Conditions.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#6439ff] text-white text-lg py-3 mt-4 rounded-lg hover:bg-indigo-700 transition-all"
            >
              Register Now
            </button>
          </form>

          <div className="flex justify-center items-center gap-2 mt-6">
            <p className="text-base text-black">Have an account?</p>
            <Link
              to="/login"
              className="text-lg text-[#6439ff] font-medium hover:text-yellow-400 transition"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessSignup;
