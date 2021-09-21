import React from "react";

import "../assets/css/ProductCard.css";

const ProductCard = () => {
  return (
    <div>
      <figure class="snip1475">
        <img
          src="https://akkaara.co.in/wp-content/uploads/2019/01/Pendantlight_full_product.jpg"
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
        <h3>Sculpted Pendant Lamp</h3>
        <p>₹7,700.00</p>
      </div>
    </div>
  );
};

export default ProductCard;
