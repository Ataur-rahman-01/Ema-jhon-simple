import React from "react";

const Reviewitem = (props) => {
  const { name, quantity, key, price } = props.product;
  return (
    <div>
      <h2 className="product-name">{name}</h2>
      <h4> item:{quantity}</h4>
      <p>
        Price:<small>{price}</small>
      </p>
      <button onClick={() => props.removeItem(key)} className="cart-btn">
        Remove
      </button>
    </div>
  );
};

export default Reviewitem;
