import React, {useState} from "react";
import { auth } from "../firebase";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import Hamburger from "../img/hamburger.svg";
import Hamburger2 from "../img/hamburger2.svg";
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

import "../App.css"
import VotePopup from "./VotePopup";

const MenuOpt =  ({color}) => {
  let navigate = useNavigate();
  const [voteOpened, setVoteOpened] = useState(false);
  const { uid, displayName, photoURL } = auth.currentUser;
  const qid = query(
    collection(db, "match"),
    limit(1),
    or(where("user1", "==", auth.currentUser.uid), where("user2", "==", auth.currentUser.uid))
  );

  const annullaRicerca= async ()=>{
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      description: "",
      matching:false
    });
  };

  const eliminateMatch= async ()=>{
    setVoteOpened(false);
    const querySnapshot = await getDocs(qid);
   
    const refid = querySnapshot.docs[0].ref.id;
    await deleteDoc(doc(db, "match", refid));
    navigate('/appy');
  };

  

  const openSettings= ()=>{

    navigate('/settings');
  };


  return (
    <>
      {
        voteOpened?(
          <VotePopup setVoteOpened={setVoteOpened} eliminateMatch={eliminateMatch}/>
        ):(
          <></>
        )
      }
      <Menu menuButton={<MenuButton className={"button-ham "+ color}><img src={(color=="bcolorB"? Hamburger  : Hamburger2)} className={color + " settings"}/></MenuButton>} transition>
        <MenuItem onClick={()=>{setVoteOpened(true)}}>Elimina</MenuItem>
        <MenuItem onClick={()=>{annullaRicerca()}}>Annulla Ricerca</MenuItem>
        <MenuItem onClick={()=>{}}>Segnala</MenuItem>
        <MenuItem onClick={()=>{auth.signOut()}}>Sign out</MenuItem>
        <MenuItem onClick={()=>{openSettings()}}>Settings</MenuItem>
      </Menu>
    </>
  );
};


export default MenuOpt;

