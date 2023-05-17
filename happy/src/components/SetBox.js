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
    <div className="bcolorN screen">
    <div className="spacer"/>
    <main className="set-box box3 ">
      <h1 className="title-set colorB">Impostazioni</h1>
      <div className="settings-box">
        <h2 className="opt-set colorB">Account</h2>
        <h2 className="opt-set colorB">Impostazioni chat</h2>
        <h2 className="opt-set colorB">Privacy e sicurezza</h2>
        <h2 className="opt-set colorB">Notifiche e suoni</h2>
        <h2 className="opt-set colorB">Dati e arichivio</h2>
        <h2 className="opt-set colorB">Lingua</h2>
      </div>
    </main>
    </div>
  );
};

export default SetBox;
