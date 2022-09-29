import './index.css';
import Champscore from '../champscore';

const ScoreBoard = ({rKill, bKill, rGold, bGold, rNash, bNash, rDrag, bDrag, rTower, bTower}) => {
    
    const pseudo = 'Invocateur';
    const invSpell1 = 'https://ddragon.leagueoflegends.com/cdn/12.18.1/img/spell/SummonerFlash.png';
    const invSpell2 = 'https://ddragon.leagueoflegends.com/cdn/12.18.1/img/spell/SummonerBarrier.png';
    const champ = 'https://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/Ahri.png';
    const level = '16';
    const kda = '13/01/12';
    const dmg = '42000';
    const cs = '173';
    const item1 = 'https://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/1001.png';
    const item2 = 'https://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/1055.png';
    const item3 = 'https://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/2421.png';
    const item4 = 'https://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/3036.png';
    const item5 = 'https://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/8020.png';
    const item6 = 'https://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/7020.png';
    const item7 = 'https://ddragon.leagueoflegends.com/cdn/12.18.1/img/item/3340.png';
    const teamB = '100';
    const teamR = '200';

    const totalKill = rKill + bKill;
    const rKillPourc = rKill / totalKill * 100 ;
    const bKillPourc = bKill / totalKill * 100 ;
    
    let styleKillR;
    styleKillR = {
        width: rKillPourc + '%'
    }
    let styleKillB;
    styleKillB = {
        width: bKillPourc + '%'
    }

    const totalGold = rGold + bGold;
    const rGoldPourc = rGold / totalGold * 100;
    const bGoldPourc = bGold / totalGold * 100;

    let styleGoldR;
    styleGoldR = {
        width: rGoldPourc + '%'
    }
    let styleGoldB;
    styleGoldB = {
        width: bGoldPourc + '%'
    }

    return(
        <div>
            <div className="blueTeam">
                <Champscore
                pseudo={pseudo}
                invSpell1={invSpell1}
                invSpell2={invSpell2}
                champ={champ}
                level={level}
                kda={kda}
                dmg={dmg}
                cs={cs}
                item1={item1}
                item2={item2}
                item3={item3}
                item4={item4}
                item5={item5}
                item6={item6}
                item7={item7}
                team={teamB}
                />
                <Champscore
                pseudo={pseudo}
                invSpell1={invSpell1}
                invSpell2={invSpell2}
                champ={champ}
                level={level}
                kda={kda}
                dmg={dmg}
                cs={cs}
                item1={item1}
                item2={item2}
                item3={item3}
                item4={item4}
                item5={item5}
                item6={item6}
                item7={item7}
                team={teamB}
                />
                <Champscore
                pseudo={pseudo}
                invSpell1={invSpell1}
                invSpell2={invSpell2}
                champ={champ}
                level={level}
                kda={kda}
                dmg={dmg}
                cs={cs}
                item1={item1}
                item2={item2}
                item3={item3}
                item4={item4}
                item5={item5}
                item6={item6}
                item7={item7}
                team={teamB}
                />
                <Champscore
                pseudo={pseudo}
                invSpell1={invSpell1}
                invSpell2={invSpell2}
                champ={champ}
                level={level}
                kda={kda}
                dmg={dmg}
                cs={cs}
                item1={item1}
                item2={item2}
                item3={item3}
                item4={item4}
                item5={item5}
                item6={item6}
                item7={item7}
                team={teamB}
                />
                <Champscore
                pseudo={pseudo}
                invSpell1={invSpell1}
                invSpell2={invSpell2}
                champ={champ}
                level={level}
                kda={kda}
                dmg={dmg}
                cs={cs}
                item1={item1}
                item2={item2}
                item3={item3}
                item4={item4}
                item5={item5}
                item6={item6}
                item7={item7}
                team={teamB}
                />
            </div>
            <div className="middleInfo">
                <div className="blueObj flex">
                    <div className="flex-column obj">
                        <div className="bNashImg">

                        </div>
                        <p>
                            {bNash}
                        </p>
                    </div>
                    <div className="flex-column obj">
                        <div className="bDragImg">

                        </div>
                        <p>
                            {bDrag}
                        </p>
                    </div>
                    <div className="flex-column obj">
                        <div className="bTowerImg">

                        </div>
                        <p>
                            {bTower}
                        </p>
                    </div>
                </div>
                <div className="totBars flex-column">
                    <div className="totKills">
                        <div className="killBar">
                            <div className="blueKills" style={styleKillB}></div>
                            <div className="redKills" style={styleKillR}></div>
                        </div>
                        <ul className="statKills flex">
                            <li className="bKill">{bKill}</li>
                            <li className="totKill">Total Kill</li>
                            <li className="rKill">{rKill}</li>
                        </ul>
                    </div>
                    <div className="totGolds">
                        <div className="goldBar">
                            <div className="blueGolds" style={styleGoldB}></div>
                            <div className="redGolds" style={styleGoldR}></div>
                        </div>
                        <ul className="statGolds flex">
                            <li className="bGold">{bGold}</li>
                            <li className="totGold">Total Gold</li>
                            <li className="rGold">{rGold}</li>
                        </ul>
                    </div>
                </div>
                <div className="redObj flex">
                    <div className="flex-column obj">
                        <div className="rNashImg">

                        </div>
                        <p>
                            {rNash}
                        </p>
                    </div>
                    <div className="flex-column obj">
                        <div className="rDragImg">

                        </div>
                        <p>
                            {rDrag}
                        </p>
                    </div>
                    <div className="flex-column obj">
                        <div className="rTowerImg">

                        </div>
                        <p>
                            {rTower}
                        </p>
                    </div>
                </div>
            </div>
            <div className="redTeam">
            <Champscore
                pseudo={pseudo}
                invSpell1={invSpell1}
                invSpell2={invSpell2}
                champ={champ}
                level={level}
                kda={kda}
                dmg={dmg}
                cs={cs}
                item1={item1}
                item2={item2}
                item3={item3}
                item4={item4}
                item5={item5}
                item6={item6}
                item7={item7}
                team={teamR}
            />
            <Champscore
                pseudo={pseudo}
                invSpell1={invSpell1}
                invSpell2={invSpell2}
                champ={champ}
                level={level}
                kda={kda}
                dmg={dmg}
                cs={cs}
                item1={item1}
                item2={item2}
                item3={item3}
                item4={item4}
                item5={item5}
                item6={item6}
                item7={item7}
                team={teamR}
            /><Champscore
                pseudo={pseudo}
                invSpell1={invSpell1}
                invSpell2={invSpell2}
                champ={champ}
                level={level}
                kda={kda}
                dmg={dmg}
                cs={cs}
                item1={item1}
                item2={item2}
                item3={item3}
                item4={item4}
                item5={item5}
                item6={item6}
                item7={item7}
                team={teamR}
            />
            <Champscore
                pseudo={pseudo}
                invSpell1={invSpell1}
                invSpell2={invSpell2}
                champ={champ}
                level={level}
                kda={kda}
                dmg={dmg}
                cs={cs}
                item1={item1}
                item2={item2}
                item3={item3}
                item4={item4}
                item5={item5}
                item6={item6}
                item7={item7}
                team={teamR}
            />
            <Champscore
                pseudo={pseudo}
                invSpell1={invSpell1}
                invSpell2={invSpell2}
                champ={champ}
                level={level}
                kda={kda}
                dmg={dmg}
                cs={cs}
                item1={item1}
                item2={item2}
                item3={item3}
                item4={item4}
                item5={item5}
                item6={item6}
                item7={item7}
                team={teamR}
            />
            

            </div>

        </div>    
    )
}
export default ScoreBoard;