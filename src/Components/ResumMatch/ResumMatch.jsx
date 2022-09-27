import "./ResumMatch.css";
import React from "react";

const ResumMatch = () => {
  const [matchlist, setmatchlist] = React.useState();
  const axios = require("axios");
  async function getAllmatchs() {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL +
          "matchs/s2sXQCDQcxhNXQsspjvRNy7R_jdq1deol9qgTWiT-h9kBSfUNYat4WMjRwl39vAlIQus9UA1vo1jwQ",
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
    getAllmatchs();
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
export default ResumMatch;
