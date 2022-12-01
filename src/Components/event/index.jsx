import './index.css';
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import kill from "../../images/kill.png";

const Event = ({killer, victim, team, monster}) => {

    const { number } = useParams();
    const { puuid } = useParams();
    const [match, setmatch] = React.useState();
  
    async function getmatch(puuid) {
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_URL + "match/" + number + "/account/" + puuid
        );
        setmatch(response.data[0]);
      } catch (error) {
        return [];
      }
    }
  
    React.useEffect(() => {
      getmatch(puuid);
    }, []);

    if(monster){
        let style;
        let killerName;
        let killerPic;

        if(match){
            killerName = match.matchJson.participants[killer -1].championName;
            killerPic = "https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/" + killerName + ".png";
        }
        if(team === '100'){
            style = {
                backgroundColor: '#5383E8'
            };
        } else {
            style = {   
                backgroundColor: '#F12B15'
            }
        }

        let monsterPic = '/images/' + monster + '.png';
        
        return(
            <div className="event" style={style}>
                <img src={killerPic} alt={killerName}/>
                <img src={kill} alt="killed"/>
                <img src={monsterPic} alt={monster}/>
            </div>
        )
    } else {

        let style;
        let killerName;
        let victimName;
        let killerPic;
        let victimPic;
    
        if(match){
            killerName = match.matchJson.participants[killer-1].championName;
            victimName = match.matchJson.participants[victim-1].championName;
            killerPic = "https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/" + killerName + ".png";
            victimPic = "https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/" + victimName + ".png";
        }
        
        if(team === '100'){
            style = {
                backgroundColor: '#5383E8'
            };
        } else {
            style = {   
                backgroundColor: '#F12B15'
            }
        }
        
        return(
            <div className="event" style={style}>
                <img src={killerPic} alt={killerName}/>
                <img src={kill} alt="killed"/>
                <img src={victimPic} alt={victimName}/>
            </div>
        )
    }
    
}
export default Event;