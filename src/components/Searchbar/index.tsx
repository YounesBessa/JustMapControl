import React from "react";
import "./index.css";

const Searchbar: React.FC = () => {

  return (
    <div className="SeachbarWrap">
   <div className="Searchbar">
      <input type="text" className="SearchTerm" placeholder="What are you looking for?"/>
      <button type="submit" className="SearchButton">
        <span className="ButtonText">Go</span>
     </button>
   </div>
</div>
  );
};

export default Searchbar;
