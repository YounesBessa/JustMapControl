import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './components/map';
import Beacon from './components/beacon';

function App() {

  const x = '5420';
  const y =  '12566';
  const team = '200' ;

  return (
    <div className="App">
      <header className="App-header">

        <div className="mapContainer">
          <Map />
          <Beacon 
          x={x}
          y={y}
          team={team}
          />
        </div>
        
      </header>
    </div>
  );
}

export default App;
