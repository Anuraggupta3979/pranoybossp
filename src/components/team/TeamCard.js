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
              src="https://th.bing.com/th/id/R.e2dcac86673f548756f97ef69ad02cfe?rik=Otn6FZeRbslaOQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f-jIUKyFpTu2E%2fUOY2YGgEKzI%2fAAAAAAAAAdk%2fAXMmcCM_gwY%2fs1600%2f6.jpg&ehk=3X1LMKXe%2b85piM30koL3ShvGZa%2bkdCSDD60BS%2bDyDT0%3d&risl=&pid=ImgRaw&r=0"
              alt="Avatar"
              style={{ width: "300px", height: "400px", borderRadius: "20px" }}
            />
          </div>
          <div class="flip-card-back">
            <Typography variant="h4">{member.name}</Typography>
            <Typography>{member.description}</Typography>
            <Typography>We love that guy</Typography>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default TeamCard;
