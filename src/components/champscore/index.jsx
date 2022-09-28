import './index.css';

const Champscore = ({pseudo, invSpell1, invSpell2, champ, level, kda, dmg, cs, item1, item2, item3, item4, item5, item6, item7, team}) => {
    
    let style;

    if(team === '100'){
        style = {
            backgroundColor: '#5383E8',
        };
    } else {
        style = {   
            backgroundColor: '#F12B15',
        }
    }

    return(
        <div className="flex container" style={style}>
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
                    <img className="imgItem" src={item1} alt={item1}></img>
                    <img className="imgItem" src={item2} alt={item2}></img>
                </div>
                <div className="flex-column">
                    <img className="imgItem" src={item3} alt={item3}></img>
                    <img className="imgItem" src={item4} alt={item4}></img>
                </div>
                <div className="flex-column">
                    <img className="imgItem" src={item5} alt={item5}></img>
                    <img className="imgItem" src={item6} alt={item6}></img>
                </div>
                <img className="imgItem" src={item7} alt={item7}></img>
            </div>
        </div>    
    )
}
export default Champscore;