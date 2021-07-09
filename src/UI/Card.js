import React from "react";

import classes from "./CSS/Card.module.css";

const Card=props=>{
    return <div className={classes.card}>{props.children}</div>;
}

// *Export component
export default Card;