import React, { useState, useEffect } from "react";
import "./Team.css";
import { Grid, Typography } from "@material-ui/core";
import { getAllDocs } from "../helper/firestore";

function Team() {
  const [TeamList, setTeamList] = useState([]);
  useEffect(() => {
    getAllDocs("team").then((data) => {
      setTeamList(data);
      console.log(data);
    });
  }, []);
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

      {TeamList.map((member) => (
        <a className="card" href="#!">
          <Grid
            className="front"
            style={{
              backgroundImage: `url(${member.image})`,
            }}
          >
            <Typography>{member.name}</Typography>
          </Grid>
          <Grid className="back">
            <Grid>
              <Typography>{member.description}</Typography>
            </Grid>
          </Grid>
        </a>
      ))}
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
