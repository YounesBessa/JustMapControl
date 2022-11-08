import './index.css';
import React from "react";
import { useParams } from "react-router-dom";
import Beacon from '../beacon';
import axios from 'axios';

const Map = () => {
    const { number } = useParams();

    const [matchtimeline, setmatch] = React.useState("vide");

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
            console.log(res);
            setmatch(res.data);
        });
    }

    React.useEffect(() => {
        getmatch(number);
    }, []);

        if (matchtimeline !== "vide") {
               var match = matchtimeline.matchJson.frames.map((frame) =>
                    frame.events.map((event) => {
                        if (event.type === "CHAMPION_KILL") {
                            const x = event.position.x;
                            const y = event.position.y;
                            let team = "";
                            if (event.killerId <= 5) {
                                team = "100";
                            } else {
                                team = "200";
                            }
                            console.log(event);
                            return <Beacon x={x} y={y} team={team} />;
                        }
                    }
                    )
                )
        }
    

    return(
        <div className="Map">
            {match}
        </div>
    )
}
export default Map;