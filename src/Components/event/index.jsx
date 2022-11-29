import './index.css';
import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Event = ({killer, victim, team}) => {

    const { number } = useParams();
    const { puuid } = useParams();
    const [match, setmatch] = React.useState();
  
    async function getmatch(puuid) {
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_URL + "match/" + number + "/account/" + puuid
        );
        console.log(response.data[0]);
        setmatch(response.data[0]);
      } catch (error) {
        return [];
      }
    }
  
    React.useEffect(() => {
      getmatch(puuid);
    }, []);

    console.log(match);


    let style;
    let killerName;
    let victimName;
    let killerPic;
    let victimPic;

    if(match){
        killerName = match.matchJson.participants[killer].championName;
        victimName = match.matchJson.participants[victim].championName;
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
        <div className="Event" style={style}>
            <img src={killerPic}/>
            <img src={victimPic}/>
        </div>
    )
}
export default Event;