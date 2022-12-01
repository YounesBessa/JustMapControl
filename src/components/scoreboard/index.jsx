import "./index.css";
import React from "react";
import { useParams } from "react-router-dom";
import Champscore from "../champscore";
import axios from "axios";

const ScoreBoard = () => {
  const { number } = useParams();
  const { puuid } = useParams();
  const [match, setmatch] = React.useState();
  var totalBgold = 0;
  var totalRgold = 0;

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
      var blueTeam = matchdetails.matchJson.participants.map(
        (participant, index) => {
          if (participant.teamId === 100) {
            totalBgold += participant.goldEarned;
            var blueTeam = (
              <Champscore
                pseudo={participant.summonerName}
                invSpell1={participant.summoner1Id}
                invSpell2={participant.summoner2Id}
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
        }
      );

      var redTeam = matchdetails.matchJson.participants.map(
        (participant, index) => {
          if (participant.teamId === 200) {
            totalRgold += participant.goldEarned;
            var redTeam = (
              <Champscore
                pseudo={participant.summonerName}
                invSpell1={participant.summoner1Id}
                invSpell2={participant.summoner2Id}
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
        }
      );
      var totalKill =
        matchdetails.matchJson.teams[1].objectives.champion.kills +
        matchdetails.matchJson.teams[0].objectives.champion.kills;
      var totalB =
        (matchdetails.matchJson.teams[0].objectives.champion.kills /
          totalKill) *
        100;
      var totalR =
        (matchdetails.matchJson.teams[1].objectives.champion.kills /
          totalKill) *
        100;

      var totalgoldgame = totalBgold + totalRgold;
      var totalBgoldgame = (totalBgold / totalgoldgame) * 100;
      var totalRgoldgame = (totalRgold / totalgoldgame) * 100;
      var html = (
        <div key="1">
          <div className="middleInfo">
            <div className="totBars flex-column">
              <ul className="statKills flex">
                {/* <li className="bKill" style={{ color: "#5383e8" }}>
                  {matchdetails.matchJson.teams[0].objectives.champion.kills}
                </li> */}
                <li className="totKill">Total Kill</li>
                {/* <li className="rKill" style={{ color: "#f12b15" }}>
                  {matchdetails.matchJson.teams[1].objectives.champion.kills}
                </li> */}
              </ul>
              <div className="totKills">
                <div className="killBar">
                  <div
                    className="blueKills"
                    style={{ width: totalB + "%" }}
                  > <li className="bKill" style={{ color: "white" }}>
                  {matchdetails.matchJson.teams[0].objectives.champion.kills}
                </li></div>
                  <div
                    className="redKills"
                    style={{ width: totalR + "%" }}
                  ><li className="rKill" style={{ color: "white" }}>
                  {matchdetails.matchJson.teams[1].objectives.champion.kills}
                </li></div>
                </div>
              </div>
              <ul className="statGolds flex">
                {/* <li className="bGold" style={{ color: "#5383e8" }}>
                  {totalBgold}
                </li> */}
                <li className="totGold">Total Gold</li>
                {/* <li className="rGold" style={{ color: "#f12b15" }}>
                  {totalRgold}
                </li> */}
              </ul>
              <div className="totGolds">
                <div className="goldBar">
                  <div
                    className="blueGolds"
                    style={{ width: totalBgoldgame + "%" }}
                  ><li className="bGold" style={{ color: "white" }}>
                  {totalBgold}
                </li></div>
                  <div
                    className="redGolds"
                    style={{ width: totalRgoldgame + "%" }}
                  ><li className="rGold" style={{ color: "white" }}>
                  {totalRgold}
                </li></div>
                </div>
              </div>
            </div>
          </div>
          <div className="teamscontainer">
          <div className="teamsObj">
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
            <div className="redObj flex">
              <div className="flex-column obj">
                <div className="rNashImg"></div>
                <p>{matchdetails.matchJson.teams[1].objectives.baron.kills}</p>
              </div>
              <div className="flex-column obj">
                <div className="rDragImg"></div>
                <p>{matchdetails.matchJson.teams[1].objectives.dragon.kills}</p>
              </div>
              <div className="flex-column obj">
                <div className="rTowerImg"></div>
                <p>{matchdetails.matchJson.teams[1].objectives.tower.kills}</p>
              </div>
            </div>
          </div>
            <div className="teams">
              <div className="blueTeam">{blueTeam}</div>
              <div className="redTeam">{redTeam}</div>
            </div>
          </div>
        </div>
      );
      return html;
    });
  }
  return listing;
};
export default ScoreBoard;
