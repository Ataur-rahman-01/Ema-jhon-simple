import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Reviewitem from "../Reviewitem/Reviewitem";

const Review = () => {
  const [cart, setCart] = useState([]);
  const removeItem = (remove) => {
    console.log(remove);
    const newCart = cart.filter((pd) => pd.key !== remove);
    removeFromDatabaseCart(remove);
    setCart(newCart);
  };
  useEffect(() => {
    const localdata = getDatabaseCart();
    const productkey = Object.keys(localdata);
    const counts = productkey.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = localdata[key];
      return product;
    });
    setCart(counts);
  }, []);
  return (
    <div className="twin-container">
      <div className="product-container">
        {cart.map((pd) => (
          <Reviewitem removeItem={removeItem} product={pd}></Reviewitem>
        ))}
      </div>
      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Review;
