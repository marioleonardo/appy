import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import HomeBox from "./components/HomeBox";
import SetBox from "./components/SetBox";
import Welcome from "./components/Welcome";
import MatchPage from "./components/MatchPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState} from "react";
import { db } from "./firebase";
import ChatList from "./components/ChatList";
import Home from "./components/Home/App";

import {
  query,
  collection,
  onSnapshot,
  addDoc,
  limit,
  doc,
  or,
  where,
  setDoc
} from "firebase/firestore";
import FootBar from "./components/FootBar";

function App() {
  const [user] = useAuthState(auth);
  const [exist, setExist] = useState(true);



  useEffect(() => {

    if(user){
      
      const qm = query(
        collection(db, "users"),
        limit(1),
        where("uid", "==", auth.currentUser.uid)
      );

      const un= onSnapshot(qm, (QuerySnapshot) => {
        if(QuerySnapshot.empty){
          setExist(false);
        }
      });

      ()=>un;
    }

    return;

  }, [user]);

  useEffect(()=>{
    const updateUser = async ()=>{
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        uid:auth.currentUser.uid,
        matching:false,
        username: auth.currentUser.displayName
      });
    }
    

    if(exist==false && user){
      updateUser();
    }

  },[exist]);

  return (
    <div className="App">

      {!user ? (
        <>
          <Welcome />
        </>
        
      ) : (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/home" element={<div><NavBar color="bcolorB"/><HomeBox /></div>}/>
              <Route path="/appy" element={<div><NavBar color="bcolorB"/><Home/><FootBar activePage={0}/></div>}/>
              <Route path="/settings" element={<div><NavBar color="bcolorN" back="true"/><SetBox /><FootBar activePage={2}/></div>}/>
              <Route path="/chat" element={<><NavBar color="bcolorB" back="true"/><ChatBox/></>}/>
              <Route path="/chatList" element={<><NavBar color="bcolorB" back="true"/><ChatList/><FootBar activePage={1}/></>}/>
              <Route path="/matchPage" element={<><NavBar color="bcolorB" back="true"/><MatchPage /></>}/>
            </Routes>
          </BrowserRouter>
        </>
      )}

    

    </div>
  );
}

export default App;