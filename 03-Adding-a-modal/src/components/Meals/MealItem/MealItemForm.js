import React from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>
        {/*{{}} bcz: inner bracket is to evaluate js expression passed in as a value
        and other bracket bcz its js object*/}
        <Input label="Amount" input={{
            id:'amount_' + props.id,
            type:'number',
            min:'1',
            max:'6',
            step:'1',
            defaultValue:'1'
        }}/>
        <button>+ Add</button>
    </form>
  )
};

export default MealItemForm;
