import React, { Fragment } from "react";
import Apple from './Apple';
import Cars from "./Cars";
function Garage(){
    const isDoorOpened=false;
    // const brand='Ford';
    // const color="Black";
    const Carinfo={
        brand:"Ford",
        color:"red"
    }
    // const Carinfo={};
    const appleInfo={
        type:"Fuji",
        color:"green"
    }
    const carList=[
        {brand:"BMW",color:"Red"},
        {brand:"Ford",color:"Green"},
        {brand:"Tesla",color:"Black"},
    ]
    const showCarInfo = Carinfo.brand !==undefined && Carinfo.color !==undefined;
    return(       
        <Fragment>
            <h2>Who lives inside my Garage?</h2>
            {/* <Cars brand={brand} color={'Black'} /> */}
            {/* { showCarInfo?<Cars Carinfo={Carinfo}/>:null} */}
            { showCarInfo && <Cars Carinfo={Carinfo}/>}
            <Apple appleInfo={appleInfo} />
            {isDoorOpened?<h2>Garage door is Open</h2>:<h2>Garage door is Close</h2>}
            <ul>
                <li><Cars/></li>
            </ul>
        </Fragment>
    );
}

export default Garage;