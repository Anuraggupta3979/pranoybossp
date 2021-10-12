import React, { useEffect, useState } from "react";
import "../../assets/css/About.css";
import AboutStory from "./AboutStory";
import AboutCraft from "./AboutCraft";
import getImageUrl from "../helper/images";

function AboutUs() {
  const [bannerUrl, setBannerUrl] = useState("");
  useEffect(() => {
    getImageUrl("about-banner.jpg").then((url) => {
      console.log(url);
      setBannerUrl(url);
    });
  }, []);
  return (
    <div>
      <div class="containerabout">
        <img
          src={bannerUrl}
          alt="Snow"
          style={{ width: "100%", height: "500px" }}
        />

        <div class="centered">About Us</div>
      </div>
      <div className="ourstory">
        <AboutStory />
        <AboutCraft />
      </div>
    </div>
  );
}

export default AboutUs;
