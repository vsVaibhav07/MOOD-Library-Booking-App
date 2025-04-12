
import React, { useState } from "react";
import NearMe from "./NearMe";

import styles from "../../css/herobar.module.css";
import { IoSearchOutline } from "react-icons/io5";

function Herobar() {

 


  return (
    <>
    
      <div className={styles.herobarOuterDiv}>
        <div className={styles.herobarInsideDiv}>
          <div className={styles.HerobarTitleNdescription}>
            <div className="sm:flex  text-white text-xl sm:text-4xl  font-semibold  w-max">
            Set Your  <p className="pl-3 text-[#FABC3F] inline" > MOOD</p>, Set Your Success
            </div>
            <div className="flex justify-center items-center self-stretch text-white text-center text-xl sm:text-3xl font-medium leading-normal w-full px-[25px]">
            find best library that suits you and provide best result that fits you    
            </div>
          </div>
          
            <form action="" className="flex px-4 w-5/6  justify-between text-black rounded-full border border-[#E8E8E8] h-12 bg-white box-border">
             
              <input className="rounded-full w-full  font-sans font-medium outline-none " type="text" placeholder="Search by library, place" />
              <div className="flex justify-between items-center">
              <button className="text-black ml-4 text-3xl" type="submit">
                <  IoSearchOutline/>
              </button>
             
                <NearMe/> 
              
              </div>
             
              
            </form> 
            
        </div>
      </div>
    </>
  );
}

export default Herobar;
