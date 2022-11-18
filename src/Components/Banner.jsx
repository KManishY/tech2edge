import React from "react";
import "../App.css";

const Banner = ({ data, imageApi }) => {
  return (
    <div>
      <div className="bannerImage">
        <img
          className="img-fluid"
          width="100%"
          height="600px"
          src={`${imageApi}${data && data.img}`}
          alt="Sacred Games"
        />
      </div>
      <div className="bannerDetails">
        <h1>{data && data.title}</h1>
        <p>{data && data.desc}</p>
      </div>
    </div>
  );
};

export default Banner;
