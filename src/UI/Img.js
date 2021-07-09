import React from "react";

import classes from "./CSS/Img.module.css";

const Img=props=>{
    return <img src={props.src} alt={props.alt} className={classes.image}/>
}

export default Img;