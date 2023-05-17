import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  where,
  or
} from "firebase/firestore";
import { auth } from "../firebase";
import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

import CardUser from "../img/card-user.svg";

const ChatBox = () => {


  
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  const [matchId, setMatchId] = useState("ciao");


  let navigate = useNavigate();

  useEffect(() => {

    const qm = query(
      collection(db, "match/"+matchId+"/messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const qid = query(
      collection(db, "match"),
      limit(1),
      or(where("user1", "==", auth.currentUser.uid), where("user2", "==", auth.currentUser.uid))
    );

    const unsubscribe = onSnapshot(qm, (QuerySnapshot) => {
      let messages = [];
      
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    const unsub= onSnapshot(qid, (QuerySnapshot) => {
      
      QuerySnapshot.forEach((doc) => {
        setMatchId(doc.id)

      });

      if(QuerySnapshot.empty){
        setMatchId("ciao");
        
        navigate('/appy');
      }

    });

    ()=>unsub;
    ()=>unsubscribe;

    return;
  }, [matchId]);


  useEffect(()=>{
    scroll.current.scrollIntoView({ behavior: "auto" });

  })



  return (
    <>
    <div className="background"/>
    <main className="chat-box bcolorB">
      <div className="messages-wrapper bcolorB">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div  className=" bcolorB" style={{height:"120px"}}>
        <div  className="submit-vote"><h2 style={{fontSize:"18px", fontWeight:"500"}}>Chatta</h2></div>
        </div>
        <img style={{width:"80%", margin:"40px auto 0px auto"}} src={CardUser}/>
        
      </div>
      {/* when a new message enters the chat, the screen scrolls dowwn to the scroll div */}
      <span ref={scroll}></span>
      <SendMessage matchId={matchId} scroll={scroll} />
      

    </main>
    </>
  );
};

export default ChatBox;
//or(where("match.cvsoiV0fvUnLR0g2yxLA.user1", "==", auth.currentUser.uid), where("user2", "==", auth.currentUser.uid))