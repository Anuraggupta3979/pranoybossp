import React from "react";
import { Grid } from "@mui/material";
import AboutCategoriesCard from "./AboutCategoriesCard";
import Heading from "../Heading";

function Categories({ categoryList }) {
  let i = 3;
  let t = 1;
  let temp = 0;
  return (
    <Grid>
      <Heading title="Categories" />
      {categoryList.map(({ name, description, image }) => {
        temp = i;
        i = t;
        t = temp;
        return (
          <AboutCategoriesCard
            title={name}
            description={description}
            image={image}
            imageorder={i}
            textorder={t}
          />
        );
      })}
    </Grid>
  );
}

export default Categories;
