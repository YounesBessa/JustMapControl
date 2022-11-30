import React from 'react';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';
import Teemo from "../images/teemo.gif";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    return (
      <div>
        <Header/>
      <Searchbar/>
      <p className="hello">{"Salutations, Invocateur "}</p>
      <img src={Teemo} className="teemo" alt="Teemo"/>
      <p className="welcome">Bienvenue sur JMC !</p>
        <Footer/>
        </div>
    );
};

export default HomePage;