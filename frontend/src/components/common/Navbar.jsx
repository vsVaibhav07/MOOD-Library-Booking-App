import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/MOOD.png";
import { AccountIcon, DownArrow, LogoutIcon } from ".././svgs/index";

function Navbar() {
  const [IsAuthenticated, setIsAuthenticated] = useState(false);
  const [IsDropdownHover, setIsDropdownHover] = useState(false);
  const navigate = useNavigate();

  const HandleLogin = () => {
    navigate('/login');
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full bg-[#6439ff] flex justify-between items-center px-[4%] h-[50px] shadow-md relative z-10">
      {/* Logo */}
      <div>
        <img src={logo} alt="logo" className="h-[25px] w-[110px]" />
      </div>

      {/* Middle Nav */}
      <div className="hidden md:flex gap-10 text-white text-lg font-medium">
        <button onClick={scrollToContact} className="hover:underline">Contact</button>
        <Link to={"/"} className="hover:underline">About</Link>
      </div>

      {/* Login / Signup or Authenticated Dropdown */}
      {!IsAuthenticated ? (
        <button
          onClick={HandleLogin}
          className="text-[#fabc3f] text-lg font-medium border border-[#fabc3f] px-2 py-1 rounded hover:bg-[#fabc3f33] transition"
        >
          Login / Signup
        </button>
      ) : (
        <div
          className="relative flex flex-col items-center"
          onMouseLeave={() => setIsDropdownHover(false)}
        >
          <button
            onMouseEnter={() => setIsDropdownHover(true)}
            className="flex items-center gap-1"
          >
            <span className="text-white">
              <AccountIcon />
            </span>
            <span className="text-white text-lg font-medium">Account</span>
            <span>
              <DownArrow className="stroke-white stroke-[1.5px]" />
            </span>
          </button>

          {/* Dropdown */}
          {IsDropdownHover && (
            <div className="absolute top-full left-0 w-[190px] py-2 flex flex-col items-start gap-5 bg-[#6439ff] text-white z-20 shadow-md">
              <button className="flex items-center gap-2 px-3 w-full hover:bg-[#7a5dff] py-1 transition">
                <AccountIcon />
                <span className="text-lg font-normal">My Profile</span>
              </button>
              <button className="flex items-center gap-2 px-3 w-full hover:bg-[#7a5dff] py-1 transition">
                <LogoutIcon />
                <span className="text-lg font-normal">Logout</span>
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
