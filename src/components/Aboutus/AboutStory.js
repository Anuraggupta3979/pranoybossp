import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Heading from "../Heading";

function AboutStory() {
  return (
    <Grid className="col-sm-11 col-12 mx-auto px-4">
      <Heading title="About Us" />
      <Typography
        className="mt-2 py-2 text-center"
        style={{
          fontFamily: "맑은 고딕",
          fontWeight: 400,
          lineHight: "1.4",
          color: "#4e4e4e",
          letterSpacing: "0.00938em",
        }}
      >
        With strokes of perfection, oodles of creativity and revived heritage,
        originated the "Craftjet". An exclusive platform glorifying the
        incredibility of Indian Handicrafts, transmogrified into a range of
        alluring contemporary products.
        <br />
        “Craftjet” strives to revive what has been lost in this contemporary
        world – the exquisite opulence of traditional arts, the cultural
        heritage that spans millennia, embedded in traditional wisdom and
        folklore. The one-stop destination for home decor and handicraft items
        that come loaded with inventiveness, proficiency, and modernism yet
        staying true to the essence of Indian traditions and heritage which is
        Griderse and unique in its own way. Each part of the country has its own
        distinctive cultural ethos, which is clearly reflected in its
        handicrafts. We present to you the quintessence of the unsurpassed
        creativity of the same, handcrafted with love and care.
        <br />
        We aim to prompt the incredible Indian heritage and its rich art form to
        reach the people at its ultimate grandeur all over the world with par
        excellence.
      </Typography>
    </Grid>
  );
}

export default AboutStory;
