import React from "react";

import "../assets/css/ProductCard.css";

const ProductCard = (data) => {

  console.log(data)
  return (
    <div className="mb-3">
      <figure class="snip1475">
        <img
          src={data.url}
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
        <p className="text-center">{data.name}</p>
        <p className="text-center">{data.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
