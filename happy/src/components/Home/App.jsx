import "./App.css";
import faquoteLeft from "./assets/faquoteLeft.svg";
import ellipse1 from "./assets/ellipse1.svg";
import ui from "./assets/ui.svg";
import vector1 from "./assets/vector1.svg";
import naviationRectangle from "./assets/naviationRectangle.svg";
import group from "./assets/group.svg";
import ellipse from "./assets/ellipse.png";
import Cardgroup2 from "./components/Cardgroup2";
import Cardgroup1 from "./components/Cardgroup1";
import Cardgroup from "./components/Cardgroup";
import Cardgroup3 from "./components/Cardgroup3";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
import { db } from "./../../firebase";
import { auth } from "../../firebase";
import NotiIcon from "../../img/noti-icon.svg";



const Home = () => {
  const [matchId, setMatchId] = useState("noid");
  const [matching, setMatching] = useState(false);
  const scroll = useRef();




  useEffect(() => {
    console.log(auth.currentUser.photoURL)

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


  const propsData = {
    group5: {
      itIsBetterToConquerYourself:
        "“It is better to conquer yourself than to win a thousand battles”",
      faquoteLeft: faquoteLeft,
    },
    group: {
      entraNellaCommunityAppyAiuta:
        "Entra nella community Appy aiutando altri ragazzi ",
      askForHelp: "Ask for help",
    },
    group1: {
      tips: "Tips",
      unPoDiConsigliPerTe: "Un po’ di consigli per te",
      vector: vector1,
    },
    group6: {
      unPoDiDomandePerConoscerti: "Un po’ di domande per conoscerti meglio ",
      quiz: "Quiz",
    },
  };
  return (
    <div className="i-phone-14-pro-home">
      <div className="rectangle">
        <div className="flex-container-3">
          {auth.currentUser.photoURL!=""?(
          <img src={auth.currentUser.photoURL} className="ellipse"/>
        ):(
          <div className="ellipse"/>
        )}
        
          <span className="welcome-back-sarina">Buongiorno, {auth.currentUser.displayName.split(" ")[0]}!</span>
          <Link to="/noti">
            <img src={NotiIcon} alt="" style={{margin:"auto 0px"}}/>
          </Link>
        </div>
        <Cardgroup3 className="group-5-instance-1" {...propsData.group5} />
        <Cardgroup1 matchId={matchId} matching={matching} className="group-instance-1" {...propsData.group} />
        <Cardgroup2 className="group-1-instance-1" {...propsData.group1} />
        <Cardgroup className="group-6-instance-1" {...propsData.group6} />
        
      </div>
    </div>
  );
};
export default Home;
