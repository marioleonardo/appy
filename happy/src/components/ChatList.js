import React from "react";

import { Link } from "react-router-dom";

import "./chat-list.css"
import { useEffect } from "react";
import NotiIcon from "../img/noti-icon.svg";

const ChatCard = ({ propic, name, lastMessage, active }) => {
    

    return (
        <>
      
      <div className={active? "chat-preview-card active-chat":"chat-preview-card" }>
        <div className="propic">
          <img src={propic} alt="Profile pic" />
        </div>
        <div className="details">
          <div className="name"><h2>{name}</h2></div>
          <div className="last-message"><p>{lastMessage}</p></div>
        </div>
      </div>
      </>
    );
  };

const ChatList = () => {

    const chats = [
        {
          id: 1,
          name: "Job Doe",
          propic:"https://media.licdn.com/dms/image/C5103AQF9B43ZTmTmcQ/profile-displayphoto-shrink_800_800/0/1516903550395?e=1689811200&v=beta&t=_yC_QiWuDqwTfOhqAewtQHSfzscIuqxMbPsPr2ObC4Y",
          lastMessage: "Hi, how are you?",
          active: true
        },
        {
          id: 2,
          name: "Jane Smith",
          propic: "https://media.licdn.com/dms/image/D5635AQEsiWc1RKlkMA/profile-framedphoto-shrink_800_800/0/1638286507308?e=1684926000&v=beta&t=7i-HnheE_FHQaXCozr-ggA0DimnyJGBXMTYzkz0c6oY",
          lastMessage: "See your ass!"
        },
        {
          id: 3,
          name: "Bob Johnson",
          propic: "https://media.licdn.com/dms/image/C4D03AQGfrcL63tC33Q/profile-displayphoto-shrink_800_800/0/1611435800424?e=1689811200&v=beta&t=83PBpb40NvPOWwd_zAHjEwhvrs1_K8KAPxGExeWylZY",
          lastMessage: "Thanks for your help!"
        }
      ];


  return (
      <div className="background-list bcolorB">
      
      <div className="spacer"/>
      <div style={{display:"flex", justifyContent:"space-between", width:"93%", marginLeft:"2%"}}>
      <h2 className="list-title">Chat</h2>
      <img src={NotiIcon} alt="" style={{margin:"auto 0px"}}/>
      </div>
      {chats.map((chat, index) => (
        <>
        <Link to={"/chat"}><ChatCard
          key={index}
          name={chat.name}
          propic={chat.propic}
          lastMessage={chat.lastMessage}
          active={chat.active}
        />
        </Link>
        
        </>
      ))}
    </div>
  );
};

export default ChatList;
