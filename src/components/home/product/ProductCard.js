import React from "react";

import "../../../assets/css/ProductCard.css";

const ProductCard = ({ image, name, category }) => {
  // console.log(data.name )
  return (
    <div className="mb-3">
      <figure className="box">
        <img src={image} alt="sample36" />
        <figcaption>
          <div>{/* <i className="ion-ios-home-outline"></i> */}</div>
        </figcaption>
        {/* <a href="#"></a> */}
      </figure>
      <div>
        <p className="text-center">{name}</p>
        <p className="text-center">{category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
