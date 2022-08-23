import React from "react";
import { Product } from "../components";
import { client } from "../lib/client";
import { useStateContext } from "../context/StateContext";

const Products = ({ products }) => {
  const { lineSelected } = useStateContext()
  console.log('line',lineSelected)
  return (
    <div className="products-container">
      {lineSelected==='' && products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
      {lineSelected!='' && products?.map((product) =>
      product.line === lineSelected && 
      (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  return {
    props: { products },
  };
};

export default Products;
