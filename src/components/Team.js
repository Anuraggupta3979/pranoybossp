import React from "react";
import "./Team.css";
import { Grid } from "@material-ui/core";
import Heading from "./Heading";

import TeamCard from "./team/TeamCard";

function Team() {
  // const style = {
  //   cards: {
  //     display: "flex",
  //     flexFlow: "row wrap",
  //     justifyContent: "space-around",
  //   },
  // };
  return (
    <Grid>
      <Heading title="Our Team" />
      <Grid
        className="content"
        style={{
          display: "flex",
          flexFlow: " row wrap",
          justifyContent: "space-around",
        }}
      >
        <TeamCard></TeamCard>
        <TeamCard></TeamCard>
        <TeamCard></TeamCard>
        <TeamCard></TeamCard>
      </Grid>
    </Grid>
  );
}

export default Team;
