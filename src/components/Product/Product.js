import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { name, img, seller, price, stock, key } = props.products;
  // console.log(props.products.key);
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="product-name">
          <Link to={"/product/" + key}>{name}</Link>
        </h4>
        <br />
        <p>By {seller}</p>
        <p>${price}</p>
        <p>
          <small>Only {stock} left -Order soon</small>
        </p>
        {props.showaddCart === true && (
          <button
            onClick={() => props.handelAddProduct(props.products)}
            className="cart-btn"
          >
            <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
