import preloader from "../../../assets/loader/jelly-fluid-loader.gif";
import React from "react";

let Preloader=(props)=>{
    return <div style={{backgroundColor: "white"}}>
        <img src ={preloader} />
    </div>
}

export default Preloader;