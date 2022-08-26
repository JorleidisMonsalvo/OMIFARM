import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ product, similarProducts }) => {
  const { image, name, details, price, presentations } = product;

  const [index, setIndex] = useState(0);
  const [indexSize, setIndexSize] = useState(0);
  //const { decQty, incQty, qty, onAdd } = useStateContext()
  let dollarUSLocale = Intl.NumberFormat('en-US');

  const selectSize = (e) => {
    let selected = e.target.value;
    let index = presentations.findIndex((e) => e.productSize === selected);
    setIndexSize(index);
  };
  return (
    <div>
      <div className="product-detail-container">
        <div className="row">
          <div className="image-container col">
            <div>
              <img
                src={urlFor(image && image[index])}
                className="product-detail-image"
              />
            </div>
            <div className="small-images-container">
              {image?.map((item, i) => (
                <img
                  src={urlFor(item)}
                  className={
                    i === index ? "small-image selected-image" : "small-image"
                  }
                  onMouseEnter={() => setIndex(i)}
                  key={i}
                />
              ))}
            </div>
          </div>
          <div className="col details">
            <h1>{name}</h1>
            <div className="row dropdown">
              <h4>Selecciona un tamaño:</h4>
              <br />
              <select onChange={selectSize}>
                {presentations?.map((el,i) => (
                  <option 
                  value={el.productSize}
                  key={i}>{el.productSize}</option>
                ))}
              </select>
              <p className="price">$ {dollarUSLocale.format(presentations[indexSize].price)}</p>
            </div>
            <div className="row product-detail-desc">
              <h4>Beneficios: </h4>
              <ul>
                {details.length > 0 &&
                  details.map((beneficio,i) => <li key={i}>{beneficio}</li>)}
              </ul>
            </div>
          </div>
        </div>
        {/*<div className="row">
           <div className="product-detail-desc">
            <h1>{name}</h1>
            <h4>Beneficios: </h4>
            <ul>
              {details.length > 0 &&
                details.map((beneficio) => <li>{beneficio}</li>)}
            </ul> */}

        {/* <p className="price">${price}</p>
          <div className="quantity">
            <h3>Cantidad</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num" onClick="">
                {qty}
              </span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick={()=>onAdd(product, qty)}>
              Añadir al Carrito
            </button>
            <button type="button" className="buy-now" onClick="">
              Comprar Ahora
            </button>
          </div> */}
        {/*  </div> 
        </div>*/}
      </div>
      <div className="maylike-products-wrapper">
        <h2>Te podría interesar</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {similarProducts.map(
              (item) =>
                item.line === product.line && (
                  <Product key={item._id} product={item} />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;
  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);

  const querySimilarProducts = '*[_type == "product"]';
  const similarProducts = await client.fetch(querySimilarProducts);

  return {
    props: { product, similarProducts },
  };
};

export default ProductDetails;
