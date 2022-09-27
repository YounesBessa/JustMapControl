import React from "react";
import './index.css';

const Footer: React.FC = () => {
  return (
    <div className="Container">
      <ul className="Social">
        <li className="SocialItem">
          <a className="SocialLink" href={"https://linkedin.com/company/onruntime"}>
            <i className="SocialIcon" />
          </a>
        </li>
        <li className="SocialItem">
          <a className="SocialLink" href={"https://github.com/onRuntime"}>
            <i className="SocialIcon" />
          </a>
        </li>
        <li className="SocialItem">
          <a className="SocialLink" href={"https://discord.gg/ucX9c5yXmX"}>
            <i className="SocialIcon" />
          </a>
        </li>
        <li className="SocialItem">
          <a className="SocialLink" href={"https://twitter.com/onRuntime"}>
            <i className="SocialIcon"/>
          </a>
        </li>
        <li className="SocialItem">
          <a className="SocialLink" href={"https://instagram.com/onruntime"}>
            <i className="SocialIcon" />
          </a>
        </li>
        <li className="SocialItem">
          <a className="SocialLink"
            href={"https://youtube.com/channel/UCYpdQWzxWvJwQ4v45w-tk9A"}
          >
            <i className="SocialIcon" />
          </a>
        </li>
      </ul>
      <ul className="Lang">
        <div className="LangItem">
          <a className="LangLink" href={"/"}>
            English
          </a>
        </div>
        <div className="LangItem">
          <a className="LangLink" href={"/"}>
            Français
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Footer;
