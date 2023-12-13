import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wellcom = () => {
  const[showWellcome, setShowWellcome]=useState()
  useEffect(()=>{
  const data= JSON.parse(localStorage.getItem("set_wellcome_alert"))
  setShowWellcome(data ?? true)
  })

  const handleShowWellcome=()=>{
    setShowWellcome(false)
   window.localStorage.setItem("set_wellcome_alert" , JSON.stringify(false))
  }
  return (
    <div>
      {
        showWellcome ? 
        <div className="bg-info p-4">
        wellcome
        <FontAwesomeIcon 
        onClick={handleShowWellcome}
         icon={faClose}
          className="fs-3" />
      </div> 
      : 
      "" 
      }
      
    </div>
  );
};

export default Wellcom;
