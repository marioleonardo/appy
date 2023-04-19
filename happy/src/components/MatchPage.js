import React, { useEffect, useRef, useState } from "react";
import SendMessage from "./SendMessage";
import "./home.css"
import SendDescription from "./SendDescription";


const MatchPage = () => {

  return (
    <div className="bcolorB screen">
    <div className="spacer"/>
    
    <div className="container">
      <div className="title">
        <h1 className="title-text2">Scrivi o parla dei tuoi problemi.</h1>
      </div>
      <div className="first-row2">
        
          <p className="descr2 colorN">Verrai matchato con persone con problemi simili ai tuoi, ti notificheremo quando troveremo la persona giusta.</p>

      </div>

    </div>
    <SendDescription />

    </div>
  );
};

export default MatchPage;

