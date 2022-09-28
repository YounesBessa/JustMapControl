import React, { useState } from "react";
import "./index.css";

const Searchbar: React.FC = () => {
  const [summoner, setSummoner] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // 👇️ prevent page refresh
    event.preventDefault();
    console.log(event.currentTarget.elements);

    console.log(event.currentTarget.elements[0]);
    
  };
  return (
    <div className="SeachbarWrap">
      <form onSubmit={handleSubmit}>
        <div className="Searchbar">
          <select name="regions" className="region-select">
            <option value="euw1">EUW</option>
            <option value="eun1">EUNE</option>
            <option value="na1">NA</option>
            <option value="kr">KR</option>
            <option value="jp1">JP</option>
            <option value="br1">BR</option>
            <option value="la1">LA1</option>
            <option value="la2">LA2</option>
            <option value="oci">OCI</option>
            <option value="tri">TRI</option>
            <option value="ru">RU</option>
          </select>
          <input
            type="text"
            className="SearchTerm"
            placeholder="What are you looking for?"
          />
          <button type="submit" className="SearchButton">
            <span className="ButtonText">Go</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
