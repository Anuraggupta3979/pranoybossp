import React, { useEffect, useState } from "react";
import "../../assets/css/About.css";

import { getImageUrl } from "../../helper/images";

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
      <div className="containerabout">
        <img
          src={bannerUrl}
          alt="Snow"
          style={{ width: "100%", height: "100vh" }}
        />
        <p>s</p>
        <div className="centered">About Us</div>
      </div>
      <div className="ourstory">
       
      </div>
    </div>
  );
}

export default AboutUs;
