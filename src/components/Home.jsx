import React from "react";
import "./Home.css";

const Home = (props) => {
    console.log(props);
    return (
        <div className="card">
            <img src={props.imgscr} alt={props.name}/>
            <div className="card-details">
                <div className="card-series-type">{props.details}</div>
                <div className="card-name"><p className="card-name-para">{props.name}</p></div>
                <div className="card-button"><button><a href={props.link}>WATCH NOW</a></button></div>
            </div>
        </div>
    );

}

export default Home;