import "./index.css";
import React from "react";
import { useParams } from "react-router-dom";
import Champscore from "../champscore";
import axios from 'axios';


const ScoreBoard = () => {
  const { number } = useParams();
  const { puuid } = useParams();
  const [match, setmatch] = React.useState();

  async function getmatch(puuid) {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "match/" + number + "/account/" + puuid
      );
      setmatch(response.data);
    } catch (error) {
      return [];
    }
  }

  React.useEffect(() => {
    getmatch(puuid);
  }, []);
  if (match) {
    var listing = match.map((matchdetails) => {
      var blueTeam = matchdetails.matchJson.participants.map((participant,index) => {
        if (participant.teamId === 100) {
          var blueTeam = (
            <Champscore
              pseudo={participant.summonerName}
              invSpell1={
                participant.summoner1Id
              }
              invSpell2={
                participant.summoner2Id
              }
              champ={
                "https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/" +
                participant.championName +
                ".png"
              }
              level={participant.champLevel}
              kda={
                participant.kills +
                "/" +
                participant.deaths +
                "/" +
                participant.assists
              }
              dmg={participant.totalDamageDealt}
              cs={participant.totalMinionsKilled}
              item1={participant.item1}
              item2={participant.item2}
              item3={participant.item3}
              item4={participant.item0}
              item5={participant.item4}
              item6={participant.item5}
              item7={participant.item6}
              team={participant.teamId}
              index={index}
              key={participant.summonerName}
            />
          );
        }
        return blueTeam;
      });

      var redTeam = matchdetails.matchJson.participants.map((participant,index) => {
        if (participant.teamId === 200) {
          var redTeam = (
            <Champscore
              pseudo={participant.summonerName}
              invSpell1={
                participant.summoner1Id
              }
              invSpell2={
                participant.summoner2Id
              }
              champ={
                "https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/" +
                participant.championName +
                ".png"
              }
              level={participant.champLevel}
              kda={
                participant.kills +
                "/" +
                participant.deaths +
                "/" +
                participant.assists
              }
              dmg={participant.totalDamageDealt}
              cs={participant.totalMinionsKilled}
              item1={participant.item1}
              item2={participant.item2}
              item3={participant.item3}
              item4={participant.item0}
              item5={participant.item4}
              item6={participant.item5}
              item7={participant.item6}
              team={participant.teamId}
              index={index}
              key={participant.summonerName}
            />
          );
        }
        return redTeam;
      });
      var html = (
        <div key="1">
          <div className="blueTeam">{blueTeam}</div>
          <div className="middleInfo">
            <div className="blueObj flex">
              <div className="flex-column obj">
                <div className="bNashImg"></div>
                <p>{matchdetails.matchJson.teams[0].objectives.baron.kills}</p>
              </div>
              <div className="flex-column obj">
                <div className="bDragImg"></div>
                <p>{matchdetails.matchJson.teams[0].objectives.dragon.kills}</p>
              </div>
              <div className="flex-column obj">
                <div className="bTowerImg"></div>
                <p>{matchdetails.matchJson.teams[0].objectives.tower.kills}</p>
              </div>
            </div>
            <div className="totBars flex-column">
              <div className="totKills">
                <div className="killBar">
                  <div className="blueKills" style={{ width: 60 + "%" }}></div>
                  <div className="redKills" style={{ width: 40 + "%" }}></div>
                </div>
                <ul className="statKills flex">
                  <li className="bKill">
                    {matchdetails.matchJson.teams[0].objectives.champion.kills}
                  </li>
                  <li className="totKill">Total Kill</li>
                  <li className="rKill">
                    {matchdetails.matchJson.teams[1].objectives.champion.kills}
                  </li>
                </ul>
              </div>
              <div className="totGolds">
                <div className="goldBar">
                  <div className="blueGolds" style={{ width: 60 + "%" }}></div>
                  <div className="redGolds" style={{ width: 40 + "%" }}></div>
                </div>
                <ul className="statGolds flex">
                  <li className="bGold">{6000}</li>
                  <li className="totGold">Total Gold</li>
                  <li className="rGold">{4000}</li>
                </ul>
              </div>
            </div>
            <div className="redObj flex">
              <div className="flex-column obj">
                <div className="rNashImg"></div>
                <p>{matchdetails.matchJson.teams[1].objectives.baron.kills}</p>
              </div>
              <div className="flex-column obj">
                <div className="rDragImg"></div>
                <p>{matchdetails.matchJson.teams[1].objectives.baron.kills}</p>
              </div>
              <div className="flex-column obj">
                <div className="rTowerImg"></div>
                <p>{matchdetails.matchJson.teams[1].objectives.baron.kills}</p>
              </div>
            </div>
          </div>
          <div className="redTeam">{redTeam}</div>
        </div>
      );
      return html;
    });
  }
  return listing;
};
export default ScoreBoard;
