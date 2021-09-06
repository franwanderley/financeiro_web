import React from 'react';
import { FiSun, FiUser } from 'react-icons/fi';
import '../styles/header.css';

export function Header(){
   return (
     <div className="header">
        <div className="logo" >
           <img src="./logo.png" alt="logo do site" />
        </div>
        <div className="bottom">
            <FiSun color="#686d98" size={30}/>
            <div className="line"></div>
           <FiUser color="#686d98" size={40}/>
        </div>
     </div> 
   );
} 