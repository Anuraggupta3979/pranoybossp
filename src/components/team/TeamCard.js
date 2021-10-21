import React from "react";
import { Grid, Typography } from "@material-ui/core";
import "../Team.css";

function TeamCard({member}) {
  return (
    <Grid>
      <a className="card" href="#!">
        <Grid
          className="front"
          style={{
            backgroundImage: `url(${member.image})`,
          }}
        >
          <Typography variant="h5">{member.name}</Typography>
        </Grid>
        <Grid className="back">
          <Grid>
            <Typography>{member.description}</Typography>
          </Grid>
        </Grid>
      </a>
    </Grid>
  );
}

export default TeamCard;
