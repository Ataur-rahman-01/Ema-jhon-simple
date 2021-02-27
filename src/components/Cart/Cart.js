import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
  }
  let shiping = 0;
  if (total > 35) {
    shiping = 0;
  } else if (total > 12) {
    shiping = 4.99;
  } else if (total < 0) {
    shiping = 12.99;
  }
  const tax = total * 0.1;
  return (
    <div>
      <h4>Order summary</h4>
      <p>shiping : {shiping}</p>
      <p>Items Order {cart.length}</p>
      <p>
        <small>Tax: {tax}</small>
      </p>
      <p>Total price:{total + shiping + tax}</p>
    </div>
  );
};

export default Cart;
