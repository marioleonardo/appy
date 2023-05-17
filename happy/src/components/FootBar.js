import React , {useState} from 'react';
import { FaHome, FaCog, FaUser, FaComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./footbar.css"

const FootBar = ({activePage}) => {



  return (
    <>
    <div className="foot-box" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      
      <Link to={"/appy"}><FaHome className={activePage==0? "active": ""} size={32} /></Link>
      <Link to={"/chatList"}><FaComments className={activePage==1? "active": ""} size={32} /></Link>
      <Link to={"/settings"}><FaCog className={activePage==2? "active": ""}  size={32} /></Link>

      <FaUser className={activePage==3? "active": ""} size={32} />
      
    </div>
    </>
  );
}

export default FootBar;