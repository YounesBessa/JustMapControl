import React from "react";
import ScoreBoard from "../components/scoreboard";
import Map from "../components/map";
import Beacon from "../components/beacon";
import Header from "../components/Header";
import Footer from "../components/Footer";

export interface IMatchPageProps {}

const MatchPage: React.FunctionComponent<IMatchPageProps> = (props) => {
  const x = 5420;
  const y = 12566;
  const team = "200";

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
