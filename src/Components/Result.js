import React from "react";

import classes from "./CSS/Result.module.css";

import loveImage from "../assets/love.png";

import Img from "../UI/Img";


//*Import components 
import Counter from "./Counter";

const Result=props=>{
    let {userName,userPartnerName}=props.pairDetails;

  return(
      <>
      <h2 className={classes.result__heading}>Your love percentage is:</h2>
      <Counter pair={props.pairDetails}/>

      <div className={classes.coupleNames__container}>
          <p className={classes.coupleName}>{userName.split(" ")[0]}</p>
          <div className={classes.image__container}>
              <Img src={loveImage} alt="Love"/>
          </div>
          <p className={classes.coupleName}>{userPartnerName.split(" ")[0]}</p>
      </div>
     
      <footer>
          <p className={classes.note}><strong>Note:</strong>This is just fun project.Don't take it seriously.<b>Keep loving each other.</b></p>
      </footer>
      </>
  )


}

export default Result;