import React, {useEffect, useState, useRef} from "react";
import { auth } from "../firebase";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import Hamburger from "../img/hamburger.svg";
import { FaTimes } from 'react-icons/fa';
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

const VotePopup =  ({setVoteOpened, eliminateMatch}) => {
  const rangeRef = useRef(null);
  const [width, setWidth] = useState(500);
  
  useEffect(()=>{
    
    

    rangeRef.current.style.setProperty('--value', width);

  }, []);


  const modifyInput= (event)=>{
    setWidth(event.target.value);
    rangeRef.current.style.setProperty('--value', width);
  }

  return (
    <>
      
      <div className="popup-box">
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <h2>Valuta</h2>
        <FaTimes onClick={()=>setVoteOpened(false)}/>
        </div>
        

        <input onChange={modifyInput} ref={rangeRef} type="range" className="range" min="0" max="1000" value={width}/>
        <div  ref={rangeRef} className="value"></div>

        <div onClick={()=>eliminateMatch()} className="submit-vote"><h2 style={{fontSize:"18px", fontWeight:"500"}}>Elimina</h2></div>
      </div>
    </>
  );
};


export default VotePopup;

