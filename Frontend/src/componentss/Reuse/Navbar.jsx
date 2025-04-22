import React, { useState, useEffect, useRef } from "react";
import logo from "../../images/MOOD.png";
import { Link, useNavigate } from "react-router-dom";
import { AccountIcon, DownArrow, LogoutIcon } from "../Svgs";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/authenticatedSlice";
import axios from "axios";

function Navbar() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isDropdownHover, setIsDropdownHover] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (isAuthenticated) {
        try {
          const res = await axios.get("http://localhost:8000/Profile", {
            withCredentials: true,
          });
          const fullName = res.data.name;
          const firstName = fullName.split(" ")[0];
          setFirstName(firstName);
        } catch (err) {
          console.error("Failed to fetch user data", err);
        }
      }
    };
    fetchUserData();
  }, [isAuthenticated]);

  const handleLogin = () => navigate("/login");

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8000/logout", {}, { withCredentials: true });
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  const handleProfileClick = () => {
    navigate(user?.role === "business" ? "/dashboard" : "/");
    setIsDropdownHover(false);
    setIsSidebarOpen(false);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsSidebarOpen(false);
  };

  const scrollToAbout = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  return (
    <nav className="bg-[#6439FFCC] flex justify-between items-center px-6 h-[55px] sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="h-[25px] w-[110px] hover:scale-105 transition-transform duration-300" />
        </Link>
      </div>

      {/* Middle Nav */}
      <div className="hidden md:flex gap-[100px] text-white text-[20px] font-medium">
        <button onClick={scrollToContact} className="relative hover:after:w-full after:transition-all after:duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:w-0">Contact</button>
        <button onClick={scrollToAbout} className="relative hover:after:w-full after:transition-all after:duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-white after:w-0">About</button>
      </div>

      {/* Login Button */}
      {!isAuthenticated && (
        <button
          className="hidden md:flex justify-center items-center border-2 border-[#fabc3f] text-[#fabc3f] px-4 py-2 rounded-full font-medium hover:bg-[#fabc3f] hover:text-white hover:scale-105 active:bg-[#e89c30] transition-all"
          onClick={handleLogin}
        >
          Login / Signup
        </button>
      )}

      {/* Account Dropdown */}
      {isAuthenticated && (
        <div className="hidden md:flex flex-col items-center relative" onMouseLeave={() => setIsDropdownHover(false)}>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-full transition hover:bg-white/10 hover:scale-105"
            onMouseEnter={() => setIsDropdownHover(true)}
          >
            <span><AccountIcon /></span>
            <span className="text-white text-[20px] font-medium">{firstName || "Account"}</span>
            <span><DownArrow /></span>
          </button>

          {isDropdownHover && (
            <div className="absolute top-full left-0 z-10 w-[190px] bg-[#6439ff] text-white rounded-lg py-2 flex flex-col items-center gap-2 shadow-md">
              <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-white/10 transition" onClick={handleProfileClick}>
                <AccountIcon />
                <span>My Profile</span>
              </button>
              <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-white/10 transition" onClick={handleLogout}>
                <LogoutIcon />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Hamburger */}
      <div className="flex flex-col gap-[5px] md:hidden cursor-pointer" onClick={() => setIsSidebarOpen(true)}>
        <div className="w-[25px] h-[3px] bg-white"></div>
        <div className="w-[25px] h-[3px] bg-white"></div>
        <div className="w-[25px] h-[3px] bg-white"></div>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          ref={sidebarRef}
          className="fixed top-0 right-0 w-1/2 max-w-[320px] h-screen bg-white shadow-lg p-6 z-[999] flex flex-col gap-4 animate-slideIn"
        >
          <button className="self-end text-2xl font-bold text-gray-700" onClick={() => setIsSidebarOpen(false)}>
            &#10005;
          </button>
          <button onClick={scrollToContact}>Contact</button>
          <button onClick={scrollToAbout}>About</button>
          {!isAuthenticated && (
            <button onClick={handleLogin}>Login / Signup</button>
          )}
          {isAuthenticated && (
            <>
              <button onClick={handleProfileClick}>My Profile</button>
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
