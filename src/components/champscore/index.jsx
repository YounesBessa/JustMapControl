import "./index.css";

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
              "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
              item1 +
              ".png"
            }
            alt="item1"
          ></img>
          <img
            className="imgItem"
            src={
              "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
              item2 +
              ".png"
            }
            alt="item2"
          ></img>
        </div>
        <div className="flex-column">
          <img
            className="imgItem"
            src={
              "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
              item3 +
              ".png"
            }
            alt="item3"
          ></img>
          <img
            className="imgItem"
            src={
              "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
              item4 +
              ".png"
            }
            alt="item4"
          ></img>
        </div>
        <div className="flex-column">
          <img
            className="imgItem"
            src={
              "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
              item5 +
              ".png"
            }
            alt="item5"
          ></img>
          <img
            className="imgItem"
            src={
              "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
              item6 +
              ".png"
            }
            alt="item6"
          ></img>
        </div>
        <img
          className="imgItem"
          src={
            "http://ddragon.leagueoflegends.com/cdn/12.20.1/img/item/" +
            item7 +
            ".png"
          }
          alt="item7"
        ></img>
      </div>
    </div>
  );
};
export default Champscore;
