import React from "react";
import { Grid } from "@mui/material";
import AboutCategoriesCard from "./AboutCategoriesCard";
import categoriesList from "../../categoriesList";
import Heading from "../Heading";

function Categories() {
  let i = 3;
  let t = 1;
  let temp = 0;
  return (
    <Grid>
      <Heading title="Categories" />
      {categoriesList.map(({ title, description, image }) => {
        temp = i;
        i = t;
        t = temp;
        return (
          <AboutCategoriesCard
            title={title}
            description={description}
            image={image}
            imageorder={i}
            textorder={t}
          ></AboutCategoriesCard>
        );
      })}
    </Grid>
  );
}

export default Categories;
