import React from 'react';
import './App.css';
import ResumeMatch from './components/ResumeMatch/ResumeMatch';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Searchbar/>
      <ResumeMatch />
      <Footer/>
    </div>
  );
}

export default App;
