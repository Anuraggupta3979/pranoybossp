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
      <Grid
        className="content"
        style={{
          display: "flex",
          flexFlow: " row wrap",
          justifyContent: "space-around",
        }}
      >
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
      </Grid>
    </Grid>
  );
}

export default Team;
