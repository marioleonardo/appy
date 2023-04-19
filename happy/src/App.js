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
        matching:false
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
          <NavBar/>
          <Welcome />
        </>
        
      ) : (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<div><NavBar /><HomeBox /></div>}/>
              <Route path="/settings" element={<div><NavBar /><SetBox /></div>}/>
              <Route path="/chat" element={<><NavBar /><ChatBox/></>}/>
              <Route path="/matchPage" element={<><NavBar back="true"/><MatchPage /></>}/>
            </Routes>
          </BrowserRouter>
        </>
      )}

    

    </div>
  );
}

export default App;