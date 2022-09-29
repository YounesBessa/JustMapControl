import React from 'react';
import './App.css';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Footer from './components/Footer';
import Map from './components/map';
import Beacon from './components/beacon';
import ScoreBoard from './components/scoreboard';

function App() {

  const x = 5420;
  const y =  12566;
  const team = '200' ;

  const rKill = 12;
  const bKill = 23;
  const rGold = 35000;
  const bGold = 49000;
  const rNash = 0;
  const bNash = 1;
  const rDrag = 1;
  const bDrag = 4;
  const rTower = 3;
  const bTower = 11;

  return (
    <div className="App">
      <Header/>
      <Searchbar/>
        <div className="mapContainer">
          <Map />
          <Beacon 
          x={x}
          y={y}
          team={team}
          />
        </div>
        <div className="ScorBoard">
          <ScoreBoard
            rKill={rKill}
            bKill={bKill}
            rGold={rGold}
            bGold={bGold}
            rNash={rNash}
            bNash={bNash}
            rDrag={rDrag}
            bDrag={bDrag}
            rTower={rTower}
            bTower={bTower}
          />
        </div>
        <Footer/>
        
    </div>
  );
}

export default App;
