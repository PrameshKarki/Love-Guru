import React from "react";

import classes from "./CSS/Header.module.css";

const Header=props=>{
  return(
      <div className={classes.header}>
          <h1 className={classes.header__title}>Love Guru</h1>
          <p className={classes.header__description}>Enter your valid details and check how much you love each other!</p>
      </div>
  )
}

// *Export Component
export default Header;