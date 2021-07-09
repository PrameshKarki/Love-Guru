import React from "react";

import classes from "./CSS/Result.module.css";

import loveImage from "../assets/love.png";

import Img from "../UI/Img";


//*Import components 
import Counter from "./Counter";

const Result=props=>{
  return(
      <>
      <h2 className={classes.result__heading}>Your love percentage is:</h2>
      <Counter/>
      <div className={classes.coupleNames__container}>
          <p className={classes.coupleName}>Ram</p>
          <div className={classes.image__container}>
              <Img src={loveImage} alt="Love"/>
          </div>
          <p className={classes.coupleName}>Sita</p>
      </div>
      <footer>
          <p><strong>Note:</strong>This is just fun project.Don't take it seriously.Keep loving each other.</p>
      </footer>
      </>
  )


}

export default Result;