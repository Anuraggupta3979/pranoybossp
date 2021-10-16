import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import AboutCategoriesCard from "./AboutCategoriesCard";
import { getAllDocs } from "../../helper/firestore";
// import { db } from "../../firebase";
function Categories() {
  const [post, setpost] = React.useState([]);
  useEffect(() => {
    getAllDocs("categories").then((data) => {
      setpost(data);
    });
  });

  return (
    <Grid>
      <Typography
        variant="h4"
        style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}
      >
        Categories
      </Typography>
      {post.map((item) => (
        <AboutCategoriesCard
          order={2}
          title={item.name}
          key={item.id}
          image={item.image}
          description={item.description}
        ></AboutCategoriesCard>
      ))}
    </Grid>
  );
}

export default Categories;
