
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
            <div className={styles.title}>
            Set Your  <p className="pl-3 text-[#FABC3F]" > MOOD</p>, Set Your Success
            </div>
            <div className={styles.description}>
            find best library that suits you and provide best result that fits you    
            </div>
          </div>
          
            <form action="" className={styles.searchBar}>
              <input type="text" placeholder="Search by library, place" />
              <button className="text-black text-3xl" type="submit">
                <  IoSearchOutline/>
              </button>
              <div className="flex gap-2">
                <NearMe/> 
              </div>
              
            </form> 
            
        </div>
      </div>
    </>
  );
}

export default Herobar;
