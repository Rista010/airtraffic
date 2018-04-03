import React from 'react';
import planeLogo from '../images/plane.png';

const Flight = ({
    props,
}) => 
    <div className="Flight">
        <div className="compass">
            {props.Trak < 180 ? <img src={planeLogo} className="east"/> : <img src={planeLogo} className="west"/>}
        </div>
        <div className="divider"></div> 
        <div className="flightNumber">
            Flight No: {props.Icao}   
        </div>
        <div className="divider"></div> 
        <div className="altitude">
            Altitude: {props.Alt} 
        </div>
    </div>

export default Flight;
    