//rendering that meals list, summary text about it
import React from 'react'
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = () => {
  return (
    <>
      <MealsSummary/>
      <AvailableMeals/>
    </>
  )
};

export default Meals;
