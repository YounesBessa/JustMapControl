import React from "react";
import { Link } from 'react-router-dom';
import './index.css';

const Header: React.FC = () => {
  return (
    <Link to="/">
    <div className="HeaderContainer">
      <div className="ScuttlerContainer">
        <div className="Scuttler" />
        <div className="ScuttlerText">
        <h1 className="Title">JMC</h1>
        <h2 className="Subtitle">Just Map Control</h2>        
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Header;
