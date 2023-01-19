import React from 'react';
import CardIcon from '../Cart/CardIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button}>
        <span className={classes.icon}>
            <CardIcon/>
        </span>
        <span> Your Cart </span>
        <span className={classes.badge}>0</span>
    </button>
  )
};


export default HeaderCartButton;