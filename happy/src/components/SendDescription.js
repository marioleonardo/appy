import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp, updateDoc, doc, query, limit, and, where, onSnapshot, getDocs} from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import Mic from "../img/mic.svg";
import Send from "../img/send.svg";

const SendDescription= () => {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  let navigate = useNavigate();
  
  const qma = query(
    collection(db, "users"),
    limit(2),
    where("matching", "==", true)
  );


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
      await checkMatch();
      
    }
    async function checkMatch() {
      let users = []
      const querySnapshot = await getDocs(qma);
      
      if(querySnapshot.docs.length>1){

        users.push(querySnapshot.docs[0].data().uid);
        users.push(querySnapshot.docs[1].data().uid);
        await updateDoc(doc(db, "users", users[0]), {
          matching: false
        });
        await updateDoc(doc(db, "users", users[1]), {
          matching: false
        });
        await addDoc(collection(db, "match"), {
          user1: users[0],
          user2: users[1]
        });
      }
    }
    async function addMatch() {
      
    }

    setMessage("");
    navigate('/appy');
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
