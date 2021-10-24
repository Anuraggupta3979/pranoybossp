import React from "react";
import { Grid, Typography } from "@material-ui/core";
import "../Team.css";

function TeamCard({ member }) {
  return (
    <Grid>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              src={member.image}
              alt="Avatar"
              style={{ width: "300px", height: "400px", borderRadius: "20px" }}
            />
          </div>
          <div class="flip-card-back">
            <Typography
              variant="h4"
              style={{
                fontSize: "1.825rem",
                fontWeight: 500,
                marginBottom: "15px",
                marginTop: "20px",
                fontFamily: "맑은 고딕",
                justifyContent: "center",
              }}
            >
              {member.name}
            </Typography>
            {/* <Typography>{member.description}</Typography>
            <Typography>We love that guy</Typography> */}
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default TeamCard;
