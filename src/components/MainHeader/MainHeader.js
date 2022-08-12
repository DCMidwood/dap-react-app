import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
    const isAuthenticated = true
  return (
    <header className={classes['main-header']}>
      <h1>DAP React App</h1>
      <Navigation isLoggedIn={isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
