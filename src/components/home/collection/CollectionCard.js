import React from "react";

import "../../../assets/css/Collections.css";
function CollectionCard({ image, name }) {
  return (
    <div>
      <figure className="snip1352">
        <img src={image} alt={name} />
      </figure>
    </div>
  );
}

export default CollectionCard;
