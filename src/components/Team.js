import React from "react";
import "./Team.css";
import { Grid, Typography } from "@material-ui/core";

function Team() {
  return (
    <Grid>
      <Typography
        variant="h4"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "100px",
          marginBottom: "50px",
        }}
      >
        Our Team
      </Typography>
      <Grid className="content">
        <a className="card" href="#!">
          <Grid
            className="front"
            style={{
              backgroundImage: `url("//source.unsplash.com/300x401")`,
            }}
          >
            <Typography>Lorem, ipsum dolor.</Typography>
          </Grid>
          <Grid className="back">
            <Grid>
              <Typography>
                Consectetur adipisicing elit. Possimus, praesentium?
              </Typography>
              <Typography>
                Provident consectetur natus voluptatem quis tenetur sed beatae
                eius sint.
              </Typography>
            </Grid>
          </Grid>
        </a>
        <a className="card" href="#!">
          <Grid
            className="front"
            style={{
              backgroundImage: `url("//source.unsplash.com/300x401")`,
            }}
          >
            <Typography>Lorem, ipsum dolor.</Typography>
          </Grid>
          <Grid className="back">
            <Grid>
              <Typography>
                Consectetur adipisicing elit. Possimus, praesentium?
              </Typography>
              <Typography>
                Provident consectetur natus voluptatem quis tenetur sed beatae
                eius sint.
              </Typography>
            </Grid>
          </Grid>
        </a>
        <a className="card" href="#!">
          <Grid
            className="front"
            style={{
              backgroundImage: `url("//source.unsplash.com/300x401")`,
            }}
          >
            <Typography>Lorem, ipsum dolor.</Typography>
          </Grid>
          <Grid className="back">
            <Grid>
              <Typography>
                Consectetur adipisicing elit. Possimus, praesentium?
              </Typography>
              <Typography>
                Provident consectetur natus voluptatem quis tenetur sed beatae
                eius sint.
              </Typography>
            </Grid>
          </Grid>
        </a>
        <a className="card" href="#!">
          <Grid
            className="front"
            style={{
              backgroundImage: `url("//source.unsplash.com/300x401")`,
            }}
          >
            <Typography>Lorem, ipsum dolor.</Typography>
          </Grid>
          <Grid className="back">
            <Grid>
              <Typography>
                Consectetur adipisicing elit. Possimus, praesentium?
              </Typography>
              <Typography>
                Provident consectetur natus voluptatem quis tenetur sed beatae
                eius sint.
              </Typography>
            </Grid>
          </Grid>
        </a>
      </Grid>
    </Grid>
  );
}

export default Team;
