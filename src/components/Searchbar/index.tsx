import React from "react";
import "./index.css";

const Searchbar: React.FC = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div className="SearchbarContainer"
      onSubmit={handleSubmit}
      >
      <input className="FakeField"
        type="text"
        placeholder={"searchbar.where"}/>
      <button className="SubmitButton" title={"Search"}>
        <img className="SubmitIcon"
          src={"/static/images/icons/search-plane.svg"}
          alt={""}
          width={50}
          height={25}
        />
      </button>
    </div>
  );
};

export default Searchbar;
