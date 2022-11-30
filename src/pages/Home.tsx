import React from "react";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <div>
      <Header />
      <Searchbar />
      <Footer />
    </div>
  );
};

export default HomePage;
