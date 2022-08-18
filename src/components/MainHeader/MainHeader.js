import React, { Fragment } from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import bannerImage from "../../assets/banner.jpg"

const MainHeader = (props) => {
    const isAuthenticated = true
  return <Fragment>
      <header className={classes['main-header']}>
        <h1>DAP React App</h1>
        <Navigation isLoggedIn={isAuthenticated} onLogout={props.onLogout} />
      </header>
      <div className= {classes.banner}>
        <img src= {bannerImage} alt="banner"/>
      </div>
    </Fragment>
};

export default MainHeader;
