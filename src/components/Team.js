import React from "react";
import "./Team.css";
import { Grid } from "@material-ui/core";
import Heading from "./Heading";

import TeamCard from "./team/TeamCard";

function Team({teamList}) {
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
        {teamList.map((member) => (<TeamCard member={member} />))}
      </Grid>
    </Grid>
  );
}

export default Team;
