import React from "react";

import classes from "./CSS/Counter.module.css";

const Counter=props=>{
return(
    <div className={classes.counter__container}>
        <p className={classes.counter__count}>6%</p>
    </div>
)
};

// *Export Counter
export default Counter;