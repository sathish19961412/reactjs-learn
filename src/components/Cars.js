import React from "react";

function Cars(props){

    // const {brand,color} = props
    const {Carinfo} = props
    const {brand,color}= Carinfo
    
    const text=`Hi, Im a ${color} ${brand} Car`;
    return(
        <h2>{text}</h2>
    );
}

export default Cars;