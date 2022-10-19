import axios from "axios";
import React, { useState } from "react";
import ResumeMatch from "../ResumeMatch/ResumeMatch";
import "./index.css";

const Searchbar: React.FC = () => {
  const [puuid, setPuuid] = useState("");
  const [region, setRegion] = useState("");
  const [pseudo, setPseudo] = useState("");

  async function getAccount(region: string, pseudo: string) {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL +
          "account/" +
          pseudo +
          "/region/" +
          region,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
          },
        }
      );
      setPuuid(response.data[0].puuid);
      return response.data;
    } catch (error) {
      return [];
    }
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // 👇️ prevent page refresh
    event.preventDefault();
    const region = document.getElementById("regions") as HTMLInputElement;
    const pseudo = document.getElementById("pseudo") as HTMLInputElement;
    setRegion(region.value);
    setPseudo(pseudo.value);
  };

  React.useEffect(() => {
    getAccount(region, pseudo);
  });
  return (
    <div>
      <div className="SeachbarWrap">
        <form onSubmit={handleSubmit}>
          <div className="Searchbar">
            <select name="regions" id="regions" className="region-select">
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
              id="pseudo"
              type="text"
              className="SearchTerm"
              placeholder="Enter Summoner Name"
            />
            <button type="submit" className="SearchButton">
              <span className="ButtonText">Go</span>
            </button>
          </div>
        </form>
      </div>
      <ResumeMatch puuid={puuid} />
    </div>
  );
};

export default Searchbar;
