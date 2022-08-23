import React, { useEffect, useState } from "react";
import { urlFor, client } from "../lib/client";
const Testimonios = ({ testimonios }) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="testimonios">
        <div className="section-title">
          <h2>Testimonios</h2>
        </div>
        <div className="video-container">
          <div className="video-testimonio">
            <iframe 
            width="660" 
            height="415"
            src={testimonios[index].videoUrl} 
            />
          </div>
          <div className="small-videos-container">
          {testimonios?.map((item, i) => (
                <img
                  src={urlFor(item.icon)}
                  className={
                    i === index ? "small-image selected-image" : "small-image"
                  }
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
          </div>
        </div>
      
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "testimonio"]';
  const testimonios = await client.fetch(query);
  return {
    props: { testimonios },
  };
};

export default Testimonios;
