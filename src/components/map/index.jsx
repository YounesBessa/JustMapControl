import './index.css';
import React from "react";
import { useParams } from "react-router-dom";
import Beacon from '../beacon';
import axios from 'axios';

const Map = () => {
    const { number } = useParams();

    const [matchtimeline, setmatch] = React.useState("vide");
    const [info, setInfo] = React.useState('');

    const getmatch = (idmatch) => {

        axios.get(
            process.env.REACT_APP_API_URL + "match/timeline/" + idmatch,
            {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*",
                },
            }
        ).then((res) => {
            setmatch(res.data);
        });
    }

    React.useEffect(() => {
        getmatch(number);
    }, [number]);

    var maxFrames = -1;
   
    function handleChange(event) {
        const frames = event.target.value;
        console.log(frames);
        if(frames == maxFrames){
            var match = matchtimeline.matchJson.frames.map((frame) =>
                frame.events.map((event,index) => {
                    if (event.type === "CHAMPION_KILL") {
                        const x = event.position.x;
                        const y = event.position.y;
                        let team = "";
                        if (event.killerId <= 5) {
                            team = "100";
                        } else {
                            team = "200";
                        }
                        return <Beacon x={x} y={y} team={team} key={index} />;
                    }
                }
                )
            );
            setInfo(match);
            
        } else {
            var match = matchtimeline.matchJson.frames[frames].events.map((event, index) =>{
                if (event.type === "CHAMPION_KILL") {
                    const x = event.position.x;
                    const y = event.position.y;
                    let team = "";
                    if (event.killerId <= 5) {
                        team = "100";
                    } else {
                        team = "200";
                    }
                    return <Beacon x={x} y={y} team={team} key={index} />;
                }
            });
            console.log(match);
            setInfo(match);
        }
    }

    if (matchtimeline !== "vide") {
        
    

    matchtimeline.matchJson.frames.map((frame) => {
        maxFrames++;
    })
    }
        
    

    return(
        <div className='contain'>
            <div className="Map">
                {info}
            </div>
            <label for="frames">Frames (0 et {maxFrames})</label>
            <input type="range" onChange={handleChange} id="frames" name="frames" min="0" max={maxFrames}></input>
        </div>
    )
}
export default Map;