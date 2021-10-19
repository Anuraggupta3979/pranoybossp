import React from "react";
import { Grid, Typography } from "@material-ui/core";
import anu from "../../assets/aaa.jpg";
import "../Team.css";
function TeamCard() {
  return (
    <Grid>
      <a className="card" href="#!">
        <Grid
          className="front"
          style={{
            backgroundImage: `url(${anu})`,
          }}
        >
          <Typography variant="h5">anu</Typography>
        </Grid>
        <Grid className="back">
          <Grid>
            <Typography>des</Typography>
          </Grid>
        </Grid>
      </a>
    </Grid>
  );
}

export default TeamCard;
