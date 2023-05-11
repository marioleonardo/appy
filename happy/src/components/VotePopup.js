import React, {useEffect} from "react";
import { auth } from "../firebase";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import Hamburger from "../img/hamburger.svg";
import {
  where,
  or,
  query,
  collection,
  limit,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";
import { db } from "../firebase";

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import "./popup.css"
import "../App.css"

const VotePopup =  () => {
  
  useEffect(()=>{
    
    

    

  }, []);


  const modifyInput= ()=>{
    console.log("ciao");
  }

  return (
    <>
      
      <div className="popup-box">
        <h2>Valuta</h2>
        <input onChange={()=>modifyInput()} type="range" className="range" min="0" max="1000" value="50"/>
        <div className="value"></div>
      </div>
    </>
  );
};


export default VotePopup;

