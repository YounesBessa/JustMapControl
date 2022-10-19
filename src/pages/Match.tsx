import React from "react";
import ScoreBoard from "../components/scoreboard";
import Map from "../components/map";
import Beacon from "../components/beacon";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

export interface IMatchPageProps {}

const MatchPage: React.FunctionComponent<IMatchPageProps> = (props) => {
  const x = 5420;
  const y = 12566;
  const team = "200";
  const { number } = useParams();

  const [matchtimeline, setmatch] = React.useState();

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
  return (
    <div>
      <Header />
      <div className="mapContainer">
        <Map />
        <Beacon x={x} y={y} team={team} />
      </div>
      <div className="ScorBoard">
        <ScoreBoard />
      </div>
      <Footer />
    </div>
  );
};

export default MatchPage;
