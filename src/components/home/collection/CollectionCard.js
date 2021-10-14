import React from "react";

import "../../../assets/css/Collections.css";
function CollectionCard({ image, name }) {
  return (
    <div>
      <figure className="snip1352">
        <img src={image} alt={name} />
        <figcaption>
          <div className="collection-card-center">
            <p className="center-text">{name}</p>
            <a href="#!" className="collection-card-link">Explore</a>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default CollectionCard;
