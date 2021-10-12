import React from "react";
import "../../assets/css/About.css";
import AboutStory from "./AboutStory";
// import AboutCraft from "./AboutCraft";
import AboutCraft from "./AboutCraft";
function AboutUs() {
  return (
    <div>
      <div class="containerabout">
        <img
          src="https://akkaara.co.in/wp-content/uploads/2019/01/akaara-intro.jpg"
          alt="Snow"
          style={{ width: "100%", height: "500px" }}
        />
<p>s</p>
        <div class="centered">About Us</div>
      </div>
      <div className="ourstory">
        <AboutStory></AboutStory>
        <AboutCraft></AboutCraft>
      </div>
    </div>
  );
}

export default AboutUs;
