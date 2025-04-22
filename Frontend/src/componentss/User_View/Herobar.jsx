import React, { useState } from "react";
import { SearchIcon } from "../Svgs";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Herobar() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null,
  });

  const navigate = useNavigate();

  const getLocation = (e) => {
    e.preventDefault();
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          setLocation({ latitude, longitude, error: null });
          console.log("New location fetched:", latitude, longitude);
          fetchNearbyLibraries(latitude, longitude);
        },
        (error) => {
          console.warn("Geolocation error:", error);

          const savedLocation = localStorage.getItem("userLocation");
          if (savedLocation) {
            const { latitude, longitude } = JSON.parse(savedLocation);
            setLocation({ latitude, longitude, error: "Using last known location" });
            console.log("Using saved location:", latitude, longitude);
            fetchNearbyLibraries(latitude, longitude);
          } else {
            setLocation((prev) => ({
              ...prev,
              error: getErrorMessage(error.code),
            }));
          }
        }
      );
    } else {
      setLocation((prev) => ({
        ...prev,
        error: "Geolocation is not supported by your browser.",
      }));
    }
  };

  const fetchNearbyLibraries = async (latitude, longitude) => {
    try {
      const response = await axios.post("http://localhost:8000/location", {
        latitude,
        longitude,
      });

      const formattedAddress = response.data.formattedAddress;
      const city = extractCity(formattedAddress);

      localStorage.setItem("userLocation", JSON.stringify({ latitude, longitude, city }));
      navigate(`/Nearme?address=${encodeURIComponent(formattedAddress)}`);
    } catch (error) {
      console.error("Error fetching libraries:", error);
    }
  };

  const extractCity = (address) => {
    if (!address) return null;
    const parts = address.split(",");
    return parts.length >= 3 ? parts[parts.length - 3].trim() : null;
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 1:
        return "Permission denied. Please enable location access.";
      case 2:
        return "Location unavailable. Try again later.";
      case 3:
        return "Location request timed out.";
      default:
        return "An unknown error occurred.";
    }
  };

  return (
    <div className="w-full h-screen flex justify-center  bg-gradient-to-b from-[#6439FF] via-[#B19CFF] to-[rgba(100,57,255,0.5)] ">
      <div className="flex flex-col  justify-center text-white w-full md:max-w-[55%] gap-10 ">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <div className="text-4xl font-semibold  w-full">
            Set Your
            <span className="text-[#FABC3F] px-2">MOOD</span>
            ,Set Your Success
          </div>
          <div className="text-3xl  px-6 w-[89%]  sm:px-4">
            Find the best library that suits you and provides the best results that fit you
          </div>
        </div>

        <form className="flex items-center w-[80%]  mx-auto rounded-full bg-white overflow-hidden " onSubmit={(e) => e.preventDefault()}>
          <div className="flex items-center w-[80%] md:w-full px-4 py-3 sm:py-2 ">
            <input
              type="text"
              placeholder="Search by library, place"
              className="flex-1 text-black text-lg placeholder:text-lg font-normal focus:outline-none sm:text-sm sm:h-10"
            />
            <button type="submit" className="w-8 h-8 flex items-center justify-center">
              <SearchIcon />
            </button>
          </div>
          <button
            type="button"
            className="bg-[#6439FF] w-28 text-white text-sm px-4 h-full rounded-r-full sm:text-xs sm:px-2"
            onClick={getLocation}
          >
            Near me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Herobar;
