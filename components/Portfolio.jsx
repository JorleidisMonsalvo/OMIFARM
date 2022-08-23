import React from "react";
import { urlFor } from "../lib/client";
import { ImgPortfolio } from './index'

const Portfolio = ({ data }) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>CULTIVOS EJEMPLO</h2>
          <p>
            En esta sección puedes encontrar imágenes de productos que han usado nuestros productos.
          </p>
        </div>
        <div className="row">
            {data?.map((d, i) => (
              <div key={d._id} className="col-sm-6 col-md-4 col-lg-4">
                <ImgPortfolio title={d.name} smallImage={urlFor(d.image)}/>
              </div>
            ))}
         
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
