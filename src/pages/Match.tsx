import React from "react";
import ScoreBoard from "../components/scoreboard";
import Map from "../components/map";
import Header from "../components/Header";
import Footer from "../components/Footer";

export interface IMatchPageProps {}

const MatchPage: React.FunctionComponent<IMatchPageProps> = (props) => {

  return (
    <div>
      <Header />
      <div className="mapContainer">
        <Map />
      </div>
      <div className="ScorBoard">
        <ScoreBoard />
      </div>
      <Footer />
    </div>
  );
};

export default MatchPage;
