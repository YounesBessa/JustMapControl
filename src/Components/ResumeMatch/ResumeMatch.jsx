import "./ResumeMatch.css";
import React from "react";

const ResumeMatch = () => {
  var puuid = "YCMb0W79SBOE95yo6y0IR4_QmjfDz87aGEpYsXcEoMtgFU7RhCIS6XmV2C_R4v48j3SlrrIYwIyKeQ";
  const [matchlist, setmatchlist] = React.useState();
  const axios = require("axios");
  async function getAllmatchs(puuid) {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL +
          "matchs/" +puuid,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
          },
        }
      );
      setmatchlist(response.data);
      return response.data;
    } catch (error) {
      return [];
    }
  }

  React.useEffect(() => {
    getAllmatchs(puuid);
  });

  if (matchlist) {
    var listing = matchlist.map((match) => {
      var url =
        "https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/" +
        match.championName +
        ".png";
      var win = "";
      var winclass = "";
      if (match.win) {
        win = <p className="result-vic">Victoire</p>;
        winclass = "flex container-vic";
      } else {
        win = <p className="result">Défaite</p>;
        winclass = "flex container";
      }
      var html = (
        <div key={match.id} className={winclass}>
          <div className="flex dark-container">
            {win}
            <div className="flex info">
              <p>{(match.timePlayed / 60).toFixed(2).replace(".", ":")}</p>
              <p>
                {match.kills}/{match.deaths}/{match.assists}
              </p>
            </div>
          </div>
          <div className="flex image">
            <img src={url} alt="icon du champion" />
            <p className="fly">{match.champLevel}</p>
          </div>
        </div>
      );
      return html;
    });
  }

  return <div>{listing}</div>;
};
export default ResumeMatch;
