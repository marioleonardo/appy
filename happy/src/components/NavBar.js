import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import BackIcon from "../img/back.svg";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import Dropdown from 'react-dropdown';

import MenuOpt from './Menu'
import "./nav.css"
import "../App.css"


const NavBar = ({back, color}) => {
  let navigate = useNavigate();

  const [user] = useAuthState(auth);
  const [open, setOpen] = React.useState(false);
  
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const returnPreviousPage=()=>{
    navigate(-1);
  };



  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOptions = () => {
    setOpen(!open);
  };

  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];

  

  return (
    <div className={color}>

    <nav className={color + " nav-bar"}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      {back? (
        <img onClick={()=>returnPreviousPage()} className={(color=="bcolorN"? " back"  : "colorN")} src={BackIcon}/>
      ):(
        <h1><span className="colorN">App</span><span className="colorY">Y</span></h1>
      )}
      
      {user ? (
        <div className={"flex "+color}>
        


        
        <MenuOpt color={color}/>
        

        

        </div>
       
        
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="Sign in with Google"
            type="button"
          />
        </button>

      )}
    </nav>
    </div>
  );
};

export default NavBar;
