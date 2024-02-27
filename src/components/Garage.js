import React, { Fragment } from "react";
import Apple from './Apple';
import Cars from "./Cars";
function Garage(){
    // const brand='Ford';
    // const color="Black";
    const Carinfo={
        brand:"Ford",
        color:"red"
    }
    const appleInfo={
        type:"Fuji",
        color:"green"
    }
    return(
        <Fragment>
            <h2>Who lives inside my Garage?</h2>
            {/* <Cars brand={brand} color={'Black'} /> */}
            <Cars Carinfo={Carinfo}/>
            <Apple appleInfo={appleInfo} />
        </Fragment>
    );
}

export default Garage;