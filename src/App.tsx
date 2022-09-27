import React from 'react';
import './App.css';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Searchbar/>
      <Footer/>
    </div>
  );
}

export default App;
