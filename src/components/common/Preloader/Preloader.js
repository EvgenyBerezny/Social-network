import React from "react";
import preloaderImg from "../../../images/Spinner-3.gif";


let Preloader = (props) => {
    return (
        <img src={preloaderImg} alt="Loading..."/>
    )
}

export default Preloader;