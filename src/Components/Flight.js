import React from 'react';

const Flight = ({props}) => 
    <div>
        {props.Trak < 180 ? "E" : "W"} | Flight No: {props.Icao} | Altitude: {props.Alt} 
    </div>

export default Flight;
    