import React from 'react'
import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        {/*{...} to add props's input.id below, we can remove id={} as its part of spread operator  */}
        <input id={props.input.id} {...props.input}/>
    </div>
  );
};

export default Input;
