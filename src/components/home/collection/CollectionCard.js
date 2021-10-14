import React from "react";

import "../../../assets/css/Collections.css";
function CollectionCard({ image, category }) {
  return (
    <div>
      <figure className="snip1352">
        <img src={image} alt={category} />
      </figure>
    </div>
  );
}

export default CollectionCard;