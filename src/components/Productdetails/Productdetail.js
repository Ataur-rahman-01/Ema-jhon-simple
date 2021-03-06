import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const Productdetail = () => {
  const { productKey } = useParams();
  const product = fakeData.find((pd) => pd.key === productKey);
  console.log(product);

  return (
    <div>
      <h2>{productKey} details is:</h2>
      <Product showaddCart={false} products={product}></Product>
    </div>
  );
};

export default Productdetail;
