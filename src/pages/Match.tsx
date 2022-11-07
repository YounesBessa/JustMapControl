import React from "react";
import ScoreBoard from "../components/scoreboard";
import Map from "../components/map";
import Beacon from "../components/beacon";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

export interface IMatchPageProps {}
type Matchdetails = {
  id: number;
  idMatch: string;
  matchJson: {
    [key: string]:any
  }
}

const MatchPage: React.FunctionComponent<IMatchPageProps> = (props) => {
  const { number } = useParams();

  const [matchtimeline, setmatch] = React.useState<any>();

  const axios = require("axios");
  async function getmatch(idmatch: string | undefined) {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "match/timeline/" + idmatch,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
          },
        }
      );
      setmatch(response.data);
    } catch (error) {
      return [];
    }
  }

  React.useEffect(() => {
    getmatch(number);
  });

  /*!matchtimeline && matchtimeline.map((matchdetails:Matchdetails) =>
    matchdetails.matchJson.frames.map((frame:{[key: string]:any}) =>
      frame.events.map((event:{[key: string]:any}) => {
          if(event.type === "CHAMPION_KILL"){
            const x = event.position.x;
            const y = event.position.y;
            let team = "";
            if(event.killerId <= 5){
              team = "100";
            } else {
              team = "200";
            }
            return <Beacon x={x} y={y} team={team} />
          }
        }
      )
    )
  )*/
  console.log(matchtimeline);
  if(matchtimeline){
    matchtimeline.map((matchdetails:Matchdetails) =>
      matchdetails.matchJson.frames.map((frame:{[key: string]:any}) =>
        frame.events.map((event:{[key: string]:any}) => {
            if(event.type === "CHAMPION_KILL"){
              const x = event.position.x;
              const y = event.position.y;
              let team = "";
              if(event.killerId <= 5){
                team = "100";
              } else {
                team = "200";
              }
              return <Beacon x={x} y={y} team={team} />
            }
          }
        )
      )
    )
  }

  return (
    <div>
      <Header />
      <div className="mapContainer">
        <Map />
        {/*!matchtimeline && matchtimeline.map((matchdetails:Matchdetails) =>
          matchdetails.matchJson.frames.map((frame:{[key: string]:any}) =>
            frame.events.map((event:{[key: string]:any}) => {
                if(event.type === "CHAMPION_KILL"){
                  const x = event.position.x;
                  const y = event.position.y;
                  let team = "";
                  if(event.killerId <= 5){
                    team = "100";
                  } else {
                    team = "200";
                  }
                  return <Beacon x={x} y={y} team={team} />
                }
              }
            )
          )
            )*/}
      </div>
      <div className="ScorBoard">
        <ScoreBoard />
      </div>
      <Footer />
    </div>
  );
};

export default MatchPage;
