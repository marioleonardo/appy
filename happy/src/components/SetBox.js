import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { flushSync } from 'react-dom';
import { useFetcher } from "react-router-dom";
import "./settings.css"



const SetBox = () => {

  return (
    <div className="bcolorB screen">
    <div className="spacer"/>
    <main className="chat-box">
      <h1 className="title-set">Impostazioni</h1>
      <div className="settings-box">
        <h2 className="opt-set">Account</h2>
        <h2 className="opt-set">Impostazioni chat</h2>
        <h2 className="opt-set">Privacy e sicurezza</h2>
        <h2 className="opt-set">Notifiche e suoni</h2>
        <h2 className="opt-set">Dati e arichivio</h2>
        <h2 className="opt-set">Lingua</h2>
      </div>
    </main>
    </div>
  );
};

export default SetBox;
