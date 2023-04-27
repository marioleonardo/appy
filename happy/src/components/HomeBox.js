import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  onSnapshot,
  limit,
  or,
  where,
  addDoc,
  updateDoc,
  doc
} from "firebase/firestore";
import { db } from "../firebase";

import { Link } from "react-router-dom";
import "./home.css"
import { auth } from "../firebase";

const HomeBox = () => {
  const [matchId, setMatchId] = useState("noid");
  const [matching, setMatching] = useState(false);
  const scroll = useRef();


  useEffect(() => {
    if(auth){
    const qidi = query(
      collection(db, "match"),
      limit(1),
      or(where("user1", "==", auth.currentUser.uid), where("user2", "==", auth.currentUser.uid))
    );

    const qmi = query(
      collection(db, "users"),
      limit(1),
      where("uid", "==", auth.currentUser.uid)
    );



    const unsub= onSnapshot(qidi, (QuerySnapshot) => {
      
      QuerySnapshot.forEach((doc) => {
        setMatchId(doc.id)

      });

      if(QuerySnapshot.empty){
        setMatchId("ciao");
      }

    });

    const un= onSnapshot(qmi, (QuerySnapshot) => {
      
      QuerySnapshot.forEach((doc) => {
        setMatching(doc.data().matching);

      });

      if(QuerySnapshot.empty){
        setMatching(false);
      }

    });

    

    ()=>unsub;
    ()=>un;

    
    }

    return;
  }, [auth]);

  return (
    <div className="bcolorB screen">
    <div className="spacer"/>
    
    <div className="container">
      <div className="title">
        <div className="pro-pic bcolorY"/>
        <h1 className="title-text">Ciao {auth.currentUser.displayName.split(" ")[0]} ♥</h1>
      </div>
      <div className="first-row">
        <div className="quest">
          <h2 className="title-quest colorN">Domande AppY</h2>
        </div>
        <div className="tips">
          <h2 className="title-tips colorN">Tips</h2>
        </div>
      </div>
      {
        matchId!="ciao" ? (
          
          <>
          <Link to="/chat" style={{ textDecoration: 'none' }}>
          <div className="chat">
              <h2 className="title-chat colorN">Chat</h2>
              <p className="descr">Entra nella community Appy aiutando altri ragazzi</p>
          </div> 
          </Link>
          </>
        ):(
          <>
          { matching==true?(
             <div className="chat">
             <h2 className="title-chat colorN">Searching</h2>
             <p className="descr">Entra nella community Appy aiutando altri ragazzi</p>
              </div> 
            ):(
              <Link to="/matchPage" style={{ textDecoration: 'none' }}>
              <div className="chat">
              <h2 className="title-chat colorN">Nobody</h2>
              <p className="descr colorN">Entra nella community Appy aiutando altri ragazzi</p>
              </div> 
              </Link>
            )
          }
          </>
        )}
      
    </div>

    </div>
  );
};

export default HomeBox;
