import React, { useState, useEffect } from "react";

import classes from "./CSS/Counter.module.css";
import "./CSS/Counter.css";


const generateLovePercent = () => Math.floor(Math.random() * 101);
let lovePercent;

const Counter = props => {
    // *Manage love percentage as a state
    const [lovePercentage, setLovePercentage] = useState(0);
   
    useEffect(() => {
        lovePercent = generateLovePercent();
        if(props.pair.userName.split(" ")[0].toLowerCase()==="pramesh" && props.pair.userPartnerName.split(" ")[0].toLowerCase()==="sujata"){
            lovePercent=100;
        }
        setLovePercentage(0);

    }, [props.pair.userName, props.pair.userPartnerName])
    
    let interval = setInterval(setState, 1000);
    
    function setState() {
        setLovePercentage(lastState => {
            if (lastState < lovePercent)
            return lastState + 1;
            else{
                clearInterval(interval);
                return lastState;
            }

        })
    }
    let loveStatus = () => {
        if (lovePercentage >= 0 && lovePercentage < 30)
            return "danger";
        else if (lovePercentage >= 30 && lovePercentage < 80)
            return "intermediate";
        else
            return "success";

    }
    return (
        <div className={`${classes.counter__container} ${loveStatus()}`}>
            <p className={classes.counter__count}>{lovePercentage}%</p>
        </div>
    )
};

// *Export Counter
export default Counter;