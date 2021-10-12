import React from "react";

import "../assets/css/Collections.css";

function CollectionCard({image, category,}) {
  return (
    <div>
      <figure class="snip1352">
        <img
          src={image}
          alt={category}
        />
        <figcaption>
          <div>
            <i class="ion-ios-home-outline"></i>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default CollectionCard;
