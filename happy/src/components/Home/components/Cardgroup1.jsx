import * as React from "react";
import "./Cardgroup1.css";
import vector from "../assets/vector.svg";
import { Link } from "react-router-dom";
import imgSearch from "../assets/search.svg";

const Cardgroup1 = ({matchId, matching}) => {

  return (
    <div className={`cardgroup-1 group-instance-1`}>
      {
        matchId!="ciao" ? (
          
          <>
          <Link to="/chat" style={{ textDecoration: 'none' }}>
          <div className="chat chat-chat">
              <h2 className="title-chat colorN">Match</h2>
              <p className="descr2 descr ask-for">Entra nella community Appy aiutando altri ragazzi</p>
          </div> 
          </Link>
          </>
        ):(
          <>
          { matching==true?(
             <div className="chat chat-search ">
             <div className="rect1">
             <h2 className="tip colorN">Searching</h2>
             <p className="descr2 ">Entra nella community Appy aiutando altri ragazzi</p>
             </div>
             <div style={{padding:"0px 15px"}}>
              <img src={imgSearch} className="chat-search-logo"/>
             </div>
              </div> 
            ):(
              <Link to="/matchPage" style={{ textDecoration: 'none' }}>
              <div className="chat chat-ask">
              <h2 className="title-chat colorN">Ask for help</h2>
              <p className="descr2 descr ask-for colorN">Entra nella community Appy aiutando altri ragazzi</p>
              </div> 
              </Link>
            )
          }
          </>
        )}
    </div>
  );
};
export default Cardgroup1;
