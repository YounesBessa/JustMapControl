import React from "react";
import { Link } from "react-router-dom";
import './index.css';

const Footer: React.FC = () => {
  return (
    <Link to="/">
    <div className="FooterContainer">
      <div className="FooterContent">
        <p className="FooterText">© JustMapControl 2022 - All rights reserved</p>
        </div>
    </div>
    </Link>
  );
};

export default Footer;
