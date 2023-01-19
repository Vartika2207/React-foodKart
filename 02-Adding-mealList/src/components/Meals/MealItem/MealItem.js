import React from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
  return (
    <li className={classes.meal}>
        {/* this .name can be other naming (like val), but should be similar to whats passed from AvailableMeal */}
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{`$${props.price.toFixed(2)}`}</div>
        </div>
        <div>

        </div>
    </li>
  )
};

export default MealItem;
