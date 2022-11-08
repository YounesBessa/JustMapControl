import './index.css';

const Beacon = ({x, y, team}) => {
    let style;
    
    let left = ((x + 5)/15000)*100;
    let bottom = ((y + 5)/15000)*100;
    if(team === '100'){
        style = {
            backgroundColor: '#5383E8',
            left: left + '%',
            bottom: bottom + '%'
        };
    } else {
        style = {   
            backgroundColor: '#F12B15',
            left: left + '%',
            bottom: bottom + '%'
        }
    }
    

    

    return(
        <div className="Beacon" style={style}>
        </div>
    )
}
export default Beacon;