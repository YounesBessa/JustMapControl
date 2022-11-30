import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header: React.FC = () => {
  return (
    <Link to="/">
      <div className="HeaderContainer">
        <div className="ScuttlerContainer">
          <div className="Scuttler" />
          <div className="ScuttlerText">
            <h1 className="Title">JMC</h1>
          </div>
        </div>
        <h1 className="TitleText">JustMapControl</h1>
        <h1 className="TitleText2">LoL Stats</h1>
      </div>
    </Link>
  );
};

export default Header;
