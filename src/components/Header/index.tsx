import React from "react";
import './index.css';

const Header: React.FC = () => {
  return (
    <div className="HeaderContainer">
      <div className="ScuttlerContainer">
        <div className="Scuttler" />
        <div className="ScuttlerText">
        <h1 className="Title">JMC</h1>
        <h2 className="Subtitle">Just Map Control</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
