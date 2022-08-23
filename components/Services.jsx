import React from "react";
import { urlFor } from "../lib/client";
const Services = ({ services }) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>NUESTRAS LÍNEAS</h2>
        </div>
        <div className="row">
          {services?.map((d, i) => (
            <div key={`${d}-${i}`} className="col-md-6">
              {" "}
              <img src={urlFor(d.img)} />
              <div className="service-desc">
                <h3>{d.name}</h3>
                <p>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
