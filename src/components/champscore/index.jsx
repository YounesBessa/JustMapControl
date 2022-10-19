import "./index.css";
import EmptyItem from "../../images/emptyItem.png";

const Champscore = ({
  pseudo,
  invSpell1,
  invSpell2,
  champ,
  level,
  kda,
  dmg,
  cs,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  team,
}) => {
  let style;

  if (team === 100) {
    style = {
      backgroundColor: "rgb(83, 131, 232, 0.5)",
    };
  } else {
    style = {
      backgroundColor: "rgb(241, 43, 21, 0.5)",
    };
  }

  //define all itemSrc properties
    let item1Src = EmptyItem;
    let item2Src = EmptyItem;
    let item3Src = EmptyItem;
    let item4Src = EmptyItem;
    let item5Src = EmptyItem;
    let item6Src = EmptyItem;
    let item7Src = EmptyItem;

  if(item1 === 0){
    item1Src = EmptyItem;
  } else {
    item1Src = "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" + item1 + ".png";
  }
  if(item2 === 0){
    item2Src = EmptyItem;
  } else {
    item2Src = "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" + item2 + ".png";
  }
  if(item3 === 0){
    item3Src = EmptyItem;
  } else {
    item3Src = "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" + item3 + ".png";
  }
  if(item4 === 0){
    item4Src = EmptyItem;
  } else {
    item4Src = "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" + item4 + ".png";
  }
  if(item5 === 0){
    item5Src = EmptyItem;
  } else {
    item5Src = "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" + item5 + ".png";
  }
  if(item6 === 0){
    item6Src = EmptyItem;
  } else {
    item6Src = "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" + item6 + ".png";
  }
  if(item7 === 0){
    item7Src = EmptyItem;
  } else {
    item7Src = "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" + item7 + ".png";
  }

  return (
    <div className="flex container-score" style={style}>
      <div className="relat">
        <img className="imgChamp" src={champ} alt={champ}></img>
        <p className="level">{level}</p>
      </div>
      <div className="flex-column">
        <img className="imgSpell" src={invSpell1} alt={invSpell1}></img>
        <img className="imgSpell" src={invSpell2} alt={invSpell2}></img>
      </div>
      <div className="flex-column gap">
        <p>{pseudo}</p>
        <p>{kda}</p>
      </div>
      <div className="flex-column gap">
        <p>Dégats</p>
        <div className="damage">{dmg}</div>
      </div>
      <p>{cs}</p>
      <div className="flex items">
        <div className="flex-column">
          <img
            className="imgItem"
            src={
              item1Src
            }
            alt="item1"
          ></img>
          <img
            className="imgItem"
            src={
              item2Src
            }
            alt="item2"
          ></img>
        </div>
        <div className="flex-column">
          <img
            className="imgItem"
            src={
              item3Src
            }
            alt="item3"
          ></img>
          <img
            className="imgItem"
            src={
              item4Src
            }
            alt="item4"
          ></img>
        </div>
        <div className="flex-column">
          <img
            className="imgItem"
            src={
              item5Src
            }
            alt="item5"
          ></img>
          <img
            className="imgItem"
            src={
              item6Src
            }
            alt="item6"
          ></img>
        </div>
        <img
          className="imgItem"
          src={
            item7Src
          }
          alt="item7"
        ></img>
      </div>
    </div>
  );
};
export default Champscore;
