import React from "react";

import "../assets/css/ProductCard.css";

const ProductCard = ({url, name, category}) => {

  // console.log(data.name )
  return (
    <div className="mb-3">
      <figure class="snip1475">
        <img
          src={url}
          alt="sample36"
        />
        <figcaption>
          <div>
            {/* <i class="ion-ios-home-outline"></i> */}
          </div>
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
