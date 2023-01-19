import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal'

const Cart = () => {
  const cartItems = (
    <ul className={classes['cart-items']}>
       {[{key:'c1', id:'c1', name:'Shushi', amount: 2, price: 399}].map((item) => (<li>{item.name}</li>))}
    </ul>);

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$299</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
