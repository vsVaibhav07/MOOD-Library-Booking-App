import React from 'react';

// import { LocationIcon , DotIcon } from './Svgs'
import { useLocation } from "react-router-dom";
import Navbar from '../components/common/Navbar';
import NearMeCard from '../components/libraryDetail/NearMeCard';

function NearMe() {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const formattedAddress = params.get("address");

  return (
    <>
      <Navbar />
      <NearMeCard />
     
    </>
  )
}

export default NearMe
