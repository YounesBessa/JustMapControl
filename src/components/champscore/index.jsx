import './index.css';
import Items from '../items';

const Champscore = ({pseudo, invSpell1, invSpell2, champ, level, kda, dmg, cs, item1, item2, item3, item4, item5, item6, item7, team}) => {
    
    let style;

    if(team === 100){
        style = {
            backgroundColor: 'rgb(83, 131, 232, 0.5)',
        };
    } else {
        style = {   
            backgroundColor: 'rgb(241, 43, 21, 0.5)',
        }
    }

    return(
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
            
        </div>    
    )
}
export default Champscore;