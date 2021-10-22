import React from "react";
import { Grid } from "@material-ui/core";
import Heading from "../../Heading";
import CategoriesCard from "./CategoriesCard";
function Collections({ categoryList }) {

  return (
    <Grid>
      <Heading title="Categories" />

      <Grid container item style={{ display: "flex" }} className="card-container">
        {categoryList.map((category) => (
          <CategoriesCard
            image={category.image}
            name={category.name}
            id={category.id}
            key={category.name}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default Collections;
