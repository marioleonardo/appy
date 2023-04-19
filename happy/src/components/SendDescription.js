import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import Mic from "../img/mic.svg";
import Send from "../img/send.svg";

const SendDescription= () => {
  const [message, setMessage] = useState("");
  let navigate = useNavigate();
  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    if(auth){
      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        description: message,
        matching:true
      });
    }
    console.log(message);
    setMessage("");
    navigate('/');
  };
  return (
    <div className="bar bcolorB">
    <form onSubmit={(event) => sendMessage(event)} className="send-message bcolorB">
    <button className="mic"><img src={Mic}/></button>
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="send"><img src={Send}/></button>
      
    </form>
    </div>
  );
};

export default SendDescription;
