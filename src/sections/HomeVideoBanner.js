import { width } from "@mui/system";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import header from "../assets/header.jpg"
function HomeVideoBanner() {
  return (
    <div>
      <img src={header} style={{ height: "100vh" , width:"100vw"}} alt="" />
    </div>
  );
}

export default HomeVideoBanner;
