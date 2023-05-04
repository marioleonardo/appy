import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import BackIcon from "../img/back.svg";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

import Dropdown from 'react-dropdown';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import Hamburger from "../img/hamburger.svg";



import MenuOpt from './Menu'
import "./nav.css"
import "../App.css"





const NavBarLogin = ({back, color}) => {

  const [user] = useAuthState(auth);
  const [open, setOpen] = React.useState(false);
  
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
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
    <div className="">

    <nav className="nav-bar bcolorB">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      {back? (
        <img onClick={()=>returnPreviousPage()} src={BackIcon}/>
      ):(
        <h1><span className="colorN">App</span><span className="colorY">Y</span></h1>
      )}
      

        <div className="flex">
        


        
        <Menu menuButton={<MenuButton className="button-ham bcolorB"><img src={Hamburger} className="bcolorB"/></MenuButton>} transition>

        </Menu>
        

        

        </div>
       
        
      

      
    </nav>
    </div>
  );
};

export default NavBarLogin;
