import React from "react";
import "./index.css";

const Searchbar: React.FC = () => {

  return (
    <div className="SeachbarWrap">
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
      <input type="text" className="SearchTerm" placeholder="What are you looking for?"/>
      <button type="submit" className="SearchButton">
        <span className="ButtonText">Go</span>
     </button>
   </div>
</div>
  );
};

export default Searchbar;
