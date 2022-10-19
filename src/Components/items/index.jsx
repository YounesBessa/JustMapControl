import './index.css';

const Items = ({item1, item2, item3, item4, item5, item6, item7}) => {

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
}
export default Items;