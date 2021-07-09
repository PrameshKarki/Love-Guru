import React from "react";

import classes from "./CSS/Button.module.css";
import "./CSS/Button.css";

const Button=props=>{
    return <button className={`${classes.btn} ${props.className||''}`} type={props.type}>{props.children}</button>
}

// *Export Component
export default Button;