import React, { useState } from "react";

import classes from "./CSS/InputForm.module.css";

import loveImage from "../assets/love.png";

// *Import Components
import Input from "../UI/Input";
import Img from "../UI/Img";
import Button from "../UI/Button";

const InputForm=props=>{
    // *Maintain state of input
    const [userName,setUserName]=useState("");
    const [userPartnerName,setUserPartnerName]=useState("");



    const userNameChangeHandler=value=>{
        setUserName(value)

    }
    const userPartnerNameChangeHandler=value=>{
        setUserPartnerName(value);
    }
    const formSubmitHandler=(event)=>{
        event.preventDefault();

        const pair={
            userName,
            userPartnerName
        }

        props.onFormSubmit(pair);

        // *Reset Values
        setUserName("");
        setUserPartnerName("");
    }

    return(
        <div className={classes.form__container}>
            <form className={classes.form} onSubmit={formSubmitHandler}>
                <div className={classes.row}>
                <Input type="text" name="user-name" label="Your Name" onChange={userNameChangeHandler} minLength={2} maxLength={25} value={userName}></Input>
                <div className={classes.image__container}>
                    <Img src={loveImage} alt="Love"></Img>
               </div>
                <Input type="text" name="user-partner-name" label="Your Partner Name" onChange={userPartnerNameChangeHandler} minLength={2} maxLength={25} value={userPartnerName}></Input>
                </div>
                <Button type="submit" className="calculate-btn" disabled>Calculate</Button>
            </form>
        </div>
    )
}

// *Export Component
export default InputForm;