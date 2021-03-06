import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
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
  const frist10Data = fakeData.slice(0, 10);
  const [products, setProduct] = useState(frist10Data);
  const [cart, setCart] = useState([]);

  const handelAddProduct = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    const sameProduct = newCart.filter((pro) => pro.key === product.key);
    const count = sameProduct.length;
    addToDatabaseCart(product.key, count);
  };
  return (
    <div className="twin-container">
      <div className="product-container">
        {products.map((pd) => (
          <Product
            key={pd.key}
            showaddCart={true}
            handelAddProduct={handelAddProduct}
            products={pd}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
